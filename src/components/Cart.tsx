import { CartContainer, Product, Text } from "@/styles/components/cart";
import { X } from '@phosphor-icons/react'

interface CartProps {
  onCloseCart: () => void
}

export function Cart({ onCloseCart }: CartProps) {
  function handleCloseCart() {
    onCloseCart()
  }

  return (
    <CartContainer>
      <X onClick={handleCloseCart} size={24} weight="bold" />
      <Text
        as="h1"
        weight="bold"
        lineHeight="large"
        size="medium"
        color="gray100"
      >
        Sacola de compras
      </Text>
      <Product>
        <div></div>
        <div>
          <h3></h3>
          <strong></strong>
          <span></span>
        </div>
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
