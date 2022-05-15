import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { CartProviderProps, CartContextProps } from "./types";
import { CartItemProps } from "pages/cart/types";

export const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<any>([]);

  const prices =
    cartItems.length > 0 &&
    cartItems.map((product: CartItemProps) => {
      return product?.prices?.price;
    });

  const totalCheckout =
    prices &&
    prices
      ?.filter((x: number) => x > 0)
      .reduce((x: number, y: number) => x + y, 0);

  const addToCart = (product: {}) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index: number) => {
    const listCheckout = [...cartItems];

    listCheckout.splice(index, 1);

    setCartItems(listCheckout);

    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem("@Cart");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        totalCheckout,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
