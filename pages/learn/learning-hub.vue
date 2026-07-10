<script setup lang="ts">
// Learning Hub landing page (pages/learn/index.vue)
// The front door to every RaspiKidd tutorial. Queries the tutorials collection,
// groups by hardware platform, and renders a card per platform. Platforms with
// no tutorials yet show a "coming soon" state, so the hub always reflects
// reality with zero manual upkeep.

// Static metadata for each platform (display name, blurb, icon, order).
// Keep this list in sync with the `platform` enum in content.config.ts.
const platforms = [
  {
    slug: 'picobricks',
    name: 'PicoBricks',
    blurb: 'An all-in-one kit built around the Raspberry Pi Pico. A gentle first step into physical computing.',
    icon: '🧱',
  },
  {
    slug: 'raspberry-pi-pico',
    name: 'Raspberry Pi Pico',
    blurb: 'Wire up your own circuits and bring them to life with the tiny, mighty Pico microcontroller.',
    icon: '🔌',
  },
  {
    slug: 'microbit',
    name: 'micro:bit',
    blurb: 'The pocket-sized BBC micro:bit, with projects in MakeCode, Python and EduBlocks.',
    icon: '🔬',
  },
] as const

// Pull every tutorial once, then count per platform.
const { data: tutorials } = await useAsyncData('learn-hub-tutorials', () =>
  queryCollection('tutorials').all()
)

// Card view-model: attach a live tutorial count (and label) to each platform.
const cards = computed(() =>
  platforms.map((p) => {
    const count = tutorials.value?.filter((t) => t.platform === p.slug).length ?? 0
    return {
      ...p,
      count,
      available: count > 0,
      countLabel: `${count} ${count === 1 ? 'tutorial' : 'tutorials'}`,
    }
  })
)

useHead({
  title: 'Learning Hub — RaspiKidd',
  meta: [
    {
      name: 'description',
      content:
        'Free, friendly coding tutorials for kids across PicoBricks, Raspberry Pi Pico and the BBC micro:bit.',
    },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Header />

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero -->
      <header class="text-center max-w-2xl mx-auto">
        <h1 class="font-heading text-4xl sm:text-5xl font-bold text-brand">
          Learning Hub
        </h1>
        <p class="mt-4 text-lg text-gray-700">
          Pick a kit to get started. Each one has step-by-step projects you can follow at your own pace.
        </p>
      </header>

      <!-- Platform grid -->
      <ul class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="card in cards" :key="card.slug">
          <!-- Available platform: a real link through to its hub -->
          <NuxtLink
            v-if="card.available"
            :to="`/learn/${card.slug}`"
            class="group flex h-full flex-col rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition hover:border-brand hover:shadow-md focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <span class="text-5xl" aria-hidden="true" v-text="card.icon" />
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
            <span class="text-5xl opacity-50" aria-hidden="true" v-text="card.icon" />
            <h2 class="mt-4 font-heading text-2xl font-bold text-gray-500" v-text="card.name" />
            <p class="mt-2 flex-1 text-gray-500" v-text="card.blurb" />
            <span class="mt-4 inline-flex items-center self-start rounded-full bg-leaf/10 px-3 py-1 text-sm font-semibold text-leaf-dark">
              Coming soon
            </span>
          </div>
        </li>
      </ul>
    </main>

    <Footer />
  </div>
</template>
