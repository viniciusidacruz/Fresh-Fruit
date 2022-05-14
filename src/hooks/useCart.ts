import { useContext } from "react";

import { CartContext } from "contexts/cart";

export function useCart<T = unknown>() {
  return useContext(CartContext);
}
