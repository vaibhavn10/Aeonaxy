import React from "react";
import logo2 from "../assets/logo2.png";

const Footer = () => {
  return (
    <div className="flex w-full bg-white">
      <footer className="w-full text-gray-700 bg-zinc-100 body-font">
        <div className="container flex flex-col items-center lg:justify-start flex-wrap px-4 md:px-16 lg:px-24 py-10 md:py-16 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex flex-wrap flex-1 flex-row xl:flex-col items-center xl:items-start py-6 xl:py-0 gap-2 justify-center lg:justify-start md:gap-2 xl:gap-0 w-full lg:w-64 mx-auto text-center md:mx-0 md:text-left">
            <a
              href="/"
              className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start"
            >
              <img src={logo2} alt="logo2" className="h-10" />
            </a>
            <p className="mt-2 text-sm text-zinc-700">
              Dribbble is the world's leading community for creatives to share,
              grow, and get hired.
            </p>
            <div className="mt-4">
              <span className="flex gap-4 justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <a
                  href="/"
                  className="text-zinc-600 cursor-pointer hover:text-zinc-800"
                >
                  <i className="fa-brands fa-dribbble"></i>
                </a>
                <a
                  href="/"
                  className="text-zinc-600 cursor-pointer hover:text-zinc-800"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="/"
                  className="text-zinc-600 cursor-pointer hover:text-zinc-800"
                >
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
                <a
                  href="/"
                  className="text-zinc-600 cursor-pointer hover:text-zinc-800"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="/"
                  className="text-zinc-600 cursor-pointer hover:text-zinc-800"
                >
                  <i className="fa-brands fa-pinterest"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left gap-y-4">
            <div className="px-4 lg:w-44 sm:w-1/3 md:w-1/2 w-full">
              <h2 className="mb-3 text-sm font-bold text-gray-900 title-font">
                For designers
              </h2>
              <nav className="mb-6 list-none flex flex-col gap-2">
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Go Pro!
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Explore design
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Design blog
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Overtime podcast
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Playoffs
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Weekly Warm-Up
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Refer a Friend
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Code of conduct
                  </a>
                </li>
              </nav>
            </div>
            <div className="px-4 lg:w-44 sm:w-1/3 md:w-1/2 w-full">
              <h2 className="mb-3 text-sm font-bold text-gray-900 title-font">
                Hire designers
              </h2>
              <nav className="mb-6 list-none flex flex-col gap-2">
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Post a job opening
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Post a freelance project
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Search for designers
                  </a>
                </li>
              </nav>
              <h2 className="mb-3 text-sm font-bold text-gray-900 title-font">
                Brands
              </h2>
              <nav className="mb-6 list-none flex flex-col gap-2">
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Advertise with us
                  </a>
                </li>
              </nav>
            </div>
            <div className="px-4 lg:w-44 sm:w-1/3 md:w-1/2 w-full">
              <h2 className="mb-3 text-sm font-bold text-gray-900 title-font">
                Company
              </h2>
              <nav className="mb-6 list-none flex flex-col gap-2">
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Careers
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Suppot
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Media kit
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Testimonials
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    API
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Terms of service
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Privacy policy
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Cookie policy
                  </a>
                </li>
              </nav>
            </div>
            <div className="px-4 lg:w-44 sm:w-1/3 md:w-1/2 w-full">
              <h2 className="mb-3 text-sm font-bold text-gray-900 title-font">
                Directories
              </h2>
              <nav className="mb-6 list-none flex flex-col gap-2">
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Design jobs
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Designers for hire
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Freelance designers for hire
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Tags
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Places
                  </a>
                </li>
              </nav>
              <h2 className="mb-3 text-sm font-bold text-gray-900 title-font">
                Design assets
              </h2>
              <nav className="mb-6 list-none flex flex-col gap-2">
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Dribbble Marketplace
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Creative Market
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Fontspring
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Font Squirrel
                  </a>
                </li>
              </nav>
            </div>
            <div className="px-4 lg:w-44 sm:w-1/3 md:w-1/2 w-full">
              <h2 className="mb-3 text-sm font-bold text-gray-900 title-font">
                Design Resources
              </h2>
              <nav className="mb-6 list-none flex flex-col gap-2">
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Freelancing
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Design Hiring
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Design Portfolio
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Design Education
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Creative Process
                  </a>
                </li>
                <li className="">
                  <a
                    href="/"
                    className="text-sm text-zinc-600 title-font cursor-pointer hover:text-gray-900"
                  >
                    Design Industry Trends
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-zinc-100 border-t border-zinc-200">
          <div className="container px-5 py-4 mx-auto flex flex-col items-center sm:flex-row justify-between">
            <p className="text-sm text-slate-700 capitalize">
              © 2020 All rights reserved{" "}
            </p>
            <p className="text-xs sm:text-sm text-slate-700 capitalize">
              <span className="font-bold">20,501,853</span> shots dribbbled {" "}
              <i className="fa-brands fa-dribbble text-pink-600 bg-pink-400 rounded-full text-lg flex items-center justify-center"></i> 
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
