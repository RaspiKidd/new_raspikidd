<template>
    <div class="relative bg-gray-100">
        <Header />
        <div class="mx-auto max-w-3xl text-base/7 text-gray-700 py-24 sm:py-32">
            <p class="text-base/7 font-semibold text-gray-900">
                Last Updated: 26th October 2026
            </p>
            <h1 class="mt-2 font-semibold tracking-tight text-pretty text-brand-dark sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
                Cancellation & Refund Policy
            </h1>
            <p class="leading-relaxed mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                This policy applies to all bookings for the 6-week beginner micro:bit coding workshops run by 
                RaspiKidd at Perth Creative Exchange, Stormont Street, Perth.
            </p>
            <h2 class="mt-10 sm:mt-12 text-3xl font-extrabold tracking-tight text-emerald-800 sm:text-4xl">
                Booking & Payment
            </h2>
            <p class="leading-relaxed mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                Your place is confirmed once payment is complete. Places are limited to eight per session, and 
                block bookings take priority over single sessions.
            </p>
            <h2 class="mt-10 sm:mt-12 text-3xl font-extrabold tracking-tight text-emerald-800 sm:text-4xl">
                Cancelling
            </h2>
            <h3 class="mt-2 text-2xl font-extrabold tracking-tight text-sky-700 sm:text-3xl pt-8">
                A block of six sessions
            </h3>
            <p class="leading-relaxed mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                If you cancel at least 7 days before the first session, you’ll receive a full refund.
            </p>
            <p class="leading-relaxed mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                If you cancel less than 7 days before the first session, we can’t offer a refund. 
            </p>
            <h3 class="mt-2 text-2xl font-extrabold tracking-tight text-sky-700 sm:text-3xl pt-8">
                A single session
            </h3>
            <p class="leading-relaxed mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                If you cancel at least 48 hours before the session, you can choose a full refund or a 
                free transfer to another week, subject to availability.
            </p>
            <p class="leading-relaxed mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                If you cancel less than 48 hours before the session, or your child has already attended, 
                we can’t offer a refund.
            </p>
            <h3 class="mt-2 text-2xl font-extrabold tracking-tight text-sky-700 sm:text-3xl pt-8">
                Admin fee
            </h3>
            <p class="leading-relaxed mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                Where you cancel and receive a refund, a £1.50 admin fee is deducted from the refund. This covers
                 card processing charges that we cannot recover. No admin fee is charged if we cancel a session, 
                 or if you choose a free transfer.
            </p>
            <h3 class="mt-2 text-2xl font-extrabold tracking-tight text-sky-700 sm:text-3xl pt-8">
                We cancel a session
            </h3>
            <p class="leading-relaxed mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                If we need to cancel a session, for example because of illness or a venue issue, you can choose either a 
                free transfer to another session or a refund for that session. We’ll tell you as soon as possible.
            </p>
            <dl class="mt-3 sm:mt-4 max-w-xl space-y-8 text-xl leading-7 lg:max-w-none">
                <div class="relative ml-8 pl-9 text-xl">
                    <dt class="inline text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                            stroke-width="2" stroke="currentColor" class="absolute left-1 top-1 h-6 w-7 text-brand">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                        <b>Single session:</b> a refund of £15.
                    </dt>
                </div>
                <div class="relative ml-8 pl-9 text-xl">
                    <dt class="inline text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                            stroke-width="2" stroke="currentColor" class="absolute left-1 top-1 h-6 w-7 text-brand">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                        <b>6-week block:</b> a refund of £12.50, which is one sixth of the £75 block price.
                    </dt>
                </div>
            </dl>
            <p class="leading-relaxed mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                If we cancel every session in a block, you’ll receive a full refund of the block price.
            </p>
            <h2 class="mt-10 sm:mt-12 text-3xl font-extrabold tracking-tight text-emerald-800 sm:text-4xl">
                Removal from a session
            </h2>
            <p class="leading-relaxed mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                If a child is removed from a session because of unsafe or persistently disruptive behaviour, no 
                refund will be given.
            </p>
            <h2 class="mt-10 sm:mt-12 text-3xl font-extrabold tracking-tight text-emerald-800 sm:text-4xl">
                Changes to dates or times
            </h2>
            <p class="leading-relaxed mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                We confirm the exact dates and times in advance. If we need to change a session time, we’ll 
                contact you by email. If you’re unable to attend the new time, you can choose a refund or a 
                transfer, as set out above.
            </p>
            <h2 class="mt-10 sm:mt-12 text-3xl font-extrabold tracking-tight text-emerald-800 sm:text-4xl">
                How to cancel or change a booking
            </h2>
            <p class="leading-relaxed mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                All cancellations and change requests must be sent by email to 
                <a href="mailto:info@raspikidd.com" class="text-brand hover:text-brand-dark">
                    info@raspikidd.com.
                </a> 
                We’ll confirm receipt by email. Your cancellation takes effect when we receive your email, 
                so please keep the confirmation for your records.
            </p>
            <h2 class="mt-10 sm:mt-12 text-3xl font-extrabold tracking-tight text-emerald-800 sm:text-4xl">
                Your statutory rights
            </h2>
            <p class="leading-relaxed mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                Nothing in this policy affects your statutory rights under UK consumer law.
            </p>
            <h2 class="mt-10 sm:mt-12 text-3xl font-extrabold tracking-tight text-emerald-800 sm:text-4xl">
                Questions
            </h2>
            <p class="leading-relaxed mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                If you have any questions about this policy, contact 
                <a href="mailto:info@raspikidd.com" class="text-brand hover:text-brand-dark">
                    info@raspikidd.com
                </a> 
                or call 
                <a href="tel:07848692935" class="text-brand hover:text-brand-dark">
                    07848 692 935.
                </a>
            </p>
        </div>
        <Footer />
    </div>
</template>