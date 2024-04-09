import React, { useState } from "react";
import checkimg1 from "../assets/check1.png";
import checkimg2 from "../assets/check2.png";
import checkimg3 from "../assets/check3.png";

const Status = () => {
  const [check1, setcheck1] = useState(false);
  const [check2, setcheck2] = useState(false);
  const [check3, setcheck3] = useState(false);

  const checkbox = (e) => {
    if (e.target.id) {
      if (e.target.id === "check1") {
        setcheck1(e.target.checked);
      } else if (e.target.id === "check2") {
        setcheck2(e.target.checked);
      } else if (e.target.id === "check3") {
        setcheck3(e.target.checked);
      }
    }
  };

  const verify=()=>{
    setTimeout(() => {
      document.getElementById("status").style.display = "none";
      document.getElementById("topbar").style.display = "none";
      document.getElementById("verify").style.display = "block";      
    }, 1000);
  }

  return (
    <div
      className="flex flex-col md:w-2/3 px-4 md:px-12 space-y-8 hidden"
      id="status"
    >
      <div className="flex flex-col space-y-4 text-center">
        <div className="text-3xl font-extrabold text-slate-800">
          What brings you to Dribbble?
        </div>
        <div className="text-sm text-gray-500">
          Select the options that best describe you. Don't worry you can explore
          other options later.
        </div>
      </div>
      <div className="flex flex-row justify-center flex-wrap gap-6 pt-8 md:pt-12">
        <label
          className={`flex flex-row-reverse md:flex-col items-center justify-between gap-6 md:gap-0 md:justify-end w-full md:w-56 h-32 md:h-56 border px-4 py-4 rounded-xl cursor-pointer hover:scale-105 ${
            check1
              ? "border-2 border-pink-500 bg-white duration-0"
              : "border-gray-100 duration-200"
          }`}
          htmlFor="check1"
          onClick={(e) => {
            checkbox(e);
          }}
        >
          <div className="">
            <img src={checkimg1} alt="check1" className="w-32 md:w-full" />
          </div>
          <div className="flex flex-row-reverse md:flex-col items-center gap-4">
            <div className="text-center text-sm text-slate-800 font-bold">
              I'm a designer looking to share my work
            </div>
            {check1 && (
              <div className={`text-center text-xs text-gray-500 `}>
                With over 7 million shots from a vast community of designers,
                Dribbble is the leading source for design inspiration.
              </div>
            )}
            <input
              type="checkbox"
              className="rounded-xl text-pink-600 focus:ring-pink-500 p-2"
              id="check1"
            />
          </div>
        </label>
        <label
          className={`flex flex-row-reverse md:flex-col items-center justify-between gap-6 md:gap-0 md:justify-end w-full md:w-56 h-32 md:h-56 border px-4 py-4 rounded-xl cursor-pointer hover:scale-105 ${
            check2
              ? "border-2 border-pink-500 bg-white duration-0"
              : "border-gray-100 duration-200"
          }`}
          htmlFor="check2"
          onClick={(e) => {
            checkbox(e);
          }}
        >
          <div className="">
            <img src={checkimg2} alt="check1" className="w-32 md:w-full" />
          </div>
          <div className="flex flex-row-reverse md:flex-col items-center gap-4">
            <div className="text-center text-sm text-slate-800 font-bold">
              I'm looking to hire a designer
            </div>
            {check2 && (
              <div className={`text-center text-xs text-gray-500 `}>
                With over 7 million shots from a vast community of designers,
                Dribbble is the leading source for design inspiration.
              </div>
            )}
            <input
              type="checkbox"
              className="rounded-xl text-pink-600 focus:ring-pink-500 p-2"
              id="check2"
            />
          </div>
        </label>
        <label
          className={`flex flex-row-reverse md:flex-col items-center justify-between gap-6 md:gap-0 md:justify-end w-full md:w-56 h-32 md:h-56 border px-4 py-4 rounded-xl cursor-pointer hover:scale-105 ${
            check3
              ? "border-2 border-pink-500 bg-white duration-0"
              : "border-gray-100 duration-200"
          }`}
          htmlFor="check3"
          onClick={(e) => {
            checkbox(e);
          }}
        >
          <div className="">
            <img src={checkimg3} alt="check1" className="w-32 md:w-full" />
          </div>
          <div className="flex flex-row-reverse md:flex-col items-center gap-4">
            <div className="text-center text-sm text-slate-800 font-bold">
              I'm looking for design inspiration
            </div>
            {check3 && (
              <div className={`text-center text-xs text-gray-500`}>
                With over 7 million shots from a vast community of designers,
                Dribbble is the leading source for design inspiration.
              </div>
            )}
            <input
              type="checkbox"
              className="rounded-xl text-pink-600 focus:ring-pink-500 p-2"
              id="check3"
            />
          </div>
        </label>
      </div>
      <div className="flex flex-col items-center justify-center py-6 gap-4">
        <div
          className={`text-xs font-semibold text-slate-700 ${
            check1 || check2 || check3 ? "visible" : "invisible"
          }`}
        >
          Anything else? You can select multiple
        </div>
        <button
          className={`px-20 py-2 text-sm font-medium text-white ${
            check1 || check2 || check3
              ? "bg-pink-500 hover:bg-pink-600"
              : "bg-pink-300"
          } rounded-lg duration-200`}
          disabled={!(check1 || check2 || check3)}
          onClick={verify}
        >
          Finish
        </button>
        <div
          className={`text-xs font-semibold text-gray-400 ${
            check1 || check2 || check3 ? "visible" : "invisible"
          }`}
        >
          or Press RETURN
        </div>
      </div>
    </div>
  );
};

export default Status;
