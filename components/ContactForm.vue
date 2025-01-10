<template>
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
            class="block w-full shadow-sm py-3 px-4 text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" 
        >
            Message
        </textarea>
                 
        <button
            type="submit"
            class="bg-green-700 flex items-center justify-center w-full px-5 py-3 mt-3 text-emerald-200 text-bold font-medium text-black border border-transparent rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
            style ="font-size: 22px"
        >
            Submit
        </button>
    </form>
</template>