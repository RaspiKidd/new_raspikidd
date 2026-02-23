<template>
  <div class="relative bg-gray-100">
    <Header />
    <main class="lg:relative">
      <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-30 lg:text-center">
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 class="text-3xl tracking-tight font-extrabold text-red-800 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
            <span class="block xl:inline">
              Empowering Young Innovators To Dream Big
            </span>
          </h1>
          
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
            At RaspiKidd, we believe that every child deserves the opportunity to explore, engage with, and 
            excel in STEM (Science Technology Engineering & Maths) regardless of their background. Our mission is to break down barriers to STEM 
            education by offering hands-on workshops and affordable kits that make technology fun, practical, 
            and accessible for children aged 8 to 16.
          </p>

          <h2 class="mt-5 text-pretty text-3xl font-semibold tracking-tight text-emerald-800 sm:text-4xl">
            What We Do
          </h2>
          <ul role="list" class="mt-8 space-y-8 text-gray-700 text-xl">
            <li class="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#991b1b" class="size-10">
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
              </svg>

              <span>
                <strong class="font-semibold text-green-700">
                  Interactive Workshops:
                </strong> 
                Fun, engaging sessions designed to spark creativity and curiosity.
              </span>
            </li>
            <li class="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#991b1b" class="size-10">
                <path fill-rule="evenodd" d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z" clip-rule="evenodd" />
              </svg>

              <span>
                <strong class="font-semibold text-green-700">
                  Affordable STEM Kits:
                </strong> 
                Budget-friendly tools that encourage kids to learn and create using everyday materials.
              </span>
            </li>
            <li class="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#991b1b" class="size-10">
                <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clip-rule="evenodd" />
                <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
              </svg>

              <span>
                <strong class="font-semibold text-green-700">
                  Community Partnerships:
                </strong> 
                Collaborating with schools, libraries, and community centres to reach underserved areas.
              </span>
            </li>
          </ul>

          <h2 class="mt-5 text-pretty text-3xl font-semibold tracking-tight text-emerald-800 sm:text-4xl">
            Why Choose RaspiKidd?
          </h2>
          <ul role="list" class="mt-8 space-y-8 text-gray-700 text-xl">
            <li>
              We make STEM affordable for families and educators. 
            </li>
            <li>
              Our unique approach empowers children to experiment, learn, and innovate in a supportive 
              environment. 
            </li>
            <li>
              We equip educators and parents with the tools and confidence to inspire young minds.
            </li>
          </ul>
          <!--<div class="grid grid-cols-2 grid-rows-2 gap-2 place-items-auto h-30 mt-10 sm:ml-3">
            <div class="rounded-md shadow sm:mt-0 sm:ml-3">
              <NuxtLink to="/microbit" class="bg-green-800 w-full flex items-center justify-center px-8 py-3 border border-transparent text-xl font-bold rounded-md text-emerald-200 md:py-4 md:text-xl md:px-4">
                micro:bit
              </NuxtLink>
            </div>
          
            <div class="sm:mt-0 sm:ml-3">
              <a href='https://ko-fi.com/G2G2Y3YFZ' target='_blank'>
                <img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' />
              </a>
            </div>
          </div>-->
        </div>
      </div>
      <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img class="absolute inset-0 w-full h-full object-cover" src="/images/PhysicalComputing.jpg" alt="cutting mat with various electronics">
      </div>
    </main>
    <NewsletterForm />
    <Footer />
  </div>
</template>