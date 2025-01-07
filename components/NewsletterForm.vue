<!-- Neswletter form -->
 <template>
    <div class="bg-blue-950">
        <div class="px-6 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
            <div class="px-6 py-6 bg-blue-900 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
                <div class="xl:w-0 xl:flex-1">
                    <h2 class="text-2xl font-bold tracking-tight sm:text-3xl text-blue-200">
                        Sign up to get updates straight to your inbox
                    </h2>
      
                    <p class="max-w-3xl mt-3 text-lg leading-6 font-bold text-white" style="text-size: 20px;">
                        Enter your email to be the first to know about the latest news
                    </p>
                </div>
    
                <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                    <!--<form class="md:flex" name="Newsletter" netlify>-->
                    <form 
                        class="md:flex" 
                        name="newsletter" 
                        method="POST" 
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="form-name" value="newsletter" />
                        <p hidden>
		                    <label>Don’t fill this out: <input name="bot-field" /></label>
	                    </p>
 
                        <label for="name" class="sr-only">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autocomplete="text"
                            required
                            class="w-full px-5 py-3 mr-3 placeholder-gray-500 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white"
                            placeholder="Enter your name"
                        />
                        <label for="emailAddress" class="sr-only">Email address</label>
                        <input
                            id="emailAddress"
                            name="emailAddress"
                            type="email"
                            autocomplete="email"
                            required
                            class="w-full px-5 py-3 placeholder-gray-500 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white"
                            placeholder="Enter your email"
                        />
                        <button
                            type="submit"
                            class="bg-blue-950 flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-blue-200 border border-transparent rounded-md shadow hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                            style ="font-weight: bold; font-size: 22px"
                        >
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>