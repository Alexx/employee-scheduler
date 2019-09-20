import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navibar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/schedule">
            Schedules
          </Link>
          <Link className="nav-link" to="/employee_roster">
            Employees
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navibar;
