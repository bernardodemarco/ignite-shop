import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

import { SuccessContainer, ImageContainer, ImagesWrapper } from '@/styles/pages/success'

import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

interface SuccessProps {
  imagesUrls: string[]
  customerName: string
}

export default function Success({ imagesUrls, customerName }: SuccessProps) {
  const numOfProducts = imagesUrls.length

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <ImagesWrapper>
          {imagesUrls.map((url) => {
            return (
              <ImageContainer key={url}>
                <Image src={url} alt="" width={120} height={110} />
              </ImageContainer>
            )
          })}
        </ImagesWrapper>
        <h1>Compra efetuada</h1>
        <p>
          Uhuul <strong>{customerName}</strong>, sua compra
          de {numOfProducts} camisetas já está a caminho de sua casa.
        </p>
        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const products = session.line_items?.data as Stripe.LineItem[]
  const imagesUrls = products.map((rawProduct): string => {
    const productData = rawProduct.price?.product as Stripe.Product
    return productData.images[0]
  })

  const customerName = session.customer_details?.name as string

  return {
    props: {
      imagesUrls,
      customerName,
    }
  }
}
