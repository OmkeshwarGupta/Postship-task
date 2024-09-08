import React from "react";
import { CiCalendar } from "react-icons/ci";
import { useState } from "react";
import { CChart } from "@coreui/react-chartjs";
import { getStyle } from "@coreui/utils";

const PerformanceSection = () => {
  const [selectedTime, setSelectedTime] = useState("Lifetime");

  const [selectedStatus, setSelectedStatus] = useState("Delivered");

  const buttons = [
    "Lifetime",
    "Last Week",
    "Last Month",
    "Last Year",
    "Customize Time Line",
  ];

  const status = [
    "Delivered",
    "Out for delivery",
    "Intransit",
    "Pending",
    "Exception",
  ];

  return (
    <div className="bg-[#FFF7EE] flex justify-center items-center pb-16 ">
      <div className="w-[1281px] px-20 ">
        <h1 className="text-2xl font-bold py-10 text-[#4A4A4A]">
          Instant Dive into Your Performance Metrics
        </h1>

        <div className="text-[#4A4A4A] space-x-2 text-[13px] font-[650]">
          {buttons.map((button) => (
            <button
              key={button}
              onClick={() => setSelectedTime(button)}
              className={`px-3 py-2 rounded transition ${
                selectedTime === button
                  ? "bg-[#f8f7ff] border-2 border-[#8051FF]" // Styles for the selected button
                  : "bg-white"
              }`}
            >
              {button}
              {button === "Customize Time Line" && (
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block ml-3"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.75 1.5C4.75 1.08579 4.41421 0.75 4 0.75C3.58579 0.75 3.25 1.08579 3.25 1.5V1.90665C3.00413 1.96421 2.77128 2.04472 2.54754 2.15873C1.84193 2.51825 1.26825 3.09193 0.908726 3.79754C0.682385 4.24175 0.588026 4.7219 0.543364 5.26853C0.499987 5.79944 0.499993 6.45505 0.5 7.26789V8.73211C0.499993 9.54494 0.499987 10.2006 0.543364 10.7315C0.588026 11.2781 0.682385 11.7582 0.908726 12.2025C1.26825 12.9081 1.84193 13.4817 2.54754 13.8413C2.99175 14.0676 3.4719 14.162 4.01853 14.2066C4.54944 14.25 5.20505 14.25 6.01788 14.25L9.40133 14.25C9.72358 14.25 9.94299 14.2501 10.1364 14.23C11.9018 14.0472 13.2972 12.6518 13.48 10.8864C13.5001 10.693 13.5 10.4736 13.5 10.1514L13.5 7.26788C13.5 6.45505 13.5 5.79944 13.4566 5.26853C13.412 4.7219 13.3176 4.24175 13.0913 3.79754C12.7317 3.09193 12.1581 2.51825 11.4525 2.15873C11.2287 2.04472 10.9959 1.96421 10.75 1.90665V1.5C10.75 1.08579 10.4142 0.75 10 0.75C9.58579 0.75 9.25 1.08579 9.25 1.5V1.75859C8.87652 1.74999 8.45604 1.75 7.98211 1.75H6.0179C5.54396 1.75 5.12348 1.74999 4.75 1.75859V1.5ZM3.22852 3.49524C3.42604 3.3946 3.68681 3.32547 4.14068 3.28838C4.60331 3.25058 5.19755 3.25 6.05 3.25H7.95C8.80245 3.25 9.39669 3.25058 9.85932 3.28838C10.3132 3.32547 10.574 3.3946 10.7715 3.49524C11.1948 3.71095 11.5391 4.05516 11.7548 4.47852C11.8554 4.67604 11.9245 4.9368 11.9616 5.39068C11.9764 5.57123 11.9855 5.77183 11.991 6H2.00895C2.01455 5.77183 2.02363 5.57123 2.03838 5.39068C2.07547 4.9368 2.1446 4.67604 2.24524 4.47852C2.46095 4.05516 2.80516 3.71095 3.22852 3.49524ZM2 7.5V8.7C2 9.55245 2.00058 10.1467 2.03838 10.6093C2.07547 11.0632 2.1446 11.324 2.24524 11.5215C2.46095 11.9448 2.80516 12.289 3.22852 12.5048C3.42604 12.6054 3.68681 12.6745 4.14068 12.7116C4.60331 12.7494 5.19755 12.75 6.05 12.75H9.35571C9.74066 12.75 9.87595 12.749 9.98184 12.738C11.0411 12.6283 11.8783 11.7911 11.988 10.7318C11.999 10.6259 12 10.4907 12 10.1057V7.5H2Z"
                    fill="#4A4A4A"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>

        <div className="mt-12 flex justify-center items-center gap-4">
          {/* shipment */}
          <div className="w-[448px] h-[368px] bg-white rounded-lg shadow-custom-combined overflow-hidden ">
            <div className="w-[416px] overflow-hidden pt-4 pl-4 space-y-4">
              <div className="flex justify-between items-center   ">
                <h3 className="text-[14px] font-[650]">Shipment Updates</h3>

                <p className="text-[14px] font-[450]">Total Orders : 394</p>
              </div>

              <div className="w-[497px] flex  items-center  gap-2 text-[13px] font-[650] text-[#4A4A4A]">
                {status.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSelectedStatus(item)}
                    className={`px-3 py-2 rounded transition ${
                      selectedStatus === item
                        ? "bg-[#FFF7EE] border " // Styles for the selected button
                        : " bg-[#F1F1F1]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center my-6">
              <CChart
                className="h-[160px]"
                type="doughnut"
                data={{
                  datasets: [
                    {
                      backgroundColor: [
                        "#FFDDB6", // Delivered
                        "#FFC879", // Out for delivery
                        "#E5A500", // Intransit
                        "#956F00", // Pending
                        "#5E4200", // Exception
                      ],
                      data: [20, 40, 40, 30, 50],
                    },
                  ],
                }}
                options={{
                  cutout: 30,
                  rotation: 60 * Math.PI,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
            <div className="pl-3 grid grid-cols-3 space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <span className="block  w-[20px] h-[10px] rounded-md bg-[#5E4200]"></span>
                <span>Exception</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="block  w-[20px] h-[10px] rounded-md bg-[#956F00]"></span>
                <span>Intransit</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="block  w-[20px] h-[10px] rounded-md bg-[#E5A500]"></span>
                <span>Pending</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="block w-[20px] h-[10px] rounded-md bg-[#FFC879]"></span>
                <span>Delivered</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="block w-[20px] h-[10px] rounded-md bg-[#FFDDB6]"></span>
                <span >Out for delivery</span>
              </div>
            </div>

            <div></div>
          </div>

          {/* Order */}
          <div className="w-[216px] h-[368px] bg-[#956F00] rounded-lg relative  overflow-hidden p-4">
            <div className="w-[156px]">
              <h2 className="text-[14px] font-[650] text-white">
                Star Facts about your orders!!!
              </h2>
              <div className=" h-[256px] text-[13px] font-[450] text-white flex flex-col justify-evenly items-center">
                <p>
                  There are 8 shipments that have been in out for delivery for
                  more than 3 days.
                </p>
                <p>There are 5 shipments in exception right now</p>
                <p>The maximum chargebacks are from Miami.</p>
              </div>
              <button className="w-[136px] h-[28px] bg-white text-[12px] shadow-custom-combined-2 font-[550] rounded-lg">
                {" "}
                Check Orders Page
              </button>
            </div>

            <div className="w-[70px] h-[70px] bg-[#FFEBD5] rounded-full absolute bottom-[114px] left-[149px] opacity-20 circle "></div>
          </div>

          {/* Tracking */}
          <div className="w-[448px] h-[368px] bg-white rounded-lg shadow-custom-combined p-4  ">
            <div className="space-y-2">
              <h2 className="text-[14px] font-[650]">
                Tracking Page Views Vs Orders
              </h2>
              <p className="text-[13px] font-[450]">
                {" "}
                Understand user engagement patterns and optimize your tracking
                page for enhanced customer experiences.
              </p>
            </div>
            <div className="w-[415px] h-[228px] flex flex-col justify-between mt-6  ">
              <div className="bg-[#FFEBD5] h-[104px] rounded-md text-[#4A4A4A] relative pl-4 pt-4 ">
                <p className="font-[550] text-[12px] ">Orders</p>
                <p className="text-[36px] font-bold">80</p>

                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-[39px] bottom-[24px]"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5315 0.800003C6.71472 0.800003 3.47395 3.59602 2.91461 7.37158L1.0645 19.8598C0.888398 21.0485 0.799988 22.2486 0.799988 23.4503V28.1C0.799988 33.1258 4.8742 37.2 9.89999 37.2H28.1C33.1258 37.2 37.2 33.1258 37.2 28.1V23.4503C37.2 22.2486 37.1116 21.0485 36.9355 19.8598L35.0854 7.37158C34.526 3.59602 31.2853 0.800003 27.4685 0.800003H10.5315ZM7.06927 7.98708C7.32351 6.27092 8.79659 5 10.5315 5H27.4685C29.2034 5 30.6765 6.27092 30.9307 7.98709L32.5623 19H25.6091C24.1025 19 22.7651 19.964 22.2887 21.3932L21.8459 22.7214C21.7507 23.0072 21.4832 23.2 21.1819 23.2H16.8181C16.5168 23.2 16.2493 23.0072 16.154 22.7214L15.7113 21.3932C15.2349 19.964 13.8974 19 12.3909 19H5.43772L7.06927 7.98708ZM5.00153 23.2C5.0005 23.2834 4.99999 23.3668 4.99999 23.4503V28.1C4.99999 30.8062 7.19379 33 9.89999 33H28.1C30.8062 33 33 30.8062 33 28.1V23.4503C33 23.3668 32.9995 23.2834 32.9984 23.2H26.1136L25.8304 24.0495C25.1635 26.0504 23.291 27.4 21.1819 27.4H16.8181C14.709 27.4 12.8365 26.0504 12.1696 24.0495L11.8864 23.2H5.00153Z"
                    fill="#4A4A4A"
                  />
                </svg>
              </div>

              <div className="bg-[#FFC879] h-[104px] rounded-md text-[#4A4A4A] relative pl-4 pt-4 ">
              <p className="font-[550] text-[12px] ">Tracking Page Views                                  </p>
              <p className="text-[36px] font-bold">44</p>
                <svg
                  width="45"
                  height="36"
                  viewBox="0 0 45 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                   className="absolute right-[39px] bottom-[24px]"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M31.3 17.6C31.3 22.4601 27.3601 26.4 22.5 26.4C17.6399 26.4 13.7 22.4601 13.7 17.6C13.7 12.7399 17.6399 8.8 22.5 8.8C27.3601 8.8 31.3 12.7399 31.3 17.6ZM26.9 17.6C26.9 20.0301 24.9301 22 22.5 22C20.0699 22 18.1 20.0301 18.1 17.6C18.1 15.1699 20.0699 13.2 22.5 13.2C24.9301 13.2 26.9 15.1699 26.9 17.6Z"
                    fill="#4A4A4A"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.5 0C15.2357 0 9.74448 3.60732 6.13976 7.42768C4.33527 9.34011 2.9645 11.3433 2.03497 13.0664C1.57031 13.9278 1.20321 14.7427 0.946587 15.4636C0.70953 16.1296 0.5 16.8966 0.5 17.6C0.5 18.3034 0.70953 19.0704 0.946587 19.7364C1.20321 20.4573 1.57031 21.2722 2.03497 22.1336C2.9645 23.8567 4.33527 25.8599 6.13976 27.7723C9.74448 31.5927 15.2357 35.2 22.5 35.2C29.7643 35.2 35.2555 31.5927 38.8602 27.7723C40.6647 25.8599 42.0355 23.8567 42.965 22.1336C43.4297 21.2722 43.7968 20.4573 44.0534 19.7364C44.2905 19.0704 44.5 18.3034 44.5 17.6C44.5 16.8966 44.2905 16.1296 44.0534 15.4636C43.7968 14.7427 43.4297 13.9278 42.965 13.0664C42.0355 11.3433 40.6647 9.34011 38.8602 7.42768C35.2555 3.60732 29.7643 0 22.5 0ZM4.90414 17.6061L4.90301 17.6L4.90414 17.5939C4.91493 17.5358 4.9536 17.3274 5.09183 16.9391C5.25988 16.467 5.52838 15.8581 5.90745 15.1554C6.66538 13.7504 7.81455 12.0641 9.34003 10.4473C12.3952 7.20935 16.804 4.4 22.5 4.4C28.196 4.4 32.6048 7.20935 35.66 10.4473C37.1854 12.0641 38.3346 13.7504 39.0926 15.1554C39.4716 15.8581 39.7401 16.467 39.9082 16.9391C40.0464 17.3274 40.0851 17.5358 40.0959 17.5939L40.097 17.6L40.0959 17.6061C40.0851 17.6642 40.0464 17.8726 39.9082 18.2609C39.7401 18.733 39.4716 19.3419 39.0926 20.0446C38.3346 21.4496 37.1854 23.1359 35.66 24.7527C32.6048 27.9907 28.196 30.8 22.5 30.8C16.804 30.8 12.3952 27.9907 9.34003 24.7527C7.81455 23.1359 6.66538 21.4496 5.90745 20.0446C5.52838 19.3419 5.25988 18.733 5.09183 18.2609C4.9536 17.8726 4.91493 17.6642 4.90414 17.6061Z"
                    fill="#4A4A4A"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;
