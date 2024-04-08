import React from "react";
import logoDark from "../assets/logo-dark.svg";

export default function Footer() {
  return (
    <footer className="container mx-auto">
      <div className="py-12 md:py-24 px-4">
        <div className="flex items-start justify-between flex-col lg:flex-row gap-10 lg:gap-0">
          <div className="flex flex-col gap-y-3 md:gap-y-5">
            <img src={logoDark} alt="" className="w-44" />
            <p className="font-medium leading-7">
              SaaS template by BuildWithAngga <br className="hidden md:block" />{" "}
              to help big companies grow.
            </p>
            <p className="font-medium">&copy; Copyrights Pastilaris.</p>
          </div>
          <div className="flex flex-wrap gap-7 md:gap-20 items-center justify-between">
            <div className="flex flex-col gap-y-5">
              <p className="font-bold">Product</p>
              <div className="flex flex-col gap-y-3 font-medium">
                <a href="#" className="hover:underline underline-offset-2">
                  SaaS Web Builder
                </a>
                <a href="#" className="hover:underline underline-offset-2">
                  Copywriting Templates
                </a>
                <a href="#" className="hover:underline underline-offset-2">
                  Automation Tools
                </a>
                <a href="#" className="hover:underline underline-offset-2">
                  Users Tracking Behavior
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <p className="font-bold">Company</p>
              <div className="flex flex-col gap-y-3 font-medium">
                <a href="#" className="hover:underline underline-offset-2">
                  Privacy Policy
                </a>
                <a href="#" className="hover:underline underline-offset-2">
                  Help Center
                </a>
                <a href="#" className="hover:underline underline-offset-2">
                  Terms Conditions
                </a>
                <a href="#" className="hover:underline underline-offset-2">
                  About Us
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <p className="font-bold">Developer</p>
              <div className="flex flex-col gap-y-3 font-medium">
                <a href="#" className="hover:underline underline-offset-2">
                  API Documentations
                </a>
                <a href="#" className="hover:underline underline-offset-2">
                  Product Knowledges
                </a>
                <a href="#" className="hover:underline underline-offset-2">
                  Ticketing Support
                </a>
                <a href="#" className="hover:underline underline-offset-2">
                  Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
