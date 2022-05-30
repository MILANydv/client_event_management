import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "./About";
import Contact from "./Contact";
import Menubar from './Menubar';

function Body() {
  return (
    <Routes>
      <Route path="/mk" element={<Menubar />}></Route>
      <Route path="/home" element={<Homepage />} />
      <Route path="/" element={<Homepage />} />

      <Route path="/about" element={<About />} />
      <Route hrefto="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Body;
