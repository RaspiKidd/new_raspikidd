<template>
    <Header />
    <div class="bg-zinc-100 px-6 py-24 sm:py-32 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-3xl font-semibold tracking-tight text-red-800 sm:text-5xl">
                Turn Screen Time Into Real Skills
            </h1>
        </div>
        <div class="overflow-hidden bg-zinc-100 py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div class="lg:pt-4 lg:pr-8">
                        <div class="lg:max-w-lg">
                            <p class="mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
                                When coding becomes hands-on and visual, children become deeply engaged. Instead 
                                of asking <b> “Can I stop now?” </b> they often ask <b> “Can I build something 
                                    else?” </b>
                            </p>
                            <p class="mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
                                By creating real projects with the micro:bit, children develop confidence, 
                                creativity, logical thinking and problem-solving skills while learning how 
                                technology really works.
                            </p>
                            <p class="mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
                                In RaspiKidd workshops we also encourage a simple mindset: <b>you can’t fail</b>. 
                                Every mistake is simply a <i>First Attempt In Learning</i>, helping children 
                                experiment, improve and discover new ideas.
                            </p>
                        </div>
                    </div>
        
                    <img src="/images/FreeGuide.png" alt="Free guide mock up" class="inset-0 w-75 h-75" />
                </div>
            </div>
        </div>
        <div class="px-6 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
            <div class="px-6 py-6 bg-teal-900 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
                <div class="xl:w-0 xl:flex-1">
                    <h2 class="text-teal-400 text-2xl font-bold tracking-tight sm:text-3xl">
                        Enter your email to get the free smarter screen time guide straight to your inbox.
                    </h2>
                    <p class="text-white max-w-3xl mt-3 text-lg leading-6 font-bold" style="text-size: 20px;">
                        No spam. Just launch updates and early access.
                    </p>
        
                    <form class="md:flex mt-3" name="FreeGuide" method="POST" netlify>
                        <input type="hidden" name="form-name" value="FreeGuide" />
                        <label for="name" class="sr-only">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autocomplete="text"
                            required
                            class="w-full px-5 py-3 mr-3 placeholder-gray-500 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white"
                            placeholder="Enter your name"
                        />
                        <label for="emailAddress" class="sr-only">
                            Email address
                        </label>
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
                            class="bg-emerald-200 flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-bold text-sky-900 border border-transparent rounded-md shadow hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                            style = "font-size: 22px">
                            Get the Free Guide
                        </button>
                    </form>
                </div> 
            </div>
        </div>
    </div>
    <Footer />
</template>