<template>
    <div class="relative bg-gray-100">
        <Header />
        <div class="px-6 py-24 sm:py-32 lg:px-8">
            <!--<div class="mx-auto max-w-2xl">
                <h1 class="text-center text-pretty text-3xl font-semibold tracking-tight text-red-800 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
                    Level Up Your Child’s National 5 & Higher Computer Science Grades
                </h1>
            </div>-->
            <h1 class="text-center text-pretty text-3xl font-semibold tracking-tight text-red-800 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
                Level Up Your Child’s National 5 & Higher Computer Science Grades
            </h1>
            <h2 class="mt-5 text-pretty text-4xl font-semibold tracking-tight text-emerald-800 sm:text-5xl">
                Exam-Focused Tutoring for S4–S6 Students in Perth, Scotland
            </h2>
            <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                Does your teen struggle to make sense of Computer Science concepts despite trying hard? 
                Kerry's tutoring structure helps students build confidence, master exam techniques, and 
                achieve measurable results. Our lessons are tailored to each student's needs while preparing 
                your child for National 5 and Higher success.
            </p>
            <h2 class="mt-5 text-pretty text-4xl font-semibold tracking-tight text-emerald-800 sm:text-5xl">
                Why Choose RaspiKidd Tutoring?
            </h2>
            <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                Does your teen struggle to make sense of Computer Science concepts despite trying hard? 
                Kerry's tutoring structure helps students build confidence, master exam techniques, and 
                achieve measurable results. Our lessons are tailored to each student's needs while preparing 
                your child for National 5 and Higher success.
            </p>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                <div class="relative ml-8 pl-9 text-lg">
                    <dt class="inline font-bold" style = "color:#A42530">
                        Structured & Exam-Focused
                    </dt>
                    <dd class="mt-1">
                        Lessons are aligned with the Qualification Scotland syllabus and past papers, ensuring 
                        your teen studies exactly what matters for exams.
                    </dd>
                </div>
                <div class="relative ml-8 pl-9 text-lg">
                    <dt class="inline font-bold" style = "color:#A42530">
                        Boost Confidence & Reduce Stress
                    </dt>
                    <dd class="mt-1">
                        We transform uncertainty into clarity, helping students feel capable, confident, and 
                        ready for prelims and final exams.
                    </dd>
                </div>
                <div class="relative ml-8 pl-9 text-lg">
                    <dt class="inline font-bold" style = "color:#A42530">
                        Flexible & Local
                    </dt>
                    <dd class="mt-1">
                        Sessions are scheduled around school and family commitments in Perth and surrounding areas, 
                        making tutoring convenient and stress-free.
                    </dd>
                </div>
            </dl>
            <h2 class="mt-5 text-pretty text-4xl font-semibold tracking-tight text-emerald-800 sm:text-5xl">
                Key Benefits for Your Child
            </h2>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                <div class="relative ml-8 pl-9 text-lg">
                    <dt class="inline text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                            stroke-width="1.5" stroke="currentColor" class="absolute left-1 top-1 h-6 w-5 text-emerald-800">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                        <b> Higher Grades: </b> Focused revision and exam techniques to improve results.
                    </dt>
                </div>
                <div class="relative ml-8 pl-9 text-lg">
                    <dt class="inline text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                            stroke-width="1.5" stroke="currentColor" class="absolute left-1 top-1 h-6 w-5 text-emerald-800">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                        <b> Parent Peace of Mind: </b> Regular progress updates and clear milestones.
                    </dt>
                </div>
                <div class="relative ml-8 pl-9 text-lg">
                    <dt class="inline text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                            stroke-width="1.5" stroke="currentColor" class="absolute left-1 top-1 h-6 w-5 text-emerald-800">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                        <b> Individual Attention: </b> 1-to-1 or small group tutoring tailored to learning pace.
                    </dt>
                </div>
                <div class="relative ml-8 pl-9 text-lg">
                    <dt class="inline text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                            stroke-width="1.5" stroke="currentColor" class="absolute left-1 top-1 h-6 w-5 text-emerald-800">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                        <b> Skill Building: </b> Beyond exams, students gain coding confidence and problem-solving skills.
                    </dt>
                </div>
                <div class="relative ml-8 pl-9 text-lg">
                    <dt class="inline text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                            stroke-width="1.5" stroke="currentColor" class="absolute left-1 top-1 h-6 w-5 text-emerald-800">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                        <b> Stress-Free Learning: </b> Interactive lessons that make studying enjoyable.
                    </dt>
                </div>
            </dl>
            <!-- CTA Section -->
            <div class="px-6 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
                <div class="px-6 py-6 bg-teal-900 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
                    <div class="xl:w-0 xl:flex-1">
                        <h2 class="text-teal-200 text-2xl font-bold tracking-tight sm:text-3xl">
                            Book Your Free Parent Consultation
                        </h2>
        
                        <p class="text-white max-w-3xl mt-3 text-lg leading-6 font-bold">
                            Ready to help your child <b> level up their grades? </b> Book a free 15-minute 
                            consultation to see how Kerry at RaspiKidd can help your teen succeed in National 5 
                            and Higher Computer Science.
                        </p>
                        <div class="mt-10 flex items-center justify-center gap-x-6 text-lg">
                            <a href="https://app.simplymeet.me/raspikidd/tutoring-discovery" target="_blank" class="rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 ">
                                Book Now
                            </a>
                        </div>
                    </div> 
                </div>
             </div>
             
            <!-- FAQs Section -->
            <div class="bg-orange-100 rounded-lg mt-10">
                <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                    <h2 class="text-4xl font-semibold tracking-tight text-emerald-800 sm:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <dl class="mt-20 divide-y divide-gray-900/10">
                        <div v-for="faq in faqs" :key="faq.id" class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
                            <dt class="text-lg  font-semibold text-gray-900 lg:col-span-5">
                                {{ faq.question }}
                            </dt>
                            <dd class="mt-4 lg:col-span-7 lg:mt-0">
                                <p class="text-lg text-gray-600">
                                    {{ faq.answer }}
                                </p>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <!-- CTA Section -->
            <div class="px-6 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
                <div class="px-6 py-6 bg-teal-900 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
                    <div class="xl:w-0 xl:flex-1">
                        <h2 class="text-teal-200 text-2xl font-bold tracking-tight sm:text-3xl">
                            Boost Your Child’s Grades Today
                        </h2>
        
                        <p class="text-white max-w-3xl mt-3 text-lg leading-6 font-bold">
                            Book a free 15-minute parent consultation and see how RaspiKidd Tutoring can help your 
                            teen level up in National 5 & Higher Computer Science.
                        </p>
                        <div class="mt-10 flex items-center justify-center gap-x-6 text-lg">
                            <a href="https://app.simplymeet.me/raspikidd/tutoring-discovery" target="_blank" class="rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 ">
                                Book Now
                            </a>
                        </div>
                    </div> 
                </div>
             </div>
            <NewsletterForm />
        </div>
        <Footer />
    </div>
</template>

<script setup>
const faqs = [
  {
    id: 1,
    question: "What age or school years is RaspiKidd Tutoring for?",
    answer:
      "Our tutoring is designed for S4–S6 students preparing for National 5 or Higher Computer Science exams in Perth and surrounding areas.",
  },
  {
    id: 2,
    question: 'What makes RaspiKidd different from other tutors?',
    answer:
      'We combine exam-focused structure, interactive coding lessons, and measurable progress tracking, helping students gain both skills and confidence.',
  },
  {
    id: 3,
    question: 'How often should my child attend tutoring?',
    answer:
      'Sessions are flexible and tailored to your child’s needs, typically 1–2 times per week for optimal exam preparation.',
  },
  {
    id: 4,
    question: 'Are lessons online or in-person?',
    answer:
      "We offer both options, with in-person tutoring available locally in Perth, and online sessions accessible anywhere in Scotland.",
  },
  {
    id: 5,
    question: "How quickly can my child see results?",
    answer:
      'Most students notice improved understanding and confidence within a few weeks, with measurable exam readiness before prelims and finals.',
  },
];
useHead({
      title: 'National 5 & Higher Computer Science Tutoring Perth | RaspiKidd',
      meta: [
        { name: 'description', content: 'Boost your teen’s National 5 or Higher Computer Science grades with exam-focused tutoring in Perth. Structured SQA-aligned lessons that build confidence and results. Book a free parent consultation today.' },
        { property: 'og:description', content: 'Boost your teen’s National 5 or Higher Computer Science grades with exam-focused tutoring in Perth. Structured SQA-aligned lessons that build confidence and results. Book a free parent consultation today.' },
        { property: 'og:image', content: '/images/Tutoring.jpg' },
        { property: 'og:url', content: 'https://raspikidd.com/tutoring' },
        { property: 'og:type', content: 'website' },
        //{ property: 'robots', content: 'index, follow' }
        ]
    });
    useSeoMeta({
      title: 'National 5 & Higher Computer Science Tutoring Perth | RaspiKidd',
      ogTitle: 'National 5 & Higher Computer Science Tutoring Perth | RaspiKidd'
    });
</script>