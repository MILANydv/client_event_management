import { Route, Routes } from "react-router-dom";
import React from "react";


import Homepage from "../../pages/Homepage";
import Login from "../auth/Login";
import Register from "../auth/Register";
import About from "./About";
import Contact from "./Contact";
import Menubar from "./Menubar";
import Pricing from "./Pricing";
import AddEvent from "../event/AddEvent";

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
      <Route path="/login" element={<Login />} />
      <Route path="/add-event" element={<AddEvent />} />
    </Routes>
  );
}

export default Body;
