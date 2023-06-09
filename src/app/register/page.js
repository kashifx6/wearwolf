import Navbar from "@/components/common/navbar";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-50 ">
        <div className="flex flex-col justify-center px-6 py-8 mx-auto  lg:py-0">
          <div className="flex ">
            <div className=" w-full lg:w-1/2 bg-white shadow  md:mt-0 xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Be Our Family
                </h1>
                <div className="md:flex">
                  <button
                    type="button"
                    className="w-full md:w-1/2  border border-gray-300  text-gray-950 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                  >
                    <svg
                      className="w-4 h-4 mr-2 -ml-1"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-f"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                      ></path>
                    </svg>
                    Sign up with Facebook
                  </button>
                  <button
                    type="button"
                    className="w-full md:w-1/2  border border-gray-300  text-gray-950  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                  >
                    <svg
                      className="w-4 h-4 mr-2 -ml-1"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                    >
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      ></path>
                    </svg>
                    Sign up with Google
                  </button>
                </div>

                <div className="flex items-center">
                  <hr className="flex-1 h-px my-8 bg-gray-200 border-0 " />
                  <span className="mx-4 text-gray-400">or</span>
                  <hr className="flex-1 h-px my-8 bg-gray-200 border-0 " />
                </div>

                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                      placeholder="John"
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                      placeholder="John@Doe.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="repeatPassword"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Repeat Password
                    </label>
                    <input
                      type="password"
                      id="repeatPassword"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    <Link href="/">Register</Link>
                  </button>
                </form>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 content bg-blue-600">
              <section className="bg-transparent">
                <div className=" px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-28">
                  <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                      Lorem ipsum dolor sit amet consectetur ?
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iste sint obcaecati magnam adipisci ullam dolor minus,
                      quasi autem voluptates odit consequuntur labore. Alias,
                      unde illo dolorem quam quia odio veritatis!
                    </p>

                    <button className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                      Get started
                      <svg
                        className="w-5 h-5 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
