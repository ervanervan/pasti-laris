import React from "react";
import bannerServicesFeatured from "../assets/ilustration_data.png";

export default function ServiceIFeatured() {
  return (
    <section className="bg-white-2">
      <div className="container mx-auto pb-8 md:pb-14">
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 py-8 md:py-16 gap-8">
          <div className="flex flex-col gap-y-8 flex-1">
            <div className="flex flex-col gap-y-3">
              <h2 className="text-3xl font-bold leading-[2.75rem]">
                We’re Helping Big <br /> Global Companies Grow
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
              <Button variant="secondary" size="md">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center flex-1">
            <img
              src={bannerServicesFeatured}
              alt=""
              draggable="false"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
