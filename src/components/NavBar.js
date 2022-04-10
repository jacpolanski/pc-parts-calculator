import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.svg";

function NavBar() {
  return (
    <Navbar bg="white" expand="lg">
      <Container className="px-4">
        <Navbar.Brand href="/">
          <Image src={logo} style={{ height: 100 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end w-100 fs-4">
            <a href="/" className="nav-link px-3">
              Main
            </a>
            <a href="/about" className="nav-link px-3">
              About me
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
