import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
    </>
  );
};

export default Homepage;
