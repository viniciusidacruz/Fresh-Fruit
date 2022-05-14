import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { API } from "common/services/api";
import CartService from "common/services/ServiceClient";

import { CartProviderProps, CartContextProps, CartItemProps } from "./types";

export const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<any>([]);
  const [isFetching, setFetching] = useState(true);

  const serviceAddToCart = new CartService();

  const prices =
    cartItems &&
    cartItems.map((product: CartItemProps) => {
      return product.prices.price;
    });

  const totalCheckout = prices
    ?.filter((x: number) => x > 0)
    .reduce((x: number, y: number) => x + y, 0);

  useEffect(() => {
    const getCheckout = () => {
      API.get("checkout.json").then((response) => {
        setFetching(false);
        setCartItems(Object.values(response.data));
      });
    };

    getCheckout();
  }, []);

  const addToCart = (product: {}) => {
    try {
      serviceAddToCart.addToCart(product).then(() => {
        setCartItems([...cartItems, product]);
        toast.success("Produto adicionado ao carrinho");
      });
    } catch (err) {
      toast.error("Ops, algo deu errado");
    }
  };

  const removeFromCart = (id: string) => {
    try {
      serviceAddToCart.removeCart(id).then(() => {
        toast.success("Removido do carrinho");
      });
    } catch (error) {}
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        isFetching,
        totalCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
