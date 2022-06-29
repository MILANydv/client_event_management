import Pricing from "../components/home/Pricing";
import Hero from "../components/home/Hero";
import React from "react";

import Menubar from "../components/home/Menubar";

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
