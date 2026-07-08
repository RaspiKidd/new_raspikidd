<script setup lang="ts">
import { slugifyTerm } from '~/composables/useGlossary'

type GlossaryEntry = {
  term: string
  definition: string
  category?: string
  example?: string
}

// Pull every glossary entry, sorted A–Z at query time.
const { data: terms } = await useAsyncData('glossary-all', () =>
  queryCollection('glossary').order('term', 'ASC').all()
)

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

// Group entries by first letter (case-insensitive); anything non-alphabetic sits under '#'.
const grouped = computed<Record<string, GlossaryEntry[]>>(() => {
  const groups: Record<string, GlossaryEntry[]> = {}
  const sorted = [...((terms.value as GlossaryEntry[]) ?? [])].sort((a, b) =>
    a.term.localeCompare(b.term, 'en', { sensitivity: 'base' })
  )
  for (const entry of sorted) {
    const first = entry.term.charAt(0).toUpperCase()
    const key = /[A-Z]/.test(first) ? first : '#'
    ;(groups[key] ??= []).push(entry)
  }
  return groups
})

// Letters that actually have entries — used to enable/disable the jump nav.
const activeLetters = computed(() => new Set(Object.keys(grouped.value)))

// Ordered list of letter sections to render (A–Z, plus '#' last if needed).
const sections = computed(() =>
  [...alphabet, '#'].filter((letter) => activeLetters.value.has(letter))
)

useHead({ title: 'Glossary — RaspiKidd' })
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <Header />

    <main class="mx-auto max-w-3xl px-4 py-10">
    <header class="mb-8">
      <h1 class="text-pretty text-3xl font-semibold tracking-tight text-red-800 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
        Glossary
      </h1>
      <p class="mt-2 text-gray-600">
        Friendly definitions for the coding words used across the tutorials.
      </p>
    </header>

    <!-- A–Z jump nav -->
    <nav
      aria-label="Jump to letter"
      class="sticky top-16 z-10 mb-8 flex flex-wrap gap-1 rounded-lg bg-white/90 p-2 backdrop-blur"
    >
      <template v-for="letter in alphabet" :key="letter">
        <a
          v-if="activeLetters.has(letter)"
          :href="`#letter-${letter}`"
          class="flex h-8 w-8 items-center justify-center rounded font-semibold text-red-700 hover:bg-red-50"
        >
          {{ letter }}
        </a>
        <span
          v-else
          class="flex h-8 w-8 items-center justify-center rounded font-semibold text-gray-300"
          aria-disabled="true"
        >
          {{ letter }}
        </span>
      </template>
    </nav>

    <!-- Empty state -->
    <p v-if="!sections.length" class="text-gray-500">
      No glossary terms yet.
    </p>

    <!-- Letter sections -->
    <section
      v-for="letter in sections"
      :key="letter"
      :id="`letter-${letter}`"
      class="mb-10 scroll-mt-24"
    >
      <h2 class="mb-4 border-b border-red-100 pb-1 text-4xl sm:text-5xl font-bold text-emerald-800">
        {{ letter }}
      </h2>

      <div
        v-for="entry in grouped[letter]"
        :key="entry.term"
        :id="slugifyTerm(entry.term)"
        class="mb-6 scroll-mt-24"
      >
        <h3 class="text-xl font-semibold text-red-800">{{ entry.term }}</h3>
        <p class="mt-1 text-gray-800">{{ entry.definition }}</p>
        <p v-if="entry.example" class="mt-2 text-gray-600">
          <span class="font-semibold">Example:</span> {{ entry.example }}
        </p>
      </div>
    </section>
    </main>

    <Footer />
  </div>
</template>
