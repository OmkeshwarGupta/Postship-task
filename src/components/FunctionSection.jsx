import React from "react";
import Paypal from "../assets/paypal.png";
import Star from "../assets/star.png";
import Thunder from "../assets/thunder.png";
import Bar from "../assets/bar.png";
import Chain from "../assets/chain.png";

const FunctionSection = () => {
  const images = [Paypal, Star, Thunder, Bar, Chain];

  return (
    <div className="flex justify-center items-center pb-40 text-[#4A4A4A] ">
      <div className="w-[1281px] px-20">
        <h1 className="text-2xl font-bold py-10 ">
          Discover the Heart of Our Functionality
        </h1>
        <div className=" flex justify-center items-start gap-4">
          {/* First card */}
          <div className="w-[332px] h-[408px] bg-white shadow-custom-combined rounded-2xl pl-4 pt-4 space-y-5">
            <div className="w-[300px] h-[324px] space-y-4 ">
              <div className="w-[300px] h-[108px] space-y-2 ">
                <h2 className="text-[14px] font-[650]">
                  Elevate Your Brand Aesthetics with Custom Tracking Page Styles
                </h2>
                <p className="text-[14px] font-[450]">
                  Immerse your customers in a branded experience by
                  personalizing the colors on your tracking page.{" "}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-[14px] font-[450]">Accent Color</p>
                <div className="flex justify-start items-center gap-2 relative">
                  <div className="w-[220px] h-8 bg-[#FDFDFD] border-[0.66px] border-[#8A8A8A] rounded-lg flex justify-start items-center ">
                    <p className="text-[14px] font-[450] pl-4">FF9898</p>
                  </div>
                  <div className="w-16 h-8     bg-[#FF9898] rounded-lg"></div>
                </div>

                <p className="text-[14px] font-[450]">Text Color</p>
                <div className="flex justify-start items-center gap-2">
                  <div className="w-[220px] h-8 bg-[#FDFDFD] border-[0.66px] border-[#8A8A8A] rounded-lg flex justify-start items-center ">
                    <p className="text-[14px] font-[450] pl-4">571010</p>
                  </div>
                  <div className="w-16 h-8 bg-[#571010] rounded-lg"></div>
                </div>

                <p className="text-[14px] font-[450]">Background Color </p>
                <div className="flex justify-start items-center gap-2 ">
                  <div className="w-[220px] h-8 bg-[#FDFDFD] border-[0.66px] border-[#8A8A8A] rounded-lg flex justify-start items-center ">
                    <p className="text-[14px] font-[450] pl-4">FFEAEA</p>
                  </div>
                  <div className="w-16 h-8 bg-[#FFEAEA] rounded-lg"></div>
                </div>
              </div>
            </div>

            <div className="flex justify-start items-center gap-2">
              <button className="w-[70px] h-[28px] bg-white hover:bg-[#fffdfa] text-[12px] shadow-custom-combined hover:shadow-custom-combined-2 font-[550] rounded-lg">
                Preview
              </button>
              <button className="w-[100px] h-[28px] bg-[#303030] hover:bg-black  text-[12px] text-white font-[500] rounded-lg">
                Apply Colors
              </button>
            </div>
          </div>

          {/* 2nd and 3rd card */}
          <div className=" h-full flex flex-col gap-4   ">
            {/* 2nd card */}
            <div className="w-[448px] h-[152px] bg-white shadow-custom-combined rounded-2xl  flex flex-col justify-between p-4">
              <div className="w-[416px] h-[68px] space-y-2  ">
                <h2 className="text-[14px] font-[650]">
                  Exclusive Onboarding Support for High-Volume Brands
                </h2>
                <p className="text-[14px] font-[450]">
                  Unlock personalized guidance! Book a one-on-one onboarding
                  call to streamline your experience.
                </p>
              </div>
              <button className="w-[117px] h-[28px] bg-[#303030] hover:bg-black  text-[12px] text-white font-[500] rounded-lg">
                Schedule A Call
              </button>
            </div>

            {/* 3rd card */}

            <div className="w-[448px] h-[226px] bg-white shadow-custom-combined rounded-2xl  flex flex-col justify-between p-4 ">
              <div className="w-[416px] h-[68px] space-y-2  ">
                <h2 className="text-[14px] font-[650]">
                  Explore Our Integrated Ecosystem
                </h2>
                <p className="text-[14px] font-[450]">
                  Discover a variety of popular integrations tailored for your
                  convenience.
                </p>
              </div>
              <div className=" flex flex-col gap-8">
                <div className=" flex gap-6">
                  {images.map((image, index) => (
                    <img
                      src={image}
                      alt="image"
                      key={index}
                      className="w-[34px] h-[34px]"
                    />
                  ))}
                </div>
                <button className="w-[139px] h-[28px] bg-[#303030] hover:bg-black  text-[12px] text-white font-[500] rounded-lg">
                  Explore Integrations
                </button>
              </div>
            </div>
          </div>

          {/* 4th card */}
          <div className="w-[332px] h-[408px] bg-white shadow-custom-combined rounded-2xl ">
            <div className="flex flex-col gap-8 p-4">
              <div className="w-[300px] h-[108px] space-y-2 ">
                <h2 className="text-[14px] font-[650]">
                  Seamlessly Integrate Custom HTML Elements
                </h2>
                <p className="text-[14px] font-[450]">
                  Unleash creativity with our Custom HTML feature. Add links,
                  custom messages, or any HTML content to elevate the tracking
                  page experience for your customers.
                </p>
              </div>
              <div className="mt-6">
                <p className="text-[14px] font-[450]"> HTML Link</p>
                <div className="w-[300px] h-[128px] bg-[#FDFDFD] border-[0.66px] border-[#8A8A8A] rounded-lg flex justify-start p-2 ">
                  <p className="text-[14px] font-[450]">Value</p>
                </div>
              </div>

              <div className="flex justify-start items-center gap-2">
                <button className="w-[70px] h-[28px] bg-white hover:bg-[#fffdfa] text-[12px] shadow-custom-combined hover:shadow-custom-combined-2 font-[550] rounded-lg">
                  Preview
                </button>
                <button className="w-[100px] h-[28px] bg-[#303030] hover:bg-black  text-[12px] text-white font-[500] rounded-lg">
                  Apply Colors
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionSection;
