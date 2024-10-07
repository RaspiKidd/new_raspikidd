<template>
  <div class="relative bg-gray-50">
    <Header />
    <!-- main -->
    <div class="relative py-16 bg-white overflow-hidden">
      <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <img class="absolute top-12 left-full transform translate-x-32" width="404" height="384"  fill="none" viewBox="0 0 404 384" src="/public/images/circuit-board.svg">
          <img class="absolute top-12 right-full transform -translate-x-32" width="404" height="384"  fill="none" viewBox="0 0 404 384" src="/public/images/circuit-board.svg">
          <img class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384" src="/public/images/circuit-board.svg">
          <img class="absolute top-1/2 left-full transform -translate-y-1/2 translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384" src="/public/images/circuit-board.svg">
          <img class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384" src="/public/images/circuit-board.svg">
          <img class="absolute bottom-12 right-full transform -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384" src="/public/images/circuit-board.svg">
        </div>
      </div>
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-red-700">
            Throw a Ghost
          </h1>
          <p class="mt-8 text-xl font-bold leading-8" style="color:#006494">
            We will explore the micro:bit radio function by throwing (shaking the micro:bit) a ghost from one micro:bit to another.
          </p>
          <p> 
            <b> This is adapted from the Micro:bit Educational Foundations teleporting duck tutorial. </b>
          </p>
        </div>
    
        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            What You Will Learn
          </h2>
          <ul>
            How to:
            <li> Set the radio group for the micro:bits to communicate over. </li>
            <li> Clear the LED matrix. </li>
            <li> Send messages to the micro:bit. </li>
            <li> Display an icon when the micro:bit receives a message. </li>
          </ul>

          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            What You Will Need
          </h2>
          <ul>
            <li> 2 x micro:bits. </li>
            <li> 2 x micro-USB Cables. </li>
            <li> 2 x Battery packs for the micro:bits (optional). </li>
          </ul>

          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            Coding
          </h2>

          <ol>
            <li> Open your favourite browser (we recommend Google Chrome) and type <a href="https://app.edublocks.org/"> <i> app.edublocks.org </i> </a> and press <i> Enter </i>. This will load the EduBlocks coding environment. </li>
            <li> Click on <i> micro:bit </i> to open the micro:bit coding editor. </li>
            <li> Click on <i> Basic. </i> Click and drag a <i> from microbit import * </i> to the code area and drop it or if you are using the new editor attach it under the <i> # start code here </i> block. </li>
            <li> Click on <i> Radio. </i> Click and drag an <i> import radio </i> block to the code area and attach it under <i> from microbit import * </i> block. </li>
            <li> Click on <i> Radio. </i> Click and drag a <i> radio.on() </i> block to the code area and attach it under the <i> import radio </i> block. </li>
            <li> Click on <i> Radio. </i> Click and drag a <i> radio.config(channel=7) </i> block to the code area and attach it under the <i> radio.on() </i> block. Click on <i> channel=7 </i> and change the <i> 7 </i> to <i> 30 </i>. 
              <figure>
                <img class="rounded-lg" src="/public/images/ThrowGhost_EB_01.png" alt="" width="300" height="300">
                <figcaption> Setting up the code area </figcaption>
              </figure>
            </li>
            <li> Click on <i> Basic </i>. Click and drag a <i> while True: </i> block to the code area and attach it under the <i> radio.config(channel=30) </i> block. </li>
            <li> Click on <i> Radio </i>. Click and drag an <i> incoming=radio.received() </i> block to the code area and attach it within the <i> while True: </i> block. </li>
            <li> Click on <i> Basic </i>. Click and drag an <i> if True: </i> block to the code area and attach it under <i> incoming=radio.received() </i> block. Click on <i> True </i> and type <i> incoming </i>. </li>
            <li> Click on <i> Display </i>. Click and drag a <i> display.show(Image.HAPPY) </i> block to the code area and attach it within the <i> if incoming: </i> block. Click on <i> Image.HAPPY </i> and type <i> Image.GHOST </i>. 
              <figure>
                <img class="rounded-lg" src="/public/images/ThrowGhost_EB_02.png" alt="" width="300" height="300">
                <figcaption> Displaying the ghost on screen </figcaption>
              </figure>
            </li>
            <li> Click on <i> Basic </i>. Click and drag an <i> if True: </i> block to the code area and attach it under the <i> if incoming: </i> block. </li>
            <li> Click on <i> Accelerometer </i>. Click and drag an <i> accelerometer.was_gesture(‘shake’) </i> block to the code area and attach it within the <i> True </i> of the <i> if </i> block. </li>
            <li> Click on <i> Display </i>. Click and drag a <i> display.clear() </i> block to the code area and attach it within the <i> if accelerometer.was_gesture(‘shake’) </i> block. </li>
            <li> Click on <i> Radio </i>. Click and drag a <i> radio.send(“hello”) </i> block to the code area and attach it under the <i> display.clear() </i> block. Click on <i> “hello” </i> and type <i> ‘GHOST’ </i>. </li>
          </ol>

          <h3 class="text-2xl tracking-tight font-extrabold sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl" style="color:#006494">
            Completed Code
          </h3>

          <figure>
            <img class="rounded-lg" src="/public/images/ThrowGhost_EB_03.png" alt="" width="600" height="600">
            <figcaption> Completed Code </figcaption>
          </figure>

          <p> 
            Now that we have completed the code we need to download it to the micro:bit.
          </p>

          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            Downloading the Code
          </h2>

          <ol>
            <li> Take the micro USB cable and connect the micro:bit to the computer. </li>
            <li> Click on <i> Download Hex </i>. Click on <i> MICROBIT </i> to open the micro:bit drive then click <i> Save </i> to download the code. </li>
          </ol>  

          <p> 
            Now that we have downloaded our code to the micro:bits attach a battery pack and start throwing the ghost back and forth between you and your friend. 
          </p>

          <p> 
            Try moving further away from one and other and see how far apart you can get before you can no longer catch the ghost.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>