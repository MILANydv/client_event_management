import { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Evento</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#About me">About me</Nav.Link>
              <Nav.Link href="#Portofolio">Portofolio</Nav.Link>
              <Nav.Link href="#Contacts">Contacts</Nav.Link>
              <Nav.Link eventKey={2} href="#Resume">
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
