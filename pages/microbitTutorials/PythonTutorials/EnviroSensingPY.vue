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
            Sensing the Environment
          </h1>
          
          <p class="mt-8 text-xl font-bold leading-8" style="color:#006494">
            We are going to explore our environment by using the temperature sensor, light sensor and compass on the micro:bit.
          </p>
        </div>
    
        <div class="mt-6 prose prose-indigo prose-lg text-gray-700 mx-auto">
          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            What You Will Learn
          </h2>
                
          <ul>
            How to:
            <li> Use the shake function. </li>
            <li> Display a number on the LED matrix. </li>
            <li> Use the temperature sensor. </li>
            <li> Use the button function. </li>
            <li> Use the if/else conditions. </li>
            <li> Use comparison operators. </li>
            <li> Display patterns on the LED matrix. </li>
            <li> Clear the LED matrix. </li>
            <li> Use the compass. </li>
            <li> Use the light sensor. </li>
          </ul>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Coding
          </h2>

          <ol>
            <li> Within your favourite browser (we recommend Google Chrome) go to <a href = https://python.microbit.org/> <i> python.microbit.org </i> </a> and press <i> Enter </i>. This will load the Python coding editor. </li>
            <li> Delete the text on <i> lines 6, 7 and 8 </i>.
              <figure>
                <img class="rounded-lg" src="/public/images/ES_PY_01.png" alt="" width="400" height="400">
                <figcaption class="text-gray-600"> Setting up the code area </figcaption>
              </figure>
            </li>
          </ol>

          <h3 class="text-2xl tracking-tight font-extrabold sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl" style="color:#006494">
            Temperature Sensing
          </h3>

          <ol>
            <li> From line 6 type the following code: 
              <figure>
                <img class="rounded-lg" src="/public/images/ES_PY_02.png" alt="" width="400" height="400">
                <figcaption class="text-gray-600"> Sensing Temperature code </figcaption>
              </figure>
            </li>
          </ol>

          <p> 
            We can now sense the temperature of the room you are in by shaking the micro:bit.
          </p>

          <h3 class="text-2xl tracking-tight font-extrabold sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl" style="color:#006494">
            Light Sensing
          </h3>

          <ol>
            <li> From <i> line 8 </i> type the following code. Make sure your <i> cursor </i> is positioned under the <i> if </i> on <i> line 6 </i>. 
              <figure>
                <img class="rounded-lg" src="/public/images/ES_PY_03.png" alt="" width="500" height="500">
                <figcaption class="text-gray-600"> Sensing Light code </figcaption>
              </figure>
            </li>
          </ol>

          <p> 
            We can now use the micro:bit to detect if it’s light or dark within a room by pressing the A button on the micro:bit.
          </p>

          <h3 class="text-2xl tracking-tight font-extrabold sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl" style="color:#006494">
            Compass Sensing
          </h3>

          <ol>
            <li> From <i> line 14 </i> type the following code making sure your <i> cursor </i> is under the <i> if </i> of <i> line 8 </i>. 
              <figure>
                <img class="rounded-lg" src="/public/images/ES_PY_04.png" alt="" width="500" height="500">
                <figcaption class="text-gray-600"> Compass sensing code </figcaption>
              </figure>
            </li>
          </ol>

          <p> 
            We can now see what the compass baring of the direction the micro:bit is facing by pressing the B button on the micro:bit.
          </p>

          <h3 class="text-2xl tracking-tight font-extrabold sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl" style="color:#006494">
            Completed Code
          </h3>

          <figure>
            <img class="rounded-lg" src="/public/images/ES_PY_05.png" alt="" width="500" height="500">
            <figcaption class="text-gray-600"> Completed code </figcaption>
          </figure>

          <p> 
            We are now ready to download the code to our micro:bit so we can go out and sense our environment.
          </p>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Downloading the Code
          </h2>

          <ol>
            <li> Take the micro USB cable and connect the micro:bit to the computer. </li>
            <li> Click on <i> Connect </i>. Click on your <i> micro:bit </i> and click <i> Connect </i> again. </li>
            <li> Click <i> Download </i>. </li>
          </ol>  

          <p> 
            Now that you have downloaded the code to your micro:bit attach a battery pack to your micro:bit and go and sense your environment.
          </p>
        </div>
      </div>
    </div>
          
    <Footer />
  </div>
</template>