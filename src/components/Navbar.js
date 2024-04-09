import React from "react";
import navlogo from "../assets/navlogo.png";
import MobileMenu from "./MobileMenu";

const Navbar = (props) => {
  const { profileimg } = props;

  const mobileMenu = () => {
    document.getElementById("mobile-menu").style.left = "0px";
  };
  return (
    <div className="">
      <div className="flex flex-row px-4 md:px-8 py-4 w-full justify-between items-center border-b relative">
        <div className="flex items-center gap-4 md:gap-8">
          <button
            className="block md:hidden hover:bg-zinc-200 px-2 py-1 rounded-full duration-200"
            onClick={mobileMenu}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="">
            <img src={navlogo} alt="navlogo" className="h-10" />
          </div>
          <div className="hidden md:flex gap-6">
            <a
              href="/"
              className="text-sm font-semibold text-zinc-500 hover:text-pink-500 duration-200"
            >
              Inspiration
            </a>
            <a
              href="/"
              className="text-sm font-semibold text-zinc-500 hover:text-pink-500 duration-200"
            >
              Find Work
            </a>
            <a
              href="/"
              className="text-sm font-semibold text-zinc-500 hover:text-pink-500 duration-200"
            >
              Learn Design
            </a>
            <a
              href="/"
              className="text-sm font-semibold text-zinc-500 hover:text-pink-500 duration-200"
            >
              Go Pro
            </a>
            <a
              href="/"
              className="text-sm font-semibold text-zinc-500 hover:text-pink-500 duration-200"
            >
              Hire Designers
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex items-center">
            <div className="absolute left-2 text-zinc-400 text-sm">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              type="text"
              className="h-9 w-32 pl-7 text-sm rounded-lg bg-zinc-100 border-0 text-zinc-400 focus:text-slate-900 focus:ring-gray-300"
              placeholder="Search"
            />
          </div>
          <div className="text-zinc-500">
            <i className="fa-solid fa-briefcase"></i>
          </div>
          <div className="border h-8 w-8 rounded-full">
            <img
              src={profileimg}
              alt="profileimg"
              className="object-cover object-center rounded-full h-full w-full"
            />
          </div>
          <div className="hidden md:block">
            <label
              htmlFor="upload"
              className="px-4 py-2 text-sm bg-pink-500 rounded-lg text-white font-medium cursor-pointer"
            >
              Upload
            </label>
            <input type="file" className="hidden" id="upload" />
          </div>
        </div>
        <MobileMenu/>
        
      </div>
    </div>
  );
};

export default Navbar;
