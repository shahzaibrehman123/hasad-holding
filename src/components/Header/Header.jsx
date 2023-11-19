import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../logo.png";

import "./style.css";


function Header({ data, isChecked, handleSwitchChange }) {
  return (
    <BrowserRouter>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top" expand="lg">
        <Container>
          <img
            alt="logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <Navbar.Brand href="/">{data.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="#about" smooth className="nav-link">
                {data.items[2]}
              </Link>
              <Link to="#service" smooth className="nav-link">
                {data.items[1]}
              </Link>
              <Link to="#service" smooth className="nav-link">
                {data.items[0]}
              </Link>
              <Link to="#contact" smooth className="nav-link">
                {data.items[3]}
              </Link>
            </Nav>
            <Dropdown>
              <Dropdown.Toggle  variant="dark" id="dropdown-basic">
                {isChecked ? "أرقامنا" : "English"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handleSwitchChange}>
                  {isChecked ? "English - إنجليزي" : "Arabic  -  العربية"}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </BrowserRouter>
  );
}

export default Header;
