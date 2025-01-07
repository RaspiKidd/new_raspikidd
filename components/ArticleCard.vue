<template>
  <nuxt-link :to="slug">
    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden bg-red-100">
      <div class="flex-shrink-0">
        <img class="h-48 w-full object-cover" :src="image" alt="image.alt" />
      </div>
      <div class="flex-1 p-6 flex flex-col justify-between">
        <div class="flex-1">
          <p class="text-md font-medium text-red-900">
            {{ type }}
          </p>
          <a href="#" class="block mt-2">
            <p class="text-xl font-semibold text-grey-950">
              {{ title }}
            </p>
            <p class="mt-3 text-base text-gray-900">
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
                alt="author.content.Avatar.alt"
              />
            </a>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">
              <a href="#" class="hover:underline">
                {{ author.content.Name }}
              </a>
            </p>
            <div class="flex space-x-1 text-sm text-red-900">
                {{ formattedDate }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
  import { format } from 'date-fns'
  import { computed } from 'vue';
  
  const props = defineProps({
    type: String,
    title: String,
    slug: String,
    description: String,
    author: Object,
    date: String,
    image: String,
  })

  const formattedDate = computed(() => {
    if (!props.date) return 'No date available'
    return format(new Date(props.date), 'dd-MM-yyyy')
  })
</script>
