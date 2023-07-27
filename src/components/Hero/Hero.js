import React from "react";
import HeroImg from "../../imgs/TSbanner.png";
import { HeroContainer, HeroContent } from "../Hero/styled";
import argflag from "../../imgs/argflag.png";
import { StyledLink } from "../Common/styled";
import { BOTON } from "../Common/Common";
import mirrorball from "../../imgs/mirrorball.png"
import gemas from "../../imgs/gemas.png"

const Hero = () => {
  return (
    <HeroContainer>
      <img className="hero" src={HeroImg} alt="hero" />
      <HeroContent>
          <div className="content">
            <h1>TAYLOR SWIFT ARGENTINA</h1>
            
            <img src={gemas} alt="GEMAS BEJEWELED"></img>
            
            <h2>EMPRENDEDORES SWIFTIES</h2>
            <h3>Todos los fans y todos los emprendimientos, en un solo lugar</h3>
            <p>Hacé tu pedido de cualquiera de los emprendimientos de la feria swiftie y recibilo en un sólo paquete en tu casa</p>
            <StyledLink to="/shop">
              <BOTON style={{backgroundColor:"#AC9EB8"}}>Ir al Shop</BOTON>
            </StyledLink>
          </div>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
