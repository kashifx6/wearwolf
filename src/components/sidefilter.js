import React from "react";

const Sidefilter = () => {
  return (
    <div className=" md:m-5 m-0  p-4 w-full lg:w-[350px]">
      {/* main categories  */}
      <div className="font-medium text-gray-950 mb-4">Categories</div>
      <div className="categories">
        <div class="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  accent-yellow-400   rounded focus:ring-blue-500 "
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-base text-gray-950 text-gray-950 "
          >
            Clothing
          </label>
        </div>
        <div className="child ml-5">
          <div class="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  accent-yellow-400   rounded focus:ring-blue-500 "
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-base text-gray-950 text-gray-950 "
            >
              Men
            </label>
          </div>
          <div class="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  accent-yellow-400   rounded focus:ring-blue-500 "
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-base text-gray-950 text-gray-950 "
            >
              Women
            </label>
          </div>
        </div>
        <div class="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  accent-yellow-400   rounded focus:ring-blue-500 "
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-base text-gray-950 text-gray-950 "
          >
            Food
          </label>
        </div>
        <div class="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  accent-yellow-400   rounded focus:ring-blue-500 "
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-base text-gray-950 text-gray-950 "
          >
            Tech
          </label>
        </div>
      </div>
      {/* price range  */}
      <div className="font-medium text-gray-950 mb-4">Price Range</div>
      <div className="range">
        <div className=" flex justify-between items-center mb-4">
          <input
            id="small-range"
            type="range"
            value="10"
            class="w-1/2 h-1 mb-4 bg-yellow-400 rounded-lg appearance-none cursor-pointer range-sm "
          />
          <input
            id="small-range"
            type="range"
            value="50"
            class="ml-4 w-1/2 h-1 mb-4 bg-yellow-400 rounded-lg appearance-none cursor-pointer range-sm "
          />
        </div>
        <div className=" flex justify-between items-center mb-4">
          <div>
            <label id="from" className="text-gray-950">
              From
            </label>
            <input
              id="from"
              type="text"
              class="text-center  block p-2.5 w-full z-20 text-sm  rounded-lg  border border-yellow-400 focus:outline-none bg-transparent placeholder-gray-400 text-gray-950 "
              disabled
              value="12.0 $"
            />
          </div>
          <div className="ml-4">
            <label id="from" className="text-gray-950 ">
              To
            </label>
            <input
              id="from"
              type="text"
              class="text-center block p-2.5 w-full z-20 text-sm  rounded-lg  border border-yellow-400 focus:outline-none bg-transparent placeholder-gray-400 text-gray-950 "
              disabled
              value="52.0 $"
            />
          </div>
        </div>
      </div>
      {/* Size  */}
      <div className="font-medium text-gray-950 mb-4">Rating</div>
      <div className="size">
        <div class="flex items-center mb-4">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="size"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  accent-yellow-400   focus:ring-blue-500 "
          />
          <label for="size-1" class="ml-2 text-sm font-medium text-gray-950">
            XS
          </label>
        </div>
        <div class="flex items-center mb-4">
          <input
            id="size-1"
            type="radio"
            value=""
            name="size"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  accent-yellow-400   focus:ring-blue-500 "
          />
          <label for="size-1" class="ml-2 text-sm font-medium text-gray-950">
            S
          </label>
        </div>
        <div class="flex items-center mb-4">
          <input
            id="size-1"
            type="radio"
            value=""
            name="size"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  accent-yellow-400   focus:ring-blue-500 "
          />
          <label for="size-1" class="ml-2 text-sm font-medium text-gray-950">
            M
          </label>
        </div>
        <div class="flex items-center mb-4">
          <input
            id="size-1"
            type="radio"
            value=""
            name="size"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  accent-yellow-400   focus:ring-blue-500 "
          />
          <label for="size-1" class="ml-2 text-sm font-medium text-gray-950">
            L
          </label>
        </div>
        <div class="flex items-center mb-4">
          <input
            id="size-1"
            type="radio"
            value=""
            name="size"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  accent-yellow-400   focus:ring-blue-500 "
          />
          <label for="size-1" class="ml-2 text-sm font-base text-gray-950">
            Xl
          </label>
        </div>
      </div>
      {/* Color  */}
      <div className="font-medium text-gray-950 mb-4">Color</div>
      <div className="range mb-4">
        <div className="flex mb-4">
          <div className="flex flex-wrap max-w-xs">
            <div
              className=" w-8 h-8 rounded bg-red-500 cursor-pointer hover:bg-red-600"
              //   onClick={colorPicker}
            ></div>
            <div
              className=" w-8 h-8 ml-2 rounded bg-blue-500 cursor-pointer hover:bg-blue-600"
              //   onClick={colorPicker}
            ></div>
            <div
              className=" w-8 h-8 ml-2 rounded bg-green-500 cursor-pointer hover:bg-green-600"
              //   onClick={colorPicker}
            ></div>
            <div
              className=" w-8 h-8 ml-2 rounded bg-yellow-500 cursor-pointer hover:bg-yellow-600"
              //   onClick={colorPicker}
            ></div>
            <div
              className=" w-8 h-8 ml-2 rounded bg-gray-300 cursor-pointer hover:bg-gray-400"
              //   onClick={colorPicker}
            ></div>
            <div
              className=" w-8 h-8 ml-2 rounded bg-yellow-800 cursor-pointer hover:bg-yellow-900"
              //   onClick={colorPicker}
            ></div>
            <div
              className=" w-8 h-8 ml-2 rounded bg-red-200 cursor-pointer hover:bg-red-300"
              //   onClick={colorPicker}
            ></div>
          </div>
        </div>
      </div>
      {/* ratings  */}
      <div className="font-medium text-gray-950 mb-4">Rating</div>
      <div className="ratings">
        <div class="flex items-center mb-4 onestar">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  accent-yellow-400   focus:ring-blue-500"
          />
          <svg
            aria-hidden="true"
            class="ml-2 w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Rating star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        </div>
        <div class="flex items-center mb-4 twostar">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  accent-yellow-400   focus:ring-blue-500"
          />
          <svg
            aria-hidden="true"
            class="ml-2 w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Rating star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            class="ml-2 w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Rating star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        </div>
        <div class="flex items-center mb-4 threestar">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  accent-yellow-400   focus:ring-blue-500"
          />
          <svg
            aria-hidden="true"
            class="ml-2 w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Rating star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            class="ml-2 w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Rating star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            class="ml-2 w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Rating star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        </div>
        <div class="flex items-center mb-4 fourstar">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  accent-yellow-400   focus:ring-blue-500"
          />
          <svg
            aria-hidden="true"
            class="ml-2 w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Rating star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            class="ml-2 w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Rating star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            class="ml-2 w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Rating star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            class="ml-2 w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Rating star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        </div>
        <div class="flex items-center mb-4">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  accent-yellow-400   focus:ring-blue-500"
          />
          <svg
            aria-hidden="true"
            class="ml-2 w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Rating star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            class="ml-2 w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Rating star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            class="ml-2 w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Rating star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            class="ml-2 w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Rating star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            class="ml-2 w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Rating star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        </div>
      </div>
      {/* filter buttons  */}
      <div className="flex mb-4 w-full ">
        <button
          type="button"
          class="text-white bg-gradient-to-br from-yellow-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Filter Results
        </button>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-500 to-orange-500  group-hover:from-yellow-500 group-hover:to-orange-400 hover:text-white  focus:ring-4 focus:outline-none focus:ring-yellow-200 ">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            Clear All
          </span>
        </button>
      </div>
      
    </div>
  );
};

export default Sidefilter;
