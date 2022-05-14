import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import CartService from "common/services/ServiceClient";

import { CartProviderProps, CartContextProps } from "./types";
import { CartItemProps } from "pages/cart/types";

export const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<any>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const response = window.localStorage.getItem("@Cart");
      const product = response && JSON.parse(response);

      setCartItems(product);
    }
  }, []);

  const prices =
    cartItems &&
    cartItems.map((product: CartItemProps) => {
      return product.prices.price;
    });

  const totalCheckout = prices
    ?.filter((x: number) => x > 0)
    .reduce((x: number, y: number) => x + y, 0);

  const addToCart = (product: {}) => {
    setCartItems([...cartItems, product]);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("@Cart", JSON.stringify(cartItems));
    }
  };

  const removeFromCart = (index: number) => {
    const listCheckout = [...cartItems];

    listCheckout.splice(index, 1);

    setCartItems(listCheckout);

    if (typeof window !== "undefined") {
      window.localStorage.removeItem("@Cart");
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
