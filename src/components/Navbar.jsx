import React, { useState } from "react";
import logowhite from "./../assets/pastilaris-logo-white.svg";
import Button from "./Button";
import { DATA_NAVBARS } from "../data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-[2px] w-full my-1 rounded-full bg-white-2 transition ease transform duration-300`;

  return (
    <header className="bg-white-2 p-2 lg:py-8">
      <div className="relative bg-green-1 py-4 md:px-8 px-6 container mx-auto rounded-full flex items-center justify-between lg:divide-x-2 divide-green-3">
        <img src={logowhite} alt="" className="mr-8 w-36 md:w-40" />
        <div className="hidden lg:block w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <nav className="hidden lg:block">
                <ul className="flex gap-x-8 p-2 ml-8 text-base font-semibold text-white-1">
                  {DATA_NAVBARS.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.link}
                        className="hover:text-green-2 hover:underline underline-offset-2 transition-all duration-200"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="hidden lg:block">
              <div className="flex gap-x-3">
                <Button variant="white" size="md">
                  Call Sales
                </Button>
                <Button variant="white border" size="md">
                  My Account
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* MobileNav */}

        <button
          className="group flex flex-col lg:hidden w-7 h-8 justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-80"
                : "opacity-100 group-hover:opacity-80"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-80"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-rotate-45 -translate-y-2 opacity-100 group-hover:opacity-80"
                : "opacity-100 group-hover:opacity-80"
            }`}
          />
        </button>

        <div
          className={`absolute top-[4.125rem] left-0 lg:hidden bg-green-1 px-6 py-8 rounded-lg w-full transition-all duration-300 transform ${
            isOpen
              ? "translate-y-0 opacity-100 ease-in-out"
              : "-translate-y-[200%] opacity-0 ease-in-out"
          }`}
        >
          <nav className="w-full lg:flex items-center" data-navbar>
            <ul className="flex flex-col gap-y-8 text-base font-semibold text-white-1 pb-6">
              {DATA_NAVBARS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="hover:text-green-2 hover:underline underline-offset-2 transition-all duration-200"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:hidden">
            <div className="flex flex-col gap-y-3">
              <Button variant="white" size="md">
                Call Sales
              </Button>
              <Button variant="white border" size="md">
                My Account
              </Button>
            </div>
          </div>
          <footer className="pt-6">
            <p className="text-white-2 text-xs text-center">
              &copy; {new Date().getFullYear()} PastiLaris. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </header>
  );
}
