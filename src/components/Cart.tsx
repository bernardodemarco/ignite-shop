import { useCartContext } from "@/hooks/useCartContext";
import { CartContainer, ImageContainer, Product, ProductDetails } from "@/styles/components/cart";
import { X } from '@phosphor-icons/react'
import Image from "next/image";

interface CartProps {
  onCloseCart: () => void
  isCartVisible: boolean
}

export function Cart({ onCloseCart, isCartVisible }: CartProps) {
  // const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  // async function handleBuyProduct() {
  //   try {
  //     setIsCreatingCheckoutSession(true)
  //     const response = await axios.post('/api/checkout', {
  //       priceId: product.defaultPriceId
  //     })
  //     const { checkoutUrl } = response.data

  //     window.location.href = checkoutUrl
  //   } catch (err) {
  //     setIsCreatingCheckoutSession(false)
  //     alert('falha ao redirecionar ao checkout')
  //   }
  // }

  const { products, removeProductFromCart } = useCartContext()

  function handleCloseCart() {
    onCloseCart()
  }

  const numOfProducts = products.length
  const totalPriceAmount = products.reduce((total, product) => {
    return total + product.unitAmount
  }, 0)
  const totalPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(totalPriceAmount / 100)

  return (
    <CartContainer isCartVisible={isCartVisible}>
      <X onClick={handleCloseCart} size={24} weight="bold" />
      <h1>Sacola de compras</h1>
      {products.map((product) => {
        return (
          <Product key={product.id}>
            <ImageContainer>
              <Image
                src={product.imageUrl}
                width={90}
                height={90}
                alt=""
              />
            </ImageContainer>
            <ProductDetails>
              <h3>{product.name}</h3>
              <strong>{product.price}</strong>
              <span onClick={() => removeProductFromCart(product.id)}>
                Remover
              </span>
            </ProductDetails>
          </Product>
        )
      })}
      <div>
        <span>Quantidade</span>
        <span>{numOfProducts} itens</span>
      </div>
      <div>
        <strong>Valor total</strong>
        <strong>{totalPrice}</strong>
      </div>
      <button>Finalizar compra</button>
    </CartContainer>
  )
}
