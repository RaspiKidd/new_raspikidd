<template>
    <div class="relative bg-gray-50">
        <Header />
        <main class="lg:relative">
            <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-30 lg:text-center">
                <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                        <span class="block xl:inline" style="color:#A42530"> Raspberry Pi </span>
                    </h1>
                
                    <h2 class=" pt-8 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                        <span class="block xl:inline" style="color:#76B82A"> 
                            Coming Soon...
                        </span>
                    </h2>
                
                    <!-- <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        The micro:bit is a small device about half the size of a credit card packed full of features aimed at getting children into computer programming and technology. One thing to note is you need a computer or tablet to program it as it's not a full computer, but it is a microcomputer.
                    </p>
                
                    <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        The micro:bit was created by the BBC (British Broadcasting Company) and other partners in the UK (United Kingdom) in 2015. In 2016 they gave one million micro:bits free to schools within the UK.
                    </p>
                
                    <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        The micro:bit is now available for sale around the world. Many countries followed the example of the UK and gave the micro:bits out for free to schools to support the teaching of computer coding. 
                    </p> -->
                </div>
            </div>
        
            <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                <img class="absolute inset-0 w-full h-full object-cover" src="/images/RPi01.jpeg" alt="micro:bit Educational Specialist - Getting started with micro:bit">
            </div>
        </main>
        <!-- Tutorial Block -->
        <!-- <div class="relative bg-gray-50 "> 
            <div class="absolute inset-0">
              <div class="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            
            <div class="relative max-w-7xl mx-auto">
                <div class="text-center">
                    <h2 class=" pt-8 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
                        <span class="block xl:inline sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A"> 
                            Tutorials 
                        </span>
                    </h2>
                </div>

                <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    <NuxtLink to="/MakeCodeTutorials" class="block mt-2">
                        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div class="flex-shrink-0">
                                <img class="h-48 w-full object-scale-down" src="@/static/images/MakeCodeIcon.jpeg" alt="MakeCode Logo">
                            </div>
                            
                            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div class="flex-1">
                                    <p class="text-xl font-bold text-red-700">
                                        MakeCode Tutorials
                                    </p>
                                    
                                    <p class="mt-3 text-base text-gray-500">
                                        All Tutorials coded in the MakeCode drag and drop JavaScript editor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/EduBlocksTutorials" class="block mt-2">
                        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div class="flex-shrink-0">
                                <img class="h-48 w-full object-scale-down" src="@/static/images/EduBlocksIcon.jpeg" alt="EduBlocks Logo">
                            </div>
                            
                            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div class="flex-1">
                                    <p class="text-xl font-bold text-red-700">
                                        EduBlocks Tutorials
                                    </p>
                                    
                                    <p class="mt-3 text-base text-gray-500">
                                        All tutorials coded the EduBlocks drag and drop Python editor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/MicroPythonTutorials" class="block mt-2">
                        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div class="flex-shrink-0">
                                <img class="h-48 w-full object-scale-down" src="@/static/images/PythonIcon.jpeg" alt="Python Logo">
                            </div>
                            
                            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div class="flex-1">
                                    <p class="text-xl font-bold text-red-700">
                                        MicroPython tutorials
                                    </p>
                                    
                                    <p class="mt-3 text-base text-gray-500">
                                        All tutorials written in MicroPython Will work with the Mu Editor or the online python editor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div> -->
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

