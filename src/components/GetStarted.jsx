import React from "react";
import bannerGetStarted from "../assets/banner_getstarted.png";
import iconCheck from "../assets/icon-check.svg";
import Button from "./Button";

const GetStarted = () => {
  return (
    <section className="bg-green-1 overflow-x-hidden">
      <div className="container mx-auto flex items-center justify-center px-4">
        <div className="flex-1">
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-3">
              <h2 className="text-3xl font-bold leading-[2.75rem] text-white-1">
                Grow Your SaaS
              </h2>
              <p className="font-medium text-lg w-full md:w-4/5 text-white-1">
                Track your customers behavior to make a good decision that helps
                the customer use our services better way.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <Button variant="primary" size="md">
                Get Started
              </Button>
              <div className="flex gap-3 items-center">
                <div className="p-1.5 bg-white-1 flex items-center justify-center rounded-full">
                  <img src={iconCheck} alt="" />
                </div>
                <p className="font-bold text-lg text-white-1">
                  No credit card required, really.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="-mr-14 w-[40rem]">
          <img src={bannerGetStarted} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
