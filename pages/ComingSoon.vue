<template>
    <div class="relative bg-gray-50">
        <Header />
        <!-- main -->
        <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div class="absolute inset-0">
                <div class="bg-white h-1/3 sm:h-2/3"></div>
            </div>
              
            <div class="relative max-w-7xl mx-auto">
                <div class="text-center">
                    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl" style="color:#A42530">
                        Coming Soon
                    </h1>
                </div>
                <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                We have some exciting things coming... Be the first to know by sigining up to our Newsletter.
                </p>
            </div>
        </div>
        <div class="bg-white" style="background-color:#A1C4B5">
            <div class="px-6 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
                <div class="px-6 py-6 bg-teal-600 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
                    <div class="xl:w-0 xl:flex-1">
                        <h2 class="text-2xl font-bold tracking-tight sm:text-3xl" style ="color:#0E7452">
                            Sign up to get updates straight to your inbox
                        </h2>
        
                        <p class="max-w-3xl mt-3 text-lg leading-6 font-bold" style="color:#A42530; text-size: 20px;">
                            Enter your email to be the first to know about the latest news
                        </p>
                    </div>
      
                    <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">

                        <!--<form class="md:flex" name="Newsletter" netlify action="https://formspree.io/f/moqrdzdn" method="POST">-->
                            <form class="md:flex" name="Newsletter" netlify>
                                <label for="name" class="sr-only">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autocomplete="text"
                                    required
                                    class="w-full px-5 py-3 mr-3 placeholder-gray-500 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white"
                                    placeholder="Enter your name"
                                />
                                <label for="emailAddress" class="sr-only">Email address</label>
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
                                    class="flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-black border border-transparent rounded-md shadow hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                                    style ="background-color:#76B82A; color:#0E7452; font-weight: bold; font-size: 22px"
                                >
                                    Sign up
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
    </div>
</template>