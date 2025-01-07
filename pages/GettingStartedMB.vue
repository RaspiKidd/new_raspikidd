<template>
  <div class="relative bg-gray-50">
    <Header />
    <!-- main -->
    <div class="relative py-16 bg-white overflow-hidden">
      <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <!-- Circuit board image -->
        <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <img class="absolute top-12 left-full transform translate-x-32" width="404" height="384"  fill="none" viewBox="0 0 404 384" src="@/static/images/circuit-board.svg">
          <img class="absolute top-12 right-full transform -translate-x-32" width="404" height="384"  fill="none" viewBox="0 0 404 384" src="@/static/images/circuit-board.svg">
          <img class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384" src="@/static/images/circuit-board.svg">
          <img class="absolute top-1/2 left-full transform -translate-y-1/2 translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384" src="@/static/images/circuit-board.svg">
          <img class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384" src="@/static/images/circuit-board.svg">
          <img class="absolute bottom-12 right-full transform -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384" src="@/static/images/circuit-board.svg">
        </div>
      </div>
          
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl" style="color: #a42530">
            Getting Started with micro:bit
          </h1>
        </div>
            
        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">              
          <p> 
            Here is the Lesson pack for getting started with micro:bit. Within this pack you will have access to: 
          </p>
          
          <ul>
            <li> Lesson Plan </li>
            <li> Slide Deck </li>
            <li> Teaching Notes </li>
            <!-- <li> Student Handout </li> -->
          </ul>
            
          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            Lesson Plan
          </h2>
              
          <p>
            The lesson plan contains what you need to complete the lesson, Learning objectives and 
            structure of the lesson. As well as space for notes and improvements that can be made.
          </p> 
              
            
          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            Slide deck
          </h2>
            
          <p>
            The slide deck contains all the details you need to teach the students how to get started 
            with the micro:bit.
          </p>
              
          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            Teaching Notes
          </h2>
              
          <p> 
            The teaching notes gives detailed instructions of how the activity can be used within the 
            classroom as well as an overview of the micro:bit classroom function which helps teachers 
            keep control of a whole class from 1 computer.
          </p>
              
          <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <dt class="text-md font-medium text-gray-500" style="color: #a42530">Downloads</dt>
                <dd class="mt-1 text-sm text-gray-900">
                  <ul role="list" class="border border-gray-200 rounded-md divide-y divide-gray-200">
                    <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div class="w-0 flex-1 flex items-center">
                        <img class="flex-shrink-0 h-5 w-5" src="/public/images/paperclip.svg" alt="Lesson plan download" />
                        <span class="ml-2 flex-1 w-0 truncate">  Getting Started Lesson Plan </span>
                      </div>
                        
                      <div class="ml-4 flex-shrink-0">
                        <a href = "/GettingStartedMB/LessonPlan.pdf" target="_blank" class="font-medium" style="color: #0e7452"> 
                          Download
                        </a>
                      </div>
                    </li>
                    <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div class="w-0 flex-1 flex items-center">
                        <img class="flex-shrink-0 h-5 w-5" src="/public/images/paperclip.svg" alt="Slide deck download"/>
                        <span class="ml-2 flex-1 w-0 truncate">  Getting Started Slide Deck </span>
                      </div>
                         
                      <div class="ml-4 flex-shrink-0">
                        <a href="/GettingStartedMB/SlideDeck.pdf" target="_blank" class="font-medium" style="color: #0e7452"> 
                          Download 
                        </a>
                      </div>
                    </li>
                    <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div class="w-0 flex-1 flex items-center">
                        <img class="flex-shrink-0 h-5 w-5" src="/public/images/paperclip.svg" alt="Teaching Notes download"/>
                        <span class="ml-2 flex-1 w-0 truncate"> Getting Started Teaching Notes </span>
                      </div>
                        
                      <div class="ml-4 flex-shrink-0">
                        <a href="/GettingStartedMB/TeacherNotes.pdf" target="_blank" class="font-medium" style="color: #0e7452"> 
                          Download 
                        </a>
                      </div>
                    </li>
                    <!-- <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div class="w-0 flex-1 flex items-center">
                        <img class="flex-shrink-0 h-5 w-5" src="@/static/images/paperclip.svg" alt="Student handout download"/>
                        <span class="ml-2 flex-1 w-0 truncate"> Getting Started Student Handout </span>
                      </div>
                          
                      <div class="ml-4 flex-shrink-0">
                        <a href="#" class="font-medium" style="color: #0e7452"> Download </a>
                      </div>
                    </li> -->
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
          
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
