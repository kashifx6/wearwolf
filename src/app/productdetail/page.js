"use client"; //add client-side interactivity to your application
import React, { useState, useEffect } from "react";

import "./product.css";
import Link from "next/link";
import Images from "@/components/common/images";
import Navbar from "@/components/common/navbar";
const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const colorPicker = (e) => {
    setSelectedColor(e.target.style.backgroundColor);
  };
  useEffect(() => {
    console.log(selectedColor);
  }, [selectedColor]);

  return (
    <div>
      <Navbar />
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className=" lg:mt-0 lg:col-span-7 mr-6 p-4">
          <div className=" bg-gray-200 mb-4 rounded">
            <Images
              src="tshirt1.jpg"
              width={"700"}
              height={"500"}
              alt="T shirt"
            />
          </div>
          <div className="hidden md:block md:flex md:justify-between">
            <div className="bg-gray-200 rounded">
              <Images
                src="tshirt.jpg"
                width={"200"}
                height={"200"}
                alt="T shirt"
              />
            </div>
            <div className="bg-gray-200 rounded ml-2">
              <Images
                src="tshirt.jpg"
                width={"200"}
                height={"200"}
                alt="T shirt"
              />
            </div>
            <div className="bg-gray-200 rounded ml-2">
              <Images
                src="tshirt.jpg"
                width={"200"}
                height={"200"}
                alt="T shirt"
              />
            </div>
          </div>
        </div>
        <div className=" lg:col-span-5">
          {/* basic info  */}
          <div className="flex justify-between items-center mb-4 mt-4">
            <h1>Denim Shirt</h1>
            <h1 className="bg-yellow-400 p-4 rounded-full">35 $</h1>
          </div>
          {/* ratings  */}

          <div className="flex items-center mb-4">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-300 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="hidden md:block ml-2 text-sm font-medium text-gray-400">
              4.95 out of 5
            </p>
            <p className="block md:hidden ml-2 text-sm font-medium text-gray-400">
              4.95 / 5
            </p>
            <p className="ml-8 text-sm font-medium  text-blue-500 cursor-pointer ">
              See all 713 reviews
            </p>
          </div>

          <div>
            {/* color  */}
            <div className="text-gray-950 mb-4">Color</div>
            <div className="flex mb-2">
              <div className="flex flex-wrap max-w-xs">
                <div
                  className=" w-8 h-8 rounded-full bg-red-500 cursor-pointer hover:bg-red-600"
                  onClick={colorPicker}
                ></div>
                <div
                  className=" w-8 h-8 ml-2 rounded-full bg-blue-500 cursor-pointer hover:bg-blue-600"
                  onClick={colorPicker}
                ></div>
                <div
                  className=" w-8 h-8 ml-2 rounded-full bg-green-500 cursor-pointer hover:bg-green-600"
                  onClick={colorPicker}
                ></div>
                <div
                  className=" w-8 h-8 ml-2 rounded-full bg-yellow-500 cursor-pointer hover:bg-yellow-600"
                  onClick={colorPicker}
                ></div>
              </div>
            </div>
            {/* sizes  */}
            <div className="text-gray-950 mb-4">Size</div>
            <div className="flex mb-2 sizes">
              <input type="radio" id="xs" name="skills" value="XS" />
              <label for="xs">XS</label>
              <input type="radio" id="s" name="skills" value="S" />
              <label className="ml-1" for="s">
                S
              </label>
              <input type="radio" id="m" name="skills" value="M" />
              <label className="ml-1" for="m">
                M
              </label>
              <input type="radio" id="l" name="skills" value="L" />
              <label className="ml-1" for="l">
                L
              </label>
              <input type="radio" id="xl" name="skills" value="XL" />
              <label className="ml-1" for="xl">
                XL
              </label>
            </div>
            {/* availablity  */}
            <div className="mb-4">
              <div className="flex items-center">
                <div className="">
                  <svg
                    className="h-6 w-6 text-green-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
                <div className="text-gray-500 ml-2 text-sm">
                  In stock and ready to ship
                </div>
              </div>
            </div>
            {/* add to card btn  */}
            <div className="w-full mt-4 mb-4">
              <button className="w-full text-center font-medium uppercase inline-block text-md px-4 py-2 leading-none bg-yellow-400 rounded mt-4 lg:mt-0 mx-0 md:mx-1">
                add to cart
              </button>
            </div>
            {/* product description  */}
            <div className="w-full mb-4">
              <div className="text-gray-950 mb-2">Description</div>
              <div className="text-gray-500 text-sm mb-2  ">
                The Denim is an honest new take on a classic. The Denim uses
                super soft, pre-shrunk cotton for true comfort and a dependable
                fit. They are hand cut and sewn locally, with a special dye
                technique that gives each Denim it's own look.
                <br /> <br />
                Looking to stock your closet? The Denim also comes in a 3-pack
                or 5-pack at a bundle discount.
              </div>
            </div>
            <hr className=" mb-4  " />
            {/* extra  detail  */}
            <div className="w-full mb-4">
              <div className="text-gray-950 mb-2">Features</div>
              <ul className="list-disc ml-4">
                <li className="text-gray-500 text-sm mb-2 ">
                  High quality fiber
                </li>
                <li className="text-gray-500 text-sm mb-2 ">
                  Pre-washed and pre-shrunk
                </li>
                <li className="text-gray-500 text-sm mb-2 ">
                  Only the best materials
                </li>

                <li className="text-gray-500 text-sm mb-2 ">
                  Machine wash cold with similar colors
                </li>
              </ul>
            </div>
            <p class="text-yellow-500 mb-4">
              Please read our
              <Link href="#" className="mx-1 text-blue-500">
                return policy
              </Link>
              before placing order
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
