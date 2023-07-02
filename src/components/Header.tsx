import Image from "next/image";
import logoImg from './../assets/logo.svg'
import { HeaderContainer, IconContainer } from "@/styles/components/header";
import { Handbag } from "@phosphor-icons/react";
import { useState } from "react";
import { Cart } from "./Cart";
import { useRouter } from "next/router";

export function Header() {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const number = 4
  const { pathname } = useRouter()

  function handleOpenCart() {
    setIsCartVisible(true)
  }

  function onCloseCart() {
    setIsCartVisible(false)
  }

  const isIconVisible = pathname !== '/success'

  return (
    <>
      <HeaderContainer isIconVisible={isIconVisible}>
        <Image src={logoImg} alt="" />
        <IconContainer onClick={handleOpenCart}>
          <Handbag size={24} weight="bold" />
          {number > 0 && <span>{number}</span>}
        </IconContainer>
      </HeaderContainer>
      <Cart onCloseCart={onCloseCart} isCartVisible={isCartVisible} />
    </>
  )
}
