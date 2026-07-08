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

    <div v-if="isLast && total > 1" class="tutorial-steps__done">
      🎉 Nice work — you've reached the end!
    </div>

    <div class="tutorial-steps__nav">
      <button type="button" class="btn-back" :disabled="isFirst" @click="back">← Back</button>
      <button type="button" class="btn-next" :disabled="isLast" @click="next">Next →</button>
    </div>
  </div>
</template>

<style scoped>
.tutorial-steps {
  margin: 1.5rem 0;
}
.tutorial-steps__progress {
  margin-bottom: 1.25rem;
}
.tutorial-steps__count {
  font-weight: 700;
  font-size: 0.9rem;
  color: #065f46; /* emerald-800 */
}
.tutorial-steps__bar {
  margin-top: 0.5rem;
  height: 8px;
  border-radius: 999px;
  background: #f3f4f6; /* gray-100 */
  overflow: hidden;
}
.tutorial-steps__bar-fill {
  height: 100%;
  border-radius: 999px;
  background: #b91c1c; /* red-700 */
  transition: width 0.25s ease;
}
.tutorial-steps__done {
  margin-top: 1.5rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: #ecfdf5; /* emerald-50 */
  color: #065f46; /* emerald-800 */
  font-weight: 600;
  text-align: center;
}
.tutorial-steps__nav {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 1.5rem;
}
.tutorial-steps__nav button {
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.15s ease, color 0.15s ease;
}
/* Back = secondary (outline) */
.tutorial-steps__nav .btn-back {
  border: 1px solid #d1d5db; /* gray-300 */
  background: #fff;
  color: #b91c1c; /* red-700 */
}
.tutorial-steps__nav .btn-back:hover:not(:disabled) {
  background: #fef2f2; /* red-50 */
}
/* Next = primary red */
.tutorial-steps__nav .btn-next {
  border: 1px solid transparent;
  background: #b91c1c; /* red-700 */
  color: #fff;
}
.tutorial-steps__nav .btn-next:hover:not(:disabled) {
  background: #ef4444; /* red-500 */
}
.tutorial-steps__nav button:disabled {
  opacity: 0.4;
  cursor: default;
}
</style>
