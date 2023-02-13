import React from "react";
import HeroImg from "../../imgs/TSbanner.png";
import { HeroContainer } from "../Hero/styled";
import { StyledBOTON } from "../Common/styled";

const Hero = () => {
  return (
    <HeroContainer>
      <img className="hero" src={HeroImg} alt="hero" />
      <div class="content">
        <h1>TAYLOR SWIFT</h1>
        <hr></hr>
        <h2>OFFICIAL MERCH</h2>

        <StyledBOTON style={{backgroundColor:"#AC9EB8"}}>Go to Shop</StyledBOTON>
      </div>
    </HeroContainer>
  );
};

export default Hero;
