import React, { useState, useContext } from "react";
import { Grid, Col } from "../components/Grid";
import { BOTON, H2, H3, Inner, Precios } from "../components/Common/Common";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import { CartContext } from "../Contexts/CartContext";
import CartDetail from "../components/CartDetail/CartDetail";
import { getFirestore, getDate } from "../services/firebase";
import './Checkout.css'
import { StyledLink } from "../components/Common/styled";

const Checkout = () => {
  const { cart, getCartTotal, setCart } = useContext(CartContext);
  const [orderCreated, setOrderCreated] = useState(false);

  console.log(cart);

  const placeOrder = async (buyerData) => {
    try {
      const db = getFirestore();
      console.log(`order N ${buyerData.name}`);

      const cartItems = cart.map(({ id, name, price, quantity, image }) => {
        return { id, name, price, quantity, image };
      });

      console.log(cartItems)

      const order = {
        buyer: buyerData,
        items: cartItems,
        date: getDate(),
        total: getCartTotal(),
      };

      const res = await db.collection("orders").add(order);
      setCart([]);
      setOrderCreated(res.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Inner>
      {orderCreated ? (
        <H2>Checkout {`Order N ${orderCreated}`}</H2>
      ) : (
        <H2>Checkout</H2>
      )}

      <Grid>
        <Col desktop={6} tablet={6} mobile={12}>
          {/* Verificar si el carrito está vacío */}
          {cart.length === 0 ? (
            <div style={{height: "100vh"}}>
              <p>No hay productos en el carrito</p>
              <StyledLink to="/shop">
                <BOTON style={{ backgroundColor: "#AC9EB8" }}>Ir al Shop</BOTON>
              </StyledLink>
            </div>
          ) : (
            <div>
              {/* detalle productos */}
              <div>
                <hr />
                {cart.map((product) => (
                  <div>
                    <div key={product.id} className="containerDetalle">
                      <Grid>
                        <Col desktop={4} tablet={6} mobile={12}>
                          <img src={product.image} alt={product.name} />
                        </Col>
                        <Col desktop={6} tablet={6} mobile={12}>
                          <H3>{product.name}</H3>
                        </Col>
                        <Col desktop={2} tablet={6} mobile={12}>
                          <div style={{ marginTop: "1em" }}>
                            <Precios>${product.price}</Precios>
                          </div>
                        </Col>
                      </Grid>
                    </div>
                  <hr />
                  </div>
                ))}
              </div>
            

          {/* FORM DE CONTACTO */}
          <CheckoutForm handleSubmit={placeOrder} />
          </div>
          )}
          

          
        </Col>
        <Col desktop={6} tablet={6} mobile={12}>
          <CartDetail cart={cart} getCartTotal={getCartTotal} />
        </Col>
      </Grid>
    </Inner>
  );
};

export default Checkout;
