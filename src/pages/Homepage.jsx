import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import ServiceFeatured from "../components/ServiceFeatured";
import SimpleSteps from "../components/SimpleSteps";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <ServiceFeatured />
      <SimpleSteps />
    </>
  );
};

export default Homepage;
