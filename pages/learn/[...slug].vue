<script setup lang="ts">
// Catch-all route for every tutorial under /learn/**
// Same query you already had — just wrapped in RaspiKidd branding.
const route = useRoute()

// Guard: requests for asset files (e.g. /learn/picobricks/diagram.webp) can fall
// through to this catch-all route when they're missing from /public. Detect a
// file extension so we neither run a pointless query nor crash on a missing image.
const looksLikeAsset = computed(() => /\.[a-z0-9]+$/i.test(route.path))

const { data: tutorial } = await useAsyncData(
  () => `tutorial:${route.path}`,          // reactive + unique key
  () =>
    looksLikeAsset.value
      ? Promise.resolve(null)
      : queryCollection('tutorials').path(route.path).first(),
  { watch: [() => route.path] }            // refetch on client-side navigation
)

if (!tutorial.value) {
  // Non-fatal: a stray/asset request 404s cleanly instead of crashing the whole render.
  throw createError({ statusCode: 404, statusMessage: 'Tutorial not found', fatal: false })
}

const pageTitle = computed(() => (tutorial.value?.title || 'Tutorial') + ' | RaspiKidd')

useSeoMeta({
  title: () => pageTitle.value,
  ogTitle: () => pageTitle.value,
  description: () => tutorial.value?.description,
})
</script>

<template>
  <div class="relative min-h-screen bg-gray-100">
    <Header />

    <main>
      <!-- Hero / title band -->
      <section class="border-b-4 border-red-700 bg-white">
        <div class="mx-auto max-w-4xl px-4 py-10 sm:px-8">
          <NuxtLink
            to="/learn"
            class="inline-flex items-center gap-x-1 text-sm font-semibold text-red-700 hover:text-red-500"
          >
            <span aria-hidden="true">←</span> All tutorials
          </NuxtLink>

          <h1 class="mt-3 text-3xl font-extrabold tracking-tight text-red-800 sm:text-4xl md:text-5xl">
            {{ tutorial?.title }}
          </h1>

          <!-- Meta badges (only show if the frontmatter field exists) -->
          <div class="mt-5 flex flex-wrap items-center gap-2">
            <span
              v-if="tutorial?.platform"
              class="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800"
            >
              {{ tutorial?.platform }}
            </span>
            <span
              v-if="tutorial?.language"
              class="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700"
            >
              {{ tutorial?.language }}
            </span>
            <span
              v-if="tutorial?.level"
              class="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-800"
            >
              {{ tutorial?.level }}
            </span>
            <span
              v-if="tutorial?.duration"
              class="rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
            >
              ⏱ {{ tutorial?.duration }}
            </span>
          </div>
        </div>
      </section>

      <!-- Tutorial body -->
      <article class="mx-auto max-w-4xl px-4 py-10 sm:px-8">
        <div class="tutorial-body rounded-xl bg-white p-6 shadow-sm sm:p-10">
          <ContentRenderer v-if="tutorial" :value="tutorial" />
        </div>

        <!-- Ko-fi support panel: shows at the end of every tutorial -->
        <SupportMe />
      </article>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
/* Brand the markdown that ContentRenderer outputs. :deep() reaches inside it. */
.tutorial-body :deep(h1) {
  font-size: 1.875rem;
  font-weight: 800;
  color: #991b1b; /* red-800 */
  margin: 1.5rem 0 1rem;
}
.tutorial-body :deep(h2) {
  font-size: 1.5rem;
  font-weight: 700;
  color: #065f46; /* emerald-800 */
  margin: 2rem 0 0.75rem;
}
.tutorial-body :deep(h3) {
  font-size: 1.25rem;
  font-weight: 600;
  color: #991b1b; /* red-800 */
  margin: 1.5rem 0 0.5rem;
}
.tutorial-body :deep(p) {
  color: #1f2937; /* gray-800 */
  line-height: 1.75;
  margin: 0.75rem 0;
}
.tutorial-body :deep(a) {
  color: #b91c1c; /* red-700 */
  font-weight: 600;
  text-decoration: underline;
}
.tutorial-body :deep(a:hover) {
  color: #ef4444; /* red-500 */
}
.tutorial-body :deep(strong) {
  color: #15803d; /* green-700 */
  font-weight: 600;
}
.tutorial-body :deep(ul) {
  list-style: disc;
  padding-left: 1.5rem;
  margin: 0.75rem 0;
}
.tutorial-body :deep(ol) {
  list-style: decimal;
  padding-left: 1.5rem;
  margin: 0.75rem 0;
}
.tutorial-body :deep(li) {
  color: #1f2937;
  margin: 0.375rem 0;
}
.tutorial-body :deep(code) {
  background: #f3f4f6; /* gray-100 */
  padding: 0.15rem 0.35rem;
  border-radius: 0.25rem;
  font-size: 0.9em;
}
.tutorial-body :deep(pre) {
  background: #1f2937; /* gray-800 */
  color: #f9fafb;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1rem 0;
}
.tutorial-body :deep(pre code) {
  background: transparent;
  padding: 0;
}
/* Tables */
.tutorial-body :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1.25rem 0;
  font-size: 0.95rem;
  border: 1px solid #e5e7eb; /* gray-200 */
}
.tutorial-body :deep(th),
.tutorial-body :deep(td) {
  padding: 0.6rem 0.85rem;
  text-align: left;
  vertical-align: top;
  border: 1px solid #e5e7eb; /* gray-200 grid lines */
}
.tutorial-body :deep(thead th) {
  background: #991b1b; /* red-800 */
  color: #fff;
  font-weight: 700;
}
.tutorial-body :deep(tbody td) {
  color: #1f2937; /* gray-800 */
}
.tutorial-body :deep(tbody tr:nth-child(even)) {
  background: #f9fafb; /* gray-50 zebra striping */
}
</style>
