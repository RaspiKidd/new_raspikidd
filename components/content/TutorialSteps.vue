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

// Surface the tutorial's YouTube video as an optional "watch instead" button on
// the first step. Uses its OWN key (distinct from the page's) so the two do not
// clash in Nuxt's payload cache, and watches the route so it refetches on
// client-side navigation.
const route = useRoute()
const { data: tutorialDoc } = useAsyncData(
  () => `tutorial-steps:${route.path}`,     // distinct key from the page
  () => queryCollection('tutorials').path(route.path).first(),
  { watch: [() => route.path] }             // refetch on client-side navigation
)
const youtubeUrl = computed(
  () => (tutorialDoc.value as { youtube?: string } | null)?.youtube ?? ''
)
const showVideoButton = computed(() => isFirst.value && Boolean(youtubeUrl.value))

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

    <a
      v-if="showVideoButton"
      :href="youtubeUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="tutorial-steps__video"
    >
      <span aria-hidden="true">▶</span>
      Prefer to watch? View this tutorial on YouTube
    </a>

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
  color: theme('colors.emerald.800'); /* secondary green token */
}
.tutorial-steps__bar {
  margin-top: 0.5rem;
  height: 8px;
  border-radius: 999px;
  background: theme('colors.gray.100');
  overflow: hidden;
}
.tutorial-steps__bar-fill {
  height: 100%;
  border-radius: 999px;
  background: theme('colors.brand.DEFAULT'); /* was #b91c1c (red-700) */
  transition: width 0.25s ease;
}
.tutorial-steps__video {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid transparent;
  background: theme('colors.leaf.dark'); /* brand leaf green, matches nav buttons */
  color: #fff !important; /* beat the tutorial-body link colour so text stays white on green */
  transition: background-color 0.15s ease, color 0.15s ease;
}
.tutorial-steps__video:hover,
.tutorial-steps__video:focus-visible {
  background: theme('colors.leaf.DEFAULT');
}
.tutorial-steps__done {
  margin-top: 1.5rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: theme('colors.emerald.50');
  color: theme('colors.emerald.800');
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
  border: 1px solid theme('colors.gray.300');
  background: #fff;
  color: theme('colors.brand.DEFAULT'); /* was #b91c1c (red-700) */
}
.tutorial-steps__nav .btn-back:hover:not(:disabled) {
  background: theme('colors.red.50'); /* pale tint left as-is, awaiting a brand tint token */
}
/* Next = primary brand */
.tutorial-steps__nav .btn-next {
  border: 1px solid transparent;
  background: theme('colors.brand.DEFAULT'); /* was #b91c1c (red-700) */
  color: #fff;
}
.tutorial-steps__nav .btn-next:hover:not(:disabled) {
  background: theme('colors.brand.light'); /* was #ef4444 (red-500) */
}
.tutorial-steps__nav button:disabled {
  opacity: 0.4;
  cursor: default;
}
</style>
