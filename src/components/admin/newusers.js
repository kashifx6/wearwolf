import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewUsers = () => {
  return (
    <div className="w-full max-w-md p-4 bg-gray-100 h-[500px] rounded-lg shadow sm:p-8 ">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-950 ">
          Latest Buyers
        </h5>
        <Link
          href="/staff/users"
          className="text-sm font-medium text-blue-600 hover:underline "
        >
          View all
        </Link>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 ">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  className=" rounded-full"
                  width={40}
                  height={40}
                  src="/assets/images/heroImg.png"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-950 truncate ">
                  Neil Sims
                </p>
                <p className="text-sm text-gray-500 truncate ">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold  text-yellow-500 rounded-full  ">
              <span className="inline-block h-3 w-3 rounded-full bg-green-500 mr-2"></span>
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  className=" rounded-full"
                  width={40}
                  height={40}
                  src="/assets/images/heroImg.png"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-950 truncate ">
                  Bonnie Green
                </p>
                <p className="text-sm text-gray-500 truncate ">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold  text-yellow-500 rounded-full text-[12px] ">
                <span className="inline-block h-3 w-3 rounded-full bg-red-500 mr-2"></span>{" "}
               
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  className=" rounded-full"
                  width={40}
                  height={40}
                  src="/assets/images/heroImg.png"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-950 truncate ">
                  Michael Gough
                </p>
                <p className="text-sm text-gray-500 truncate">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold  text-yellow-500 rounded-full ">
              <span className="inline-block h-3 w-3 rounded-full bg-green-500 mr-2"></span>
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  className=" rounded-full"
                  width={40}
                  height={40}
                  src="/assets/images/heroImg.png"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-950 truncate">
                  Lana Byrd
                </p>
                <p className="text-sm text-gray-500 truncate ">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold  text-yellow-500 rounded-full ">
              <span className="inline-block h-3 w-3 rounded-full bg-red-500 mr-2"></span>
              </div>
            </div>
          </li>
          <li className="pt-3 pb-0 sm:pt-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  className=" rounded-full"
                  width={40}
                  height={40}
                  src="/assets/images/heroImg.png"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-950 truncate ">
                  Thomes Lean
                </p>
                <p className="text-sm text-gray-500 truncate ">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold  text-yellow-500 rounded-full ">
              <span className="inline-block h-3 w-3 rounded-full bg-red-500 mr-2"></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NewUsers;
