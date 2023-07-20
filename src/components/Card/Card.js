import React from "react";
import { Container } from "../Card/styled";
import { Link } from "react-router-dom";
import { Productos } from "../Common/Common";
import { Precios } from "../Common/Common";


const Card = ({ name, image, description, id, price }) => {
  return (
    <Container>
      <Link to={`product/${id}`}>
        <div className="card">
          <div className="imgcontainer">
            <img src={image} alt="{name}" className="fotoproducto" />
          </div>
          <div className="container">
            <Productos>{name}</Productos>
            <Precios>${price}</Precios>
          </div>
        </div>
      </Link>
    </Container>
  );
};

export default Card;
