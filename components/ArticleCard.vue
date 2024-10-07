<template>
  <nuxt-link :to="slug">
    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div class="flex-shrink-0">
        <img class="h-48 w-full object-cover" :src="image" alt="" />
      </div>
      <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
          <p class="text-sm font-medium text-indigo-600" style="color:#A42530">
            {{ type }}
          </p>
          <a href="#" class="block mt-2">
            <p class="text-xl font-semibold text-gray-900">
              {{ title }}
            </p>
            <p class="mt-3 text-base text-gray-500">
              {{ description }}
            </p>
          </a>
        </div>
        <div class="mt-6 flex items-center">
          <div class="flex-shrink-0">
            <a href="#">
              <span class="sr-only">{{ author.content.Name }}</span>
              <img
                class="h-10 w-10 rounded-full"
                :src="author.content.Avatar.filename"
                alt=""
              />
            </a>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">
              <a href="#" class="hover:underline">
                {{ author.content.Name }}
              </a>
            </p>
            <div class="flex space-x-1 text-sm text-gray-500">
              <time datetime="2020-03-16">
                {{ date }}
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    type: Object,
    title: String,
    slug: String,
    description: String,
    author: Object,
    date: String,
    image: String,
  },
}
</script>
