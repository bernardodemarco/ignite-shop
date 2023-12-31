import { GetStaticProps } from 'next'
import Image from 'next/image'
import Head from 'next/head'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

import { BagContainer, HomeContainer, Product } from '@/styles/pages/home'
import { Handbag } from '@phosphor-icons/react'

import { priceFormatter } from '@/utils/priceFormatter'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    mode: 'snap',
    slides: {
      perView: 'auto',
      spacing: 48
    },
    breakpoints: {
      '(max-width: 612px)': {
        slides: {
          spacing: 30,
        },
      },
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product
              className="keen-slider__slide"
              key={product.id}
              href={`/product/${product.id}`}
              prefetch={false}
            >
              <Image
                src={product.imageUrl}
                width={520}
                height={480}
                alt=""
                priority={true}
              />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <BagContainer>
                  <Handbag size={32} weight="bold" />
                </BagContainer>
              </footer>
          </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })


  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    const unitAmount = price.unit_amount as number

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: priceFormatter.format(unitAmount / 100),
    }
  })

  return {
    props: {
      products
    },
    revalidate: 2 * 60 * 60,
  }
}
