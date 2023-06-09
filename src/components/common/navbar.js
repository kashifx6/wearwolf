import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-white p-6">
      <div class="flex items-center flex-shrink-0 text-gray-950 mr-6">
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <Link href="/">
          {" "}
          <span class="font-semibold text-xl tracking-tight">WearWolf</span>
        </Link>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-gray-950 border-gray-700 hover:text-gray-950 hover:border-black">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center  lg:w-auto">
        <div class="text-sm lg:flex-grow lg:flex lg:justify-center">
          <Link
            href="/about"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-950 hover:text-yellow-500 mr-4"
          >
            About
          </Link>
          <Link
            href="allproducts"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-950 hover:text-yellow-500 mr-4"
          >
            All Products
          </Link>
          <Link
            href="/blog"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-950 hover:text-yellow-500"
          >
            Blog
          </Link>
        </div>
        <div>
          <Link
            href="/login"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-950 border-black hover:bg-black hover:text-white mt-4 lg:mt-0"
          >
            Be a member
          </Link>
          <Link
            href="/register"
            class="uppercase mx-1 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-black bg-black mt-4 lg:mt-0"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
