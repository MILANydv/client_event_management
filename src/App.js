import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import React from "react";
import Body from "./components/home/Body";
import Footer from "./components/home/Footer";
import NavBar from "./components/home/Navbar";



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Body />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
