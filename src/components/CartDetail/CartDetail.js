import React from "react";
import { Container } from "./Styled";
import { H3 } from "../Common/Common";
import { Detalles } from "../Common/Common";

const CartDetail = ({ cart, getCartTotal }) => {
  return (
    <Container>
      <div className="background-general">
        <H3>Precio</H3>
        {cart.map(({ name, price, quantity }) => (
          <ul>
            <li>
              <Detalles>{name}</Detalles>
              <Detalles>
                {quantity} x {price}
              </Detalles>
            </li>
          </ul>
        ))}
        <hr />
        <div className="flexcart">
          <p className="total">Total</p>
          <p className="preciototal">{getCartTotal()}</p>
        </div>
      </div>
    </Container>
  );
};

export default CartDetail;
