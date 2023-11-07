import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../logo.png"
import { useMediaQuery } from 'react-responsive'

function Header() {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <BrowserRouter>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
        <img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          <Navbar.Brand href="/">Hasad Holding</Navbar.Brand>
          {isTabletOrMobile ? (<>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="#home" smooth className="nav-link">Home</Link>
                <Link to="#service" smooth className="nav-link">Services</Link>
                <Link to="#about" smooth className="nav-link">About us</Link>
                <Link to="#contact" smooth className="nav-link">Contact us</Link>
              </Nav>
            </Navbar.Collapse>
            </>) : (
            <Nav className="me-auto">
              <Link to="#home" smooth className="nav-link">Home</Link>
              <Link to="#service" smooth className="nav-link">Services</Link>
              <Link to="#about" smooth className="nav-link">About us</Link>
              <Link to="#contact" smooth className="nav-link">Contact us</Link>
            </Nav>
          )}
        </Container>
      </Navbar>
      </BrowserRouter>
  );
}

export default Header;