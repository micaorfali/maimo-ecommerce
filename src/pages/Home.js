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
import TSArgentina from "../imgs/TSArgentina.jpg";
import Countdown from "../components/Countdown/Countdown";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="countdownTS">
        <Grid>
         <Col desktop="1"></Col> 
          <ColContainer desktop="4" style={{ display: 'flex', alignItems: 'flex-start', height: '100%', flexDirection: 'column', justifyContent: 'center'}}>
              <H3>COUNTDOWN: Primer show de</H3>
              <H2>TAYLOR EN ARGENTINA</H2>
              <Countdown/>
          </ColContainer>
          <Col desktop="4"></Col>
          <Col desktop="3">
            <img src={TSArgentina} alt="Taylor con la bandera argentina de fondo" />
          </Col>
        </Grid>
      </div>

      <div className="feriaSwiftie">
        <Grid>
        <ColContainer desktop="4">
          <div style={{height: '100%'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13141.203128921472!2d-58.42314402849174!3d-34.57125511036719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb573dc94c8a3%3A0x2b33a22ae2f00e96!2sPlaza%20Rep%C3%BAblica%20%C3%81rabe%20de%20Egipto!5e0!3m2!1ses-419!2sar!4v1686941895265!5m2!1ses-419!2sar" width="100%" height="100%" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa de la ubicacion del evento. Plaza Egipto, Palermo"></iframe>
          </div>
          </ColContainer>
          <ColContainer desktop="8" style={{ display: 'flex', alignItems: 'center', height: '100%', flexDirection: 'column', justifyContent: 'center', marginBottom: '1em'}}>
              <H2>CONOCÉ NUESTRA FERIA SWIFTIE</H2>
              <H3>Próxima fecha: 6 de agosto</H3>
              <BOTON style={{ backgroundColor: "#133D65", color: "white" }}>
                Más Información
              </BOTON>
          </ColContainer>
        </Grid>
      </div>

      <div className="backgroundFP">
        <Grid>
          <Col>
            <H2>PRODUCTOS DESTACADOS</H2>
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
              Lo quiero!
            </BOTON>
          </Col>
          <Col desktop="1"></Col>
        </Grid>
      </div>
      <div className="SpotifyBkg">
        <Grid>
          <Col desktop="5">
            <img src={TopArtist} alt="Top Artist in Spotify 2022" />
          </Col>
          <Col desktop="2"></Col>
          <ColContainer desktop="4" style={{ display: 'flex', alignItems: 'center', height: '100%', flexDirection: 'column', justifyContent: 'center'}}>
              <H2>SIGAN ESCUCHANDO MIDNIGHTS EN SPOTIFY</H2>
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
