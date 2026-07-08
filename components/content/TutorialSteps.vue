<script setup lang="ts">
import { provide, reactive, ref, computed, type Ref } from 'vue'

const steps = reactive<{ title: string }[]>([])
const current = ref(0)

const progressLabel = computed(() =>
  total.value
    ? `Step ${current.value + 1} of ${total.value}: ${steps[current.value]?.title ?? ''}`
    : ''
)
const progressPercent = computed(() =>
  total.value ? ((current.value + 1) / total.value) * 100 : 0
)

// Each <Step> registers itself on setup, so indices follow document order.
function registerStep(title: string) {
  steps.push({ title: title || `Step ${steps.length + 1}` })
  return steps.length - 1
}

provide('tutorialSteps', { current, registerStep } as {
  current: Ref<number>
  registerStep: (title: string) => number
})

const total = computed(() => steps.length)
const isFirst = computed(() => current.value === 0)
const isLast = computed(() => current.value === total.value - 1)

function next() {
  if (!isLast.value) current.value++
}
function back() {
  if (!isFirst.value) current.value--
}
</script>

<template>
  <div class="tutorial-steps">
    <div v-if="total" class="tutorial-steps__progress">
      <span class="tutorial-steps__count" v-text="progressLabel" />
      <div class="tutorial-steps__bar" role="progressbar">
        <div class="tutorial-steps__bar-fill" :style="{ width: progressPercent + '%' }" />
      </div>
    </div>

    <slot />

    <div class="tutorial-steps__nav">
      <button type="button" :disabled="isFirst" @click="back">← Back</button>
      <button type="button" :disabled="isLast" @click="next">Next →</button>
    </div>
  </div>
</template>

<style scoped>
.tutorial-steps__progress { margin-bottom: 1.25rem; }
.tutorial-steps__count { font-weight: 600; font-size: 0.9rem; }
.tutorial-steps__bar {
  margin-top: 0.5rem; height: 6px; border-radius: 999px;
  background: #eee; overflow: hidden;
}
.tutorial-steps__bar-fill {
  height: 100%; border-radius: 999px; background: currentColor;
  transition: width 0.25s ease;
}
.tutorial-steps__nav {
  display: flex; justify-content: space-between; margin-top: 1.5rem;
}
.tutorial-steps__nav button {
  padding: 0.5rem 1.1rem; border-radius: 8px; border: 1px solid #ddd;
  cursor: pointer; font-weight: 600; background: #fff;
}
.tutorial-steps__nav button:disabled { opacity: 0.4; cursor: default; }
</style>