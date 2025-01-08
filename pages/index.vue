<template>
  <div class="relative bg-gray-50">
    <Header />
    <main class="lg:relative">
      <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-30 lg:text-center">
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span class="block xl:inline" style="color:#A42530"> Making <br> Programming<br> Fun </span> <br>
          </h1>
          
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            We do so with the help of microcomputers which are the size of a credit card. 
            When our students write code for the micro:bit and Raspberry Pi etc, they can see an immediate result, e.g LEDs light 
            up or robots move about.
          
          </p>
        
          <div class="grid grid-cols-2 grid-rows-2 gap-2 place-items-auto h-30 mt-10 sm:ml-3">
            <div class="rounded-md shadow sm:mt-0 sm:ml-3">
              <NuxtLink to="/microbit" class="bg-green-700 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-emerald-200 md:py-4 md:text-lg md:px-4">
                micro:bit
              </NuxtLink>
            </div>
          
            <div class="sm:mt-0 sm:ml-3">
              <a href='https://ko-fi.com/G2G2Y3YFZ' target='_blank'>
                <img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' />
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img class="absolute inset-0 w-full h-full object-cover" src="/images/PhysicalComputing.jpg" alt="cutting mat with various electronics">
      </div>
    </main>
    <NewsletterForm />
    <Footer />
  </div>
</template>