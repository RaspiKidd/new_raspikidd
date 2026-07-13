#!/usr/bin/env node
/*
 * tutorial-to-pdf.cjs
 * Render a Nuxt Content MDC tutorial (index.md) to a branded, print-ready PDF.
 *
 * Usage:
 *   node tutorial-to-pdf.cjs <index.md> \
 *     [--glossary <dir>] [--public <dir>] [--fonts <dir>] [--logo <file>] \
 *     [--out <file.pdf>] [--html-only]
 *
 * The output PDF is named after the tutorial's folder (e.g. using-the-button/
 * -> using-the-button.pdf) unless --out is given. --fonts and --logo default to
 * the bundled scripts/assets/ folder. The intermediate .html file is removed
 * once the PDF is written (unless --html-only is used).
 * Requires: markdown-it (npm i -D markdown-it) and a Chromium/Chrome binary
 * (override the binary with CHROMIUM_BIN).
 */
const fs = require('node:fs')
const path = require('node:path')
const { execFileSync } = require('node:child_process')
const MarkdownIt = require('markdown-it')

// ---------- args ----------
const argv = process.argv.slice(2)
const opts = { glossary: null, public: null, fonts: null, logo: null, out: null, htmlOnly: false }
const positional = []
for (let i = 0; i < argv.length; i++) {
  const a = argv[i]
  if (a === '--glossary') opts.glossary = argv[++i]
  else if (a === '--public') opts.public = argv[++i]
  else if (a === '--fonts') opts.fonts = argv[++i]
  else if (a === '--logo') opts.logo = argv[++i]
  else if (a === '--out') opts.out = argv[++i]
  else if (a === '--html-only') opts.htmlOnly = true
  else positional.push(a)
}
const input = positional[0]
if (!input) {
  console.error('Usage: node tutorial-to-pdf.cjs <index.md> [--glossary dir] [--public dir] [--fonts dir] [--logo file] [--out file.pdf] [--html-only]')
  process.exit(1)
}

// Default fonts/logo to the bundled assets next to this script.
if (!opts.fonts) { const d = path.join(__dirname, 'assets', 'fonts'); if (fs.existsSync(d)) opts.fonts = d }
if (!opts.logo) { const l = path.join(__dirname, 'assets', 'logo', 'RaspiKidd.svg'); if (fs.existsSync(l)) opts.logo = l }

// ---------- helpers ----------
function slugify(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') }

function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!m) return { data: {}, body: text }
  const raw = m[1]
  const body = text.slice(m[0].length)
  const data = {}
  const lines = raw.split('\n')
  for (let i = 0; i < lines.length; i++) {
    const kv = lines[i].match(/^([\w-]+):\s*(.*)$/)
    if (!kv) continue
    const key = kv[1]
    let val = kv[2]
    if (val === '') {
      const list = []
      while (i + 1 < lines.length && /^\s*-\s+/.test(lines[i + 1])) {
        list.push(lines[++i].replace(/^\s*-\s+/, '').trim())
      }
      data[key] = list.length ? list : ''
    } else {
      if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1).replace(/''/g, "'")
      else if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1)
      data[key] = val
    }
  }
  return { data, body }
}

function loadGlossary(dir) {
  const g = {}
  if (!dir || !fs.existsSync(dir)) return g
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.md')) continue
    const { data } = parseFrontmatter(fs.readFileSync(path.join(dir, f), 'utf8'))
    const entry = {
      term: data.term || f.replace(/\.md$/, ''),
      definition: data.definition || '',
      example: data.example || '',
    }
    g[f.replace(/\.md$/, '')] = entry
    if (data.term) g[slugify(data.term)] = entry
  }
  return g
}

function inferPublic(p) {
  const m = path.resolve(p).match(/^(.*)\/content\//)
  return m ? path.join(m[1], 'public') : null
}

// Embed local fonts as base64 @font-face rules so the PDF is fully self-contained.
function fontFaces(dir) {
  if (!dir || !fs.existsSync(dir)) return ''
  const faces = []
  const add = (family, file, weight, style) => {
    const p = path.join(dir, file)
    if (!fs.existsSync(p)) return
    const b64 = fs.readFileSync(p).toString('base64')
    faces.push(`@font-face{font-family:'${family}';font-style:${style};font-weight:${weight};font-display:swap;src:url(data:font/ttf;base64,${b64}) format('truetype');}`)
  }
  add('Nunito', 'Nunito-VariableFont_wght.ttf', '100 900', 'normal')
  add('Ubuntu', 'Ubuntu-Regular.ttf', '400', 'normal')
  add('Ubuntu', 'Ubuntu-Bold.ttf', '700', 'normal')
  add('Source Code Pro', 'SourceCodePro-VariableFont_wght.ttf', '100 900', 'normal')
  return faces.join('\n')
}

function logoTag(file) {
  if (!file || !fs.existsSync(file)) return ''
  const ext = path.extname(file).toLowerCase()
  const mime = ext === '.svg' ? 'image/svg+xml' : ext === '.png' ? 'image/png' : 'image/*'
  const b64 = fs.readFileSync(file).toString('base64')
  return `<img class="logo" src="data:${mime};base64,${b64}" alt="RaspiKidd"/>`
}

// ---------- MDC block parser (stack-based, colon-count aware) ----------
const FENCE_OPEN = /^(:{2,})([A-Za-z][\w-]*)(\{[^}]*\})?\s*$/
const FENCE_CLOSE = /^(:{2,})\s*$/

function parseAttrs(str) {
  const attrs = {}
  if (!str) return attrs
  const inner = str.replace(/^\{|\}$/g, '')
  const re = /(:?[\w-]+)\s*=\s*"([^"]*)"/g
  let m
  while ((m = re.exec(inner))) attrs[m[1].replace(/^:/, '')] = m[2]
  return attrs
}

function parseBlocks(body) {
  const lines = body.split('\n')
  const root = { name: 'root', colons: 0, children: [] }
  const stack = [root]
  let buf = []
  const flush = () => {
    if (buf.length) { stack[stack.length - 1].children.push({ name: '_md', text: buf.join('\n') }); buf = [] }
  }
  for (const line of lines) {
    const open = line.match(FENCE_OPEN)
    const close = !open && line.match(FENCE_CLOSE)
    if (open) {
      flush()
      const node = { name: open[2], colons: open[1].length, attrs: parseAttrs(open[3]), children: [] }
      stack[stack.length - 1].children.push(node)
      stack.push(node)
    } else if (close) {
      flush()
      const c = close[1].length
      for (let i = stack.length - 1; i >= 1; i--) { if (stack[i].colons === c) { stack.length = i; break } }
    } else {
      buf.push(line)
    }
  }
  flush()
  return root
}

// ---------- render ----------
const md = new MarkdownIt({ html: true, linkify: true })

function renderInline(text, glossary) {
  return text.replace(/:g\[([^\]]*)\]\{slug="([^"]*)"\}/g, (_, disp, slug) => {
    const e = glossary[slug] || glossary[slugify(slug)]
    const title = e ? e.definition.replace(/"/g, '&quot;') : ''
    return `<span class="glossary" title="${title}">${disp}</span>`
  })
}

let stepNum = 0
function render(node, glossary, fm) {
  switch (node.name) {
    case 'root':
      return node.children.map((c) => render(c, glossary, fm)).join('\n')
    case 'tutorial-steps':
      return `<div class="steps">${node.children.map((c) => render(c, glossary, fm)).join('\n')}</div>`
    case 'step': {
      stepNum++
      const inner = node.children.map((c) => render(c, glossary, fm)).join('\n')
      return `<section class="step"><h2><span class="step-num">${stepNum}</span>${node.attrs.title || ''}</h2>${inner}</section>`
    }
    case 'callout': {
      const color = node.attrs.color || 'gray'
      const inner = node.children.map((c) => render(c, glossary, fm)).join('\n')
      return `<div class="callout callout-${color}"><div class="callout-icon">${node.attrs.icon || ''}</div><div class="callout-body">${inner}</div></div>`
    }
    case 'what-youll-need': {
      const kit = Array.isArray(fm.kit) ? fm.kit : []
      return `<div class="panel wyn"><h3>\uD83D\uDD27 What you'll need</h3><ul class="kit">${kit.map((k) => `<li>${md.renderInline(k)}</li>`).join('')}</ul></div>`
    }
    case 'try-it': {
      const inner = node.children.map((c) => render(c, glossary, fm)).join('\n')
      return `<div class="panel try-it"><h3>\uD83D\uDE80 Try it yourself</h3>${inner}</div>`
    }
    case 'key-words': {
      const terms = (node.attrs.terms || '').split(',').map((s) => s.trim()).filter(Boolean)
      const cards = terms.map((slug) => {
        const e = glossary[slug] || glossary[slugify(slug)]
        if (!e) return `<div class="kw"><h4>${slug}</h4><p><em>Definition not found.</em></p></div>`
        return `<div class="kw"><h4>${e.term}</h4><p>${e.definition}</p>${e.example ? `<p class="eg">${e.example}</p>` : ''}</div>`
      }).join('')
      return `<div class="panel key-words"><h3>\uD83D\uDCA1 Key words</h3>${cards}</div>`
    }
    case '_md':
      return md.render(renderInline(node.text, glossary))
    default:
      return `<div class="mdc-${node.name}">${node.children.map((c) => render(c, glossary, fm)).join('\n')}</div>`
  }
}

// Resolve root-absolute image src ("/learn/...") against the public dir and
// turn it into an absolute file:// URL so Chromium can load it. --public may be
// relative (e.g. "public"), so resolve it to an absolute path first.
function rewriteImages(html, publicDir) {
  if (!publicDir) return html
  const base = path.resolve(publicDir)
  return html.replace(/(src=")(\/[^"]+)(")/g, (m, a, p, b) => `${a}file://${path.join(base, p)}${b}`)
}

const CSS = `
@page { size: A4; margin: 16mm 15mm 18mm; }
* { box-sizing: border-box; }
body { font-family:'Ubuntu','Segoe UI',Helvetica,Arial,sans-serif; color:#1f2937; font-size:12pt; line-height:1.55; margin:0; }
h1,h2,h3,h4 { font-family:'Nunito','Segoe UI',Helvetica,Arial,sans-serif; color:#065f46; line-height:1.2; font-weight:800; }
.cover { border-bottom:4px solid #D02530; padding-bottom:14px; margin-bottom:24px; }
.cover .logo { height:52px; width:auto; display:block; margin:0 0 14px; }
.cover h1 { color:#D02530; font-size:30pt; margin:0 0 10px; font-weight:800; }
.badges { display:flex; gap:8px; flex-wrap:wrap; }
.badge { background:#56861F; color:#fff; font-family:'Nunito',sans-serif; font-weight:700; font-size:9.5pt; padding:3px 12px; border-radius:999px; text-transform:capitalize; }
.step { break-inside:avoid; margin:0 0 20px; }
.step h2 { font-size:16pt; display:flex; align-items:center; gap:10px; border-bottom:1px solid #e5e7eb; padding-bottom:6px; }
.step-num { background:#76B82A; color:#fff; width:26px; height:26px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:12pt; font-weight:700; flex:0 0 auto; }
p { margin:8px 0; } ul,ol { margin:8px 0; padding-left:22px; } li { margin:3px 0; }
code { font-family:'Source Code Pro',ui-monospace,monospace; background:#f3f4f6; padding:1px 5px; border-radius:4px; font-size:10.5pt; }
img { max-width:100%; height:auto; border-radius:8px; border:1px solid #e5e7eb; margin:10px 0; display:block; }
.callout { display:flex; gap:10px; padding:12px 14px; border-radius:10px; margin:12px 0; break-inside:avoid; }
.callout-icon { font-size:16pt; line-height:1; }
.callout-body > :first-child { margin-top:0; } .callout-body > :last-child { margin-bottom:0; }
.callout-green { background:#eef7e6; border:1px solid #9BD35B; }
.callout-gray { background:#f2f4f3; border:1px solid #A1C4B5; }
.callout-blue { background:#e8f0fb; border:1px solid #7fb0e6; }
.callout-yellow { background:#fdf6e3; border:1px solid #e0b84b; }
.callout-purple { background:#f1ebfa; border:1px solid #b295e0; }
.panel { border-radius:10px; padding:12px 16px; margin:12px 0; break-inside:avoid; }
.panel h3 { margin:0 0 8px; font-size:13pt; }
.wyn { background:#f2f4f3; border:1px solid #A1C4B5; }
.try-it { background:#f1ebfa; border:1px solid #b295e0; }
.key-words { background:#fafbfa; border:1px solid #e5e7eb; }
.kw { padding:8px 0; border-bottom:1px dashed #e5e7eb; } .kw:last-child { border-bottom:0; }
.kw h4 { margin:0 0 3px; color:#56861F; font-size:12pt; }
.kw p { margin:2px 0; } .kw .eg { color:#6b7280; font-style:italic; font-size:11pt; }
.glossary { border-bottom:2px dotted #76B82A; }
table { border-collapse:collapse; width:100%; margin:12px 0; font-size:11pt; break-inside:avoid; }
th { background:#D02530; color:#fff; text-align:left; }
th,td { border:1px solid #e5e7eb; padding:7px 10px; vertical-align:top; }
tbody tr:nth-child(even) { background:#fbfbfb; }
.foot { margin-top:24px; border-top:1px solid #e5e7eb; padding-top:8px; color:#9ca3af; font-size:9pt; text-align:center; }
`

// ---------- main ----------
const raw = fs.readFileSync(input, 'utf8')
const { data: fm, body: body0 } = parseFrontmatter(raw)
let body = body0
let title = ''
const h1 = body.match(/^#\s+(.+)$/m)
if (h1) { title = h1[1].trim(); body = body.replace(h1[0], '') }

const glossary = loadGlossary(opts.glossary)
const publicDir = opts.public || inferPublic(input)
stepNum = 0
const rendered = render(parseBlocks(body), glossary, fm)

const badges = ['platform', 'level', 'duration']
  .filter((k) => fm[k])
  .map((k) => `<span class="badge">${fm[k]}</span>`)
  .join('')

const styleBlock = fontFaces(opts.fonts) + '\n' + CSS
const logo = logoTag(opts.logo)

let html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${title}</title><style>${styleBlock}</style></head><body>` +
  `<header class="cover">${logo}<h1>${title}</h1><div class="badges">${badges}</div></header>` +
  `<main>${rendered}</main>` +
  `<footer class="foot">RaspiKidd \u2022 raspikidd.com</footer>` +
  `</body></html>`
html = rewriteImages(html, publicDir)

// Name the PDF after the tutorial's folder (e.g. using-the-button/index.md ->
// using-the-button.pdf), unless --out overrides it.
const inputAbs = path.resolve(input)
const slug = path.basename(path.dirname(inputAbs))
const outPdf = opts.out || path.join(path.dirname(input), `${slug}.pdf`)
const tmpHtml = outPdf.replace(/\.pdf$/, '.html')
fs.writeFileSync(tmpHtml, html)
if (opts.htmlOnly) { console.log('Wrote', tmpHtml); process.exit(0) }

const bin = process.env.CHROMIUM_BIN || 'chromium'
execFileSync(bin, [
  '--headless', '--no-sandbox', '--disable-gpu',
  '--no-pdf-header-footer',
  '--run-all-compositor-stages-before-draw',
  '--virtual-time-budget=15000',
  `--print-to-pdf=${outPdf}`,
  `file://${path.resolve(tmpHtml)}`,
], { stdio: 'inherit' })

// Clean up the intermediate HTML now the PDF has been written.
try { fs.unlinkSync(tmpHtml) } catch (e) { /* ignore */ }

console.log('Wrote', outPdf)
