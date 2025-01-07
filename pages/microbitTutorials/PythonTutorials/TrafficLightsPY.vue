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
          <!-- <button type="button" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <a href = "https://drive.google.com/file/d/1--vTxJfvK012SSbEtNa7jPxxy2kIM-nY/view?usp=sharing" target="_blank"> PDF Download </a>
          </button> -->
              
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-red-700">
            Traffic Lights Add-on Board
          </h1>
              
          <p class="mt-8 text-xl font-bold leading-8" style="color:#006494">
            Create your own micro:bit traffic light add-on board.
          </p>
        </div>
    
        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            Overview
          </h2>
            
          <p>
            By the end of this tutorial you will know what an LED is and how to connect and program them using a BBC micro:bit.
          </p>

          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            What You Will Need
          </h2>

          <ul>
            <li> 1 x Red LED </li>
            <li> 1 x Yellow LED </li>
            <li> 1 x Green LED </li>
            <li> 1 x Piece of cardboard </li>
            <li> Copper tape / aluminium foil and glue </li>
            <li> 4 x Crocodile / alligator leads </li>
            <li> 1 x micro:bit (version 1 and 2 will work) </li>
            <li> 1 x Micro USB cable </li>
            <li> 1 x Battery pack for the micro:bit (optional) </li>
          </ul>

          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            What is an LED?
          </h2>

          <figure>
            <img class="rounded-lg" src="/public/images/LEDDiagram.png" alt="" width="300" height="300">
            <figcaption> LED diagram </figcaption>
          </figure>

          <p> 
            An LED or Light Emitting Diode is a semiconductor light source that emits (gives off) light when current flows through it.
          </p>

          <p>
            An LED has a longer leg called the anode (+) and a shorter leg called the cathode (-) as shown above.
          </p>

          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            Creating the Circuit
          </h2>

          <ol>
            <li> Place the bit of cardboard on the desk</li>
            <li> Take the red LED and bend the legs out to the sides. Place the LED on the cardboard with the longer leg to the right. 
              <figure>
                <img class="rounded-lg" src="/public/images/TrafficLights01.jpg" alt="" width="300" height="300">
                <figcaption> Red LED placed on the cardboard </figcaption>
              </figure>
            </li>
            <li> Take a bit of copper tape or glue and some aluminium foil over the long leg of the red LED
              <figure>
                <img class="rounded-lg" src="/public/images/TrafficLights02.jpg" alt="" width="300" height="300">
                <figcaption> Taping the longer leg of the red LED </figcaption>
              </figure>
            </li>
            <li> Complete steps 2 and 3 for the yellow and green LEDs. </li>
            <li> Take a longer bit of copper tape or foil and tape/glue all three of the short legs of the LEDs together.
              <figure>
                <img class="rounded-lg" src="/public/images/TrafficLights03.jpg" alt="" width="300" height="300">
                <figcaption> Completed Traffic lights </figcaption>
              </figure>
            </li>
          </ol>

          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            Connecting to the micro:bit
          </h2>

          <ol>
            <li> Take one of the crocodile/alligator leads and clip one end to the long piece of copper tape/aluminium foil covering the short legs of the LEDs and clip the other end to the GND pin of the micro:bit. </li>
            <li> Take another crocodile/alligator lead and clip one end to the copper tape/aluminium foil of the longer leg of the red LED and attach the other end to pin 0 on the micro:bit. </li>
            <li> Take another crocodile/alligator lead and clip one end to the copper tape/aluminium foil of the longer leg of the yellow LED and attach the other end to pin 1 on the micro:bit. </li>
            <li> Take the last crocodile/alligator lead and clip one end to the copper tape/aluminium foil of the longer leg of the green LED and attach the other end to pin 2 on the micro:bit. </li>
          </ol>

          <figure>
            <img class="rounded-lg" src="/public/images/TrafficLights04.jpeg" alt="" width="300" height="300">
            <figcaption> Completed Circuit </figcaption>
          </figure>
             
          <p>
            We are now ready to code our traffic lights
          </p>

          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            Coding The Traffic Lights
          </h2>

          <ol>
            <li> Within your favourite browser (we recommend Google Chrome) go to <a href = https://python.microbit.org/> <i> python.microbit.org </i> </a> and press <i> Enter </i>. This will load the Python coding editor. </li>
            <li> Delete the text on lines <i> 6, 7, &amp; 8 </i>. </li>
            <li> Type the following code: 
              <figure>
                <img class="rounded-lg" src="/public/images/TrafficLights13.png" alt="" width="300" height="300">
                <figcaption> Python code </figcaption>
              </figure>
            </li>
          </ol>

          <figure>
            <img class="rounded-lg" src="/public/images/TrafficLights14.png" alt="" width="300" height="300">
            <figcaption> Completed Code </figcaption>
          </figure>

          <p>
            Now that we have completed the code we need to download it to our micro:bit
          </p>

          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            Downloading the Code
          </h2>

          <ol>
            <li> Connect the micro:bit to the computer using the micro USB cable. </li>
            <li> Click on <i> Connect </i>. Click on your <i> micro:bit </i> and click <i> Connect </i>. </li>
            <li> Click on <i> Download </i>. </li>
          </ol>  

          <p> 
            Now that our code is downloaded to the micro:bit we will see the LEDs blink in a traffic light sequence.
          </p>

          <p> 
            Go back to your code and see what other patterns you can make the LEDs blink in.
          </p>
        </div>
      </div>
    </div>
          
    <Footer />
  </div>
</template>

|<!--<script lang="ts">
  import Vue from "vue";
  import Header from "~/components/Header.vue";
  import Footer from "~/components/Footer.vue";

  export default Vue.extend({
    components: {
      Header,
      Footer
    }
  });
</script>-->

