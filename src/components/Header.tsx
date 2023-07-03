import { useState } from 'react'
import { useCartContext } from '@/hooks/useCartContext'
import { useRouter } from 'next/router'

import { HeaderContainer, IconContainer } from '@/styles/components/header'
import { Handbag } from '@phosphor-icons/react'
import { Cart } from './Cart'

import Link from 'next/link'
import Image from 'next/image'
import logoImg from './../assets/logo.svg'

export function Header() {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const { products } = useCartContext()
  const { pathname } = useRouter()

  function handleOpenCart() {
    setIsCartVisible(true)
  }

  function onCloseCart() {
    setIsCartVisible(false)
  }

  const isIconVisible = pathname !== '/success'
  const numOfProducts = products.length
  const isProductsAmountVisible = numOfProducts !== 0

  return (
    <>
      <HeaderContainer isIconVisible={isIconVisible}>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
        <IconContainer isProductsAmountVisible={isProductsAmountVisible} onClick={handleOpenCart}>
          <Handbag size={24} weight="bold" />
          <span>{numOfProducts}</span>
        </IconContainer>
      </HeaderContainer>
      <Cart onCloseCart={onCloseCart} isCartVisible={isCartVisible} />
    </>
  )
}
