<script setup lang="ts">
// Hardware platform hub (pages/learn/[platform].vue)
// Two display modes:
//  - Platforms WITH coding languages (micro:bit): show one card per language
//    (MakeCode / Python / EduBlocks), mirroring the Learning Hub hardware cards.
//    Each card links to /learn/<platform>/<language> for that language's list.
//  - Flat platforms (PicoBricks, Raspberry Pi Pico): list their tutorials directly.
// This route sits above the [...slug].vue catch-all in specificity, so
// /learn/picobricks resolves here while /learn/picobricks/blink-project still
// resolves to the tutorial page.

const route = useRoute()
const platformSlug = computed(() => String(route.params.platform))

// Platform display metadata. Keep in sync with pages/learn/index.vue.
// `languages` marks a platform as multi-language and drives the language cards.
const platformMeta: Record<
  string,
  { name: string; blurb: string; icon: string; languages?: string[] }
> = {
  'picobricks': {
    name: 'PicoBricks',
    blurb: 'Step-by-step PicoBricks projects, from your first blinking LED upwards.',
    icon: '/learn/icons/picobricks.png',
  },
  'raspberry-pi-pico': {
    name: 'Raspberry Pi Pico',
    blurb: 'Build and code your own circuits with the Raspberry Pi Pico.',
    icon: '/learn/icons/raspberry-pi-pico.png',
  },
  'microbit': {
    name: 'micro:bit',
    blurb: 'BBC micro:bit projects in MakeCode, Python and EduBlocks.',
    icon: '/learn/icons/microbit.png',
    languages: ['makecode', 'edublocks', 'python'],
  },
}

// Language card metadata (name, blurb, icon). Icons live in /public/learn/icons/.
// Add makecode.png / python.png / edublocks.png, or swap these paths.
const languageMeta: Record<string, { name: string; blurb: string; icon: string }> = {
  makecode: {
    name: 'MakeCode',
    blurb: 'Drag-and-drop block coding in the colourful MakeCode editor.',
    icon: '/learn/icons/makecode.png',
  },
  edublocks: {
    name: 'EduBlocks',
    blurb: 'Blocks that read like Python, bridging the gap to text coding.',
    icon: '/learn/icons/edublocks.png',
  },
  python: {
    name: 'Python',
    blurb: 'Type real MicroPython code, a great next step on from blocks.',
    icon: '/learn/icons/python.png',
  },
}

const meta = computed(() => platformMeta[platformSlug.value])
const heading = computed(() => meta.value?.name ?? platformSlug.value)
const heroIcon = computed(() => meta.value?.icon ?? '/learn/placeholder.svg')
const languages = computed(() => meta.value?.languages ?? [])
const hasLanguages = computed(() => languages.value.length > 0)

// Friendly labels for the flat-list language sub-groups (fallback path only).
const languageLabels: Record<string, string> = {
  makecode: 'MakeCode',
  edublocks: 'EduBlocks',
  python: 'Python',
  javascript: 'JavaScript',
}

// All published tutorials for this platform, ordered by title.
const { data: tutorials } = await useAsyncData(
  () => `platform-${platformSlug.value}`,
  () =>
    queryCollection('tutorials')
      .where('platform', '=', platformSlug.value)
      .where('draft', '=', false)
      .order('title', 'ASC')
      .all(),
  { watch: [platformSlug] }
)

// Language cards (multi-language platforms). One card per configured language
// with a live tutorial count, mirroring the Learning Hub hardware cards.
const languageCards = computed(() =>
  languages.value.map((lang) => {
    const info = languageMeta[lang] ?? {
      name: languageLabels[lang] ?? lang,
      blurb: '',
      icon: '/learn/placeholder.svg',
    }
    const count = tutorials.value?.filter((t) => t.language === lang).length ?? 0
    return {
      slug: lang,
      ...info,
      count,
      available: count > 0,
      countLabel: `${count} ${count === 1 ? 'tutorial' : 'tutorials'}`,
    }
  })
)

// Flat tutorial groups (platforms without languages). Tutorials with no language
// fall under a single '' bucket that renders as a flat list.
const groups = computed(() => {
  const list = tutorials.value ?? []
  const byLanguage = new Map<string, typeof list>()
  for (const t of list) {
    const key = t.language ?? ''
    if (!byLanguage.has(key)) byLanguage.set(key, [])
    byLanguage.get(key)!.push(t)
  }
  return Array.from(byLanguage, ([language, items]) => ({
    language,
    label: language ? languageLabels[language] ?? language : '',
    items,
  }))
})

useHead(() => ({
  title: meta.value ? `${meta.value.name} tutorials — RaspiKidd` : 'Tutorials — RaspiKidd',
}))
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Header />

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Breadcrumb -->
      <nav class="text-sm text-gray-500">
        <NuxtLink to="/learn" class="hover:text-brand">Learning Hub</NuxtLink>
        <span class="mx-2" aria-hidden="true">/</span>
        <span class="text-gray-700" v-text="heading" />
      </nav>

      <!-- Hero -->
      <header class="mt-4 flex items-center gap-x-4">
        <img :src="heroIcon" alt="" class="h-16 w-16 shrink-0" width="64" height="64" loading="lazy" />
        <div>
          <h1 class="font-heading text-3xl sm:text-4xl font-bold text-brand" v-text="heading" />
          <p v-if="meta" class="mt-1 text-gray-700" v-text="meta.blurb" />
        </div>
      </header>

      <!-- Language cards (multi-language platforms, e.g. micro:bit) -->
      <ul
        v-if="hasLanguages"
        class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <li v-for="card in languageCards" :key="card.slug">
          <!-- Available language: link through to its tutorial list -->
          <NuxtLink
            v-if="card.available"
            :to="`/learn/${platformSlug}/${card.slug}`"
            class="group flex h-full flex-col rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition hover:border-brand hover:shadow-md focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <img :src="card.icon" alt="" class="h-16 w-16" width="64" height="64" loading="lazy" />
            <h2
              class="mt-4 font-heading text-2xl font-bold text-gray-900 group-hover:text-brand"
              v-text="card.name"
            />
            <p class="mt-2 flex-1 text-gray-600" v-text="card.blurb" />
            <span class="mt-4 inline-flex items-center gap-x-1 font-semibold text-brand">
              <span v-text="card.countLabel" />
              <span aria-hidden="true" class="transition group-hover:translate-x-1">→</span>
            </span>
          </NuxtLink>

          <!-- Coming soon: same card, quietened, not clickable -->
          <div
            v-else
            class="flex h-full flex-col rounded-2xl border-2 border-dashed border-gray-200 bg-white/60 p-6"
          >
            <img :src="card.icon" alt="" class="h-16 w-16 opacity-50" width="64" height="64" loading="lazy" />
            <h2 class="mt-4 font-heading text-2xl font-bold text-gray-500" v-text="card.name" />
            <p class="mt-2 flex-1 text-gray-500" v-text="card.blurb" />
            <span class="mt-4 inline-flex items-center self-start rounded-full bg-leaf/10 px-3 py-1 text-sm font-semibold text-leaf-dark">
              Coming soon
            </span>
          </div>
        </li>
      </ul>

      <!-- Flat tutorial list (platforms without languages, e.g. PicoBricks) -->
      <template v-else>
        <!-- Empty state -->
        <p
          v-if="!tutorials?.length"
          class="mt-12 rounded-2xl border-2 border-dashed border-gray-200 p-8 text-center text-gray-500"
        >
          No tutorials here just yet — check back soon!
        </p>

        <section v-for="group in groups" :key="group.language" class="mt-10">
          <h2
            v-if="group.label"
            class="font-heading text-xl font-bold text-emerald-800"
            v-text="group.label"
          />
          <ul class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="tutorial in group.items" :key="tutorial.path">
              <NuxtLink
                :to="tutorial.path"
                class="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-sm transition hover:border-brand hover:shadow-md focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <img
                  :src="tutorial.image || '/learn/placeholder.svg'"
                  :alt="tutorial.image ? `${tutorial.title} cover image` : ''"
                  class="aspect-video w-full bg-gray-100 object-cover"
                  loading="lazy"
                />
                <div class="flex flex-1 flex-col p-5">
                  <h3
                    class="font-heading text-lg font-bold text-gray-900 group-hover:text-brand"
                    v-text="tutorial.title"
                  />
                  <p
                    v-if="tutorial.description"
                    class="mt-2 flex-1 text-sm text-gray-600"
                    v-text="tutorial.description"
                  />
                  <div class="mt-4 flex flex-wrap gap-2">
                    <span
                      v-if="tutorial.level"
                      class="rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-brand"
                      v-text="tutorial.level"
                    />
                    <span
                      v-if="tutorial.duration"
                      class="rounded-full bg-leaf/10 px-2.5 py-0.5 text-xs font-semibold text-leaf-dark"
                      v-text="tutorial.duration"
                    />
                  </div>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </section>
      </template>
    </main>

    <Footer />
  </div>
</template>
