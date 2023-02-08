import React from "react";
import "./Home.css";
import { H3 } from "../components/Common/Common";
import CardContainer from "../components/CardContainer/CardContainer";
import Hero from "../components/Hero/Hero"

const Home = () => {
  return (
    <div>
    <Hero />

      <H3> Productos destacados</H3>
      <div className="cardcont">
        <CardContainer />
      </div>
    </div>
  );
};

export default Home;
