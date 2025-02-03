import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children, onAddToCart }) => {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (product, selectedSize, quantity) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (item) => item.id === product.id && item.size === selectedSize
      );
  
      if (existingItem) {
        const updatedCart = prevCartItems.map((item) =>
          item.id === product.id && item.size === selectedSize
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
        if (onAddToCart) onAddToCart();
        return updatedCart;
      }
  
      const newCart = [...prevCartItems, { ...product, size: selectedSize, quantity }];
      if (onAddToCart) onAddToCart(); 
      return newCart;
    });
  };

  const removeFromCart = (productId, size) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter(
        (item) => item.id !== productId || item.size !== size
      )
    );
  };

  const handleQuantityChange = (productId, size, operation) => {
    setCartItems((prevCartItems) =>
      prevCartItems.flatMap((item) => {
        if (item.id === productId && item.size === size) {
          const newQuantity = operation === 'increase' ? item.quantity + 1 : item.quantity - 1;
          return newQuantity > 0 ? [{ ...item, quantity: newQuantity }] : [];
        }
        return [item];
      })
    );
  };
  
  
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalPrice, handleQuantityChange }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};

export default CartContext;
