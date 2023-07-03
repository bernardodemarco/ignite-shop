import { CartContextProvider } from '../contexts/CartContext'
import { Header } from '@/components/Header'

import { Container } from '@/styles/pages/app'
import { globalStyles } from '@/styles/global'

import type { AppProps } from 'next/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartContextProvider>
        <Header />
        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  )
}
