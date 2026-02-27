<template>
    <div class="relative bg-gray-100">
        <Header />
        <main class="overflow-hidden py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div class="lg:pr-8 lg:pt-4">
                        <div class="lg:max-w-lg text-gray-700">
                            <h1 class="text-pretty text-3xl font-semibold tracking-tight text-red-800 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl"> 
                                Turn Screen Time into Skill Time with RaspiKidd Coding Workshops in Perth
                            </h1>
                            <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-emerald-800 sm:text-4xl">
                                Fun, beginner-friendly coding workshops for kids aged 8–16 – just £10 per session!
                            </h2>
                            <h3 class="mt-2 text-2xl font-extrabold tracking-tight text-sky-700 sm:text-3xl pt-8">
                                Why Parents Choose RaspiKidd:
                            </h3>
                            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                                <div class="relative ml-8 pl-9 text-lg">
                                    <dt class="inline text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                            stroke-width="1.5" stroke="currentColor" class="absolute left-1 top-1 h-6 w-5 text-emerald-800">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                        </svg>
                                        <b> Productive Screen Time: </b> Kids still use tech, but they’re building, 
                                        experimenting, and learning real skills.
                                    </dt>
                                </div>
                                <div class="relative ml-8 pl-9 text-lg">
                                    <dt class="inline text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                            stroke-width="1.5" stroke="currentColor" class="absolute left-1 top-1 h-6 w-5 text-emerald-800">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                        </svg>
                                        <b> Confidence Through Creation: </b> Every project completed boosts self-
                                        esteem and curiosity.
                                    </dt>
                                </div>
                                <div class="relative ml-8 pl-9 text-lg">
                                    <dt class="inline text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                            stroke-width="1.5" stroke="currentColor" class="absolute left-1 top-1 h-6 w-5 text-emerald-800">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                        </svg>
                                        <b> No Experience Needed: </b> Perfect for beginners – no coding knowledge 
                                        required from parent or child.
                                    </dt>
                                </div>
                                <div class="relative ml-8 pl-9 text-lg">
                                    <dt class="inline text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                            stroke-width="1.5" stroke="currentColor" class="absolute left-1 top-1 h-6 w-5 text-emerald-800">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                        </svg>
                                        <b> Affordable & Low-Risk: </b> Try the first session for only £10.
                                    </dt>
                                </div>
                                <div class="relative ml-8 pl-9 text-lg">
                                    <dt class="inline text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                            stroke-width="1.5" stroke="currentColor" class="absolute left-1 top-1 h-6 w-5 text-emerald-800">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                        </svg>
                                        <b> Local & Friendly: </b> Small workshops right here in Perth & Kinross, 
                                        designed for a supportive environment.
                                    </dt>
                                </div>
                            </dl>
                            <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-emerald-800 sm:text-4xl pt-8">
                                How It Works
                            </h2>
                            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                                <div class="relative ml-8 pl-9 text-lg">
                                    <dt class="inline text-gray-900">
                                        <b> Book a Session: </b> Easy online registration for just £10.
                                    </dt>
                                </div>
                                <div class="relative ml-8 pl-9 text-lg">
                                    <dt class="inline text-gray-900">
                                        <b> Hands-On Workshop: </b> Children work with micro:bit robots and coding projects.
                                    </dt>
                                </div>
                                <div class="relative ml-8 pl-9 text-lg">
                                    <dt class="inline text-gray-900">
                                        <b> Build & Create:  </b> Kids finish with a project they made themselves.
                                    </dt>
                                </div>
                                <div class="relative ml-8 pl-9 text-lg">
                                    <dt class="inline text-gray-900">
                                        <b> Have Fun & Learn: </b> Every child learns problem-solving, creativity, 
                                        and coding basics while having a blast.
                                    </dt>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <img src="/public/images/Classes.jpeg" alt="Classes" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="1000" height="500" />
                </div>
            </div>
        </main>
        <ClassesCTA />
        <Footer />
    </div>
  </template>

  <script setup>
    useHead({
      title: 'Children\'s STEM Classes Near Perth, Scotland | RaspiKidd',
      meta: [
        { name: 'description', content: 'Book a hands-on STEM workshop for your child in Perthshire. Sessions for ages 8–16 covering coding, electronics and more. Small groups, expert tutors.' },
        { property: 'og:description', content: 'Book a hands-on STEM workshop for your child in Perthshire. Sessions for ages 8–16 covering coding, electronics and more. Small groups, expert tutors.' },
        { property: 'og:image', content: '/images/Classes.jpg' },
        { property: 'og:url', content: 'https://raspikidd.com/classes' },
        { property: 'og:type', content: 'website' },
        //{ property: 'robots', content: 'index, follow' }
        ]
    });
    useSeoMeta({
      title: 'Children\'s STEM Classes Near Perth, Scotland | RaspiKidd',
      ogTitle: 'Children\'s STEM Classes Near Perth, Scotland | RaspiKidd'
    });
  </script>