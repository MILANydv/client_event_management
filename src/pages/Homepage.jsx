import React from "react";
import Hero from "../components/Hero";
import Menubar from "../components/Menubar";
import Pricing from "../components/Pricing";

function Homepage() {
  return (
    <>
      <Menubar />
      <Hero />
      <Pricing />
    </>
  );
}

export default Homepage;
