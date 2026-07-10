<template>
    <form class="grid grid-cols-1 gap-y-6 p-3" name="ContactUs" method="POST" netlify>
        <input type="hidden" name="form-name" value="ContactUs" />
        <label for="full_name" class="sr-only">Full name</label>
        <input 
            id="name"
            name="name"
            type="text" 
            autocomplete="text"
            required 
            class="block w-full py-3 px-4 placeholder-gray-900 focus:ring-brand focus:border-brand border-2 border-leaf rounded-md" 
            placeholder="Full name"
        />

        <label for="email" class="sr-only">Email</label>
        <input 
            id="email" 
            name="email" 
            type="email" 
            autocomplete="email" 
            required 
            class="block w-full shadow-sm py-3 px-4 placeholder-gray-900 focus:ring-brand focus:border-brand border-2 border-leaf rounded-md" 
            placeholder="Email"
        />
                  
        <label for="phone" class="sr-only">Phone</label>
        <input 
            id="phone"
            name="phone"
            type="text"
            autocomplete="tel" 
            class="block w-full shadow-sm py-3 px-4 placeholder-gray-900 focus:ring-brand focus:border-brand border-2 border-leaf rounded-md" 
            placeholder="Phone"
        />
                
        <label for="message" class="sr-only">Message</label>
        <textarea 
            id="message" 
            name="message" 
            rows="2" 
            required
            class="block w-full shadow-sm py-3 px-4 placeholder-gray-900 focus:ring-brand focus:border-brand border-2 border-leaf rounded-md"
            placeholder="Enter your Message here"
        >
            
        </textarea>
                 
        <button
            type="submit"
            class="bg-leaf-dark flex items-center justify-center w-full px-5 py-3 mt-3 text-emerald-200 text-bold font-medium text-black border border-transparent rounded-md shadow hover:bg-leaf focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-leaf focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
            style ="font-size: 22px"
        >
            Submit
        </button>
    </form>
</template>