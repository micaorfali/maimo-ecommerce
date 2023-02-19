import React, { useState } from "react";
import { Container } from "./styled";
import { Link } from "react-router-dom";
//import logo from '../../imgs/stopit-logo-02.png'
import logo from "../../imgs/TS_logo.png";
import { getFirestore } from "../../services/firebase";

const NavBar = () => {
  return (
    <Container>
      <ul>
        <Link to="/">
          <li className="logoContainer">
            <img src={logo} alt="logo taylor swift" width="100%" />
          </li>
        </Link>
        <div className="navbarContainer">
          <li className="navbarElements">
            <Link to="/shop"> Shop </Link>
          </li>
          <li className="navbarElements">
            <Link to="/checkout">Cart </Link>
          </li>
        </div>
      </ul>
    </Container>
  );
};

export default NavBar;
