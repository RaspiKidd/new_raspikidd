<template>
  <div class="relative bg-gray-100">
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
    
        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <div class="bg-red-100 border-l-8 border-red-400 px-8">
            <h3 class="text-2xl tracking-tight font-extrabold sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl" style="color:#006494">
              NOTE:
            </h3>
            <p class="text-gray-900"> 
              You do not need a micro:bit to do this tutorial you can use the simulator built into the MakeCode editor.
            </p>
          </div>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            What You Will Learn
          </h2>
          
          <ul class="text-gray-700">
            <li> How to create and use a variable. </li>
            <li> How to use the micro:bit on shake function. </li>
            <li> How to display images/shapes on the LED matrix. </li>
            <li> How to use conditional if/else statements. </li>
            <li> How to use comparison operators. </li>
            <li> How to randomise choices. </li>
          </ul>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Setting Up
          </h2>

          <ol class="text-gray-700">
            <li> Open your favourite browser ( we recommend Google Chrome) or if you are using a mobile phone or tablet open the micro:bit app. </li>
            <li> Within the address bar of the browser type <a href="https://makecode.microbit.org/"> makecode.microbit.org </a> or on a tablet or phone press create code. </li>
            <li> Click on new project and give it the name Rock paper scissors. </li>
          </ol>

          <p class="text-gray-700"> 
            We are now ready to start coding!
          </p>
              
          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Getting Started
          </h2>

          <ol class="text-gray-700">
            <li> Click and drag the on start block to the left of the screen and drop it on the bin. </li>
            <li> Click and drag the forever block to the left of the screen and drop it on the bin </li>
            <li> Click on Input. Click and drag the on shake block to the code area and drop it. </li>
          </ol>

          <p class="text-gray-700"> 
            Your code area should look like this:
          </p>

          <figure>
            <img class="w-full rounded-lg" src="/public/images/RPS_MC_01.png" alt="" width="1310" height="873">
            <figcaption class="text-gray-600"> What the code area looks like </figcaption>
          </figure>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Creating A Variable
          </h2>

          <div class="bg-blue-100 border-l-8 border-blue-400 px-8">
            <h3 class="text-2xl tracking-tight font-extrabold sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl" style="color:#006494">
              What is a variable
            </h3>
            <p class="text-gray-900"> 
              Think of a variable as a box that stores information that can be used throughout our program. 
              We give variables a descriptive name so we and others can understand what is going on within our program.
            </p>
          </div>

          <ol class="text-gray-700">
            <li> Click on Variables. Click on make a variable... </li>
            <li> Type choice and click on OK. </li>
          </ol>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Set Choice To
          </h2>

          <ol class="text-gray-700">
            <li> Click on variables. Click and drag a set choice to 0 block to the code area and attach it within the on shake block. </li>
            <li> Click on Math. Click and drag pick random 0 to 10 block to the code area and attach it within the 0 of set choice to block. </li>
            <li> Click on 10 and type 2. </li>
          </ol>

          <p class="text-gray-700"> 
            Your code should look like this:
          </p>
          
          <figure>
            <img class="w-full rounded-lg" src="/public/images/RPS_MC_02.png" alt="" width="500" height="873">
            <figcaption class="text-gray-600"> This is what your code looks like </figcaption>
          </figure>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            If Condition
          </h2>

          <ol class="text-gray-700">
            <li> Click on Logic. Click and drag an if true then else block to the code area and attach it under set choice to pick random from 0 to 2 block. </li>
            <li> Click on Logic. Click and drag a 0 = 0 to the code area and attach it within the true of the if then block. </li>
            <li> Click on Variables. Click and drag choice block and attach it within the first 0 of the if 0 = 0 then block. </li>
            <li> Click on Basic. Click and drag a show leds block to the code area and attach it within the if choice = 0 then block. </li>
            <li> Make the following pattern by clicking the squres to represent paper. </li>
          </ol>

          <figure>
            <img class="w-full rounded-lg" src="/public/images/RPS_MC_03.png" alt="" width="500" height="873">
            <figcaption class="text-gray-600"> Representation of paper </figcaption>
          </figure>

          <p class="text-gray-700"> 
            Your code should look like this:
          </p>
          
          <figure>
            <img class="w-full rounded-lg" src="/public/images/RPS_MC_04.png" alt="" width="500" height="500">
            <figcaption class="text-gray-600"> This is what your code looks like </figcaption>
          </figure>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Else Condition
          </h2>

          <ol class="text-gray-700">
            <li> Click on Basic. Click and drag a show leds block to the code area and attach it within the else block. </li>
            <li> Make the following pattern by clicking the quares to represent rock. </li>
          </ol>

          <figure>
            <img class="w-full rounded-lg" src="/public/images/RPS_MC_05.png" alt="" width="500" height="873">
            <figcaption class="text-gray-600"> Representation of rock </figcaption>
          </figure>

          <p class="text-gray-700"> 
            Your code should look like this:
          </p>
          
          <figure>
            <img class="w-full rounded-lg" src="/public/images/RPS_MC_06.png" alt="" width="500" height="500">
            <figcaption class="text-gray-600"> This is what your code looks like </figcaption>
          </figure>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Else If Condition
          </h2>

          <ol class="text-gray-700">
            <li> Click on the + sign below else. </li>
            <li> Click on Logic. Click and drag a 0 = 0 block to the code area and attach it within the blank of else if then block. </li>
            <li> Click on variables. Click and drag a choice block to the code area and attach it within the first 0 of the else if block. </li>
            <li> Click on 0 and type 1. </li>
            <li> Click on Basic. Click and drag a show leds block to the code area and attach it within the else if choice = 1 then block. </li>
            <li> Create the following pattern to represent scissors. </li>
          </ol>

          <figure>
            <img class="w-full rounded-lg" src="/public/images/RPS_MC_07.png" alt="" width="500" height="873">
            <figcaption class="text-gray-600"> Representation of scissors </figcaption>
          </figure>

          <p class="text-gray-700"> 
            Your code should look like this:
          </p>
          
          <figure>
            <img class="w-full rounded-lg" src="/public/images/RPS_MC_08.png" alt="" width="500" height="500">
            <figcaption class="text-gray-600"> This is what your code looks like </figcaption>
          </figure>

          <p class="text-gray-700"> 
            We have now finished coding rock paper scissors the next step is to download our code to the miro:bit.
          </p>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Downloading the Code
          </h2>

          <ol class="text-gray-700">
            <li> Click on the 3 dots next to Download. </li>
            <li> Click on pair device a pop-up will come on screen to show you how to connect the micro:bit to the computer. Click on pair device again. </li>
            <li> Click on BBC micro:bit xxxx and click connect. </li>
            <li> Click Download. </li>
          </ol>  

          <p class="text-gray-700"> 
            You have now successfully coded a micro:bit to play raock paper scissors.
          </p>

          <p class="text-gray-700"> 
            Find a partner and start playing.
          </p>
        </div>
      </div>
    </div>
          
    <Footer />
  </div>
</template>

