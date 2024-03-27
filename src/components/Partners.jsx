import React from "react";
import { DATA_PARTNERS } from "../data";

export default function Partners() {
  return (
    <div className="flex flex-col gap-y-8 p-4">
      <h2 className="text-3xl font-bold text-center leading-[2.75rem]">
        We’re Helping Big <br /> Global Companies Grow
      </h2>
      <div className="flex flex-wrap items-center justify-around md:justify-center gap-5 lg:gap-16">
        {DATA_PARTNERS.map((item) => (
          <img key={item.id} src={item.imgURL} alt="" className="w-32" />
        ))}
      </div>
    </div>
  );
}
