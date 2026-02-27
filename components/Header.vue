<template>
     <div class="relative bg-gray-200 shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <NuxtLink to="/">
              <span class="sr-only">Workflow</span>
              <img class="h-8 w-auto sm:h-20" src="/public/RaspiKidd.svg" alt="Logo">
            </NuxtLink>
          </div>
          
          <div class="-mr-2 -my-2 md:hidden">
            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
              <span class="sr-only">Open menu</span>
            </button>
          </div>
          <!-- Desktop Menu -->
          <nav class="hidden md:flex space-x-10">
            <!-- Nested menu -->
            <!-- <div class="relative">
              <button type="button" @click="isOpen =!isOpen" class="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <span> Tutorials </span>
                <svg class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>

              <transition
                enter-active-class="transition ease-out duration-200 transform"
                enter-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <div v-show="isOpen" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
                  <div class="rounded-md bg-white shadow-xs">
                    
                    <div class="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      
                          <NuxtLink to="/RaspberryPi" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                            <img class="flex-shrink-0 h-6 w-6" src="/static/images/RaspberryPi.png" alt="Image of a Raspberry Pi">
                            <div class="ml-4">
                              <p class="text-base font-medium text-gray-900">
                                Raspberry Pi
                              </p>
                              <p class="mt-1 text-sm text-gray-500">
                                Raspberry Pi Tutorials
                              </p>
                            </div>
                          </NuxtLink>

                          <NuxtLink to="/microbit" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                            <img class="flex-shrink-0 h-6 w-6" src="@/static/images/microbit.png" alt="Image of a micro:bit">
                            <div class="ml-4">
                              <p class="text-base font-medium text-gray-900">
                                micro:bit
                              </p>
                              <p class="mt-1 text-sm text-gray-500">
                                BBC micro:bit Tutorials
                              </p>
                            </div>
                          </NuxtLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div> -->

            <a href="https://learn.raspikidd.com/" target="_blank" class="text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Learning Hub
            </a>

            <NuxtLink to="/about" class="text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              About
            </NuxtLink>

            <NuxtLink to="/kids-coding-workshops-perth-waitlist" class="text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Coding Workshops
            </NuxtLink>

            <NuxtLink to="/tutoring" class="text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Tutoring Services
            </NuxtLink>

           <NuxtLink to="/blog" class="text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Blog
            </NuxtLink>

            <NuxtLink to="/hire-me" class="text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Hire Us
            </NuxtLink>
          </nav>
          <div class="flex items-center">
              <div class="flex-shrink-0">
                <a href="https://app.simplymeet.me/raspikidd/discovery" target="_blank" class="relative inline-flex items-center gap-x-1.5 rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#22c55e" class="size-6">
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
          <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-200 divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <NuxtLink to="/">
                  <img class="h-8 w-auto sm:h-10" src="/public/RaspiKidd.svg" alt="Logo">
                </NuxtLink>
                <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <a href="https://app.simplymeet.me/raspikidd/discovery" target="_blank" class="relative inline-flex items-center gap-x-1.5 rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#76B82A" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                          </svg>
                          Book a Call
                        </a>
                      </div>
                    </div>
                <div class="-mr-2">
                  <button type="button" @click="isOpen = !isOpen" class="bg-gray-200 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                      <div class="rounded-md bg-gray-200 shadow-xs">
                        <div class="mt-6">
                          <nav class="grid gap-y-8">
                            <!-- <NuxtLink to="/RaspberryPi" class="rounded-t bg-white hover:bg-gray-400 -m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                              <img class="flex-shrink-0 h-6 w-6" src="/static/images/RaspberryPi.png" alt="Raspberry Pi Image">
                              <div class="ml-4">
                                <p class="text-base font-medium text-gray-900">
                                  Raspberry Pi Tutorials
                                </p>
                              </div>
                            </NuxtLink>
        
                            <NuxtLink to="/microbit" class="rounded-t bg-white hover:bg-gray-400 -m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                              <img class="flex-shrink-0 h-6 w-6" src="@/static/images/microbit.png" alt="micro:bit Image">
                              <div class="ml-4">
                                <p class="text-base font-medium text-gray-900">
                                  micro:bit Tutorials
                                </p>
                              </div>
                            </NuxtLink> -->
        
                            <a href="https://learn.raspikidd.com/" target="_blank" class="text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 p-3">
                              Learning Hub
                            </a>

                            <NuxtLink to="/about" class="text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 p-3">
                              About
                            </NuxtLink>

                            <NuxtLink to="/kids-coding-workshops-perth-waitlist" class="text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 p-3">
                              Coding Workshops
                            </NuxtLink>

                            <NuxtLink to="/tutoring" class="text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 p-3">
                              Tutoring Services
                            </NuxtLink>
                      
                            <NuxtLink to="/blog" class="text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 p-3">
                              Blog
                            </NuxtLink> 

                            <NuxtLink to="/hire-me" class="text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 p-3">
                              Hire Us
                            </NuxtLink>
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
})
};
</script>