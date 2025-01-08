<!-- Neswletter form -->
 <template>
    <!--<div class="bg-sky-900">-->
      <div class="px-6 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div class="px-6 py-6 bg-sky-900 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div class="xl:w-0 xl:flex-1">
            <h2 class="text-sky-200 text-2xl font-bold tracking-tight sm:text-3xl">
              Sign up to get updates straight to your inbox
            </h2>
        
            <p class="text-white max-w-3xl mt-3 text-lg leading-6 font-bold" style="text-size: 20px;">
              Enter your email to be the first to know about the latest news
            </p>
          </div>
      
          <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">

            <!--<form class="md:flex" name="Newsletter" netlify action="https://formspree.io/f/moqrdzdn" method="POST">-->
            <form class="md:flex" name="Newsletter" method="POST" netlify>
              <input type="hidden" name="form-name" value="Newsletter" />
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
                class="bg-sky-200 flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-bold text-sky-900 border border-transparent rounded-md shadow hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                style = "font-size: 22px">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    <!--</div>-->
</template>