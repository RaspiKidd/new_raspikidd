<template>
  <div class="relative bg-gray-100">
    <head>
      <title> Create your Own FitBit </title>
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
            Create Your Own Fitbit
          </h1>
          <p class="mt-8 text-xl font-bold leading-8" style="color:#006494">
            We are all familiar with Fitbits and other smart watches even our phones counting our steps through the day. Lets use a micro:bit to code our own.
          </p>
        </div>
    
        <div class="mt-6 prose prose-indigo prose-lg text-gray-700 mx-auto">
          <Note />

          <h2 class=" text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            What You Will Learn
          </h2>
          <ul>
            <li> How to create and use a variable. </li>
            <li> How to use the micro:bit on shake function. </li>
            <li> How to use a forever loop. </li>
            <li> How to display a number on the LED matrix. </li>
            <li> How to use the button function. </li>
          </ul>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Setting Up
          </h2>

          <ol>
            <li> Open your favourite browser ( we recommend Google Chrome) or if you are using a mobile phone or tablet open the micro:bit app. </li>
            <li> Within the address bar of the browser type <a href="https://makecode.microbit.org/"> makecode.microbit.org </a> or on a tablet or phone press create code. </li>
            <li> Click on new project and give it the name Fitbit Clone. </li>
          </ol>

          <p> 
            We are now ready to start coding!
          </p>
              
          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Getting Started
          </h2>

          <ol>
            <li> Click and drag the on start block to the left of the screen and drop it on the bin. </li>
            <li> Click on Input. Click and drag the on shake block to the code area and drop it. </li>
            <li> Click on Input. Click and drag a on button A pressed block to the code area and drop it. </li>
          </ol>

          <p> 
            Your code area should look like this:
          </p>

          <figure>
            <img class="w-full rounded-lg" src="/public/images/FitBit_MC_01.png" alt="" width="1310" height="873">
            <figcaption class="text-gray-600"> What the code area looks like </figcaption>
          </figure>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Creating A Variable
          </h2>

          <Variable />

          <ol>
            <li> Click on Variables. Click on make a variable... </li>
            <li> Type steps and click on OK. </li>
          </ol>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Change Steps By
          </h2>

          <p>
            Click on Variables. Click and drag a change steps by 1 block to the code area and attach it within the on shake function.
          </p>

          <p>
            Everytime the micro:bit detects a shake it will increase the variable steps by 1.
          </p>

          <p> 
            Your code should look like this:
          </p>
          
          <figure>
            <img class="w-full rounded-lg" src="/public/images/FitBit_MC_02.png" alt="" width="500" height="873">
            <figcaption class="text-gray-600"> Increasing steps by 1 </figcaption>
          </figure>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Show Number
          </h2>

          <ol>
            <li> Click on Basic. Click and drag a show number 0 block to the code area and attach it within the forever block. </li>
            <li> Click on Variables. Click and drag a steps block to the code area and attach it within the 0 of the show number block. </li>
          </ol>

          <p>
            This will run forever and display the number of steps on the LED matrix.
          </p>

          <p> 
            Your code should look like this:
          </p>

          <figure>
            <img class="w-full rounded-lg" src="/public/images/FitBit_MC_03.png" alt="" width="500" height="873">
            <figcaption class="text-gray-600"> Showing the number of steps on the LED matrix </figcaption>
          </figure>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Set Steps To
          </h2>

          <p>
            Click on Variables. Click and drag a set steps to 0 block to the code area and insert it within the on button A pressed block.
          </p>

          <p>
            This will reset the step counter back to 0 when button A is pressed.
          </p>

          <p>  
            Your code should look like this:
          </p>

          <figure>
            <img class="w-full rounded-lg" src="/public/images/FitBit_MC_04.png" alt="" width="500" height="500">
            <figcaption class="text-gray-600"> Resetting the steps when button A is pressed </figcaption>
          </figure>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Completed Code
          </h2>

          <figure>
            <img class="w-full rounded-lg" src="/public/images/FitBit_MC_05.png" alt="" width="500" height="500">
            <figcaption class="text-gray-600"> This is the completed code </figcaption>
          </figure>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Downloading the Code
          </h2>

          <ol>
            <li> Click on the 3 dots next to Download. </li>
            <li> Click on pair device a pop-up will come on screen to show you how to connect the micro:bit to the computer. Click on pair device again. </li>
            <li> Click on BBC micro:bit xxxx and click connect. </li>
            <li> Click Download. </li>
          </ol>  

          <p> 
            You have now created your own fitbit step counter.
          </p>

          <p> 
            Strap the micro:bit to your leg and go for a walk and watch your steps add up.
          </p>
        </div>
      </div>
    </div>
          
    <Footer />
  </div>
</template>