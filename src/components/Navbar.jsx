import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { useState } from "react";

const Navbar = () => {
    const [selected, setSelected] = useState("Home"); 
    const links = ["Home", "Orders", "Integrations", "Tracking Page", "Partner with Us"];
  

  return (
    <div className="border border-[#8A8A8A] shadow-md flex justify-center items-center fixed w-full bg-white z-10">
      <div className=" w-[1281px] h-[56px]  flex justify-between items-center px-20 text-[14px] ">
        <div>
          <ul className="flex justify-center items-center gap-8 text-[#4A4A4A] font-[650] ">
            {links.map((link) => (
              <li key={link} >
                <a
                  href="#"
                  onClick={() => setSelected(link)} // Update selected state
                >
                  {link}
                </a>
                {selected === link && (
                  <div className="  w-[60%]  border-b-2 border-[#8051FF]" />
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className=" flex justify-center items-center gap-8 text-[#616161]">
          <div className="flex justify-center items-center relative">
            <IoIosSearch size={15} className="absolute left-1 " />
            <input
              type="text"
              placeholder="Search"
              className=" border-b border-[#4A4A4A] pl-5 w-[120px] z-10 bg-transparent"
            />
          </div>
          <button className="flex justify-center items-center gap-1 font-[650]">
            <IoPersonOutline size={15} />
            Account
          </button>
          <button className="flex justify-center items-center gap-1 font-[650]">
            <CiSettings size={20} />
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
