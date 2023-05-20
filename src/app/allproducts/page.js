import Card from "@/components/common/card";
import Navbar from "@/components/common/navbar";
import Sidefilter from "@/components/sidefilter";
import React from "react";

const AllProducts = () => {
  return (
    <>
      <Navbar />
    
        <div className="sidebar md:h-screen md:overflow-y-auto md:fixed md:top-15 lg:top-12 md:left-0 md:z-40 ">
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
