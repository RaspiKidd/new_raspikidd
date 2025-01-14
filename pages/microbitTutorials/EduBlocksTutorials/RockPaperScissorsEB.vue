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

          <ol>
            <li> Open your favourite browser and go to <a href ="https://app.edublocks.org/"> app.edublocks.org </a> and press enter. </li>
            <li> Click on micro:bit to open the micro:bit coding editor. </li>
            <li> Click on Basic. Click and drag a from microbit import * block to the code area and drop it. </li>
            <li> Click on Basic. Click and drag an import random block to the code area and attach it under the from microbit import * block. </li>
            <li> Click on Basic. Click and drag a while True: block to the code area and attach it under the import random block. </li>
            <li> Click on Display. Click and drag an image = block to the code area and attach it within the while True: block. </li>
            <li> 
              Create the following image to represent Paper by typing 9 (this represents the brightness of the LEDs) in the corresponding squares.
              <figure>
                <img class="rounded-lg" src="/public/images/RPS_EB_01.png" alt="" width="200" height="200">
                <figcaption class="text-gray-600"> Representation of Paper </figcaption>
              </figure>
              Click on the drop-down arrow next to image and click New variable and name it Paper.
            </li>
            <li> Follow step 6 this time attaching the block under Paper. </li>
            <li> 
              Create the following image to represent Rock by typing 9 within the corresponding squares.
              <figure>
                <img class="rounded-lg" src="/public/images/RPS_EB_02.png" alt="" width="200" height="200">
                <figcaption class="text-gray-600"> Representation of Rock </figcaption>
              </figure>
              Click on the arrow next to image and click New variable and name it Rock.
            </li>
            <li> Follow step 6 this time attaching the block below Rock. </li>
            <li> 
              Create the following image to represent Scissors by typing 9 within the corresponding boxes. 
              <figure>
                <img class="rounded-lg" src="/public/images/RPS_EB_03.png" alt="" width="200" height="200">
                <figcaption class="text-gray-600"> Representation of Scissors </figcaption>
              </figure>
              Click on the arrow next to image and click New variable and name it Scissors.
              Your code should look like this:
              <figure>
                <img class="rounded-lg" src="/public/images/RPS_EB_04.png" alt="" width="300" height="200">
                <figcaption class="text-gray-600"> Your code so far </figcaption>
              </figure>
            </li>
            <li> Click on Basic. Click and drag an if True: block to the code area and attach it under Scissors. </li>
            <li> 
              Click on Accelerometer. Click and drag an accelerometer.was_gesture(‘shake’) block to the code area and attach it within the True of the if block. 
              <div class="bg-blue-100 border-l-8 border-blue-400 px-8">
                <h3 class="text-2xl tracking-tight font-extrabold sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl" style="color:#006494">
                  What is a variable
                </h3>
                <p class="text-gray-900"> 
                  Think of a variable as a box that stores information that can be used throughout our program. 
                  We give variables a descriptive name so we and others can understand what is going on within our program.
                </p>
              </div>
            </li>
            <li> Click on Variables. Click create variable and name it choice. Click OK. </li>
            <li> Click on Variables. Click and drag a choice = block to the code area and attach it within the if accelerometer.was_gesture(‘shake’) block. Within the blank space type random.randint(0,2). </li>
            <li> Click on Basic. Click and drag an if True: block to the code area and attach it below choice = random.randint(0,2) block. </li>
            <li> Click on Basic. Click and drag a 0 == 0 block to the code area and attach it within the True of the if block. </li>
            <li> Click on Variables. Click and drag a choice block to the code area and attach it within the first 0 of the if block. </li>
            <li> Click on Display. Click and drag a display.show(Image.HAPPY) block to the code area and attach it within the if choice == 0: block. </li>
            <li> 
              Click on Variables. Click and drag the Paper block to the code area and attach it within Image.HAPPY. Your code should look like this:
              <figure>
                <img class="rounded-lg" src="/public/images/RPS_EB_05.png" alt="" width="300" height="200">
                <figcaption class="text-gray-600"> Your code so far. Getting there </figcaption>
              </figure>
            </li>
            <li> Click on Basic. Click and drag an elif block to the code area and attach it below the if choice == 0: block. </li>
            <li> Right-click on choice == 0 and click duplicate. Attach the duplicated block within the True of the elif block. Click on 0 and type 1. </li>
            <li> 
              Right-click on the display.show(Paper) block and click duplicate. Attach the duplicated block within elif choice == 1: block. Click on Paper and choose Rock. Your code should look like this:
              <figure>
                <img class="rounded-lg" src="/public/images/RPS_EB_06.png" alt="" width="300" height="200">
                <figcaption class="text-gray-600"> Your code so far. Nearly Finished </figcaption>
              </figure>
            </li>
            <li> Click on Basic. Click and drag an else: block to the code area and attach it under the elif choice == 1: block. </li>
            <li> 
              Right-click on display.show(Rock) and click duplicate. Attach the duplicated block within the else: block. Click on Rock and choose Scissors. Completed Code:
              <figure>
                <img class="rounded-lg" src="/public/images/RPS_EB_07.png" alt="" width="300" height="200">
                <figcaption class="text-gray-600"> Completed Code </figcaption>
              </figure>
            </li>
          </ol>

          <p> 
            We have now finished coding rock paper scissors the next step is to download our code to the miro:bit.
          </p>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Downloading the Code
          </h2>

          <ol>
            <li> Take the micro USB cable and connect the micro:bit to the computer. </li>
            <li> Click on Download Hex. </li>
            <li> Locate your micro:bit within the file explorer. Click on it to open the drive and click on Save. Once the light on the back of the micro:bit stops blinking your code has finished downloading. </li>
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

