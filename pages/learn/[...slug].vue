<script setup lang="ts">
const route = useRoute()

const { data: tutorial } = await useAsyncData(route.path, () =>
  queryCollection('tutorials').path(route.path).first()
)

if (!tutorial.value) {
  throw createError({ statusCode: 404, statusMessage: 'Tutorial not found', fatal: true })
}

useSeoMeta({
  title: () => tutorial.value?.title,
  description: () => tutorial.value?.description,
})
</script>

<template>
  <ContentRenderer v-if="tutorial" :value="tutorial" />
</template>