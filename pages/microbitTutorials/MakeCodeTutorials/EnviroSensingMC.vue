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
          <Note />

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            What You Will Learn
          </h2>
          <ul>
            <li> How to use the on shake function. </li>
            <li> How to display a number on the LED matrix. </li>
            <li> How to use the temperature sensor. </li>
            <li> How to use the button function. </li>
            <li> How to use the if/else conditions. </li>
            <li> How to use comparison operators. </li>
            <li> How to display patterns on the LED matrix. </li>
            <li> How to clear the LED matrix. </li>
            <li> How to use the compass. </li>
          </ul>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Setting Up
          </h2>

          <ol>
            <li> Open your favourite browser ( we recommend Google Chrome) or if you are using a mobile phone or tablet open the micro:bit app. </li>
            <li> Within the address bar of the browser type <a href="https://makecode.microbit.org/"> makecode.microbit.org </a> or on a tablet or phone press create code. </li>
            <li> Click on new project and give it the name Enviro Sensing. </li>
          </ol>

          <p> 
            We are now ready to start coding!
          </p>
              
          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Getting Started
          </h2>

          <ol>
            <li> Click and drag the on start block to the left of the screen and drop it on the bin. </li>
            <li> Click and drag the forever block to the left of the screen and drop it on the bin </li>
            <li> Click on Input. Click and drag the on shake block to the code area and drop it. </li>
            <li> Click on Input. Click and drag a on button A pressed block to the code area and drop it. </li>
            <li> Right click on the button A pressed block and click duplicate. </li>
            <li> On the duplicated block click the little arrow next to A and click on B. </li>
          </ol>

          <p> 
            Your code area should look like this:
          </p>

          <figure>
            <img class="w-full rounded-lg" src="/public/images/ES_MC_01.png" alt="" width="1310" height="873">
            <figcaption class="text-gray-600"> What the code area looks like </figcaption>
          </figure>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Temperature Sensing
          </h2>

          <ol>
            <li> Click on Basic. Click and drag a show numbers block to the code area and attach it within the on shake block. </li>
            <li> Click on Input. Click and drag a temperature block to the code area and attach it within the 0 of show number. </li>
          </ol>

          <figure>
            <img class="w-full rounded-lg" src="/public/images/ES_MC_02.png" alt="" width="1310" height="873">
            <figcaption class="text-gray-600"> Code for temperature sensing </figcaption>
          </figure>

          <p>
            We are now able to sense what the temperature is around us.
          </p>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Light Sensing
          </h2>

          <ol>
            <li> Click on Logic. Click and drag an if/else block to the code area and attach it within on button A pressed. </li>
            <li> Click on Logic. Click and drag a 0 &lt; 0 block to the code area and attach it within the true of the if then block. </li>
            <li> Click on Input. Click and drag the light level block to the code area and attach it within the first 0 of the if 0 &lt; 0 then block. </li>
            <li> Click on the 0 and type 100 and press enter. </li>
            <li> Click on Basic. Click and drag a show leds block to the code area and attach it within the if light  level &lt; 100 then block. </li>
            <li> Click on the squares to make the following pattern. </li>
            <figure>
              <img class="w-full rounded-lg" src="/public/images/ES_MC_03.png" alt="" width="500" height="873">
              <figcaption class="text-gray-600"> Filling the screen </figcaption>
            </figure>
            <li> Click on Basic. Click and drag a clear screen block to the code area and attach it within the else block. </li>
          </ol>

          <figure>
            <img class="w-full rounded-lg" src="/public/images/ES_MC_04.png" alt="" width="500" height="873">
            <figcaption class="text-gray-600"> Code for Light sensing </figcaption>
          </figure>

          <p>
            We can now sense the level of the room we are in.
          </p>

          <h2 class="text-green-700 text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl">
            Compass Sensing
          </h2>

          <ol>
            <li> Click on Basic. Click and drag a show number block to the code area and attach it within the on button B pressed. </li>
            <li> Click on Input. Click and drag the compass heading block to the code area and attach it within the 0 of show number. </li>
          </ol>

          <figure>
            <img class="w-full rounded-lg" src="/public/images/ES_MC_05.png" alt="" width="500" height="873">
            <figcaption class="text-gray-600"> Code for the compass sensor </figcaption>
          </figure>

          <p> 
            We have now coded the compass sensor.
          </p>
              
          <h3 class="text-2xl tracking-tight font-extrabold sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl" style="color:#006494">
            Completed Code
          </h3>

          <figure>
            <img class="w-full rounded-lg" src="/public/images/ES_MC_06.png" alt="" width="500" height="500">
            <figcaption class="text-gray-600"> Completed code </figcaption>
          </figure>

          <p> 
            We are now ready to download the code to our micro:bit so we can go out and sense our environment.
          </p>

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
            You have successfully downloaded the code to your micro:bit. You can now attach a battery pack and go out and sense the environment around you.
          </p>
        </div>
      </div>
    </div>
          
    <Footer />
  </div>
</template>