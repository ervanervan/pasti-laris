import React from "react";
import vector1 from "../assets/vector1.svg";
import iconCrown from "../assets/icon-crown.svg";
import icon3dCube from "../assets/icon-3dcube.svg";

export default function Stats() {
  return (
    <section className="bg-green-1 overflow-x-hidden">
      <div className="container mx-auto relative z-0">
        <div className="flex flex-col lg:flex-row md:items-center justify-between px-4 py-12 md:py-16 gap-8 relative z-10">
          <div>
            <h2 className="text-white-1 font-bold text-3xl leading-[3rem]">
              We Have Big Reasons <br /> Improve People’s Life Today
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20">
            <div className="flex gap-x-4">
              <div className="bg-green-2 p-3 rounded-full h-fit">
                <img src={iconCrown} alt="" />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-4xl text-white-1 font-bold">12,390</p>
                <p className="text-white-1 font-normal text-lg leading-[2rem]">
                  Happy Customers <br /> Using Product
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="bg-green-2 p-3 rounded-full h-fit">
                <img src={icon3dCube} alt="" />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-4xl text-white-1 font-bold">829</p>
                <p className="text-white-1 font-normal text-lg leading-[2rem]">
                  Successful On <br /> Big Projects
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={vector1}
          alt=""
          className="absolute bottom-0 -right-36 md:-left-64 lg:left-36 md:h-full -z-10"
        />
      </div>
    </section>
  );
}
