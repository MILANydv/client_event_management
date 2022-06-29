import { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar
          className="justify-content-center "
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <div className="container">
            <Link to="/">Evento</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav ">
              <Nav className="ms-auto">
                <Link to="/about">About me</Link>
                <Link to="/add-event">Add Event</Link>
                <Link to="/pricing">Portofolio</Link>
                <Link to="/contact">Contacts</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
