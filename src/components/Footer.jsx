"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FooterLinks, footerIcons } from "./common/Helper";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(value));
  };
  const [_document, set_document] = useState(null);
  useEffect(() => {
    set_document(document);
    if (showModal === true) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid && email) {
      setShowModal(true);
      setEmail("");
      setIsValid(true);
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div id="footer">
      <div className="container xl:max-w-[1172px] lg:pt-24 md:pt-16 sm:pt-14 pt-10">
        <div className="flex justify-between flex-wrap">
          <div className="lg:w-6/12 w-full">
            <Link href={"/"}>
              <Image
                src={"/assets/images/svg/footerLogo.svg"}
                alt="footerLogo"
                width={289}
                height={53}
              />
            </Link>
            <p className="font-normal sm:text-base text-sm text-offBlack sm:mb-6 mb-4 sm:mt-4 mt-3 lg:max-w-[448px]">
              Galileo Sky, founded by industry experts, is redefining the gaming
              landscape. With a blend of groundbreaking technology and immersive
              entertainment, we create world-class gaming experiences and
              thriving digital economies that captivate and inspire
            </p>
            <div className="flex items-center gap-4">
              {footerIcons.map((value, index) => (
                <Link
                  key={index}
                  href={value.link}
                  target="blank"
                  className="w-9 h-9 rounded-full border border-tamarillo flex items-center justify-center hover:bg-tamarillo transition-all duration-300 ease-linear group"
                >
                  {value.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:w-6/12 flex lg:justify-end lg:mt-0 md:mt-10 mt-8 w-full">
            <div className="flex sm:flex-row flex-col xl:gap-[76px] sm:gap-12 gap-6 max-lg:w-full">
              <div className="sm:w-4/12 lg:w-[auto] w-full">
                <p className="sm:text-base text-sm font-normal text-offBlack sm:mb-4 mb-2">
                  Quick Links 
                </p>{" "}
                <ul className="flex sm:flex-col flex-row max-sm:flex-wrap sm:gap-3 gap-x-5 gap-y-1">
                  {FooterLinks.map((value, index) => (
                    <li key={index}>
                      <Link
                        href={value.link}
                        className="sm:text-base text-sm text-offBlack text-opacity-70 font-normal hover:text-tamarillo hover:text-opacity-100 transition-all duration-300 ease-linear relative after:w-0 after:absolute after:-bottom-1 after:left-[50%] after:bg-tamarillo after:h-0.5 after:rounded hover:after:w-full hover:after:left-0 after:transition-all after:duration-300 after:ease-linear"
                      >
                        {value.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:max-w-[347px] lg:w-auto sm:w-8/12 w-full">
                <p className="sm:text-base text-sm text-offBlack font-normal sm:mb-4 mb-3">
                  Get Connected
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="bg-alto sm:p-2 p-1 flex gap-1 border border-alto w-full rounded-[10px]"
                >
                  <label htmlFor="mail" className="hidden"></label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleChange}
                    id="email"
                    required
                    className="w-full sm:text-base text-sm font-normal text-offBlack text-opacity-70 placeholder:text-offBlack placeholder:!text-opacity-70  bg-transparent sm:py-3.5 py-1.5 sm:pl-3.5 pl-1.5 outline-none"
                    placeholder="Email Here"
                  />
                  <button
                    aria-label="name"
                    type="submit"
                    className="sm:text-base text-sm font-normal text-offWhite bg-tamarillo hover:bg-transparent hover:text-tamarillo sm:py-3 py-2 sm:px-8 px-6 rounded-lg border border-tamarillo transition-all duration-300 ease-linear"
                  >
                    Submit
                  </button>
                </form>
                {!isValid && (
                  <p className="inline-block mt-1 mb-1 text-sm !leading-5 font-normal text-center text-red-700 rounded-lg">
                    please enter a valid email
                  </p>
                )}
                <p className="sm:text-base text-sm mt-4 font-normal text-offBlack text-opacity-70 lg:max-w-[300px]">
                  Your email address is very safe with Galileo Sky. You will
                  only receive our gaming updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-offBlack border-opacity-15 sm:py-6 py-4 md:mt-[45px] sm:mt-9 mt-7">
        <p className="sm:text-base text-sm font-normal text-offBlack px-4 text-center">
          {new Date().getFullYear()} Copyrights Galileo Sky, All Rights Reserved
        </p>
      </div>
      {showModal && (
        <div className="fixed top-0 bottom-0 z-40 flex items-center justify-center min-h-screen start-0 end-0 backdrop-blur-md">
          <div className="px-4 mx-6 bg-white border border-tamarillo rounded-lg md:px-10 sm:px-6 lg:py-14 md:py-10 py-8 border-lightWhite !max-w-[700px]">
            <p className="mb-8 sm:text-4xl text-2xl font-bold text-center text-offBlack sm:px-10">
              Email submitted successfully!
            </p>
            <div className="text-center">
              <button
                aria-label="name"
                onClick={closeModal}
                className="sm:text-base text-sm font-normal text-offWhite bg-tamarillo hover:bg-transparent hover:text-tamarillo py-3 px-8 rounded-lg border border-tamarillo transition-all duration-300 ease-linear"
              >
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
