<script setup lang="ts">
import { computed, inject, type Ref } from 'vue'

const props = defineProps<{ title?: string }>()

const ctx = inject('tutorialSteps') as {
  current: Ref<number>
  registerStep: (title: string) => number
} | undefined

const index = ctx ? ctx.registerStep(props.title ?? '') : -1
const isActive = computed(() => ctx?.current.value === index)
</script>

<template>
  <section v-show="isActive" class="tutorial-step">
    <h2 v-if="title" class="tutorial-step__title" v-text="title" />
    <slot />
  </section>
</template>

<style scoped>
.tutorial-step__title 
{ margin-top: 0;
  font-size: 1.2rem;
  font-weight: 700;
}
</style>