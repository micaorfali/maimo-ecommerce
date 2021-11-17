import React from "react";
import { Container } from "./Styled";

const CartDetail = ({ cart, getCartTotal }) => {
  return (
    <Container>
      {cart.map(({ name, price, quantity }) => (
        <ul>
            <li><p>{name}</p><p>{quantity} x {price}</p></li>
        </ul>
      ))}
      <hr/>
      <p className="preciototal">{getCartTotal()}</p>
    </Container>
  );
};

export default CartDetail;