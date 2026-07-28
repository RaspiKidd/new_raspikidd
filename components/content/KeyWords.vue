<script setup lang="ts">
import { computed } from 'vue'
import { slugifyTerm } from '~/composables/useGlossary'

const props = defineProps<{ terms?: string }>()

// The slugs this block asked for, in the author's order
const wanted = computed(() =>
  (props.terms ?? '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean)
)

// Self-fetch the glossary (sidesteps the v3 array-prop binding bug)
const { data: glossary } = await useAsyncData('key-words-glossary', () =>
  queryCollection('glossary').all()
)

// Match each wanted slug to its glossary entry
const items = computed(() =>
  wanted.value
    .map(slug => glossary.value?.find(g => slugifyTerm(g.term) === slug))
    .filter((g): g is NonNullable<typeof g> => Boolean(g))
)
</script>

<template>
  <div class="key-words">

    <div v-for="item in items" :key="item.term" class="key-words__item">
      <h3 class="key-words__term" v-text="item.term" />
      <p class="key-words__definition" v-text="item.definition" />
      <p v-if="item.example" class="key-words__example">
        <span class="key-words__example-label">Real-world example: </span>
        <span v-text="item.example" />
      </p>
    </div>
  </div>
</template>

<style scoped>
.key-words {
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
  margin: 1.5rem 0;
}
.key-words__title {
  margin: 0 0 0.75rem;
  font-size: 1.1rem;
  font-weight: 700;
}
.key-words__item + .key-words__item {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
}
.key-words__term {
  margin: 0 0 0.25rem;
  font-size: 1rem;
  font-weight: 600;
}
.key-words__definition {
  margin: 0;
}
.key-words__example {
  margin: 0.4rem 0 0;
  font-size: 0.95rem;
  color: #555;
}
.key-words__example-label {
  font-weight: 600;
}
</style>