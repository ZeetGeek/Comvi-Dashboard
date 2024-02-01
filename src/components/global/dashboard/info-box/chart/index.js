"use client";

import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const LineChart = ({ chart_data, type }) => {
     const chartRef = useRef();

     useEffect(() => {
          const ctx = chartRef.current.getContext("2d");
          const myChart = new Chart(ctx, {
               type: "line",
               data: {
                    labels: [
                         "January",
                         "February",
                         "March",
                         "April",
                         "May",
                         "June",
                         "July",
                         "Aug",
                         "Sup",
                         "Oct",
                         "Nov",
                         "Dec",
                    ],
                    datasets: [
                         {
                              data: chart_data,
                              fill: true,
                              backgroundColor:
                                   type === "increment" ? "#E8FAF8" : "#FCEBEA",
                              borderColor:
                                   type === "increment" ? "#15CAB8" : "#E2362F",
                              tension: 0.4,
                         },
                    ],
               },
               options: {
                    plugins: {
                         legend: {
                              display: false,
                         },
                    },
                    scales: {
                         x: {
                              display: false,
                         },
                         y: {
                              display: false,
                         },
                    },
                    elements: {
                         point: {
                              radius: false,
                         },
                         line: {
                              borderWidth: 2,
                         },
                    },
                    layout: {
                         padding: {
                              left: 0,
                              right: 0,
                              top: 0,
                              bottom: 0,
                         },
                    },
               },
          });

          return () => {
               myChart.destroy();
          };
     }, []);

     return (
          <canvas ref={chartRef} style={{ width: "131px", height: "75px" }} />
     );
};

export default LineChart;

//
