<template>
    <div class="relative bg-gray-100">
      <Header />
      <!-- Background color split screen for large screens 
      <div class="fixed left-0 top-0 hidden h-full w-1/2 bg-white lg:block" aria-hidden="true" />
      <div class="fixed right-0 top-0 hidden h-full w-1/2 bg-gray-50 lg:block" aria-hidden="true" />-->
      <nav aria-label="Progress">
    <ol role="list" class="space-y-4 md:flex md:space-x-8 md:space-y-0">
      <li v-for="step in steps" :key="step.name" class="md:flex-1">
        <a v-if="step.status === 'complete'" :href="step.href" class="group flex flex-col border-l-4 border-green-800 py-2 pl-4 hover:border-green-700 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
          <span class="text-sm font-medium text-red-800 group-hover:text-red-700">{{ step.id }}</span>
          <span class="text-sm font-medium">{{ step.name }}</span>
        </a>
        <a v-else-if="step.status === 'current'" :href="step.href" class="flex flex-col border-l-4 border-red-800 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4" aria-current="step">
          <span class="text-sm font-medium text-red-800">{{ step.id }}</span>
          <span class="text-sm font-medium">{{ step.name }}</span>
        </a>
        <a v-else :href="step.href" class="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
          <span class="text-sm font-medium text-gray-500 group-hover:text-gray-700">{{ step.id }}</span>
          <span class="text-sm font-medium">{{ step.name }}</span>
        </a>
      </li>
    </ol>
  </nav>
      
      <Footer />
    </div>
  </template>
  
  <script setup>
const steps = [
  { id: 'Step 1', name: 'Job details', href: '#', status: 'complete' },
  { id: 'Step 2', name: 'Application form', href: '#', status: 'current' },
  { id: 'Step 3', name: 'Preview', href: '#', status: 'upcoming' },
]
  </script>