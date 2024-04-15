import React from "react";
import iconCrown from "../assets/icon-crown.svg";
import icon3dCubeScan from "../assets/icon-3d-cube-scan.svg";
import iconSecurityUser from "../assets/icon-security-user.svg";
import arrowTop from "../assets/arrow-top.svg";
import arrowBottom from "../assets/arrow-bottom.svg";

export default function SimpleSteps() {
  return (
    <section className="container mx-auto pt-12 md:pt-24 md:pb-0">
      <div className="text-center px-4 gap-y-4 flex flex-col">
        <h1 className="font-extrabold text-4xl md:text-5xl lg:leading-[4rem]">
          Simple Steps & Done.
        </h1>
        <p className="font-medium text-lg">
          We have designed a feature based on latest research
        </p>
      </div>

      <div className="relative flex px-4 flex-wrap gap-5 md:gap-20 items-center md:justify-center md:py-24 my-10">
        <img
          src={arrowTop}
          alt=""
          className="absolute top-0 left-44 hidden md:block"
          draggable="false"
        />
        <img
          src={arrowBottom}
          alt=""
          className="absolute bottom-0 right-48 hidden md:block"
          draggable="false"
        />
        <div className="flex flex-col gap-5 p-3">
          <div className="flex gap-4 items-center">
            <div className="p-3 bg-green-2 rounded-full">
              <img src={iconSecurityUser} alt="" />
            </div>
            <p className="font-semibold text-xl">Sign Up</p>
          </div>
          <p className="font-medium text-base">
            Creating new account and connect <br /> with your website or
            woocommerce.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-3">
          <div className="flex gap-4 items-center">
            <div className="p-3 bg-green-2 rounded-full">
              <img src={icon3dCubeScan} alt="" />
            </div>
            <p className="font-semibold text-xl">Analyze Data</p>
          </div>
          <p className="font-medium text-base">
            Read latest report that imported to <br /> make decisions for
            business
          </p>
        </div>
        <div className="flex flex-col gap-5 p-3">
          <div className="flex gap-4 items-center">
            <div className="p-3 bg-green-2 rounded-full">
              <img src={iconCrown} alt="" />
            </div>
            <p className="font-semibold text-xl">Become Winner</p>
          </div>
          <p className="font-medium text-base">
            You will see the results in matter of <br /> weeks that you have
            grow bigger
          </p>
        </div>
      </div>
    </section>
  );
}
