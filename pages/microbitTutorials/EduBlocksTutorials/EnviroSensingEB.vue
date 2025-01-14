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
                    <li> Within your favourite browser (we recommend Google Chrome) go to <a href = https://app.edublocks.org/> <i> app.edublocks.org </i> </a> and press <i> Enter </i>. This will load the EduBlocks coding environment. </li>
                    <li> Click on <i> micro:bit </i> and click <i> OK </i> to open the micro:bit coding editor. </li>
                    <li> Click on <i> Basic </i>. Click and drag a <i> from microbit import * </i> block to the coding area and drop it or if you are using the new editor connect it under the <i> # start code here </i> block. </li>
                    <li> Click on <i> Basic </i>. Click and drag a <i> while True: </i> block to the code area and attach it under <i> from microbit import * </i> block. 
                        <figure>
                            <img class="rounded-lg" src="/public/images/ES_EB_01.png" alt="" width="200" height="200">
                            <figcaption class="text-gray-600"> Setting up the code area </figcaption>
                        </figure>
                    </li>
                </ol>

                <h3 class="text-2xl tracking-tight font-extrabold sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl" style="color:#006494">
                  Temperature Sensing
                </h3>

                <ol>
                    <li> Click on <i> Basic </i>. Click and drag an <i> if True: </i> block to the code area and attach it within the <i> while True: </i> block. </li>
                    <li> Click on <i> Accelerometer </i>. Click and drag an <i> accelerometer.is_gesture(‘shake’) </i> block to the code area and attach it within the <i> True </i> of the <i> if </i> block. </li>
                    <li> Click on <i> Display </i>. Click and drag a <i> display.scroll(0) </i> block to the code area and attach it within the <i> if accelerometer.is_gesture(‘shake’): </i> block. </li>
                    <li> Click on the <i> 0 </i> of the <i> display.scroll </i> block and type <i> temperature(°) </i>. 
                         <figure>
                            <img class="rounded-lg" src="/public/images/ES_EB_02.png" alt="" width="400" height="400">
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
                    <li> Click on <i> Basic </i>. Click and drag an <i> if True: </i> block to the code area and attach it under the <i> if accelerometer.is_gesture(‘shake’): </i> block. </li>
                    <li> Click on <i> Buttons </i>. Click and drag a <i> button_a.is_pressed() </i> block to the code area and attach it within the <i> True </i> of the <i> if </i> block. </li>
                    <li> Click on <i> Basic </i>. Click and drag an <i> if True(): </i> block to the code area and attach it within the <i> if button_a.is_pressed(): </i> block. </li>
                    <li> Click on <i> Basic </i>. Click and drag a <i> 0 = 0 </i> block to the code area and attach it within the <i> True </i> of the <i> if </i> block. Click  on the <i> = </i> and click on <i> &lt; </i>. </li>
                    <li> Within the first <i> 0 </i> of the <i> if 0 &gt; 0: </i> block type <i> display.read_light_level() </i> and within the 2nd <i> 0 </i> type <i> 100 </i>. </li>
                    <li> Click on <i> Display </i>. Click and drag a <i> display.show(Image.HAPPY) </i> block to the code area and attach it within the <i> if display.read_light_level() &lt; 100: </i> block. </li>
                    <li> Click on <i> Basic </i>. Click and drag an <i> else: </i> block to the code area and attach it under <i> if display.read_light_level() &lt; 100: </i> block. </li>
                    <li> Click on <i> Display </i>. Click and drag a <i> display.clear() </i> block to the code area and attach it within the <i> else: </i> block. </li>
                    <li> Click on <i> Basic </i>. Click and drag a <i> sleep(1000) </i> block to the code area and attach it under the <i> else: </i> block. Click on <i> 1000 </i> and type <i> 2000 </i> and press <i> Enter </i>. 
                        <figure>
                            <img class="rounded-lg" src="/public/images/ES_EB_03.png" alt="" width="300" height="300">
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
                    <li> Click on <i> Basic </i>. Click and drag an <i> if True: </i> block to the code area and attach it under <i> if button_a.is_pressed(): </i> block. </li>
                    <li> Right-click on <i> button_a.is_pressed() </i> block and click <i> duplicate </i>. Attach the <i> duplicated </i> block within the <i> True </i> of the <i> if </i> block. Click on <i> a </i> and click <i> b </i>. </li>
                    <li> Right-click on <i> display.show(Image.HAPPY) </i> and click on <i> duplicate </i>. Attach the <i> duplicated </i> block within the <i> if button_b.is_pressed(): </i> block. Click on <i> Image.HAPPY </i> and type <i> compass.heading() </i>. 
                        <figure>
                            <img class="rounded-lg" src="/public/images/ES_EB_04.png" alt="" width="300" height="300">
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
                    <img class="rounded-lg" src="/public/images/ES_EB_05.png" alt="" width="500" height="500">
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
                    <li> Click <i> Download Hex </i>. Within the file explorer click on <i> MICROBIT </i> to open the drive and click <i> save </i> to download your code. </li>

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

