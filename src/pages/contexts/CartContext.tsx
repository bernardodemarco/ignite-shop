import { ReactNode, createContext, useState } from "react";

interface ProductType {
  id: string
  name: string
  imageUrl: string
  price: string
  defaultPriceId: string
}

interface CartContextType {
  addProductToCart: (product: ProductType) => void
  removeProductFromCart: (productId: string) => void
  products: ProductType[]
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<ProductType[]>([])

  function addProductToCart(product: ProductType): void {
    setProducts((prevProducts) => [...prevProducts, product])
  }

  function removeProductFromCart(productId: string): void {
    setProducts((prevProducts) => {
      return prevProducts.filter((product) => product.id !== productId)
    })
  }

  return (
    <CartContext.Provider value={{
      addProductToCart,
      removeProductFromCart,
      products
    }}>
      {children}
    </CartContext.Provider>
  )
}
