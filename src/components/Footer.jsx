import React from "react";
import logoDark from "../assets/logo-dark.svg";
import { FOOTER_LINKS } from "../data";

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

          <div className="flex flex-wrap gap-y-7 gap-x-11 md:gap-20 items-center justify-between">
            {/* Products */}
            <div className="flex flex-col gap-y-5">
              <p className="font-bold">Product</p>
              <div className="flex flex-col gap-y-3 font-medium">
                {FOOTER_LINKS.products.map((product) => (
                  <a
                    key={product.id}
                    href="#"
                    className="hover:underline underline-offset-2"
                  >
                    {product.name}
                  </a>
                ))}
              </div>
            </div>
            {/* Companies */}
            <div className="flex flex-col gap-y-5">
              <p className="font-bold">Company</p>
              <div className="flex flex-col gap-y-3 font-medium">
                {FOOTER_LINKS.companies.map((company) => (
                  <a
                    key={company.id}
                    href="#"
                    className="hover:underline underline-offset-2"
                  >
                    {company.name}
                  </a>
                ))}
              </div>
            </div>
            {/* Developers */}
            <div className="flex flex-col gap-y-5">
              <p className="font-bold">Developer</p>
              <div className="flex flex-col gap-y-3 font-medium">
                {FOOTER_LINKS.developers.map((developer) => (
                  <a
                    key={developer.id}
                    href="#"
                    className="hover:underline underline-offset-2"
                  >
                    {developer.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
