import { useCartContext } from "@/hooks/useCartContext"
import { stripe } from "@/lib/stripe"
import { ProductContainer, ImageContainer, ProductDetails } from "@/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Stripe from "stripe"

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
    unitAmount: number
  }
}

export default function Product({ product }: ProductProps) {
  const { addProductToCart } = useCartContext()

  function handleAddProduct() {
    addProductToCart(product)
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            alt=''
            width={500}
            height={480}
            sizes="(max-width: 350px) 256px, (max-width: 920px) 80vw"
            priority={true}
          />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button onClick={handleAddProduct}>Colocar na sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { id: 'prod_O7nETxSyytyYwL' } }
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const { id } = params!

  const product = await stripe.products.retrieve(id, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price
  const unitAmount = price.unit_amount as number

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(unitAmount / 100),
        description: product.description,
        defaultPriceId: price.id,
        unitAmount,
      }
    },
    revalidate: 2 * 60 * 60,
  }
}
