import React from "react";
import bannerServicesFeatured from "../assets/illustration_data.png";
import iconCheckWhite from "../assets/icon-check-white.svg";
import Button from "./Button";

export default function ServiceFeatured() {
  return (
    <section className="bg-white-2">
      <div className="container mx-auto md:px-14">
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 py-8 md:py-16 gap-8">
          <div className="flex flex-col gap-y-8 flex-1">
            <div className="flex flex-col gap-y-3">
              <h2 className="text-3xl font-bold leading-[2.75rem]">
                Built For Everyone
              </h2>
              <p className="font-medium text-lg w-full md:w-4/5">
                Track your customers behavior to make a good decision that helps
                the customer use our services better way.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <Button variant="primary" size="md">
                Get Started
              </Button>
              <div className="flex gap-3 items-center">
                <div className="p-1.5 bg-green-1 flex items-center justify-center rounded-full">
                  <img src={iconCheckWhite} alt="" />
                </div>
                <p className="font-bold text-lg">
                  No credit card required, really.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-1">
            <img
              src={bannerServicesFeatured}
              alt=""
              draggable="false"
              className="w-full md:w-[28rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
