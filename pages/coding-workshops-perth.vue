<template>
    <div class="relative bg-gray-100">
        <Header />
        <main class="overflow-hidden py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div class="lg:pr-8 lg:pt-4">
                        <div class="lg:max-w-lg text-gray-700">
                            <h1 class="text-pretty text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl"> 
                                Turn Screen Time into Skill Time
                            </h1>
                            <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-emerald-800 sm:text-4xl">
                                Beginner micro:bit coding workshops for kids aged 8 to 16, in Perth.
                            </h2>
                            <p class="leading-relaxed mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
                                6-Week Beginner micro:bit Coding Workshops in Perth For ages 8 to 16.
                                Perth Creative Exchange, Stormont Street. No experience needed, just curiosity.
                            </p>
                            <p class="leading-relaxed mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
                                Does your child spend hours on a screen? Give that time a purpose. Over six weeks, 
                                your child will build real micro:bit projects that light up, roll dice and count 
                                steps.
                            </p>
                            <div class="mt-8 flow-root">
                                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                        <table class="relative min-w-full divide-y divide-gray-500">
                                            <thead>
                                                <tr>
                                                    <th scope="col" class="py-3.5 pr-3 pl-4 text-lg text-left font-semibold text-brand-dark sm:pl-0">
                                                        Week
                                                    </th>
                                                    <th scope="col" class="px-3 py-3.5 text-left text-lg font-semibold text-brand-dark">
                                                        Date
                                                    </th>
                                                    <th scope="col" class="px-3 py-3.5 text-left text-lg font-semibold text-brand-dark">
                                                        Time
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody class="divide-y divide-gray-200">
                                                <tr v-for="week in workshops" :key="week.id">
                                                    <td class="py-4 pr-3 pl-4 font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                                                        {{ week.id }}
                                                    </td>
                                                    <td class="px-3 py-4 whitespace-nowrap text-gray-900">
                                                        {{ week.date }}
                                                    </td>
                                                    <td class="px-3 py-4 whitespace-nowrap text-gray-900">
                                                        {{ week.time }}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <p class="leading-relaxed mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
                                Each Session will last 1 hour on a <b class="text-brand-dark">Wednesday</b>.
                            </p>
                           
                        </div>
                    </div>
                    <div class="relative mt-6 lg:mt-0 lg:min-h-[30rem]">
                        <img src="/public/images/Classes.jpeg" alt="Classes" class="w-full h-auto object-cover object-top rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:absolute lg:inset-0 lg:h-full" />
                    </div>
                </div>
                 <h3 class="mt-2 text-2xl font-extrabold tracking-tight text-sky-700 sm:text-3xl pt-8">
                    What your Child Will Make
                </h3>
                <p class="leading-relaxed mt-3 mx-auto text-xl text-gray-700 sm:mt-4">
                    These are some of the things your child will make:
                </p>
                <dl class="mt-10 max-w-xl space-y-8 text-xl leading-7 lg:max-w-none">
                    <div class="relative ml-8 pl-9 text-xl">
                        <dt class="inline text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                stroke-width="2" stroke="currentColor" class="absolute left-1 top-1 h-6 w-7 text-brand">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            A name badge that scrolls their name across the board
                        </dt>
                    </div>
                    <div class="relative ml-8 pl-9 text-xl">
                        <dt class="inline text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                stroke-width="2" stroke="currentColor" class="absolute left-1 top-1 h-6 w-7 text-brand">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            A dice that rolls when they shake it
                        </dt>
                    </div>
                    <div class="relative ml-8 pl-9 text-xl">
                        <dt class="inline text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                stroke-width="2" stroke="currentColor" class="absolute left-1 top-1 h-6 w-7 text-brand">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            A step counter that tracks their movement
                        </dt>
                    </div>
                    <div class="relative ml-8 pl-9 text-xl">
                        <dt class="inline text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                stroke-width="2" stroke="currentColor" class="absolute left-1 top-1 h-6 w-7 text-brand">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            Rock, paper, scissors against their own micro:bit
                        </dt>
                    </div>
                </dl>
                <h3 class="mt-2 text-2xl font-extrabold tracking-tight text-sky-700 sm:text-3xl pt-8">
                    Why Parents Choose Us:
                </h3>
                <dl class="mt-10 max-w-xl space-y-8 text-xl leading-7 lg:max-w-none">
                    <div class="relative ml-8 pl-9 text-xl">
                        <dt class="inline text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                stroke-width="2" stroke="currentColor" class="absolute left-1 top-1 h-6 w-7 text-brand">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            <b> No experience needed. </b> Your child doesn’t need any coding knowledge, and
                            neither do you.
                        </dt>
                    </div>
                    <div class="relative ml-8 pl-9 text-xl">
                        <dt class="inline text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                stroke-width="2" stroke="currentColor" class="absolute left-1 top-1 h-6 w-7 text-brand">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            <b> Confidence from making things. </b> Every project is one they built themselves, 
                            and they can show it off at home (with a £15 deposit).
                        </dt>
                    </div>
                    <div class="relative ml-8 pl-9 text-xl">
                        <dt class="inline text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                stroke-width="2" stroke="currentColor" class="absolute left-1 top-1 h-6 w-7 text-brand">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            <b> Simple pricing. </b> £15 for a single session, or £75 for the full six-week block, 
                            which saves you £15.
                        </dt>
                    </div>
                    <div class="relative ml-8 pl-9 text-xl">
                        <dt class="inline text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                stroke-width="2" stroke="currentColor" class="absolute left-1 top-1 h-6 w-7 text-brand">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            <b> Small, friendly groups. </b> Sessions run at Perth Creative Exchange, Stormont 
                            Street.
                        </dt>
                    </div>
                </dl>
                <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-emerald-800 sm:text-4xl pt-8">
                    How Booking Works
                </h2>
                <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                    <div class="relative ml-8 pl-9 text-xl">
                        <span class="absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">1</span>
                        <dt class="inline text-gray-900">
                            Choose a single session or the full six-week block.
                        </dt>
                    </div>
                    <div class="relative ml-8 pl-9 text-xl">
                        <span class="absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">2</span>
                        <dt class="inline text-gray-700">
                            Pay securely, and add your child’s name and age.
                        </dt>
                    </div>
                    <div class="relative ml-8 pl-9 text-xl">
                        <span class="absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">3</span>
                        <dt class="inline text-gray-700">
                            Check your inbox for a confirmation and a short welcome questionnaire.
                        </dt>
                    </div>
                </dl>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <a href="https://buy.stripe.com/eVq9AN3uR3Ds3AR1An1VK01" target="_blank" class=" rounded-md bg-brand-dark px-3.5 py-2.5 text-xl font-semibold text-white shadow-xs hover:bg-brand-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                        Book the 6-week block for £75
                    </a>
                    <a href="https://buy.stripe.com/14A4gt3uRfmadbrgvh1VK00" target="_blank" class="rounded-md bg-emerald-800 px-3.5 py-2.5 text-xl font-semibold text-white shadow-xs hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                        Book a single session for £15
                    </a>  
                </div>
                <p class="leading-relaxed mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
                    Not sure yet? Call 
                    <a class="hover:text-gray-900" href="tel:07848692935">
                        <b class="text-brand-dark">07848 692 935</b>
                    </a> 
                    or 
                    <a href="https://wa.me/447848692935" target="_blank" class="hover:text-gray-900">
                        <b class="text-brand-dark">WhatsApp</b>
                    </a> 
                    for a quick chat. There’s no pressure, and you don’t need to book first.
                </p>
            </div>
        </main>
        <div>
      <h2 class="px-10 mt-5 text-pretty text-3xl font-extrabold tracking-tight text-emerald-800 sm:text-4xl">
        Testimonials
      </h2>
      <TestimonialsSection tag="workshops" variant="compact" heading="What parents and partners say" />
    </div>
        <Footer />
    </div>
  </template>

  <script setup>
  const workshops = [
    { id: 1, date: '28-10-2026', time: '5:00 PM - 6:00 PM' },
    { id: 2, date: '04-11-2026', time: '5:00 PM - 6:00 PM' },
    { id: 3, date: '11-11-2026', time: '5:00 PM - 6:00 PM' },
    { id: 4, date: '18-11-2026', time: '5:00 PM - 6:00 PM' },
    { id: 5, date: '25-11-2026', time: '5:00 PM - 6:00 PM' },
    { id: 6, date: '02-12-2026', time: '5:00 PM - 6:00 PM' }
]
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