import { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Link to="/">Evento</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="ms-auto">
              <Link to="/about">About me</Link>
              <Link to="/pricing">Portofolio</Link>
              <Link to="/contact">Contacts</Link>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
