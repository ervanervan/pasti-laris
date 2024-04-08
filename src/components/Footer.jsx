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
                <p>SaaS Web Builder</p>
                <p>Copywriting Templates</p>
                <p>Automation Tools</p>
                <p>Users Tracking Behavior</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <p className="font-bold">Company</p>
              <div className="flex flex-col gap-y-3 font-medium">
                <p>Privacy Policy</p>
                <p>Help Center</p>
                <p>Terms Conditions</p>
                <p>About Us</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <p className="font-bold">Developer</p>
              <div className="flex flex-col gap-y-3 font-medium">
                <p>API Documentations</p>
                <p>Product Knowledges</p>
                <p>Ticketing Support</p>
                <p>Pricing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
