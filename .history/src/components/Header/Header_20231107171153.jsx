import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../logo.png"
import "./style.css";

function Header() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          <Navbar.Brand href="/">Hasad Holding</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="#home" className="nav-link">Home</Link>
            <Link to="#about" className="nav-link">About us</Link>
            <Link to="#contact" className="nav-link">Contact us</Link>
          </Nav>
        </Container>
      </Navbar>
      </BrowserRouter>
  );
}

export default Header;