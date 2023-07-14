import React from "react";
import HeroImg from "../../imgs/TSbanner.png";
import { HeroContainer, HeroContent } from "../Hero/styled";
import argflag from "../../imgs/argflag.png";
import { StyledLink } from "../Common/styled";
import { BOTON } from "../Common/Common";

const Hero = () => {
  return (
    <HeroContainer>
      <img className="hero" src={HeroImg} alt="hero" />
      <HeroContent>
          <div className="content">
            <h1>TAYLOR SWIFT</h1>
            
            <img src={argflag} alt="icono bandera argentina"></img>
            <img src={argflag} alt="icono bandera argentina"></img>
            <img src={argflag} alt="icono bandera argentina"></img>
            
            <h2>ARGENTINA OFICIAL</h2>
            <p>Única cuenta reconocida por Universal Music Argentina</p>
            <StyledLink to="/shop">
              <BOTON style={{backgroundColor:"#AC9EB8"}}>Ir al Shop</BOTON>
            </StyledLink>
          </div>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
