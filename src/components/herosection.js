import React from "react";
import Images from "./common/images";

const HeroSection = () => {
  return (
    <section class="bg-gradient-to-br from-yellow-500 to-yellow-100">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Images
            src="heroImg.png"
            width="500"
            height="500"
            alt="Hero Image"
          />
        </div>
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black uppercase">
            Shop 'Till You Drop
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>

          <form className="mb-4">
    <div class="flex">
        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search Product</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100  focus:outline-none " type="button">All categories <svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
            </li>
            </ul>
        </div>
        <div class="relative w-full ">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm  rounded-r-lg  border border-gray-700 focus:outline-none focus:border-blue-500 bg-gray-700 placeholder-gray-400 text-white " placeholder="Search Shirts, Pants, Shoes ..." required/>
            <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-yellow-500 rounded-r border border-yellow-500 focus:outline-none ">
                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>

          <a
            href="#"
            class="inline-flex items-center justify-center text-sm px-4 py-2 leading-none border rounded text-black border-black hover:bg-black hover:text-white mt-4 lg:mt-0"
          >
           Shop Now
           
          </a>
          <a
            href="#"
            class="mx-1 inline-flex items-center justify-center  text-sm px-4 py-2 leading-none border rounded text-white border-black uppercase bg-black mt-4 lg:mt-0"
          >
            Be a member
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
