import Image from 'next/image'
import { GetStaticProps } from 'next'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

import { BagContainer, HomeContainer, Product } from '@/styles/pages/home'
import Head from 'next/head'
import { Handbag } from '@phosphor-icons/react'

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
          spacing: 30
        }
      }
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className='keen-slider'>
        {products.map((product) => {
          return (
            <Product
              href={`/product/${product.id}`}
              className='keen-slider__slide'
              key={product.id}
              prefetch={false}
            >
              <Image
                src={product.imageUrl}
                width={520}
                height={480}
                alt=''
                priority={true}
              />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <BagContainer>
                  <Handbag size={32} weight='bold' />
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
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(unitAmount / 100),
    }
  })

  return {
    props: {
      products
    },
    revalidate: 2 * 60 * 60,
  }
}
