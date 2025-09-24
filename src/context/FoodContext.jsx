// FoodContext.js
import React, { createContext, useState } from "react";

export const FoodContext = createContext();

const FoodContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // Save token in both state + localStorage
  const saveToken = (jwt) => {
    setToken(jwt);
    localStorage.setItem("token", jwt);
  };

  // Logout -> clear token + localStorage
  const clearToken = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  // --- cart functions (same as before) ---
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prevCart, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) =>
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));

  const clearCart = () => setCart([]);

  const increaseQty = (id) =>
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );

  const decreaseQty = (id) =>
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <FoodContext.Provider
      value={{
        cart,
        token,
        saveToken,
        clearToken,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQty,
        decreaseQty,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
