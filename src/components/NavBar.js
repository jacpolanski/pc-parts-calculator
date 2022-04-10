import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.svg";

function NavBar() {
  return (
    <Navbar bg="white" expand="lg">
      <Container className="px-4 justify-content-sm-between justify-content-center">
        <Navbar.Brand href="/">
          <Image src={logo} style={{ height: 100 }} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="mt-4 bg-light"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="my-5 me-auto w-100 fs-4 ">
            <a href="/" className="nav-link p-3">
              Main
            </a>
            <a href="/about" className="nav-link p-3">
              About me
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
