<template>
  <div class="relative bg-gray-100">
    <Header />
    <main class="lg:relative">
      <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-30 lg:text-center">
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 class="text-3xl tracking-tight font-extrabold text-brand-dark sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
            <span class="block xl:inline">
              Hands-on coding and electronics workshops for kids in Perthshire
            </span>
          </h1>
          
          <p class="leading-relaxed mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
            Does your child love taking things apart or asking how things work? Our workshops give them the 
            chance to build something real, using electronics and code. We run sessions for children aged 8 to 
            16 in Perth, Bridge of Earn, Scone and nearby areas, and every child is welcome. No tech experience 
            needed.
          </p>

          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink to="/coding-workshops-perth" class="rounded-md bg-brand px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-brand-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
              Coding Classes
            </NuxtLink>
            <NuxtLink to="/tutoring" class="rounded-md bg-emerald-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
              Tutoring Services
            </NuxtLink>  
          </div>

          <h2 class="mt-5 text-pretty text-3xl font-semibold tracking-tight text-emerald-800 sm:text-4xl">
            What your child will get
          </h2>
          <ul role="list" class="mt-8 space-y-8 text-gray-700 text-xl">
            <li class="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-10 fill-brand-dark">
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
              </svg>

              <span> 
                Fun, hands-on sessions that spark creativity and curiosity.
              </span>
            </li>
            <li class="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-10 fill-brand-dark">
                <path fill-rule="evenodd" d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z" clip-rule="evenodd" />
              </svg>

              <span> 
                Budget-friendly kits that let them learn and create with everyday materials.
              </span>
            </li>
            <li class="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-10 fill-brand-dark">
                <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clip-rule="evenodd" />
                <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
              </svg>

              <span> 
                Workshops in schools, libraries and community centres, so more children can take part close to home.
              </span>
            </li>
          </ul>

          <h2 class="mt-5 text-pretty text-3xl font-semibold tracking-tight text-emerald-800 sm:text-4xl">
            Why parents and educators choose us
          </h2>
          <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
            <div class="relative ml-8 pl-9 text-lg">
              <dt class="inline text-gray-700 text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                  stroke-width="1.5" stroke="currentColor" class="absolute left-1 top-1 h-6 w-5 text-brand-dark">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
                You don’t need any tech experience to get started. Your child will be guided through every step.
              </dt>
            </div>
            <div class="relative ml-8 pl-9 text-lg">
              <dt class="inline text-gray-700 text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                  stroke-width="1.5" stroke="currentColor" class="absolute left-1 top-1 h-6 w-5 text-brand-dark">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
                Your child can experiment, make mistakes and try again in a supportive space where every attempt 
                counts.
              </dt>
            </div>
            <div class="relative ml-8 pl-9 text-lg">
              <dt class="inline text-gray-700 text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                  stroke-width="1.5" stroke="currentColor" class="absolute left-1 top-1 h-6 w-5 text-brand-dark">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
                Learning shouldn’t cost a fortune. Our workshops and kits are designed to be affordable for families 
                and schools.
              </dt>
            </div>
            <div class="relative ml-8 pl-9 text-lg">
              <dt class="inline text-gray-700 text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                  stroke-width="1.5" stroke="currentColor" class="absolute left-1 top-1 h-6 w-5 text-brand-dark">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
                Educators get practical tools and the confidence to lead a session from start to finish.
              </dt>
            </div>
          </dl>
          <h2 class="mt-5 text-pretty text-3xl font-semibold tracking-tight text-emerald-800 sm:text-4xl">
            Ready to see what your child can make?
          </h2>
          <p class="leading-relaxed mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
           Book your child’s place on a workshop today.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink to="/kids-coding-workshops-perth-waitlist" class="rounded-md bg-brand px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-brand-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
              Book your Child's Place
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img class="absolute inset-0 w-full h-full object-cover" src="/images/PhysicalComputing.jpg" alt="cutting mat with various electronics">
      </div>
    </main>
    <div>
      <h2 class="px-10 mt-5 text-pretty text-3xl font-semibold tracking-tight text-emerald-800 sm:text-4xl">
        Testimonials
      </h2>
      <TestimonialsSection variant="compact" />
    </div>
    
    <NewsletterForm />
    <Footer />
  </div>
</template>

<script setup>
    useHead({
      title: 'STEM workshops & Tutoring for kids in Perth | RaspiKidd',
      meta: [
        { name: 'description', content: 'Hands-on coding and electronics workshops for chlildren age 8-16 in Perthshire. Fun, affordable, and practical. Book a class or tutoring session today!' },
        { property: 'og:description', content: 'Hands-on coding and electronics workshops for chlildren age 8-16 in Perthshire. Fun, affordable, and practical. Book a class or tutoring session today!' },
        { property: 'og:image', content: '/images/PhysicalComputing.jpg' },
        { property: 'og:url', content: 'https://raspikidd.com' },
        { property: 'og:type', content: 'website' },
        //{ property: 'robots', content: 'index, follow' }
        ]
    });
    useSeoMeta({
      title: 'STEM workshops & Tutoring for kids in Perth | RaspiKidd',
      ogTitle: 'STEM workshops & Tutoring for kids in Perth | RaspiKidd'
    });
  </script>