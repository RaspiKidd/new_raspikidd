<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()
const { data: doc } = await useAsyncData(`kit-${route.path}`, () =>
  queryCollection('tutorials').path(route.path).first()
)
const kit = computed<string[]>(() => doc.value?.kit ?? [])
</script>

<template>
  <div class="what-youll-need">
    <ul class="what-youll-need__list">
      <li v-for="item in kit" :key="item" v-text="item" />
    </ul>
  </div>
</template>

<style scoped>
.what-youll-need__list { padding-left: 1.2rem; }
.what-youll-need__list li { margin: 0.25rem 0; }
</style>