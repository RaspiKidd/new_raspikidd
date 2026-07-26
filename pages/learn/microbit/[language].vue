<script setup lang="ts">
// micro:bit language tutorial list (pages/learn/microbit/[language].vue)
// Reached from the micro:bit hub language cards, e.g. /learn/microbit/makecode.
// Lists every tutorial for micro:bit in the chosen coding language.
// The static `microbit` folder keeps this route from clashing with flat-platform
// tutorials like /learn/picobricks/blink-project (which stay on [...slug].vue).
// Tutorials themselves live one level deeper at /learn/microbit/<language>/<slug>.

const route = useRoute()
const platformSlug = 'microbit'
const languageSlug = computed(() => String(route.params.language))

// Keep in sync with the languageMeta map in pages/learn/[platform].vue.
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

const meta = computed(() => languageMeta[languageSlug.value])
const heading = computed(() => meta.value?.name ?? languageSlug.value)
const heroIcon = computed(() => meta.value?.icon ?? '/learn/placeholder.svg')

// All published micro:bit tutorials for the chosen language, ordered by title.
const { data: tutorials } = await useAsyncData(
  () => `microbit-${languageSlug.value}`,
  () =>
    queryCollection('tutorials')
      .where('platform', '=', platformSlug)
      .where('language', '=', languageSlug.value)
      .where('draft', '=', false)
      .order('title', 'ASC')
      .all(),
  { watch: [languageSlug] }
)

useHead(() => ({
  title: meta.value
    ? `micro:bit ${meta.value.name} tutorials — RaspiKidd`
    : 'micro:bit tutorials — RaspiKidd',
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
        <NuxtLink to="/learn/microbit" class="hover:text-brand">micro:bit</NuxtLink>
        <span class="mx-2" aria-hidden="true">/</span>
        <span class="text-gray-700" v-text="heading" />
      </nav>

      <!-- Hero -->
      <header class="mt-4 flex items-center gap-x-4">
        <img :src="heroIcon" alt="" class="h-16 w-16 shrink-0" width="64" height="64" loading="lazy" />
        <div>
          <h1 class="font-heading text-3xl sm:text-4xl font-bold text-brand">
            micro:bit <span v-text="heading" />
          </h1>
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

      <!-- Tutorial grid -->
      <ul v-else class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="tutorial in tutorials" :key="tutorial.path">
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
    </main>

    <Footer />
  </div>
</template>
