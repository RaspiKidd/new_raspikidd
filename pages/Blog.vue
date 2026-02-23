<template>
  <div class="font-sans bg-gray-100">
    <div class="relative px-4 pt-6 sm:px-6 lg:px-8">
        <Header />
    </div>

    <div class="relative py-16 overflow-hidden">
        <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            class="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              class="absolute top-12 left-full transform translate-x-32"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
            >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-300"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            class="absolute bottom-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-300"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="relative px-4 pt-16 pb-20 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div class="absolute inset-0">
            <div class="h-1/3 sm:h-2/3"></div>
          </div>
    
          <div class="relative mx-auto max-w-7xl">
            <div class="text-center">
              <h1 class="text-red-700 text-3xl font-extrabold tracking-tight md:text-7xl">
                From the blog
              </h1>
            </div>
        
            <div class="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
              <ArticleCard
                v-for="article in articles"
                :key="article.content.title"
                :type="article.content.type"
                :title="article.content.title"
                :description="article.content.description"
                :slug="`/${article.slug}`"
                :author="article.content.author"
                :image="article.content.image.filename"
                :date="article.content.date"
              
              />
            </div>
          </div>
        </div>
      </div>
    <Footer />
  </div>
  </div>
</template>

<script setup lang="ts">
  import { format } from 'date-fns';
  defineProps({
    blok: {
      type: Object,
      default: () => ({}), 
    },
  })

  const { articles, fetchArticles } = useArticles()

  await fetchArticles()
</script>
