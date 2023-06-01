import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-green-700">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/admin/dashboard"
                className="flex items-center p-2 rounded-lg bg-white text-green-700"
              >
                <svg
                  className="lex-shrink-0 w-6 h-6 
                       text-green-600"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <rect x="4" y="4" width="16" height="4" rx="1" />{" "}
                  <rect x="4" y="12" width="6" height="8" rx="1" />{" "}
                  <line x1="14" y1="12" x2="20" y2="12" />{" "}
                  <line x1="14" y1="16" x2="20" y2="16" />{" "}
                  <line x1="14" y1="20" x2="20" y2="20" />
                </svg>
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/staff/adduser"
                className="flex items-center p-2 rounded-lg bg-white text-green-700"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 
                       text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />{" "}
                  <circle cx="9" cy="7" r="4" />{" "}
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />{" "}
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </Link>
            </li>
            <li>
              <Link
                href="/nursing/nursingselectuser"
                className="flex items-center p-2 rounded-lg bg-white text-green-700"
              >
              <svg className="flex-shrink-0 w-6 h-6 
                       text-green-600"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="7" r="4" />  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />  <path d="M16 11h6m-3 -3v6" /></svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Add User</span>
              </Link>
            </li>
            <li>
              <Link
                href="/staff/users"
                className="flex items-center p-2 rounded-lg bg-white text-green-700"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 
                       text-green-600"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <rect x="4" y="4" width="16" height="6" rx="2" />{" "}
                  <rect x="4" y="14" width="16" height="6" rx="2" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
              </Link>
            </li>
            <li>
              <Link
                href="/staff/users"
                className="flex items-center p-2 rounded-lg bg-white text-green-700"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 
                  text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                  />
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">
                  Add Product
                </span>
              </Link>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-green-400 ">
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-white transition duration-75 rounded-lg "
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 
                       text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />{" "}
                  <polyline points="10 17 15 12 10 7" />{" "}
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
                <span className="ml-4">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
