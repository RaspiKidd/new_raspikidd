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
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-red-700">
            Create Your Own Fitbit
          </h1>
          <p class="mt-8 text-xl font-bold leading-8" style="color:#006494">
            We are all familiar with Fitbit and other smart watches even our phones counting our steps throughout the day. Let’s use a micro:bit to code our own.
          </p>
        </div>
    
        <div class="mt-6 prose prose-indigo prose-lg text-gray-700 mx-auto">
          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            What You Will Learn
          </h2>
          <p> How to </p>
          <ul>
            <li> Create and use a variable. </li>
            <li> The micro:bit shake function. </li>
            <li> Use a while True loop. </li>
            <li> Display a number on the LED matrix. </li>
            <li> Use the button function. </li>
          </ul>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            What You Will Need
          </h2>
          <ul>
            <li> 1 x micro:bit. </li>
            <li> 1 x micro USB cable. </li>
            <li> 1 x Battery pack for the micro:bit (optional). </li>
          </ul>
          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Coding
          </h2>

          <ol>
            <li> Open your favourite browser ( we recommend Google Chrome) Within the address bar of the browser type <i> <a href="https://app.edublocks.org/"> app.edublocks.org </a> </i> and press <i> Enter </i>. This will load the EduBlocks coding environment.</li>
            <li> Click on <i> micro:bit </i> to open the coding editor. </li>
            <li> Click on <i> Basic </i>. Click and drag a <i> from microbit import * </i> block to the code area and drop it or if you are using the new editor attach it to the <i> # start code here </i> block. </li>
            <li> Click on <i> Basic</i>. Click and drag a <i> variable = 0 </i > block to the code area attach it under <i> from microbit import * </i> block. </li>
            <li> 
              Click on <i> Variable </i> and click on <i> New variable… </i> Give it the name <i> steps </i> press <i> Enter </i>. Click on <i> 1 </i> and type <i> 0 </i>.  
              <figure>
                <img class="rounded-lg" src="/public/images/FitBit_EB_01.png" alt="" width="500" height="500">
                <figcaption class="text-gray-600"> Initiating the step counter to 0 </figcaption>
              </figure>
            </li>
            <div class="bg-blue-100 border-l-8 border-blue-400 px-8">
              <h3 class="text-2xl tracking-tight font-extrabold sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl" style="color:#006494">
                What is a variable
              </h3>
          
              <p class="text-gray-900"> 
                Think of a variable as a box that stores information that can be used throughout our program. 
                We give variables a descriptive name so we and others can understand what is going on within our program.
              </p>
            </div>
            <li> Click on <i> Basic</i>. Click and drag a <code> while True: </code> block to the code area and attach it under <code> steps = 0 </code> block. </li>
            <li> Click on <i> Basic</i>. Click and drag an <code> if True: </code> block to the code area and attach it within the <code> while True: </code> block. </li>
            <li> Click on <i> Accelerometer</i>. Click and drag an <code> accelerometer.is_gesture(‘shake’) </code> block and attach it within the <code> True </code> of the <code> if </code> block. </li>
            <li> Click on <i> Basic</i>. Click and drag a <code> variable = 1 </code> block to the code area and attach it within the <code> if accelerometer.is_gesture(‘shake’) </code> block. Click on <i> Variable </i> and click <i> steps </i>. Click on the <i> = </i> and click <i> += </i>. </li>
            <li> Click on <i> Display</i>. Click and drag a <code> display.scroll(0) </code> block to the code area and attach it under <code> steps += 1 </code> block. </li>
            <li> 
              Click on <i> Variables</i>. Click and drag a <code> steps </code> block to the code area and attach it within the <code> 0 </code> of the <code> display.scroll </code> block. 
              <figure>
                <img class="rounded-lg" src="/public/images/FitBit_EB_02.png" alt="" width="500" height="500">
                <figcaption class="text-gray-600"> Increasing the step counter by 1 everytime the micro:bit detects a shake and displays the number of steps on the LED matrix </figcaption>
              </figure>
            </li>
            <li> Click on <i> Basic</i>. Click and drag an <code> if True(): </code> block to the code area and attach it under the <code> if accelerometer.is_gesture(‘shake’): </code> block. </li>
            <li> Click on <i> Buttons</i>. Click and drag a <code> button_a.is_pressed(): </code> block to the code area and attach it within the <code> True </code> of the <code> if </code> block. </li>
            <li> 
              Right-click on <i> steps = 0 </i> and click <i> duplicate </i> and attach the duplicated block within the <code> if button_.is_pressed(): </code> block. 
              <figure>
                <img class="rounded-lg" src="/public/images/FitBit_EB_03.png" alt="" width="500" height="500">
                <figcaption class="text-gray-600"> Resets the step counter to 0 </figcaption>
              </figure>
            </li>
            <li> Right-click on <code> if button_a.is_pressed(): </code> block and click <i> duplicate </i> and attach it under the <code> if button_a.is_pressed(): </code> block. Click on <i> a </i> and click <i> b </i>. </li>
            <li> Click and drag the <code> steps = 0 </code> block to the left menu to delete it. </li>
            <li> 
              Right-click on <code> display.scroll(steps) </code> block and click <i> duplicate</i>. Attach the duplicated block within the <code> if button_b.is_pressed(): </code>  block. 
              <p> This will display the amount of steps you have done so far when you press the B button on the micro:bit. </p>
            </li>
          </ol>

          <p> <b> Completed Code: </b> </p>

          <figure>
            <img class="rounded-lg" src="/public/images/FitBit_EB_04.png" alt="" width="500" height="500">
            <figcaption class="text-gray-600"> Completed Code </figcaption>
          </figure>

          <p> 
            Now that we have completed the code we need to download it to the micro:bit.
          </p>
              
          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Downloading the Code
          </h2>

          <ol>
            <li> Take the micro USB cable and connect the micro:bit to the computer. </li>
            <li> Click on Download Hex. Click on your micro:bit drive to open it and click save. </li>
          </ol>  

          <p> 
            You have created your own Fitbit step counter why not connect a battery pack and strap your micro:bit to your ankle and go for a walk and see how many steps you have done at the end.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

