<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{ slug: string }>()
const { data: glossary } = await useGlossary()

const entry = computed(() =>
  glossary.value?.find(t => slugifyTerm(t.term) === props.slug)
)
const open = ref(false)
</script>

<template>
  <span class="glossary-term" @mouseleave="open = false">
    <button
      type="button"
      class="glossary-term__trigger"
      :aria-expanded="open"
      @click="open = !open"
      @focus="open = true"
      @blur="open = false"
      @mouseenter="open = true"
    >
      <slot />
    </button>

    <span v-if="entry" v-show="open" class="glossary-term__popover" role="tooltip">
      <strong class="glossary-term__title" v-text="entry.term" />
      <span class="glossary-term__def" v-text="entry.definition" />
      <NuxtLink :to="'/glossary#' + slug" class="glossary-term__link">Full entry →</NuxtLink>
    </span>
  </span>
</template>

<style scoped>
.glossary-term { position: relative; display: inline-block; }
.glossary-term__trigger {
  font: inherit; color: inherit; background: none; border: none; padding: 0;
  cursor: help; border-bottom: 1px dotted currentColor;
}
.glossary-term__popover {
  position: absolute; bottom: 100%; left: 0; z-index: 20; width: max-content;
  max-width: 260px; display: flex; flex-direction: column; gap: 0.3rem;
  padding: 0.6rem 0.75rem; margin-bottom: 0.4rem; border-radius: 8px;
  background: #fff; border: 1px solid #e4e4e2; box-shadow: 0 6px 20px rgba(0,0,0,0.12);
  font-size: 0.85rem; text-align: left;
}
.glossary-term__link { font-weight: 600; text-decoration: none; }
</style>