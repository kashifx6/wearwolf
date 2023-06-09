import Cards from "@/components/common/cards";
import ReportGraph from "@/components/admin/reportgraph";
import React from "react";
import NewUsers from "@/components/admin/newusers";
import Sidebar from "@/components/admin/sidebar";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="ml-[280px] content p-3">
        <div className="cards">
          <Cards />
        </div>
        <div className="md:flex">
          <div className="w-full md:w-3/4">
            <ReportGraph />
          </div>
          <div className="w-full md:w-1/4 mx-2 ">
            <NewUsers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
