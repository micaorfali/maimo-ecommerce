import React from "react";
import HeroImg from "../../imgs/TSbanner.png";
import { HeroContainer } from "../Hero/styled";
import { StyledBOTON } from "../Common/styled";
import argflag from "../../imgs/argflag.png";
import { StyledLink } from "../Common/styled";

const Hero = () => {
  return (
    <HeroContainer>
      <img className="hero" src={HeroImg} alt="hero" />
      <div class="content">
        <h1>TAYLOR SWIFT</h1>
        
        <img src={argflag} alt="icono bandera argentina"></img>
        <img src={argflag} alt="icono bandera argentina"></img>
        <img src={argflag} alt="icono bandera argentina"></img>
        
        <h2>ARGENTINA OFICIAL</h2>
        <p>Única cuenta reconocida por Universal Music Argentina</p>
        <StyledLink to="/shop">
          <StyledBOTON style={{backgroundColor:"#AC9EB8"}}>Ir al Shop</StyledBOTON>
        </StyledLink>
      </div>
    </HeroContainer>
  );
};

export default Hero;
