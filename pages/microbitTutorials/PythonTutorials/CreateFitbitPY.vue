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
    
        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
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

          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            What You Will Need
          </h2>
          
          <ul>
            <li> 1 x micro:bit. </li>
            <li> 1 x micro USB cable. </li>
            <li> 1 x Battery pack for the micro:bit (optional). </li>
          </ul>

          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            Coding
          </h2>

          <ol>
            <li> Open your favourite browser ( we recommend Google Chrome) Within the address bar of the browser type <i> <a href="https://python.microbit.org/"> python.microbit.org </a> </i> and press <i> Enter </i>. This will load the Python coding editor.</li>
            <li> 
              Click on <i> Line 4 </i> and type <code> steps = 0 </code> and press <i> Enter </i>. This creates a variable called steps and sets it to 0.
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
            <li> Delete the text on <i> lines 7-9 </i>. </li>
            <li> 
              Type the following code starting on <i> line 7 </i>. 
              <figure>
                <img class="rounded-lg" src="/public/images/FitBit_PY_01.png" alt="" width="500" height="500">
                <figcaption> Code so far </figcaption>
              </figure>
            </li>
          </ol>

          <p> 
            <b> Completed Code: </b> 
          </p>

          <figure>
            <img class="rounded-lg" src="/public/images/FitBit_PY_02.png" alt="" width="500" height="500">
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
            <li> Click on <i> Connect </i>. Click on your <i> micro:bit </i> and click <i> connect </i> again. </li>
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