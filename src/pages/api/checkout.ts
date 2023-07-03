import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '@/lib/stripe'

interface BodyType {
  purchasedProducts: {
    price: string
    quantity: number
  }[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({
      error: 'Method not allowed.'
    })
  }

  const { purchasedProducts }: BodyType = req.body

  if (purchasedProducts.length === 0) {
    res.status(400).json({
      error: 'Prices were not found.'
    })
  }

  const successUrl = `https://${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: purchasedProducts
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
