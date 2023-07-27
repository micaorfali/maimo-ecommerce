import React, { useState, createContext, useContext } from 'react'

const CartContext = createContext();

const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error("useCartContext must be used within a CartProvider");
    }
    return context;
  };
  

const CartProvider = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue)

    const resetCart = () => setCart([])

    const isInCart = id => cart.find(product => product.id === id) || false;

    const cartTotalItems = () => cart.length

    const addToCart = ({ id, name, quantity, price, image }) => {
        const productInCart = isInCart(id);
        if (!productInCart) {
            setCart([...cart, { id, name, quantity, price, image }]);
        } else {
            const oldQuantity = productInCart.quantity;
            const cartWidhoutProduct = cart.filter((product) => product.id !== id);
            const finalCart = [
                ...cartWidhoutProduct,
                { id: id, name: name, price: price, quantity: quantity + oldQuantity, image },
            ];
            setCart(finalCart);
        }
    };

    const updateQty = (productToAdd) =>
        setCart(
            cart.map((product) =>
                product.item.id === productToAdd.id ? productToAdd : product
            )
        );

    const removeItem = (id) =>
        setCart(cart.filter((productToRemove) => productToRemove.id !== id));

    const getCartTotal = () =>
        cart
            .reduce((total, current) => total + current.price * current.quantity, 0)
            .toFixed(2);

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            resetCart,
            cartTotalItems,
            addToCart,
            getCartTotal,
            removeItem,
            updateQty,
        }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext, useCartContext }
