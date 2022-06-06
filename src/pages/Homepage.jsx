import React from "react";
import Hero from "../components/Hero";
import Menubar from "../components/Menubar";
import Pricing from "../components/Pricing";
import Register from "../components/register";

function Homepage() {
  return (
    <>
      <Menubar />
      <Hero />
      <Pricing />
      <Register/>
    </>
  );
}

export default Homepage;
