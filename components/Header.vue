<template>
     <div class="relative bg-sky-900 shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <NuxtLink to="/">
              <span class="sr-only">Workflow</span>
              <img class="h-8 w-auto sm:h-20" src="/public/RaspiKidd.svg" alt="Logo">
            </NuxtLink>
          </div>

          <div class="-mr-2 -my-2 md:hidden">
            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand">
              <span class="sr-only">Open menu</span>
            </button>
          </div>

          <!-- Desktop Menu -->
          <!-- Rendered from the single `navLinks` list in <script> below. -->
          <nav class="hidden md:flex space-x-10">
            <template v-for="link in navLinks" :key="link.label">
              <a
                v-if="link.external"
                :href="link.to"
                target="_blank"
                rel="noopener noreferrer"
                class="text-base font-medium text-white hover:text-leaf focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
              >
                <span v-text="link.label" />
              </a>
              <NuxtLink
                v-else
                :to="link.to"
                class="text-base font-medium text-white hover:text-leaf focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
              >
                <span v-text="link.label" />
              </NuxtLink>
            </template>
          </nav>

          <div class="flex items-center">
              <div class="flex-shrink-0">
                <a href="https://app.simplymeet.me/raspikidd/discovery-call" target="_blank" class="relative inline-flex items-center gap-x-1.5 rounded-md bg-brand px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-leaf">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  Book a Call
                </a>
              </div>
            </div>
          <!-- Desktop Menu END -->
        </div>

        <!-- Mobile Menu -->
        <div class="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden">
          <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-sky-900 divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <NuxtLink to="/">
                  <img class="h-8 w-auto sm:h-10" src="/public/RaspiKidd.svg" alt="Logo">
                </NuxtLink>
                <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <a href="https://app.simplymeet.me/raspikidd/discovery-call" target="_blank" class="relative inline-flex items-center gap-x-1.5 rounded-md bg-brand px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-leaf">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                          </svg>
                          Book a Call
                        </a>
                      </div>
                    </div>
                <div class="-mr-2">
                  <button type="button" @click="isOpen = !isOpen" class="bg-gray-200 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand">
                    <span class="sr-only">Open menu</span>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>

                  <transition
                    enter-active-class="duration-200 ease-out"
                    enter-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100"
                    leave-active-class="duration-100 ease-in"
                    leave-class="opacity-100 scale-100"
                    leave-to-class="opacity-0 scale-95"
                  >
                    <div v-show="isOpen" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
                      <div class="rounded-md bg-sky-900 shadow-xs">
                        <div class="mt-6">
                          <!-- Same `navLinks` list as the desktop menu above. -->
                          <nav class="grid gap-y-8">
                            <template v-for="link in navLinks" :key="link.label">
                              <a
                                v-if="link.external"
                                :href="link.to"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-base font-medium text-white hover:text-leaf focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand p-3"
                                @click="isOpen = false"
                              >
                                <span v-text="link.label" />
                              </a>
                              <NuxtLink
                                v-else
                                :to="link.to"
                                class="text-base font-medium text-white hover:text-leaf focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand p-3"
                                @click="isOpen = false"
                              >
                                <span v-text="link.label" />
                              </NuxtLink>
                            </template>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
export default {
  name: "Header",
  data: () => ({
    isOpen: false,
    // Single source of truth for the main navigation.
    // Add, remove or reorder an item here once and it updates BOTH the
    // desktop and mobile menus automatically.
    // - Internal pages: give it a `to` (renders as <NuxtLink>).
    // - External links: add `external: true` (renders as a new-tab <a>).
    navLinks: [
      { label: "About", to: "/about" },
      { label: "Coding Workshops", to: "/kids-coding-workshops-perth-waitlist" },
      { label: "Tutoring Services", to: "/tutoring" },
      { label: "Learning Hub", to: "/learn" },
      { label: "Blog", to: "/blog" },
      { label: "Hire Us", to: "/hire-me" },
      {label: "Glossary", to: "/glossary"},
    ],
  }),
};
</script>
