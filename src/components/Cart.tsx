import { CartContainer, ImageContainer, Product, ProductDetails } from "@/styles/components/cart";
import { X } from '@phosphor-icons/react'

interface CartProps {
  onCloseCart: () => void
  isCartVisible: boolean
}

export function Cart({ onCloseCart, isCartVisible }: CartProps) {
  function handleCloseCart() {
    onCloseCart()
  }

  return (
    <CartContainer isCartVisible={isCartVisible}>
      <X onClick={handleCloseCart} size={24} weight="bold" />
      <h1>Sacola de compras</h1>
      <Product>
        <ImageContainer></ImageContainer>
        <ProductDetails>
          <h3>Camiseta Beyond the Limits</h3>
          <strong>R$ 79,90</strong>
          <span>Remover</span>
        </ProductDetails>
      </Product>
      <Product>
        <ImageContainer></ImageContainer>
        <ProductDetails>
          <h3>Camiseta Beyond the Limits</h3>
          <strong>R$ 79,90</strong>
          <span>Remover</span>
        </ProductDetails>
      </Product>
      <div>
        <span>Quantidade</span>
        <span>3 itens</span>
      </div>
      <div>
        <strong>Valor total</strong>
        <strong>R$ 270,00</strong>
      </div>
      <button>Finalizar compra</button>
    </CartContainer>
  )
}
