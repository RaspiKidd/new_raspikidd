<template>
<!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-gray-50">
    <Header />
    <main>
      <div class="bg-white">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-9">
            <!-- Left Side of screen -->
            <div>
              <h2 class="text-2xl font-extrabold sm:text-3xl" style = "color:#A42530">
                Why Hire Us?
              </h2>
          
              <div class="mt-3">
                <p class="text-lg text-gray-500">
                  We educate kids and teachers how to program computers <br> in a fun and 
                  interactive way.
                </p>

                <div class="-m-3 p-3 ml-4 mt-3 flex items-start rounded-lg">
                  <img class="flex-shrink-0 h-6 w-6" src="/public/images/phone.svg" alt="Phone Icon">
                  <span class="ml-8 text-lg text-gray-500">
                    <p>
                      07848 692 935
                    </p>
                    <p class="mt-1">
                      Mon-Fri 10am to 6pm GMT
                    </p>
                  </span>
                </div>
                <div class="-m-3 p-3 ml-4 mt-3 flex items-start rounded-lg">
                  <img class="flex-shrink-0 h-6 w-6" src="/public/images/email.svg" alt="Email Icon">
                  <span class="ml-8 text-lg text-gray-500">
                    kerry@raspikidd.com
                  </span>
                </div>
              </div>
            </div>
            <!-- Right Side of Screen -->
            <div class="mt-12 sm:mt-16 md:mt-0">
              <h2 class="text-2xl font-extrabold sm:text-3xl" style ="color:#A42530">
                Contact Us
              </h2>
              <div class="mt-9">
                <!-- Contact form -->
                <form class="grid grid-cols-1 gap-y-6 p-3" name="Contact" netlify action="https://formspree.io/f/xgerepqv" method="POST">
                  <label for="full_name" class="sr-only">Full name</label>
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    autocomplete="text"
                    required 
                    class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-400 focus:border-red-500 border-gray-300 rounded-md" 
                    placeholder="Full name"
                  />

                  <label for="email" class="sr-only">Email</label>
                  <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    autocomplete="email" 
                    required 
                    class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" 
                    placeholder="Email"
                  />
                  
                  <label for="phone" class="sr-only">Phone</label>
                  <input 
                    id="phone"
                    name="phone"
                    type="text"
                    autocomplete="tel" 
                    class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" 
                    placeholder="Phone"
                  />
                
                  <label for="message" class="sr-only">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="2" 
                    required
                    class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" 
                    placeholder="Message">
                  </textarea>
                 
                  <button
                    type="submit"
                    class="flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-black border border-transparent rounded-md shadow hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                    style ="background-color:#76B82A; color:#0E7452; font-weight: bold; font-size: 22px"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Testimonials -->
      <!-- <section class="bg-gray-200">
        <div class="max-w-7xl mx-auto md:grid md:grid-cols-1 md:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-red-600">
            Testimonials
          </h2>
        </div>
      
        <div class="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
          <div class="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-grey-400 lg:pr-16">
            <blockquote class="mt-6 md:flex-grow md:flex md:flex-col">
              <div class="relative text-lg font-medium text-black md:flex-grow">
                <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-red-300" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
    
                <p class="relative">
                  Kerry has been a life saver in several instances for both my personal and business IT needs. Among other things she has helped me with:
                </p>

                <div class="-m-3 p-3 ml-4 mt-3 flex items-start rounded-lg">
                  <img class="flex-shrink-0 h-6 w-6" src="@/static/images/bullets.svg" alt="bullet point">
                  <span class="ml-8 text-lg text-black">
                    expert advice on IT purchases: PCs, laptops, and components (additional RAM, external hard drives)
                  </span>
                </div>

                <div class="-m-3 p-3 ml-4 mt-3 flex items-start rounded-lg">
                  <img class="flex-shrink-0 h-6 w-6" src="@/static/images/bullets.svg" alt="bullet point">
                  <span class="ml-8 text-lg text-black">
                    upgrading / building hardware
                  </span>
                </div>

                <div class="-m-3 p-3 ml-4 mt-3 flex items-start rounded-lg">
                  <img class="flex-shrink-0 h-6 w-6" src="@/static/images/bullets.svg" alt="bullet point">
                  <span class="ml-8 text-lg text-black">
                    troubleshooting computer and wifi malfunction
                  </span>
                </div>

                <div class="-m-3 p-3 ml-4 mt-3 flex items-start rounded-lg">
                  <img class="flex-shrink-0 h-6 w-6" src="@/static/images/bullets.svg" alt="bullet point">
                  <span class="ml-8 text-lg text-black">
                    complete Windows reinstall and software optimisation
                  </span>
                </div>

                <div class="-m-3 p-3 ml-4 mt-3 flex items-start rounded-lg">
                  <img class="flex-shrink-0 h-6 w-6" src="@/static/images/bullets.svg" alt="bullet point">
                  <span class="ml-8 text-lg text-black">
                    Wordpress setup and optimisation
                  </span>
                </div>

                <p style ="text-align: justify;" class="mt-6 relative">
                  Working with Kerry has been a pleasure. Her service is professional, timely, and fully compliant with Covid measures. She quickly diagnoses what the problem is, explains it in non-techy language, and states what needs to be done to fix it within budget. You won't get sold stuff you don't need! In short, she takes the fear out of IT troubles and tech gibberish, and provides expert advice and solutions that work. Kerry will be my go-to person for all my future IT needs.
                </p>
              </div>
            
              <footer class="mt-8">
                <div class="flex items-start">
                  <div class="flex-shrink-0 inline-flex rounded-full border-2 border-red-500">
                    <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=kMf6WlMMZH&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div> 
                
                  <div class="ml-4">
                    <div class="text-base font-medium text-black">
                      Donata Kick
                    </div>
                  
                    <div style ="color:#76B82A;" class="text-base font-medium">
                      Renew Your Body
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div> -->
        
          <!-- <div class="py-12 px-4 border-t-2 border-red-600 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
            <blockquote class="mt-6 md:flex-grow md:flex md:flex-col">
              <div class="relative text-lg font-medium text-black md:flex-grow">
                <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-red-300" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
          
                <p class="relative">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae.
                </p>
              </div>
        
              <footer class="mt-8">
                <div class="flex items-start">
                  <div class="flex-shrink-0 inline-flex rounded-full border-2 border-red-500">
                    <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixqx=kMf6WlMMZH&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div>
                
                  <div class="ml-4">
                    <div class="text-base font-medium text-black">
                      Joseph Rodriguez
                    </div>
                  
                    <div style ="color:#D02530;" class="text-base font-medium text-red-500">
                      CEO, Workcation
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div> 
        </div>
      </section> -->
    </main>
    <Footer />
  </div>
</template>