<template>
  <div class="relative bg-gray-100">
    <head>
      <title> Rock Paper Scissors Game </title>
    </head>
    <Header />
    <!-- main -->
    <div class="relative py-16 overflow-hidden">
      <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <img class="absolute top-12 left-full transform translate-x-32" width="404" height="384"  fill="none" viewBox="0 0 404 384" src="/images/circuit-board.svg">
          <img class="absolute top-12 right-full transform -translate-x-32" width="404" height="384"  fill="none" viewBox="0 0 404 384" src="/images/circuit-board.svg">
          <img class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384" src="/images/circuit-board.svg">
          <img class="absolute top-1/2 left-full transform -translate-y-1/2 translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384" src="/images/circuit-board.svg">
          <img class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384" src="/images/circuit-board.svg">
          <img class="absolute bottom-12 right-full transform -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384" src="/images/circuit-board.svg">
        </div>
      </div>
          
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-red-700">
            Rock Paper Scissors
          </h1>
              
          <p class="mt-8 text-xl font-bold leading-8" style="color:#006494">
            We are all familiar with the game Rock Paper Scissors. Let's take a look at how we can code our micro:bits to play
          </p>
        </div>
    
        <div class="mt-6 prose prose-indigo prose-lg text-gray-700 mx-auto">
          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            What You Will Learn
          </h2>
              
          <ul>
            <li> How to create and use a variable. </li>
            <li> How to use the micro:bit on shake function. </li>
            <li> How to display images/shapes on the LED matrix. </li>
            <li> How to use conditional if/else statements. </li>
            <li> How to use comparison operators. </li>
            <li> How to randomise choices. </li>
          </ul>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            What You Will Need
          </h2>

          <ul>
            <li> 1 x micro:bit </li>
            <li> 1 x micro USB cable </li>
            <li> 1 x battery pack for the micro:bit (optional) </li>
          </ul>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Coding
          </h2>

          <Variable />

          <ol>
            <li> Within your favourite browser (we recommend Google Chrome) go to <a href="https://python.microbit.org"> python.microbit.org </a> and press enter. This will load the MicroPython coding editor. </li>
            <li> Delete the text on lines 6-8. </li>
            <li> Click on line 3 and type import random. </li>
            <li> 
              Click on line 6 and type the following code:
              <figure>
                <img class="w-full rounded-lg" src="/public/images/RPS_PY_01.png" alt="" width="500" height="500">
                <figcaption class="text-gray-600"> Code so far </figcaption>
              </figure>
            </li>
          </ol>
          
          <p>
            Completed code:
          </p>
              
          <figure>
            <img class="w-full rounded-lg" src="/public/images/RPS_PY_02.png" alt="" width="500" height="500">
            <figcaption class="text-gray-600">Completed Code</figcaption>
          </figure>
              
          <p> 
            We have now finished coding rock paper scissors the next step is to download our code to the miro:bit.
          </p>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Downloading the Code
          </h2>

          <ol>
            <li> Take the micro USB cable and connect the micro:bit to the computer. </li>
            <li> Click on Connect. </li>
            <li> Click on your micro:bit and click connect. </li>
            <li> Click Download. </li>
          </ol>  

          <p> 
            You have now successfully coded a micro:bit to play raock paper scissors.
          </p>

          <p> 
            Find a partner and start playing.
          </p>
        </div>
      </div>
    </div>
          
    <Footer />
  </div>
</template>