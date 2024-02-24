/* eslint-disable react/prop-types */

import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import Nav from "./navbar/Navbar";
import MobileNav from "./navbar/MobileNav";
import { BsWhatsapp } from "react-icons/bs";
import logo from "../../../assets/logo.webp";

function Header({ myRef }) {
  const [mobileNav, setMobileNav] = useState(false);

  // const [isActive, setIsActive] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     window.scrollY > 70 ? setIsActive(true) : setIsActive(false);
  //   });
  // });

  return (
    <header className="sticky top-0 bg-white z-30">
      <div className="mx-auto max-w-screen-2xl lg:max-w-screen-xl px-4 pt-3 sm:px-6 flex justify-between items-center">
        <a href="/" className="cursor-pointer hover:no-underline">
          <img
            src={logo}
            loading="eager"
            width="100%"
            height="100%"
            alt="Genius Tutors Logo"
            title="Genius Tutors Logo"
            className="w-20 md:w-24"
          />
        </a>

        <div className="hidden lg:flex lg:items-center lg:gap-3 z-30">
          <Nav ref={myRef} />
        </div>

        <div className="flex">
          <a
            href="https://wa.me/918210403033"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer hover:no-underline flex gap-2 items-center rounded-full bg-green-dark md:px-8 md:py-4 px-3 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
          >
            <BsWhatsapp className="md:text-xl md:font-bold text-lg font-normal" />
            Chat on Whatsapp
          </a>

          <button
            aria-label="menu-btn"
            title="ham menu btn"
            className="lg:hidden md:ml-4 ml-1"
            onClick={() => setMobileNav(!mobileNav)}
          >
            {mobileNav ? (
              <HiOutlineX className="text-3xl text-primary" />
            ) : (
              <AiOutlineMenu className="text-3xl text-secondary" />
            )}
          </button>
        </div>
        <div
          className={`${
            mobileNav ? "left-0" : "-left-full"
          }  fixed top-0 bottom-0 w-[60vw] block lg:hidden transition-all`}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
