<template>
    <div class="relative bg-gray-100">
      <Header />
      <!-- Background color split screen for large screens 
      <div class="fixed left-0 top-0 hidden h-full w-1/2 bg-white lg:block" aria-hidden="true" />
      <div class="fixed right-0 top-0 hidden h-full w-1/2 bg-gray-50 lg:block" aria-hidden="true" />-->
  
      <header class="sticky top-0 border-b border-gray-400 bg-gray-100 text-sm font-medium text-gray-700">
        <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div class="relative flex justify-end sm:justify-center">
            <a href="#" class="absolute left-0 top-1/2 -mt-4">
              <span class="sr-only">RaspiKidd</span>
              <img src="/images/microbit.png" alt="" class="h-8 w-auto" />
            </a>
            <nav aria-label="Progress" class="hidden sm:block">
              <ol role="list" class="flex space-x-4">
                <li v-for="(step) in steps" :key="step.name" class="flex items-center">
                  <a v-if="step.status === 'current'" :href="step.href" aria-current="page" class="text-red-800">{{ step.name }}</a>
                  <a v-else-if="step.status === 'complete'" :href="step.href" aria-current="page" class="text-green-800">{{ step.name }}</a>
                  <a v-else :href="step.href">{{ step.name }}</a>
                  <!--<ChevronRightIcon v-if="stepIdx !== steps.length - 1" class="ml-4 size-5 text-gray-300" aria-hidden="true" /> -->
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-gray-400">
                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                  </svg>

                </li>
              </ol>
            </nav>
            <p class="sm:hidden">Step 2 of 4</p>
          </div>
        </div>
      </header>
  
      <main class="relative py-16 overflow-hidden">
        <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <img class="absolute top-12 left-full transform translate-x-32" width="404" height="384"  fill="none" viewBox="0 0 404 384" src="/images/circuit-board.svg">
            <img class="absolute top-12 right-full transform -translate-x-32" width="404" height="384"  fill="none" viewBox="0 0 404 384" src="/images/circuit-board.svg">
            <img class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384" src="/images/circuit-board.svg">
            <img class="absolute top-1/2 left-full transform -translate-y-1/2 translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384" src="/images/circuit-board.svg">
            <img class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384" src="/images/circuit-board.svg">
            <img class="absolute bottom-12 right-full transform -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384" src="/images/circuit-board.svg">
          </div>
        </div>
        <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-30 lg:text-center">
        <div class="px-4 sm:px-8 xl:pr-16">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span class="block xl:inline text-red-700"> micro:bit </span>
          </h1>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
            The micro:bit is a small device about half the size of a credit card. 
            It is packed full of features aimed at getting children into computer 
            programming and technology. Note that you still need a computer or 
            tablet to program it - it is a microcomputer not a full computer. 
          </p>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
            The micro:bit was created by the BBC and other partners in the UK 
            in 2015. In 2016 they gave away one million free micro:bits to 
            schools within the UK to support the teaching of computer coding.
            Many other countries followed the UK's foot steps.
          </p>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
            The micro:bit is now available for sale around the world.  
          </p>
        </div>
      </div>
  
        <!--<section aria-labelledby="summary-heading" class="bg-gray-50 px-4 pb-10 pt-16 sm:px-6 lg:col-start-2 lg:row-start-1 lg:bg-transparent lg:px-0 lg:pb-16">
          <div class="mx-auto max-w-lg lg:max-w-none">
            <h2 id="summary-heading" class="text-lg font-medium text-gray-900">Order summary</h2>
  
            <ul role="list" class="divide-y divide-gray-200 text-sm font-medium text-gray-900">
              <li v-for="product in products" :key="product.id" class="flex items-start space-x-4 py-6">
                <img :src="product.imageSrc" :alt="product.imageAlt" class="size-20 flex-none rounded-md object-cover" />
                <div class="flex-auto space-y-1">
                  <h3>{{ product.name }}</h3>
                  <p class="text-gray-500">{{ product.color }}</p>
                  <p class="text-gray-500">{{ product.size }}</p>
                </div>
                <p class="flex-none text-base font-medium">{{ product.price }}</p>
              </li>
            </ul>
  
            <dl class="hidden space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900 lg:block">
              <div class="flex items-center justify-between">
                <dt class="text-gray-600">Subtotal</dt>
                <dd>$320.00</dd>
              </div>
  
              <div class="flex items-center justify-between">
                <dt class="text-gray-600">Shipping</dt>
                <dd>$15.00</dd>
              </div>
  
              <div class="flex items-center justify-between">
                <dt class="text-gray-600">Taxes</dt>
                <dd>$26.80</dd>
              </div>
  
              <div class="flex items-center justify-between border-t border-gray-200 pt-6">
                <dt class="text-base">Total</dt>
                <dd class="text-base">$361.80</dd>
              </div>
            </dl>
  
            <Popover class="fixed inset-x-0 bottom-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden" v-slot="{ open }">
              <div class="relative z-10 border-t border-gray-200 bg-white px-4 sm:px-6">
                <div class="mx-auto max-w-lg">
                  <PopoverButton class="flex w-full items-center py-6 font-medium">
                    <span class="mr-auto text-base">Total</span>
                    <span class="mr-2 text-base">$361.80</span>
                    <ChevronUpIcon class="size-5 text-gray-500" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
  
              <TransitionRoot as="template" :show="open">
                <div>
                  <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
                    <PopoverOverlay class="fixed inset-0 bg-black/25" />
                  </TransitionChild>
  
                  <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="translate-y-full" enter-to="translate-y-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-y-0" leave-to="translate-y-full">
                    <PopoverPanel class="relative bg-white px-4 py-6 sm:px-6">
                      <dl class="mx-auto max-w-lg space-y-6">
                        <div class="flex items-center justify-between">
                          <dt class="text-gray-600">Subtotal</dt>
                          <dd>$320.00</dd>
                        </div>
  
                        <div class="flex items-center justify-between">
                          <dt class="text-gray-600">Shipping</dt>
                          <dd>$15.00</dd>
                        </div>
  
                        <div class="flex items-center justify-between">
                          <dt class="text-gray-600">Taxes</dt>
                          <dd>$26.80</dd>
                        </div>
                      </dl>
                    </PopoverPanel>
                  </TransitionChild>
                </div>
              </TransitionRoot>
            </Popover>
          </div>
        </section>-->
  
        <!--<form class="px-4 pb-36 pt-16 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16">
          <div class="mx-auto max-w-lg lg:max-w-none">
            <section aria-labelledby="contact-info-heading">
              <h2 id="contact-info-heading" class="text-lg font-medium text-gray-900">Contact information</h2>
  
              <div class="mt-6">
                <label for="email-address" class="block text-sm/6 font-medium text-gray-700">Email address</label>
                <div class="mt-2">
                  <input type="email" id="email-address" name="email-address" autocomplete="email" class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>
            </section>
  
            <section aria-labelledby="payment-heading" class="mt-10">
              <h2 id="payment-heading" class="text-lg font-medium text-gray-900">Payment details</h2>
  
              <div class="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
                <div class="col-span-3 sm:col-span-4">
                  <label for="name-on-card" class="block text-sm/6 font-medium text-gray-700">Name on card</label>
                  <div class="mt-2">
                    <input type="text" id="name-on-card" name="name-on-card" autocomplete="cc-name" class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>
  
                <div class="col-span-3 sm:col-span-4">
                  <label for="card-number" class="block text-sm/6 font-medium text-gray-700">Card number</label>
                  <div class="mt-2">
                    <input type="text" id="card-number" name="card-number" autocomplete="cc-number" class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>
  
                <div class="col-span-2 sm:col-span-3">
                  <label for="expiration-date" class="block text-sm/6 font-medium text-gray-700">Expiration date (MM/YY)</label>
                  <div class="mt-2">
                    <input type="text" name="expiration-date" id="expiration-date" autocomplete="cc-exp" class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>
  
                <div>
                  <label for="cvc" class="block text-sm/6 font-medium text-gray-700">CVC</label>
                  <div class="mt-2">
                    <input type="text" name="cvc" id="cvc" autocomplete="csc" class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>
              </div>
            </section>
  
            <section aria-labelledby="shipping-heading" class="mt-10">
              <h2 id="shipping-heading" class="text-lg font-medium text-gray-900">Shipping address</h2>
  
              <div class="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                <div class="sm:col-span-3">
                  <label for="company" class="block text-sm/6 font-medium text-gray-700">Company</label>
                  <div class="mt-2">
                    <input type="text" id="company" name="company" class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>
  
                <div class="sm:col-span-3">
                  <label for="address" class="block text-sm/6 font-medium text-gray-700">Address</label>
                  <div class="mt-2">
                    <input type="text" id="address" name="address" autocomplete="street-address" class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>
  
                <div class="sm:col-span-3">
                  <label for="apartment" class="block text-sm/6 font-medium text-gray-700">Apartment, suite, etc.</label>
                  <div class="mt-2">
                    <input type="text" id="apartment" name="apartment" class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>
  
                <div>
                  <label for="city" class="block text-sm/6 font-medium text-gray-700">City</label>
                  <div class="mt-2">
                    <input type="text" id="city" name="city" autocomplete="address-level2" class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>
  
                <div>
                  <label for="region" class="block text-sm/6 font-medium text-gray-700">State / Province</label>
                  <div class="mt-2">
                    <input type="text" id="region" name="region" autocomplete="address-level1" class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>
  
                <div>
                  <label for="postal-code" class="block text-sm/6 font-medium text-gray-700">Postal code</label>
                  <div class="mt-2">
                    <input type="text" id="postal-code" name="postal-code" autocomplete="postal-code" class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>
              </div>
            </section>
  
            <section aria-labelledby="billing-heading" class="mt-10">
              <h2 id="billing-heading" class="text-lg font-medium text-gray-900">Billing information</h2>
  
              <div class="mt-6 flex gap-3">
                <div class="flex h-5 shrink-0 items-center">
                  <div class="group grid size-4 grid-cols-1">
                    <input id="same-as-shipping" name="same-as-shipping" type="checkbox" checked="" class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                    <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                      <path class="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path class="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <label for="same-as-shipping" class="text-sm font-medium text-gray-900">Same as shipping information</label>
              </div>
            </section> -->
            <button type="submit" class="absolute inset-x-0 bottom-0 rounded-md border border-transparent bg-green-800 px-4 py-2 text-sm font-medium text-emerald-200 shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:order-last sm:ml-6 sm:w-auto md:py-4 md:text-xl md:px-4">Continue</button>
         <!-- </div>
        </form>-->
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  
  const steps = [
    { name: 'Cart', href: '#', status: 'complete' },
    { name: 'Billing Information', href: '#', status: 'current' },
    { name: 'Confirmation', href: '#', status: 'upcoming' },
  ]
  /*const products = [
    {
      id: 1,
      name: 'Micro Backpack',
      href: '#',
      price: '$70.00',
      color: 'Moss',
      size: '5L',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/checkout-page-04-product-01.jpg',
      imageAlt:
        'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    },
    // More products...
  ] */
  </script>