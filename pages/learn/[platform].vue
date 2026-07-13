<script setup lang="ts">
// Hardware platform hub (pages/learn/[platform].vue)
// Lists every tutorial for one platform so visitors can pick the project they
// want. Tutorials are grouped by coding language where a platform has one
// (micro:bit); flat platforms (PicoBricks, Raspberry Pi Pico) just list their
// tutorials directly. This route sits above the existing [...slug].vue
// catch-all in specificity, so /learn/picobricks resolves here while
// /learn/picobricks/blink-project still resolves to the tutorial page.

const route = useRoute()
const platformSlug = computed(() => String(route.params.platform))

// Same metadata source as the hub landing. Keep in sync with content.config.ts.
// Icons must match the PNGs used by the hub landing grid (learn-index.vue)
// so the same custom hardware icon carries through into the platform hub.
const platformMeta: Record<string, { name: string; blurb: string; icon: string }> = {
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
  },
}

const meta = computed(() => platformMeta[platformSlug.value])
const heading = computed(() => meta.value?.name ?? platformSlug.value)
const heroIcon = computed(() => meta.value?.icon ?? '/learn/placeholder.svg')

// Friendly labels for the language sub-groups.
const languageLabels: Record<string, string> = {
  makecode: 'MakeCode',
  python: 'Python',
  edublocks: 'EduBlocks',
  javascript: 'JavaScript',
}

// All tutorials for this platform, ordered by title.
const { data: tutorials } = await useAsyncData(
  () => `platform-${platformSlug.value}`,
  () =>
    queryCollection('tutorials')
      .where('platform', '=', platformSlug.value)
      .order('title', 'ASC')
      .all(),
  { watch: [platformSlug] }
)

// Group by language. Tutorials with no language fall under a single '' bucket
// that renders as a flat list (no language heading).
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

      <!-- Empty state -->
      <p
        v-if="!tutorials?.length"
        class="mt-12 rounded-2xl border-2 border-dashed border-gray-200 p-8 text-center text-gray-500"
      >
        No tutorials here just yet — check back soon!
      </p>

      <!-- Grouped tutorial lists -->
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
              <!-- Cover image. Falls back to a shared placeholder when a
                   tutorial has no `image` in its frontmatter. -->
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
    </main>

    <Footer />
  </div>
</template>
