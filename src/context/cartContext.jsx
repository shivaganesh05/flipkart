"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);

      if (existingItem) {
        // Add passed quantity (default 1) to existing
        return prevItems.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        );
      } else {
        // Add new with quantity
        return [...prevItems, { ...item, quantity: item.quantity || 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
