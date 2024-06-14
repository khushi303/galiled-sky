"use client";
import Link from "next/link";
import { Dropdown } from "./common/Icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import { DropdownData, heroLinks } from "./common/Helper";

export default function Navbar() {
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
            <li className="flex gap-1 items-center cursor-pointer relative after:w-0 after:absolute after:-bottom-1 after:left-[50%] after:bg-white after:h-0.5 after:rounded hover:after:w-full hover:after:left-0 after:transition-all after:duration-300 after:ease-linear ">
              <p className="text-base font-semibold text-offWhite">Games</p>
              <Dropdown />
            </li>
            <div className="absolute h-0 opacity-0 dropcontent transition-all duration-300 ease-linear -left-4 top-[47px] bg-white bg-opacity-5 backdrop-blur-2xl flex flex-col w-52">
              {DropdownData.map((value, index) => (
                <Link
                  key={index}
                  href={"/"}
                  className="py-1.5 w-full text-center text-base text-offWhite font-normal"
                >
                  {value.title}
                </Link>
              ))}
            </div>
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
          <ul className="dropdown items-center gap-6 lg:flex hidden">
            <li className="flex gap-1 items-center cursor-pointer relative">
              <Link
                href={""}
                className="text-base font-semibold text-offWhite  relative after:w-0 after:absolute after:-bottom-1 after:left-[50%] after:bg-white after:h-0.5 after:rounded hover:after:w-full hover:after:left-0 after:transition-all after:duration-300 after:ease-linear"
              >
                Team
              </Link>
            </li>
            <Link
              href={"/"}
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
              <Link
                key={index}
                href={value.link}
                className="text-base font-semibold text-offWhite relative after:w-0 after:absolute after:-bottom-1 after:left-[50%] after:bg-white after:h-0.5 after:rounded hover:after:w-full hover:after:left-0 after:transition-all after:duration-300 after:ease-linear flex gap-1 items-center"
              >
                {value.title}
                {index === 0 && <Dropdown />}
              </Link>
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
