"use client";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  const pathname = usePathname();
  return (
    <div>
      <Sidebar pathname={pathname} />
      {/* Rest of the layout */}
      {children}
    </div>
  );
};

export default Layout;
