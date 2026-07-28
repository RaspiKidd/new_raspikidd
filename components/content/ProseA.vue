<template>
  <a
    v-if="isExternal"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot />
  </a>
  <NuxtLink v-else :to="href">
    <slot />
  </NuxtLink>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: { type: String, default: '' },
})

// Treat anything starting with http(s):// or // as external
const isExternal = computed(
  () => /^(https?:)?\/\//i.test(props.href)
)
</script>