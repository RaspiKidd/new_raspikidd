<template>
  <div class="relative bg-gray-100">
    <head>
      <title> Hire Us </title>
    </head>
    <Header />
    <main>
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-9">
            <!-- Left Side of screen -->
            <div>
              <h1 class="text-red-700 text-2xl font-extrabold sm:text-3xl">
                Why Hire Us?
              </h1>
          
              <div class="mt-3">
                <p class="text-lg text-gray-700">
                  We educate kids and teachers how to program computers <br> in a fun and 
                  interactive way.
                </p>

                <div class="-m-3 p-3 ml-4 mt-3 flex items-start rounded-lg">
                  <img class="flex-shrink-0 h-6 w-6" src="/public/images/phone.svg" alt="Phone Icon">
                  <span class="ml-8 text-lg text-gray-700">
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
                  <span class="ml-8 text-lg text-gray-700">
                    kerry@raspikidd.com
                  </span>
                </div>
              </div>
            </div>
            <!-- Right Side of Screen -->
            <div class="mt-12 sm:mt-16 md:mt-0">
              <h2 class="text-red-700 text-2xl font-extrabold sm:text-3xl">
                Contact Us
              </h2>
              <div class="mt-9">
                <ContactForm />
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