import React from "react";

const LatestOrders = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-4">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
          <tr>
            <th scope="col" className=" px-6 py-3">
              Order No
            </th>
            <th scope="col" className="hidden md:block px-6 py-3">
              Product name
            </th>
            <th scope="col" className="block md:hidden px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>

            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-950 whitespace-nowrap "
            >
              2213
            </th>
            <td className="px-6 py-4">John Deo</td>
            <td className="px-6 py-4">John@deo.com</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <div className="hidden md:block bg-green-300  text-green-600 rounded-full font-bold p-2 text-center">
                Delivered
              </div>
              <div className="block md:hidden">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
            </td>
            <td className="px-6 py-4">02/03/2023</td>
          </tr>
          <tr className="border-b bg-gray-100 ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-950 whitespace-nowrap "
            >
              2213
            </th>
            <td className="px-6 py-4">John Deo</td>
            <td className="px-6 py-4">John@deo.com</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <div className="hidden md:block bg-green-300  text-green-600 rounded-full font-bold p-2 text-center">
                Delivered
              </div>
              <div className="block md:hidden">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
            </td>
            <td className="px-6 py-4">02/03/2023</td>
          </tr>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-950 whitespace-nowrap "
            >
              2213
            </th>
            <td className="px-6 py-4">John Deo</td>
            <td className="px-6 py-4">John@deo.com</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <div className="hidden md:block bg-red-300  text-red-500 rounded-full font-bold p-2 text-center">
                Canceled
              </div>
              <div className="block md:hidden">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
              </div>
            </td>
            <td className="px-6 py-4">02/03/2023</td>
          </tr>
          <tr className="border-b bg-gray-100 ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-950 whitespace-nowrap "
            >
              2213
            </th>
            <td className="px-6 py-4">John Deo</td>
            <td className="px-6 py-4">John@deo.com</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <div className="hidden md:block bg-orange-300  text-orange-500 rounded-full font-bold p-2 text-center">
                Pending
              </div>
              <div className="block md:hidden">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                </span>
              </div>
            </td>
            <td className="px-6 py-4">02/03/2023</td>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-950 whitespace-nowrap "
            >
              2213
            </th>
            <td className="px-6 py-4">John Deo</td>
            <td className="px-6 py-4">John@deo.com</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <div className="hidden md:block bg-green-300  text-green-600 rounded-full font-bold p-2 text-center">
                Delivered
              </div>
              <div className="block md:hidden">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
            </td>
            <td className="px-6 py-4">02/03/2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LatestOrders;
