import React from 'react'
import logo2 from '../assets/logo2.png'

const Topbar = () => {
    
  const Prev = () => {
    document.getElementById("CreateProfile").style.display = "flex";
    document.getElementById("status").style.display = "none";
    document.getElementById("prev").style.display = "none";
  };
  return (
    <div className='w-full px-8 py-8 flex gap-4 justify-between md:justify-start' id="topbar">
        <img src={logo2} alt="logo2" className="h-10"/>  
        <button
        className="bg-gray-200 flex items-center justify-center px-3.5 py-3 rounded-md text-xs font-bold cursor-pointer hidden"
        onClick={Prev}
        id="prev"
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>    
    </div>
  )
}

export default Topbar
