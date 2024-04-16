import React from "react";
import bannerTestimonial from "../assets/banner_testimonial.png";
import iconCheckWhite from "../assets/icon-check-white.svg";
import iconStar from "../assets/icon-star.svg";

const Testimonial = () => {
  return (
    <section>
      <div className="container mx-auto md:px-14">
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 py-12 md:py-16 gap-8">
          <div className="flex items-center justify-center flex-1">
            <img
              src={bannerTestimonial}
              alt=""
              draggable="false"
              className="w-full md:w-[28rem]"
            />
          </div>
          <div className="flex flex-col gap-y-8 flex-1">
            <div className="flex items-center gap-x-0.5">
              <img src={iconStar} alt="" className="w-7" />
              <img src={iconStar} alt="" className="w-7" />
              <img src={iconStar} alt="" className="w-7" />
              <img src={iconStar} alt="" className="w-7" />
              <img src={iconStar} alt="" className="w-7" />
            </div>
            <div className="flex flex-col gap-y-3">
              <h2 className="text-3xl font-bold leading-[2.75rem]">
                Pastilaris figured out that our{" "}
                <br className="hidden md:block" /> previous{" "}
                <span className="bg-green-2">system lacking of</span>
                <br className="hidden md:block" />{" "}
                <span className="bg-green-2">automation</span> and spend a lot
                of <br className="hidden md:block" /> time doing wrong things.
              </h2>
              <p className="font-medium text-base">
                Angga Yin, CEO Digissets Ltd
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-center">
                <div className="p-1.5 bg-green-1 flex items-center justify-center rounded-full">
                  <img src={iconCheckWhite} alt="" />
                </div>
                <p className="font-bold text-lg">
                  Business successfully growth
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="p-1.5 bg-green-1 flex items-center justify-center rounded-full">
                  <img src={iconCheckWhite} alt="" />
                </div>
                <p className="font-bold text-lg">
                  Reduce bottleneck in ecosystem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
