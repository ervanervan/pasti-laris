import React from "react";
import Button from "./Button";
import bannerHero from "../assets/banner_hero.png";
import Partners from "./Partners";

export default function Hero() {
  return (
    <section className="bg-white-2">
      <div className="container mx-auto pb-8 md:pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 py-8 md:py-16 gap-8">
          <div className="flex flex-col gap-y-8 flex-1">
            <h1 className="text-6xl font-extrabold leading-[4.50rem]">
              <span className="bg-green-2 inline-block leading-10">Making</span>{" "}
              Great Business{" "}
              <span className="bg-green-2 inline-block leading-10">
                Decision
              </span>
            </h1>
            <p className="font-medium text-lg w-5/6">
              Track your customers behavior to make a good decision that helps
              the customer use our services better way.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button variant="primary" size="md">
                Get Started, It’s Free
              </Button>
              <Button variant="secondary" size="md">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center flex-1">
            <img
              src={bannerHero}
              alt=""
              draggable="false"
              className="w-full md:w-[34.75rem]"
            />
          </div>
        </div>
        <Partners />
      </div>
    </section>
  );
}
