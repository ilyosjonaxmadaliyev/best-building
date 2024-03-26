import logo from "../../public/logo.png";

import { FaPhoneVolume } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

import { useState } from "react";
import Navbar from "./Navbar";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

function Header() {
  const [headerBgColor, setHeaderBgColor] = useState(false);

  const changeHeaderBgColor = () => {
    if (window.scrollY >= 130) {
      setHeaderBgColor(true);
    } else {
      setHeaderBgColor(false);
    }
  };
  window.addEventListener("scroll", changeHeaderBgColor);

  return (
    <div
      className={`${
        headerBgColor ? "bg-black/90 duration-500" : "bg-white/75 duration-500"
      }  fixed w-full z-10 shadow-xl`}
    >
      <div className="custom-container flex items-center justify-between">
        <div className="flex flex-col items-center justify-center">
          <a href="#home">
            <img className="w-[120px] h-[80px]" src={logo} alt="logo" />
          </a>

          <a href="#home"
            className={`${
              headerBgColor ? "text-white" : "text-[#331c9bde]"
            } text-lg font-bold  inline`}
          >
            BEST BUILDING
          </a>
        </div>
        <div className="">
          <div className="flex gap-16 pb-6 items-center justify-end">
            <div
              className={`flex items-center gap-2 ${
                headerBgColor ? "text-white" : "text-[#331c9bde]"
              } text-base font-bold`}
            >
              <FaMapLocationDot />
              <a href="#">Location</a>
            </div>
            <div
              className={`flex items-center gap-2 ${
                headerBgColor ? "text-white" : "text-[#331c9bde]"
              } text-base font-bold`}
            >
              <FaPhoneVolume />
              <a href="tel:998999999999">+998 (99) 999 99 99</a>
            </div>
          </div>
          <Navbar />
        </div>
      </div>
      <a href="#home">
        <MdKeyboardDoubleArrowUp
          className={`${
            headerBgColor ? "block" : "hidden"
          } text-5xl text-white bg-[#331c9bde] rounded-full fixed bottom-10 right-10`}
        />
      </a>
    </div>
  );
}

export default Header;
