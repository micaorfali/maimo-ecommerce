import React from "react";
import logo from "../../imgs/TS_logo.png";
import { Container } from "./styled";
import { Detalles } from "../Common/Common";
import instagram from "../../imgs/instagram.png";
import twitter from "../../imgs/twitter.png";
import youtube from "../../imgs/youtube.png";
import argflag from "../../imgs/argflag.png";

const Footer = () => {
  return (
    <Container>
      <div className="parent">
        <div className="container">
          <div className="TSlogo">
            <img src={logo} alt="logo taylor swift" />
            <img src={argflag} alt="icono bandera argentina"></img>
          </div>
          <div className="followTS">
            <div>
              <Detalles>Seguinos en redes sociales:</Detalles>
            </div>
            <div>
              <ul className="containerIconsSM">
                <li>
                  <a
                    href="https://www.instagram.com/tayupdatesarg_/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={instagram} alt="TSA Instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/TayUpdatesARG"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={twitter} alt="Taylor updates Argentina Twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/taylorswift"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={youtube} alt="Taylor's youtube page" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <Detalles>© 2023 Taylor Nation LLC</Detalles>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
