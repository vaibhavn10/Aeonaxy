import React from "react";

const MobileMenu = () => {
  const closeMenu = () => {
    document.getElementById("mobile-menu").style.left = "-100%";
  };
  return (
    <div
      className="fixed top-0 -left-full w-screen h-screen block md:hidden bg-white z-50 duration-200"
      id="mobile-menu"
    >
      <div className="flex flex-col">
        <div className="flex justify-between items-center px-8 border-b border-pink-100">
          <div className="py-6 text-2xl text-zinc-700 font-bold">Menu</div>
          <button className="" onClick={closeMenu}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="flex flex-col px-8 py-8 gap-4 border-b">
          <div className="relative flex items-center gap-4">
            <input
              type="text"
              className="h-9 w-full pl-4 text-sm rounded-lg bg-zinc-200 border-0 text-zinc-400 focus:text-slate-900 focus:ring-gray-300"
              placeholder="Search"
            />
            <button className="px-3 py-2 bg-zinc-200 text-zinc-400 text-sm rounded-full">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="w-full">
            <label
              htmlFor="upload"
              className="block text-center w-full sm:w-44 px-4 py-2 text-sm bg-pink-500 rounded-lg text-white font-medium cursor-pointer"
            >
              Upload
            </label>
            <input type="file" className="hidden" id="upload" />
          </div>
        </div>
        <div className="flex flex-col px-8 py-8 gap-4 border-b">
          <a
            href="/"
            className="text-md font-semibold text-zinc-600 hover:text-pink-500 duration-200"
          >
            Inspiration
          </a>
          <a
            href="/"
            className="text-md font-semibold text-zinc-600 hover:text-pink-500 duration-200"
          >
            Find Work
          </a>
          <a
            href="/"
            className="text-md font-semibold text-zinc-600 hover:text-pink-500 duration-200"
          >
            Learn Design
          </a>
          <a
            href="/"
            className="text-md font-semibold text-zinc-600 hover:text-pink-500 duration-200"
          >
            Go Pro
          </a>
          <a
            href="/"
            className="text-md font-semibold text-zinc-600 hover:text-pink-500 duration-200"
          >
            Hire Designers
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
