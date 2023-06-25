import React, { useState } from "react";
import { Container } from "./styled";
import { Grid, Col } from "../Grid";
import { BOTON } from "../Common/Common";
import { Precios } from "../Common/Common";
import { H2 } from "../Common/Common";
import { Productos } from "../Common/Common";
import { Textos } from "../Common/Common";

const Product = ({ product, addToCart }) => {
  return (
    <Container>
      <H2>SHOP</H2>
      <div className="container">
        <Grid>
          <Col desktop={5} tablet={5} mobile={12}>
            <div className="ImgContainer">
              <img src={product.image} alt={product.name}></img>
            </div>
          </Col>
          <Col desktop={5} tablet={5} mobile={12}>
            <div className="data">
              <Productos>{product.name}</Productos>
              <Precios>${product.price}</Precios>
              <Textos>{product.description}</Textos>
              <BOTON style={{ backgroundColor: "#AC9EB8", color: "black" }}>
                <div onClick={() => addToCart({ ...product, quantity: 1 })}>
                  Agregar al carrito
                </div>
              </BOTON>
            </div>
          </Col>
        </Grid>
      </div>
    </Container>
  );
};

export { Product };
