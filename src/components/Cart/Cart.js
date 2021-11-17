import React from 'react'
import { H3 } from '../Common/Common'
import { Container } from './styled'
import './Cart.css'

const Cart = () => {
    return (
        <div>
            <H3> Cart </H3>
            <Container />
            <div className="cartContainer">
                <div className="header">
                    <h3 className="heading">Shopping Cart</h3>
                    <h5 className="action">Remove all</h5>
                </div>

                <div className="cart-Items">
                    <div className="image-box">
                        <img src="" />
                    </div>
                    <div className="about">
                        <h1 className="title">Apple Juice</h1>
                       
                        <img src="" />
                    </div>
                    <div className="counter">
                        <div className="btn">+</div>
                        <div className="count">2</div>
                        <div className="btn">-</div>
                    </div>
                    <div className="prices">
                        <div className="amount">$2.99</div>
                       
                        <div className="remove"><u>Remove</u></div>
                    </div>
                </div>

                <div className="cart-Items pad">
                    <div className="image-box">
                        <img src="" />
                    </div>
                    <div className="about">
                        <h1 className="title">Grapes Juice</h1>
                      
                        <img src="" />
                    </div>
                    <div className="counter">
                        <div className="btn">+</div>
                        <div className="count">1</div>
                        <div className="btn">-</div>
                    </div>
                    <div className="prices">
                        <div className="amount">$3.19</div>
                        
                        <div className="remove"><u>Remove</u></div>
                    </div>
                </div>

                <hr className="hr2" />
                <div className="checkout">
                    <div className="total">
                        <div>
                            <div className="subtotal">Sub-Total</div>
                            <div className="items">2 items</div>
                        </div>
                        <div className="total-amount">$6.18</div>
                    </div>
                    <button className="button">Checkout</button></div>
            </div>

        </div >

    )
}

export default Cart
