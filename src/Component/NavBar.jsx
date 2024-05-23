import React, { useState } from "react";
import Profile from "./Profile";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex w-full bg-white shadow-xl justify-center py-2 px-4 md:px-0 ">
      <div className="container md:flex md:justify-between md:items-center  ">
        <header className="flex items-center text-2xl justify-between w-full">
          <Profile profile={"profile-w-h"} title={"UMAR"} />
          <div className="text-xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="text-blue-600" />
            ) : (
              <FaBars className="text-blue-600" />
            )}
          </div>
        </header>
        <ul
          className={` md:pl-0 md:flex py-3 md:py-0 absolute md:static md:z-auto z-[2] left-0 w-full md:w-auto h-screen md:h-auto transition-all duration-500 ${
            isOpen ? "top-[3rem] bg-white" : "top-[-200%]"
          }`}
        >
          <li
            className="md:ml-2 p-2 uppercase text-sm font-medium cursor-pointer transistion-all duration-500 hover:bg-blue-500 hover:text-white text-blue-500 w-full md:w-auto pl-10 md:pl-0 tracking-wider"
            onClick={() => setIsOpen(false)}
          >
            About
          </li>
          <li
            className="md:ml-2 p-2 uppercase text-sm font-medium cursor-pointer transistion-all duration-500 hover:bg-blue-500 hover:text-white text-blue-500 w-full md:w-auto pl-10 md:pl-0 tracking-wider"
            onClick={() => setIsOpen(false)}
          >
            resume
          </li>
          <li
            className="md:ml-2 p-2 uppercase text-sm font-medium cursor-pointer transistion-all duration-500 hover:bg-blue-500 hover:text-white text-blue-500 w-full md:w-auto pl-10 md:pl-0 tracking-wider"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </li>
          <li
            className="md:ml-2 p-2 uppercase text-sm font-medium cursor-pointer transistion-all duration-500 hover:bg-blue-500 hover:text-white text-blue-500 w-full md:w-auto pl-10 md:pl-0 tracking-wider"
            onClick={() => setIsOpen(false)}
          >
            contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
