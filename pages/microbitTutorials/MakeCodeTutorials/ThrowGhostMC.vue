<template>
  <div class="relative bg-gray-50">
    <Header />
    <!-- main -->
    <div class="relative py-16 bg-white overflow-hidden">
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
          <div class="bg-red-100 border-l-8 border-red-400 px-8">
            <h3 class="text-2xl tracking-tight font-extrabold sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl" style="color:#006494">
              NOTE:
            </h3>
            <p class="text-gray-900"> 
              You do not need a micro:bit to do this tutorial you can use the simulator built into the MakeCode editor.
            </p>
          </div>

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
            <li> 2 x micro-USB cables. </li>
            <li> 2 x Battery packs for the micro:bit (optional). </li>
          </ul>

          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            Coding
          </h2>

          <ol>
            <li> Within your favourite browser (we recommend Google Chrome) go to <a href = "https://makecode.microbit.org/"> <i> makecode.microbit.org </i> </a> and press <i> Enter </i>. This will load the MakeCode coding editor. </li>
            <li> Click on <i> New project </i> and name it <i> throw a ghost </i> and click <i> OK </i>. </li>
            <li> Click and drag the <i> forever </i> block to the left and drop it on the <i> bin </i>. </li>
            <li> Click on <i> Radio </i>. Click and drag a <i> radio set group 1 </i> block to the code area and attach it within the <i> on start </i> block. Click on <i> 1 </i> and type <i> 30 </i>. 
              <figure>
                <img class="rounded-lg" src="/public/images/ThrowGhost_MC_01.png" alt="" width="300" height="300">
                <figcaption> Setting the radio group to 30 </figcaption>
              </figure>
            </li>
            <li> Click on <i> Input </i>. Click and drag an <i> on shake </i> block to the code area and drop it. </li>
            <li> Click on <i> Basic </i>. Click and drag a <i> clear screen </i> block to the code area and attach it within the <i> on shake </i> block. </li>
            <li> Click on <i> Radio </i>. Click and drag a <i> radio send string “ “ </i> block to the code area and attach it under the <i> clear screen </i> block. Click on the blank space and type <i> GHOST </i>. 
              <figure>
                <img class="rounded-lg" src="/public/images/ThrowGhost_MC_02.png" alt="" width="300" height="300">
                <figcaption> Clearing the screen and sending the message ghost </figcaption>
              </figure>
            </li>
            <li> Click on <i> Radio </i>. Click and drag an <i> on radio received received string </i> block to the code area and drop it. </li>
            <li> Click on <i> Basic </i>. Click and drag a <i> show icon </i> block to the code area and attach it within the <i> on radio received received string </i> block. Click on the <i> heart </i> and pick the <i> ghost </i> icon. </li>
          </ol>
          
          <p> 
            Completed Code
          </p>

          <figure>
            <img class="rounded-lg" src="/public/images/ThrowGhost_MC_03.png" alt="" width="500" height="500">
            <figcaption> Completed code </figcaption>
          </figure>

          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            Downloading the Code
          </h2>

          <ol>
            <li> Click on the 3 dots next to Download. </li>
            <li> Click on pair device a pop-up will come on screen to show you how to connect the micro:bit to the computer. Click on pair device again. </li>
            <li> Click on BBC micro:bit xxxx and click connect. </li>
            <li> Click Download. </li>
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