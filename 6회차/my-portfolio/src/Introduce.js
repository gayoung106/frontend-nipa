import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "./css/MainNav.css";
import MainNav from "./js/MainNav";
import About from "./js/About";
import Portfolio from "./js/Portfolio";
import Contact from "./js/Contact";

function Introduce() {
  return (
    <>
      <MainNav />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default Introduce;
