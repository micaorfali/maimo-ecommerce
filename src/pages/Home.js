import React from "react";
import "./Home.css";
import { H2 } from "../components/Common/Common";
import CardContainer from "../components/CardContainer/CardContainer";
import Hero from "../components/Hero/Hero";
import { Grid } from "../components/Grid";
import { Col } from "../components/Grid";
import { BOTON } from "../components/Common/Common";
import FeaturedProductImg from "../imgs/TSmidnightpuzzle.webp";
import { H3 } from "../components/Common/Common";
import { Precios } from "../components/Common/Common";
import TopArtist from "../imgs/TSTopArtist.jpg";
import { ColContainer } from "../components/Grid/styled";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="backgroundFP">
        <Grid>
          <Col>
            <H2>FEATURED PRODUCT</H2>
          </Col>
          <Col desktop="1"></Col>
          <Col desktop="5">
            <img
              className="FPImg"
              src={FeaturedProductImg}
              alt="Featured product: midnight puzzle"
            />
          </Col>
          <Col desktop="1"></Col>
          <Col desktop="4">
            <H3>TAYLOR SWIFT MIDNIGHTS PUZZLE</H3>
            <Precios>$35</Precios>
            <BOTON style={{ backgroundColor: "#133D65", color: "white" }}>
              I want it!
            </BOTON>
          </Col>
          <Col desktop="1"></Col>
        </Grid>
      </div>
      <div className="SpotifyBkg">
        <Grid>
          <Col desktop="6">
            <img src={TopArtist} alt="Top Artist in Spotify 2022" />
          </Col>
          <Col desktop="1"></Col>
          <ColContainer desktop="4" style={{ display: 'flex', alignItems: 'center', height: '100%', flexDirection: 'column', justifyContent: 'center'}}>
              <H2>Keep streaming Midnights in Spotify</H2>
              <BOTON style={{ backgroundColor: "black", color: "white" }}>
                Let's party
              </BOTON>
          </ColContainer>
          <Col desktop="1"></Col>
        </Grid>
      </div>
      <H2> Productos destacados</H2>
      <div className="cardcont">
        <CardContainer />
      </div>
    </div>
  );
};

export default Home;
