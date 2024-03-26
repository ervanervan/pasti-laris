import React from "react";
import logowhite from "./../assets/pastilaris-logo-white.svg";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="bg-white-2 py-8">
      <div className="bg-green-1 py-[.88rem] px-8 container mx-auto rounded-full flex items-center justify-between">
        <div className="flex items-center divide-x divide-green-3">
          <img src={logowhite} alt="" className="mr-8" />
          <nav>
            <ul className="flex gap-x-8 p-2 ml-8 text-base font-semibold text-white-1">
              <li>
                <a
                  href="#features"
                  className="hover:text-green-2 hover:underline underline-offset-2 transition-all duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#vsslock"
                  className="hover:text-green-2 hover:underline underline-offset-2 transition-all duration-200"
                >
                  vs. Slock
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-green-2 hover:underline underline-offset-2 transition-all duration-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#showcase"
                  className="hover:text-green-2 hover:underline underline-offset-2 transition-all duration-200"
                >
                  Showcase
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-x-3">
          <Button variant="white" size="md">
            Call Sales
          </Button>
          <Button variant="white border" size="md">
            My Account
          </Button>
        </div>
      </div>
    </header>
  );
}
