import React from "react";
import { useParams } from "react-router-dom";
import CardContainer from "../components/CardContainer/CardContainer";
import "./Category.css";
import { H2 } from "../components/Common/Common";
import { Detalles } from "../components/Common/Common";

const Category = () => {
  const { id: catId } = useParams();

  return (
    <div>
      <H2>SHOP PRODUCTS</H2>
      <div className="containerFilterSelector">
        <Detalles>Click a color to filter by era</Detalles>
        <div className="filter-container">
            <div className="filter-option TSEra"></div>
            <div className="filter-option Fearless"></div>
            <div className="filter-option SpeakNow"></div>
            <div className="filter-option Red"></div>
            <div className="filter-option Era1989"></div>
            <div className="filter-option Reputation"></div>
            <div className="filter-option Lover"></div>
            <div className="filter-option Folklore"></div>
            <div className="filter-option Evermore"></div>
            <div className="filter-option Midnights"></div>
        </div>
      </div>

      <div className="marginproductos">
        <CardContainer catId={catId || null} />
      </div>
    </div>
  );
};
export default Category;
