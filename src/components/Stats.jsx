import React from "react";
import vector1 from "../assets/vector1.svg";

export default function Stats() {
  return (
    <section className="bg-green-1">
      <div className="container mx-auto relative z-0">
        <div className="flex items-center justify-between px-4 py-8 md:py-16 gap-8 relative z-10">
          <div>
            <h2 className="text-white-1 font-bold text-3xl leading-[3rem]">
              We Have Big Reasons <br /> Improve People’s Life Today
            </h2>
          </div>
          <div className="">items 2</div>
        </div>
        <img
          src={vector1}
          alt=""
          className="absolute top-0 left-36 h-full -z-10"
        />
      </div>
    </section>
  );
}
