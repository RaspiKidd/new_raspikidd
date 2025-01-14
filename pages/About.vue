<template>
  <div class="relative bg-gray-100">
    <Header />
    <main class="lg:relative">
      <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-30 lg:text-center">
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h2 class=" pt-8 text-2xl tracking-tight font-extrabold text-emerald-800 sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
            <span class="block xl:inline"> 
              Imagine being able to program a computer that you can pick up and put in your pocket
            </span>
          </h2>
          
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
            Here at RaspiKidd we educate kids and teachers how to program computers in 
            a fun and interactive way. We do so with the help of microcomputers which 
            are the size of a credit card. When our students write code, they can see 
            an immediate result, e.g LEDs light up or robots move about.
          </p>

          <h1 class="pt-8 text-3xl tracking-tight font-extrabold text-green-700 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
            <span class="block xl:inline sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl"> 
              Who we are 
            </span>
          </h1>

          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
            Kerry Kidd is the micro:bit Educational Specialist and Raspberry Pi Certified Educator. 
          </p>

          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
            Kerry started her tech journey in the early 1990's, when computers were 
            still in their infancy. After studying computer science at college, Kerry went 
            on to combine her love of electronics, tech and building things, that make noise 
            move about and light up this was where RaspiKidd was born.
          </p>

          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
            Kerry is also the co-founder of 
            <a href = "https://micromag.raspikidd.com/"
              target="_blank"
              class="text-blue-800 hover:text-blue-700"
            > 
              micro:mag
            </a> 
            , and she freelances for
            <a href = "https://causewaydigital.io/"
              target="_blank"
              class="text-blue-800 hover:text-blue-700"
            > 
              Causeway Digital
            </a>  
            to develop educational materials for 
            <a href = "https://education.minecraft.net/en-us"
              target = "_blank"
              class = "text-blue-800 hover:text-blue-700"
            >
              Minecraft.
            </a> 
          </p>        
        </div>
      </div>
      <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img class="absolute inset-0 w-full h-full object-cover" src="/public/images/me.jpeg" alt="Image of RaspiKidd programming">
      </div>
    </main>
    <div class="relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0" style="background-color:#A1C4B5">
      <div class="text-center justify-center lg:mx-0 lg:flex-auto lg:py-10">
        <h2 class="text-emerald-800 text-3xl font-bold tracking-tight sm:text-4xl">
          Sign Up to our Newsletter
        </h2>
        <NewsletterForm />
        <h2 class="text-emerald-800 text-3xl font-bold tracking-tight sm:text-4xl">
          Book a Call
        </h2>
        <div class="flex-shrink-0 lg:py-5">
          <a href="https://app.simplymeet.me/raspikidd/discovery" target="_blank" class="relative inline-flex items-center gap-x-1.5 rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#22c55e" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            Book Now
          </a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>