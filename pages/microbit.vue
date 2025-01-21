<template>
  <div class="relative bg-gray-100">
    <head>
      <title> About The micro:bit </title>
    </head>
    <Header />  
    <main class="lg:relative">
      <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-30 lg:text-center">
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span class="block xl:inline" style = "color:#A42530"> micro:bit </span>
          </h1>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
            The micro:bit is a small device about half the size of a credit card. 
            It is packed full of features aimed at getting children into computer 
            programming and technology. Note that you still need a computer or 
            tablet to program it - it is a microcomputer not a full computer. 
          </p>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
            The micro:bit was created by the BBC and other partners in the UK 
            in 2015. In 2016 they gave away one million free micro:bits to 
            schools within the UK to support the teaching of computer coding.
            Many other countries followed the UK's foot steps.
          </p>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
            The micro:bit is now available for sale around the world.  
          </p>
        </div>
      </div>
      <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img class="absolute inset-0 w-full h-full object-cover" src="/images/main-1.png" alt="micro:bit Educational Specialist - Getting started with micro:bit">
      </div>
    </main>
    <!-- Tutorial Block -->
    <div class="relative">
      <div class="absolute inset-0">
        <div class="h-1/3 sm:h-2/3" style="background-color:#a1c4b5"></div>
      </div>
            
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <h2 class=" pt-8 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
            <span class="block xl:inline sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#0E7452"> 
              Tutorials 
            </span>
          </h2>
        </div>

        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <NuxtLink to="/MakeCodeTutorials" class="block mt-2">
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-scale-down" src="/images/MakeCodeIcon.jpeg" alt="MakeCode Logo">
              </div>
              <div class="flex-1 bg-gray-100 p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-xl font-bold" style="color:#A42530">
                    MakeCode Tutorials
                  </p>
                  <p class="mt-3 text-base text-gray-700">
                    All Tutorials coded in the MakeCode drag and drop JavaScript editor.
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>

          <NuxtLink to="/EduBlocksTutorials" class="block mt-2">
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-scale-down" src="/images/EduBlocksIcon.jpeg" alt="EduBlocks Logo">
              </div>
              <div class="flex-1 bg-gray-100 p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-xl font-bold" style="color:#A42530">
                    EduBlocks Tutorials
                  </p>
                  <p class="mt-3 text-base text-gray-700">
                    All tutorials coded the EduBlocks drag and drop Python editor.
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>

          <NuxtLink to="/MicroPythonTutorials" class="block mt-2">
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-scale-down" src="/images/PythonIcon.jpeg" alt="Python Logo">
              </div>
              <div class="flex-1 bg-gray-100 p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-red-700 text-xl font-bold">
                    MicroPython tutorials
                  </p>
                  <p class="mt-3 text-base text-gray-700">
                    All tutorials written in MicroPython Will work with the Mu Editor or the online python editor.
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>