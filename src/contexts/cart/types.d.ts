import { ReactNode } from "react";

interface CartContextProps {
  cartItems: Array[object];
  addToCart: (product: {}) => void;
  removeFromCart: (index: number) => void;
  totalCheckout: number;
}

interface CartProviderProps {
  children: ReactNode;
}

export { CartProviderProps, CartContextProps, CartItemProps };
