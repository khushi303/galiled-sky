"use client";
import { useEffect, useState } from "react";
import { heroIcons } from "./common/Helper";

export default function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect;
  return (
    <div>
      <div
        className={`absolute top-[25%] right-0 duration-300 z-50 ${
          openSidebar ? "right-0 " : "md:right-[-80px] lg:right-0 right-[-60px]"
        }`}
      >
        <div
          className={`relative transition-opacity ease-linear duration-300 flex items-center`}
        >
          <span
            onClick={() => setOpenSidebar(!openSidebar)}
            className="lg:w-[15px] w-2 sm:h-[145px] h-[120px] bg-offWhite rounded-s-[30px] lg:hidden"
          ></span>
          <span className="lg:w-[15px] w-2 sm:h-[145px] h-[120px] bg-offWhite rounded-s-[30px] lg:block hidden"></span>
          <div className="flex flex-col justify-center gap-[28px] items-center bg-offWhite bg-opacity-15 w-[60px] md:w-[80px] lg:h-[368px] lg:px-[22px] px-3 lg:py-[unset] md:py-10 py-8">
            {heroIcons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="hover:scale-125 transition-all duration-300 ease-linear"
                >
                  <a href={icon.link} aria-label={icon.label} target="blank">
                    {icon.svg}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        onClick={() => setOpenSidebar(false)}
        className={`${
          openSidebar
            ? "opacity-100 right-0 pointer-events-auto"
            : "opacity-0 right-[-100%] pointer-events-none"
        } fixed top-0 bottom-0 left-0 bg-black bg-opacity-40 z-40 duration-300 backdrop-blur-lg`}
      ></div>
    </div>
  );
}
