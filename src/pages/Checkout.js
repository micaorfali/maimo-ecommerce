import React, { useState, useContext } from "react";
import { Grid, Col } from "../components/Grid";
import { BOTON, H2, H3, Inner, Precios, Textos } from "../components/Common/Common";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import { CartContext } from "../Contexts/CartContext";
import CartDetail from "../components/CartDetail/CartDetail";
import { getFirestore, getDate } from "../services/firebase";
import './Checkout.css'
import { StyledLink } from "../components/Common/styled";
import Delete from "../imgs/delete.png";

const Checkout = () => {
  const { cart, getCartTotal, setCart, resetCart, removeItem } = useContext(CartContext);
  const [orderCreated, setOrderCreated] = useState(false);

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

  const handleVaciarCarrito = () => {
    resetCart(); 
  };

  const handleRemoveItem = (id) => {
    removeItem(id); 
  };


  return (
    <Inner>
      {orderCreated ? (
        <Grid>
          <Col desktop={2} tablet={1} mobile={1}></Col>
          <Col desktop={8} tablet={10} mobile={10}>
            <div style={{textAlign: "center", margin: "2em auto 30vh auto", backgroundColor: "rgba(172, 158, 184, 0.5)", padding: "2em", borderRadius: "15px", boxShadow: "2px 4px 6px 5px rgba(0, 0, 0, 0.25)"}}>
              <H2>Gracias por su compra</H2>
              <Textos>Tu orden ha sido efectuada correctamente</Textos>
              <Textos>N° de compra: {`${orderCreated}`}</Textos>
              <StyledLink to="/shop">
                <BOTON style={{ backgroundColor: "#AC9EB8" }}>Volver al Shop</BOTON>
              </StyledLink>
          </div>
          </Col>
          

          <Col desktop={2} tablet={1} mobile={1}></Col>
        </Grid>
        
      ) : (
        <div>
          <H2>CARRITO de COMPRAS</H2>
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
                  <div key={product.id}>
                    <div className="containerDetalle">
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
                          <div style={{textAlign: "center", width: "30px", height: "auto",margin: "1em auto", cursor: "pointer"}}
                          onClick={() => handleRemoveItem(product.id)}>
                            <img src={Delete} alt="Eliminar producto"></img>
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
          <div style={{textAlign: "right", textDecoration: "underline", marginBottom: "1em", cursor: "pointer"}} onClick={handleVaciarCarrito}>Vaciar carrito</div>
          <CartDetail cart={cart} getCartTotal={getCartTotal} />
        </Col>
      </Grid>
        </div>
      )}

      
    </Inner>
  );
};

export default Checkout;
