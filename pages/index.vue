<template>
  <div class="relative bg-gray-50">
    <Header />
    <main class="lg:relative">
      <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-30 lg:text-center">
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span class="block xl:inline" style="color:#A42530"> Making <br> Programming<br> Fun </span> <br>
          </h1>
          
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            We do so with the help of microcomputers which are the size of a credit card. 
            When our students write code for the micro:bit and Raspberry Pi etc, they can see an immediate result, e.g LEDs light 
            up or robots move about.
          
          </p>
        
          <div class="grid grid-cols-2 grid-rows-2 gap-2 place-items-auto h-30 mt-10 sm:ml-3">
            <div class="rounded-md shadow sm:mt-0 sm:ml-3">
              <NuxtLink to="/microbit" style ="background-color:#76B82A; color:#0E7452; font-weight: bold; font-size: 18px" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-base rounded-md text-black md:py-4 md:text-lg md:px-4">
                micro:bit
              </NuxtLink>
            </div>
          
            <div class="rounded-md shadow sm:mt-0 sm:ml-3">
              <!--<NuxtLink to="/TutorialLayout" style ="background-color:#76B82A; color:#0E7452; font-weight: bold; font-size: 18px" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-base rounded-md text-black md:py-4 md:text-lg md:px-4">
                Raspberry Pi
              </NuxtLink> -->
              <a href='https://ko-fi.com/G2G2Y3YFZ' target='_blank'>
                <img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' />
              </a>
            </div>

        
            <!-- <div class="rounded-md shadow sm:mt-0 sm:ml-3">
              <router-link to="/ComputerRepair" style ="background-color:#76B82A;" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-base rounded-md text-black md:py-4 md:text-lg md:px-4">
                Computer Repair
              </router-link>
            </div>
        
            <div class="rounded-md shadow sm:mt-0 sm:ml-3">
              <router-link to="/SoftwareInstall" style ="background-color:#76B82A;" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-base rounded-md text-black md:py-4 md:text-lg md:px-4">
                Software Install
              </router-link>
            </div> -->
          </div>
        </div>
      </div>
  
      <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img class="absolute inset-0 w-full h-full object-cover" src="/images/PhysicalComputing.jpg" alt="cutting mat with various electronics">
      </div>
    </main>

    <!-- Neswletter form 
    <div class="bg-white" style="background-color:#A1C4B5">
      <div class="px-6 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div class="px-6 py-6 bg-teal-600 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div class="xl:w-0 xl:flex-1">
            <h2 class="text-2xl font-bold tracking-tight sm:text-3xl" style ="color:#0E7452">
              Sign up to get updates straight to your inbox
            </h2>
        
            <p class="max-w-3xl mt-3 text-lg leading-6 font-bold" style="color:#A42530; text-size: 20px;">
              Enter your email to be the first to know about the latest news
            </p>
          </div>
      
          <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">

            
            <form class="md:flex" name="Newsletter" method="POST" netlify>
              <input type="hidden" name="form-name" value="Newsletter" />
              <label for="name" class="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autocomplete="text"
                required
                class="w-full px-5 py-3 mr-3 placeholder-gray-500 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white"
                placeholder="Enter your name"
              />
              <label for="emailAddress" class="sr-only">Email address</label>
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                autocomplete="email"
                required
                class="w-full px-5 py-3 placeholder-gray-500 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                class="flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-black border border-transparent rounded-md shadow hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                style ="background-color:#76B82A; color:#0E7452; font-weight: bold; font-size: 22px"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>-->
    <NewsletterForm />
    <Footer />
  </div>
</template>

<!--<script lang="ts">
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


