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
    <div>
      <div className="container xl:max-w-[1172px] lg:pt-24 md:pt-16 sm:pt-14 pt-12 mt-1">
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
            <p className="font-normal text-base text-offBlack mb-6 mt-4 lg:max-w-[448px]">
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
          <div className="lg:w-6/12 flex lg:justify-end lg:mt-0 mt-10 w-full">
            <div className="flex sm:flex-row flex-col xl:gap-[76px] sm:gap-12 gap-6 max-lg:w-full">
              <div className="sm:w-4/12 lg:w-[auto] w-full">
                <p className="text-base font-normal text-offBlack mb-4">
                  Quick Links
                </p>{" "}
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((value, index) => (
                    <li key={index}>
                      <Link
                        href={value.link}
                        className="text-base text-offBlack text-opacity-70 font-normal hover:text-tamarillo hover:text-opacity-100 transition-all duration-300 ease-linear relative after:w-0 after:absolute after:-bottom-1 after:left-[50%] after:bg-tamarillo after:h-0.5 after:rounded hover:after:w-full hover:after:left-0 after:transition-all after:duration-300 after:ease-linear"
                      >
                        {value.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:max-w-[347px] lg:w-auto sm:w-8/12 w-full">
                <p className="text-base text-offBlack font-normal mb-4">
                  Get Connected
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="bg-alto p-2 flex gap-1 border border-alto w-full rounded-[10px]"
                >
                  <label htmlFor="mail" className="hidden"></label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleChange}
                    id="email"
                    required
                    className="w-full text-base font-normal text-offBlack text-opacity-70 placeholder:text-offBlack placeholder:!text-opacity-70  bg-transparent py-3.5 pl-3.5 outline-none"
                    placeholder="Email Here"
                  />
                  <button
                    aria-label="name"
                    type="submit"
                    className="text-base font-normal text-offWhite bg-tamarillo hover:bg-transparent hover:text-tamarillo py-3 px-8 rounded-lg border border-tamarillo transition-all duration-300 ease-linear"
                  >
                    Submit
                  </button>
                </form>
                {!isValid && (
                  <p className="absolute inline-block mt-2 mb-1 text-sm !leading-5 font-normal text-center text-red-700 rounded-lg -bottom-7 left-4 ">
                    please enter a valid email
                  </p>
                )}
                <p className="text-base mt-4 font-normal text-offBlack text-opacity-70 lg:max-w-[300px]">
                  Your email address is very safe with Galileo Sky. You will
                  only receive our gaming updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-offBlack border-opacity-15 py-6 mt-[45px]">
        <p className="text-base font-normal text-offBlack px-4 text-center">
          {new Date().getFullYear()} Copyrights Galileo Sky, All Rights Reserved
        </p>
      </div>
      {showModal && (
        <div className="fixed top-0 bottom-0 z-40 flex items-center justify-center min-h-screen start-0 end-0 backdrop-blur-md">
          <div className="px-4 mx-6 bg-white border border-tamarillo rounded-lg md:px-10 sm:px-6 lg:py-14 md:py-10 py-8 border-lightWhite !max-w-[700px]">
            <p className="mb-8 text-4xl font-bold text-center text-offBlack sm:px-10">
              Email submitted successfully!
            </p>
            <div className="text-center">
              <button
                aria-label="name"
                onClick={closeModal}
                className="text-base font-normal text-offWhite bg-tamarillo hover:bg-transparent hover:text-tamarillo py-3 px-8 rounded-lg border border-tamarillo transition-all duration-300 ease-linear"
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
