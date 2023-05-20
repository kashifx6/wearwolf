import Card from "@/components/common/card";
import Navbar from "@/components/common/navbar";
import Sidefilter from "@/components/sidefilter";
import React from "react";

const AllProducts = () => {
  return (
    <>
      <Navbar />
    
        <div className="sidebar lg:h-screen lg:overflow-y-auto lg:fixed lg:top-12 lg:left-0 lg:z-40 ">
          <Sidefilter />
        </div>
        <div className="flex justify-center  flex-wrap ml-0 md:ml-[310px] lg:ml-[360px]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
     
    </>
  );
};

export default AllProducts;
