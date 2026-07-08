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
.tutorial-step {
  animation: stepFadeIn 0.2s ease;
}
.tutorial-step__title {
  margin-top: 0;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #065f46; /* emerald-800 */
  border-bottom: 2px solid #fee2e2; /* red-100 accent underline */
}
@keyframes stepFadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
</style>
