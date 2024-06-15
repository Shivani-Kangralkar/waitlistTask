import React, { useState } from "react";
import { GoArrowSwitch } from "react-icons/go";
import { LuGlobe } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { GoInbox } from "react-icons/go";
import { GoHourglass } from "react-icons/go";
import { MdOutlineDashboard } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { FiHelpCircle } from "react-icons/fi";
import { BsBoxArrowUpRight } from "react-icons/bs";

const menuItems = [
  {
    icons: <GoInbox size={20} />,
    label: "Orders",
  },
  {
    icons: <img src="./Frame.png" />,
    label: "Subscriptions",
  },
  {
    icons: <SlCalender size={20} />,
    label: "Calendar",
  },
  {
    icons: <GoHourglass size={20} />,
    label: "Waitlist",
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <nav
      className={`shadow-md h-screen p-2 flex flex-col duration-500 bg-custom-bg ${
        open ? "w-60" : "w-16"
      }`}
    >
      <div className="flex justify-between items-center  p-2 h-16">
        <img
          src="./logo.png"
          alt="logo image"
          className=" h-5 w-5"
          onClick={() => setOpen(true)}
        />
        <h1 className={`text-lg font-bold font-poppins mr-4 `}>
          {open ? "Front-Desk" : ""}
        </h1>
        {open && (
          <img
            src="./s1.png"
            alt="sidebarIcon"
            size={34}
            className={` items-end duration-500 cursor-pointer`}
            onClick={() => setOpen(!open)}
          />
        )}
      </div>

      <div className="flex justify-between items-center shadow-lg bg-white p-3 rounded-lg mt-1">
        {open ? (
          <>
            <h1 className="text-xs font-medium">Location Name</h1>
            <GoArrowSwitch className=" w-4 h-4" />
          </>
        ) : (
          <GoArrowSwitch className=" w-4 h-4" />
        )}
      </div>

      <div
        className={`ml-2 items-center bg-slate-50 p-1 rounded-lg mt-1 shadow ${
          open ? "w-48" : "w-8 p-2"
        }`}
      >
        {open ? (
          <div>
            <div className="flex">
              <h1 className="text-md font-bold">08:30 AM</h1>
              <h1 className="ml-2">Tue 20 Jan</h1>
            </div>

            <div className="flex mt-2 items-center mb-1 justify-start">
              <LuGlobe size={15} />
              <h1 className="text-xs ml-2">UTC : +5 hours</h1>
              <IoIosArrowDown className=" w-4 h-4 ml-12" />
            </div>
          </div>
        ) : (
          <LuGlobe size={15} className="" />
        )}
      </div>

      <ul className=" flex-row">
        {menuItems.map((item, index) => {
          return (
            <li
              key={index}
              className="px-3 py-2 my-1
               hover:bg-white rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group"
            >
              <div>{item.icons}</div>
              <p
                className={`${
                  !open && "w-0 translate-x-24"
                } duration-500 overflow-hidden`}
              >
                {item.label}
              </p>
              <p
                className={`${
                  open && "hidden"
                } absolute left-32 shadow-md rounded-md
                 w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16
                `}
              >
                {item.label}
              </p>
            </li>
          );
        })}
      </ul>

      {/* footer */}
      <div
        className={`flex flex-col items-center mt-auto w-full ${
          open ? "48" : "w-10"
        }`}
      >
        {open ? (
          <div className="flex items-center justify-between w-full px-2 mb-4">
            <MdOutlineDashboard />
            <h4 className="mr-20">Dashboard</h4>
            <BsBoxArrowUpRight />
          </div>
        ) : (
          <BsBoxArrowUpRight className="flex justify-center w-full" />
        )}

        <div
          className={`flex items-center shadow bg-white p-3 rounded-lg mt-1 ${
            open ? "w-full" : "w-10 mt-8"
          }`}
        >
          {open ? (
            <div className="flex items-center w-full">
              <RxAvatar size={25} />
              <div className="ml-2 text-xs">
                <h1 >Admin name</h1>
                <h1 >admin@gmail.com</h1>
              </div>
              <IoIosArrowDown size={15} className="ml-auto" />
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <RxAvatar size={15} />
            </div>
          )}
        </div>

        <div className="flex items-center mt-2 w-full py-3 px-2 ml-4">
          <FiHelpCircle size={15}/>
          {open && (
            <div className="text-xs ml-2">
              <h1>Help center</h1>
              <h1>@2024 Omnify.Inc.</h1>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
