"use client";
import Link from "next/link";
import { Dropdown } from "./common/Icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import { DropdownData, heroLinks } from "./common/Helper";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const [nav, setNav] = useState(false);
  useEffect(() => {
    if (nav === true) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [nav]);
  return (
    <div className="bg-white bg-opacity-[7%] relative z-[51]">
      <div className="container xl:max-w-[900px]">
        <div className="flex gap-10 items-center max-lg:justify-between">
          <ul className="dropdown relative items-center gap-6 lg:flex hidden">
            <li
              onClick={toggleDropdown}
              className="flex gap-1 items-center cursor-pointer relative after:w-0 after:absolute after:-bottom-1 after:left-[50%] after:bg-white after:h-0.5 after:rounded hover:after:w-full hover:after:left-0 after:transition-all after:duration-300 after:ease-linear z-20"
            >
              <p className="text-base font-semibold text-offWhite">Games</p>
              <Dropdown />
              {isDropdownOpen && (
                <ul className="flex flex-col items-center justify-center absolute top-11 bg-white bg-opacity-40 px-7 gap-3 py-5 z-10">
                  {DropdownData.map((value, index) => (
                    <li key={index} className="">
                      <Link
                        href={"#game1"}
                        className="text-base font-normal text-white text-nowrap hover:text-tamarillo transition-all duration-300 ease-linear"
                      >
                        {value.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <div
              onClick={toggleDropdown}
              className={` ${
                isDropdownOpen ? "block" : "hidden"
              } fixed inset-0 z-[40]`}
            ></div>
            <Link
              href={"/"}
              className="text-base font-semibold text-offWhite relative after:w-0 after:absolute after:-bottom-1 after:left-[50%] after:bg-white after:h-0.5 after:rounded hover:after:w-full hover:after:left-0 after:transition-all after:duration-300 after:ease-linear"
            >
              AI-Platform
            </Link>
          </ul>
          <Link href={"/"}>
            <Image
              src={"/assets/images/svg/navLogo.svg"}
              alt="navlogo"
              width={372}
              height={71}
              className="lg:w-[372px] lg:h-[71px] sm:w-[270px] w-[220px] relative z-30"
            />
          </Link>
          <ul className="items-center gap-6 lg:flex hidden">
            <li className="flex gap-1 items-center cursor-pointer relative">
              <Link
                href={"#team"}
                className="text-base font-semibold text-offWhite  relative after:w-0 after:absolute after:-bottom-1 after:left-[50%] after:bg-white after:h-0.5 after:rounded hover:after:w-full hover:after:left-0 after:transition-all after:duration-300 after:ease-linear"
              >
                Team
              </Link>
            </li>
            <Link
              href={"#careers"}
              className="text-base font-semibold text-offWhite relative after:w-0 after:absolute after:-bottom-1 after:left-[50%] after:bg-white after:h-0.5 after:rounded hover:after:w-full hover:after:left-0 after:transition-all after:duration-300 after:ease-linear"
            >
              Careers
            </Link>
          </ul>
          <div
            className={`${
              nav ? "left-0" : "left-[-100%]"
            } fixed lg:hidden flex bg-black flex-col top-0 bottom-0 h-full transition-all duration-300 ease-linear w-full  justify-center items-center gap-5 z-[51]`}
          >
            {heroLinks.map((value, index) => (
              <li className="relative">
                <Link
                  key={index}
                  href={value.link}
                  onClick={index === 0 && toggleDropdown}
                  className="text-base font-semibold text-offWhite relative after:w-0 after:absolute after:-bottom-1 after:left-[50%] after:bg-white after:h-0.5 after:rounded hover:after:w-full hover:after:left-0 after:transition-all after:duration-300 after:ease-linear flex gap-1 items-center z-[52]"
                >
                  {value.title}
                  {index === 0 && <Dropdown />}
                </Link>
                {index === 0 && isDropdownOpen && (
                  <ul className="flex flex-col items-center justify-center absolute top-5 left-24 bg-white bg-opacity-40 px-7 gap-3 py-5 z-10">
                    {DropdownData.map((value, index) => (
                      <li key={index} className="">
                        <Link
                          href={"#game1"}
                          className="text-base font-normal text-white text-nowrap hover:text-tamarillo transition-all duration-300 ease-linear"
                        >
                          {value.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {index === 0 && (
                  <div
                    onClick={toggleDropdown}
                    className={` ${
                      isDropdownOpen ? "block" : "hidden"
                    } fixed inset-0 z-[40]`}
                  ></div>
                )}
              </li>
            ))}
          </div>
          <div className="flex items-center lg:hidden cursor-pointer">
            <div
              onClick={() => setNav(!nav)}
              className={`lg:hidden flex w-[32px] h-[20px] justify-between items-center flex-col relative ${
                nav ? "z-[51]" : "z-40"
              }`}
            >
              <span
                className={`${
                  nav && "rotate-[50deg] translate-y-[17px]"
                } bg-white h-[3px] w-full rounded-[10px] transition-all ease-linear duration-300`}
              ></span>
              <span
                className={`${
                  nav && "hidden"
                } bg-white h-[3px] w-full transition-all duration-300 ease-linear rounded-[10px]`}
              ></span>
              <span
                className={`${
                  nav && "rotate-[-50deg] translate-y-[10%]"
                } bg-white h-[3px] w-full transition-all duration-300 ease-linear rounded-[10px]`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
