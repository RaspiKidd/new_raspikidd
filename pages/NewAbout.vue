<template>
    <div class="bg-gray-100">
      <Header />
      <main class="isolate">
        <!-- Content section -->
        <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-20 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h1 class="text-pretty text-5xl font-semibold tracking-tight text-red-700 sm:text-6xl">
              Inspiring the Next Generation of Innovators
            </h1>
            <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p class="text-xl/8 text-gray-700">
                  At RaspiKidd, we’re passionate about empowering young minds to 
                  explore the exciting world of technology and STEM (Science, Technology, Engineering, and 
                  Math). We develop and run hands-on coding workshops that spark curiosity and creativity in 
                  young people aged 8 to 16. Our workshops go beyond the basics of coding; we create 
                  immersive experiences where participants not only learn to program but also build robots, 
                  wire circuits, and bring their ideas to life using components like LEDs and motors.
                </p>
                <p class="mt-10 max-w-xl text-xl/8 text-gray-700">
                  What sets RaspiKidd apart is our commitment to accessibility and affordability. We believe 
                  that every child should have the opportunity to engage with STEM, regardless of their 
                  background. That’s why we’re working to make our educational kits budget-friendly, keeping 
                  costs within a pocket-money range. For instance, rather than expensive robot kits, we 
                  encourage creativity by using everyday materials like cardboard or LEGO to build robot 
                  chassis. This not only keeps costs down but also teaches problem-solving and 
                  resourcefulness.
                </p>
                <h2 class="mt-5 text-pretty text-4xl font-semibold tracking-tight text-emerald-800 sm:text-5xl">
                  The Inspiration Behind RaspiKidd
                </h2>
                <p class="mt-10 max-w-xl text-xl/8 text-gray-700">
                  RaspiKidd is deeply personal to me—it’s a tribute to my Grandpa, a true inspiration in my 
                  life. From a young age, he encouraged me to dream big and embrace challenges, whether it 
                  was learning how to use tools on a building site or rewiring a plug to prove I was paying 
                  attention. His belief in my potential and his unwavering support taught me that mistakes 
                  are not failures but stepping stones to success. At RaspiKidd, we embody that same 
                  philosophy: FAIL stands for “First Attempt In Learning.”
                </p>
                <p class="mt-10 max-w-xl text-xl/8 text-gray-700">
                  Join us at RaspiKidd, where we’re not just teaching skills—we’re nurturing dreamers, 
                  creators, and future leaders in STEM!
                </p>
              </div>
              <div class="lg:flex lg:flex-auto lg:justify-center">
                <dl class="w-64 space-y-8 xl:w-80">
                  <div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-fuchsia-200 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                    <p class="flex-none text-3xl font-bold tracking-tight text-fuchsia-700">
                      Vision
                    </p>
                    <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                      <p class="mt-2 text-base/7 text-gray-900">
                        Our vision is a world where every child, regardless of background, can explore and 
                        excel in STEM. Through workshops, affordable kits, and community partnerships, 
                        we inspire creativity and confidence, empowering children, educators, and parents. 
                        We aim to foster a lifelong love of learning and build a more inclusive, tech-savvy 
                        society.
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-violet-200 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                    <p class="flex-none text-3xl font-bold tracking-tight text-violet-700">
                      Mission
                    </p>
                    <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                      <p class="mt-2 text-base/7 text-gray-900">
                        Our mission is to make STEM education accessible and engaging for young people aged 
                        8–16 through hands-on workshops and affordable kits. We focus on underserved 
                        communities, empowering children and supporting educators to break barriers in STEM. 
                        We believe technology is for everyone, and failure is simply the First Attempt In 
                        Learning (FAIL).
                      </p>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Values section -->
        <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-10 lg:px-8 sm:rounded-3xl bg-gray-50">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-pretty text-4xl font-semibold tracking-tight text-emerald-800 sm:text-5xl">
              Our values
            </h2>
            <p class="mt-6 text-lg/8 text-gray-700">
              Our 6 core values are:
            </p>
          </div>
          <dl class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div v-for="value in values" :key="value.name">
              <dt class="font-semibold text-gray-900">{{ value.name }}</dt>
              <dd class="mt-1 text-gray-600">{{ value.description }}</dd>
            </div>
          </dl>
        </div>
  
        <!-- Team section
        <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our team</h2>
            <p class="mt-6 text-lg/8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
          </div>
          <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
            <li v-for="person in team" :key="person.name">
              <img class="mx-auto size-24 rounded-full" :src="person.imageUrl" alt="" />
              <h3 class="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">{{ person.name }}</h3>
              <p class="text-sm/6 text-gray-600">{{ person.role }}</p>
            </li>
          </ul>
        </div> -->
      </main>
      <div class="relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0" style="background-color:#A1C4B5">
        <div class="text-center justify-center lg:mx-0 lg:flex-auto lg:py-10">
          <h2 class="text-emerald-800 text-3xl font-bold tracking-tight sm:text-4xl">
            Sign Up to our Newsletter
          </h2>
          <NewsletterForm />
          <h2 class="text-emerald-800 text-3xl font-bold tracking-tight sm:text-4xl">
            Book a Call
          </h2>
          <div class="flex-shrink-0 lg:py-5">
            <a href="https://app.simplymeet.me/raspikidd/discovery" target="_blank" class="relative inline-flex items-center gap-x-1.5 rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#22c55e" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              Book Now
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { defineComponent, h, ref } from 'vue'
  
  const values = [
    {
      name: 'Accessibility',
      description:
        'Ensuring STEM education is affordable and available to all, particularly in underserved communities.',
    },
    {
      name: 'Innovation',
      description:
        'Encouraging creativity, exploration, and problem-solving through hands-on, interactive learning experiences.',
    },
    {
      name: 'Inclusivity',
      description:
        'Creating a welcoming and supportive environment where everyone, regardless of background or ability, feels empowered to engage with technology.',
    },
    {
      name: 'Empowerment',
      description:
        'Equipping young people, parents, and educators with the tools, skills, and confidence to succeed in STEM fields.',
    },
    {
      name: 'Sustainability',
      description:
        'Promoting eco-friendly practices by designing cost-effective kits and encouraging the use of everyday materials in projects.',
    },
    {
      name: 'Growth Mindset',
      description:
        'Celebrating mistakes as opportunities to learn, embodying the philosophy that failure is simply the First Attempt In Learning (FAIL).',
    },
  ]
  /*const team = [
    {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    // More people...
  ]*/
  </script>