import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Nav, Navbar } from "react-bootstrap";

const MainNav = () => {
  return (
    <>
      <Navbar className="justify-content-center" sticky="top">
        <Nav>
          <Nav.Link href="#about">ABOUT</Nav.Link>
          <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
          <Nav.Link href="#contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default MainNav;
