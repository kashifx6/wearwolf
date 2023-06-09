"use client"; //add client-side interactivity to your application

import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, LinearScale } from "chart.js/auto";

Chart.register(LinearScale);
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug"],
  datasets: [
    {
      label: "Number of New Products",
      data: [15, 10, 20, 25, 10, 20, 12, 5],
      backgroundColor: "#eab308",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
    x: {
      ticks: {
        autoSkip: false,
        maxRotation: 0,
        minRotation: 0,
      },
    },
  },
  maintainAspectRatio: false,
};

const ReportGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const resizeChart = () => {
      if (chartRef.current && chartRef.current.chartInstance) {
        chartRef.current.chartInstance.resize();
      }
    };

    window.addEventListener("resize", resizeChart);

    return () => {
      window.removeEventListener("resize", resizeChart);
    };
  }, []);

  return (
    <div className="w-full h-[350px] md:h-[500px]  bg-gray-100 p-3 rounded shadow">
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default ReportGraph;
