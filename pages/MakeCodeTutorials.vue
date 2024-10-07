<template>
  <div class="relative bg-gray-50">
   <Header />
    <!-- main -->
    <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div class="absolute inset-0">
        <div class="bg-white h-1/3 sm:h-2/3"></div>
      </div>
            
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl" style="color:#A42530">
            MakeCode Tutorials
          </h1>
        </div>

        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <NuxtLink to="/microbitTutorials/MakeCodeTutorials/RockPaperScissorsMC" class="block mt-2">
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-scale-down" src="/public/images/RockPaperScissors.png" alt="Rock Paper Scissors image">
              </div>
                    
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-xl font-bold" style="color:#A42530">
                    Rock Paper Scissors
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    Learn how to code the classic game rock paper scissors on your micro:bit.
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>

          <NuxtLink to="/microbitTutorials/MakeCodeTutorials/CreateFitbitMC" class="block mt-2">
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-scale-down" src="/public/images/counter.jpeg" alt="micro:bit counter">
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-xl font-bold" style="color:#A42530">
                    Create Your Own Fitbit
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    Learn how to create your own Fitbit step counter. <br>
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>

          <NuxtLink to="/microbitTutorials/MakeCodeTutorials/EnviroSensingMC" class="block mt-2">
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-scale-down" src="/public/images/EnviroSensing.png" alt="Python Logo">
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-xl font-bold" style="color:#A42530">
                    Sensing The Environment
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    Exploring the environment by using the temperature sensor, light sensor and compass on the micro:bit.
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none" style="background-color:#A1C4B5">
          <NuxtLink to="/microbitTutorials/MakeCodeTutorials/TrafficLightsMC" class="block mt-2">
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-scale-down" src="/public/images/TrafficLights03.jpg" alt="carboard traffic lights">
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-xl font-bold" style="color:#A42530">
                    Traffic Lights add-on board
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    Create your own micro:bit traffic light add-on board.
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>
                
          <NuxtLink to="/microbitTutorials/MakeCodeTutorials/ThrowGhostMC" class="block mt-2">
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-scale-down" src="/public/images/ThrowGhost_Cover.png" alt="micro:bit ghost icon">
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-xl font-bold" style="color:#A42530">
                    Throw a Ghost
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    Exploring the micro:bit radio function by throwing a ghost between 2 micro:bits
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

