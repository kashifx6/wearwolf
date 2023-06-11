import Cards from "@/components/common/cards";
import ReportGraph from "@/components/admin/reportgraph";
import React from "react";
import NewUsers from "@/components/admin/newusers";
import Layout from "@/components/admin/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div>
        <div className="md:ml-[280px] content p-3">
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
    </Layout>
  );
};

export default Dashboard;
