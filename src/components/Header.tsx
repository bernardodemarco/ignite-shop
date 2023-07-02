import Image from "next/image";
import logoImg from './../assets/logo.svg'
import { HeaderContainer, IconContainer } from "@/styles/components/header";
import { Handbag } from "@phosphor-icons/react";
import { useState } from "react";
import { Cart } from "./Cart";
import { useRouter } from "next/router";
import Link from "next/link";

export function Header() {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const number = 0
  const { pathname } = useRouter()

  function handleOpenCart() {
    setIsCartVisible(true)
  }

  function onCloseCart() {
    setIsCartVisible(false)
  }

  const isIconVisible = pathname !== '/success'
  const isProductsAmountVisible = number !== 0

  return (
    <>
      <HeaderContainer isIconVisible={isIconVisible}>
        <Link href={'/'}>
          <Image src={logoImg} alt="" />
        </Link>
        <IconContainer isProductsAmountVisible={isProductsAmountVisible} onClick={handleOpenCart}>
          <Handbag size={24} weight="bold" />
          {number > 0 && <span>{number}</span>}
        </IconContainer>
      </HeaderContainer>
      <Cart onCloseCart={onCloseCart} isCartVisible={isCartVisible} />
    </>
  )
}
