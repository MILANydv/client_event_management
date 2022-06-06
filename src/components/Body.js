import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "./About";
import Contact from "./Contact";
import Menubar from './Menubar';
import Pricing from "./Pricing";
import Register from "./register";

function Body() {
  return (
    <Routes>
      <Route path="/mk" element={<Menubar />}></Route>
      <Route path="/home" element={<Homepage />} />
      <Route path="/" element={<Homepage />} />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default Body;
