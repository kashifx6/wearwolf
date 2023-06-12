"use client";
import Cards from "@/components/common/cards";
import ReportGraph from "@/components/admin/reportgraph";
import NewUsers from "@/components/admin/newusers";
import Layout from "@/components/admin/Layout";
import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import LatestOrders from "@/components/admin/latestorders";

const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [latestOrders, setlatestOrders] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    // Set isVisible to true after a delay to trigger exit animation
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust the delay as needed
  }, []);

  // latest users
  useEffect(() => {
    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setlatestOrders(true);
            } else {
              setlatestOrders(false);
            }
          });
        },
        {
          threshold: 0.5, // Adjust the threshold as needed
        }
      );

      observer.observe(sectionRef.current);

      return () => {
        observer.unobserve(sectionRef.current);
      };
    }, 600);
  }, []);

  return (
    <Layout>
      <div className="md:ml-[280px] content p-3">
        <div className="cards">
          <Cards />
        </div>

        <div className="md:flex mb-4">
          <CSSTransition
            in={isVisible}
            timeout={500}
            classNames="slide-up"
            unmountOnExit
          >
            <div className="w-full md:w-3/4">
              <ReportGraph />
            </div>
          </CSSTransition>
          <CSSTransition
            in={isVisible}
            timeout={500}
            classNames="slide-right"
            unmountOnExit
          >
            <div className="w-full md:w-1/4 mx-2 ">
              <NewUsers />
            </div>
          </CSSTransition>
        </div>
        <div>
          <div ref={sectionRef}>
            <CSSTransition
              in={latestOrders}
              timeout={500}
              classNames="fade"
              unmountOnExit
            >
              <div className="latestOrders">
                <LatestOrders />
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
