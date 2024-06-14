"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import GaliledVideo from "./GaliledVideo";
import { BtnFuture } from "./common/Icons";
import lineSquaretop from "../../public/assets/images/png/lineSquaretop.png";
import lineSquarebottom from "../../public/assets/images/png/lineSquarebottom.png";
import { useEffect, useState } from "react";

export default function Hero() {
  const [toggleScroll, setToggleScroll] = useState(false);
  useEffect(() => {
    if (toggleScroll === true) {
      const element = document.getElementById("footer");
      element?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    } else {
      const element = document.getElementById("hero");
      element?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  });
  return (
    <div
      id="hero"
      className="bg-hero bg-cover bg-no-repeat bg-center 2xl:h-[810px] relative flex flex-col overflow-x-hidden"
    >
      <Navbar />
      <div className="container xl:max-w-[1172px] flex-grow relative z-20 flex justify-center items-center flex-col 2xl:py-[unset] md:pt-[164px] sm:pt-[140px] pt-[100px] lg:pb-[236px]  md:pb-[200px] sm:pb-[170px] pb-[130px]">
        <BtnFuture />
        <h1 className="ff-openSans font-normal xl:text-[90px] mt-1.5 lg:text-6xl sm:text-5xl text-4xl text-white text-center leading-[110%]">
          BEYOND <span className="text-cinnabar block">ENTERTAINMENT</span>
        </h1>
        <p className="text-base font-normal text-offWhite max-w-[809px] mx-auto text-center mt-4 sm:px-12 px-6">
          Galileo Sky, founded by industry experts, is redefining the gaming
          landscape. With a blend of groundbreaking technology and immersive
          entertainment, we create world-class gaming experiences and thriving
          digital economies that captivate and inspire
        </p>
      </div>
      <Sidebar />
      <div className="top-0 bottom-0 left-0 right-0 bg-black bg-opacity-70 absolute z-10"></div>
      <GaliledVideo />
      <div className="absolute bottom-[2%] z-30 left-0 right-0 flex items-center justify-center cursor-pointer">
        <div
          onClick={() => setToggleScroll(!toggleScroll)}
          className="border border-cinnabar lg:p-2 p-1 inline-block lg:h-[76px] h-[50px] rounded-[55px]"
        >
          <div
            className={`${
              toggleScroll ? "translate-y-[110%]" : "translate-y-0"
            } lg:w-[27px] lg:h-[27px] w-[17px] h-[17px] rounded-full bg-cinnabar duration-300`}
          ></div>
        </div>
      </div>
      <div className="absolute top-[15%] left-0 z-30 pointer-events-none">
        <Image
          src={lineSquaretop}
          alt="lineSquaretop"
          width={226}
          height={70}
          className="lg:max-w-[226px] w-full md:max-w-[150px] sm:max-w-[120px] max-w-[100px]"
        />
      </div>
      <div className="absolute bottom-[15%] right-[8%] z-30 pointer-events-none">
        <Image
          src={lineSquarebottom}
          alt="lineSquaretop"
          width={111}
          height={53}
          className="md:max-w-[111px] sm:max-w-[90px] max-w-[70px] w-full"
        />
      </div>
    </div>
  );
}
