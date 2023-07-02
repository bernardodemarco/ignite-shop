import { CartContext } from "@/pages/contexts/CartContext";
import { useContext } from "react";

export function useCartContext() {
  return useContext(CartContext)
}
