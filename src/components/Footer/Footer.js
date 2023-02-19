import React from "react";
import logo from "../../imgs/TS_logo.png";
import { Container } from "./styled";
import { Detalles } from "../Common/Common";
import facebook from "../../imgs/facebook.png";
import instagram from "../../imgs/instagram.png";
import tiktok from "../../imgs/tiktok.png";
import twitter from "../../imgs/twitter.png";
import youtube from "../../imgs/youtube.png";

const Footer = () => {
  return (
    <Container>
      <div className="parent">
        <div className="container">
          <div className="TSlogo">
            <img src={logo} alt="logo taylor swift" />
          </div>
          <div className="followTS">
            <div>
              <Detalles>Follow Taylor on Social Media:</Detalles>
            </div>
            <div>
              <ul className="containerIconsSM">
                <li>
                  <a
                    href="https://www.facebook.com/TaylorSwift"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={facebook} alt="Taylor's facebook page" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/taylorswift/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={instagram} alt="Taylor's instagram page" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@taylorswift"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={tiktok} alt="Taylor's tiktok page" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/taylorswift13"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={twitter} alt="Taylor's twitter page" />
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
