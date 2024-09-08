import React from "react";
import { IoWarningOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";

const WelcomeSection = () => {
  return (
    <div className="bg-[#fffdfa] flex justify-center items-center pb-16 pt-16">
      <div className="w-[1281px] px-20 ">
        <h2 className="text-2xl font-bold py-10 text-[#4A4A4A]">
          Welcome, John Mathew!!
        </h2>

        <div className="flex   items-center gap-4">
          <div className="w-[332px] h-[168px] bg-[#FFFFFF] shadow-custom-combined rounded-lg flex flex-col justify-evenly items-start gap-4 text-[#4A4A4A] pl-4">
            <div className="flex flex-col gap-2 w-[300px]">
              <h3 className="font-[650] text-[14px]">Order Sync Successful!</h3>
              <p className="text-[13px] font-[450] text-[#4A4A4A]">
                Your order details from the last 30 days have been successfully
                synced. Check them out now!
              </p>
            </div>
            <button className="w-[139px] h-[28px] bg-[#303030] hover:bg-black text-[12px] text-white font-[500] rounded-lg">
              Explore Your Orders
            </button>
          </div>
          <div className="w-[332px] h-[168px] bg-[#FFF8DB] shadow-custom-combined rounded-lg flex flex-col justify-evenly items-start gap-4 text-[#5E4200] pl-4">
            <div className="flex flex-col gap-2 w-[300px]">
              <h3 className="font-[650] text-[14px] flex gap-2 items-center">
                <IoWarningOutline size={16} />
                Customize Customer Notification
              </h3>
              <p className="text-[13px] font-[450] text-[#5E4200]">
                Tailor Your Email Experience: Set the Sender Email and Choose
                Notification Triggers
              </p>
            </div>
            <button className="w-[157px] h-[28px] bg-[#303030] hover:bg-black  text-[12px] text-white font-[500] rounded-lg">
              Configure Notifications
            </button>
          </div>
          <div className="w-[332px] h-[168px] bg-[#EAF4FF] shadow-custom-combined rounded-lg flex flex-col justify-evenly items-start gap-5 text-[#4A4A4A] pl-4">
            <div className="flex flex-col gap-2 w-[300px]">
              <h3  className="font-[650] text-[14px] flex gap-2 items-center">
                <IoMdInformationCircleOutline size={20} />
                Your Tracking Link has been generated
              </h3>
              <p className="text-[13px] font-[450] text-[#4A4A4A]">
                Include the <a href="#" className=" underline text-blue-600">Link</a> to Your Store's Navigation Menu.
              </p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <button className="w-[80px] h-[28px] bg-white hover:bg-[#fffdfa] text-[12px] shadow-custom-combined hover:shadow-custom-combined-2 font-[550] rounded-lg">
                Copy Link
              </button>
              <button className="w-[158px] h-[28px] bg-[#303030] hover:bg-black  text-[12px] text-white font-[500] rounded-lg">
                Go To Navigation Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
