import { ReactNode } from "react";

interface CartContextProps {
  isFetching: boolean;
  cartItems: Array[object];
  addToCart: (product: object) => void;
  removeFromCart: (id: string) => void;
  totalCheckout: number;
}

interface CartProviderProps {
  children: ReactNode;
}

interface CartItemProps {
  category: string;
  id: number;
  prices: {
    offer: boolean;
    price: number;
  };
  thumbnail: {
    alt: string;
    path: string;
  };
  title: string;
}

export { CartProviderProps, CartContextProps, CartItemProps };
