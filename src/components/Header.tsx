import Image from "next/image";
import logoImg from './../assets/logo.svg'
import { HeaderContainer, IconContainer } from "@/styles/components/header";
import { Handbag } from "@phosphor-icons/react";
import { useState } from "react";
import { Cart } from "./Cart";

export function Header() {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const number = 4

  function handleOpenCart() {
    setIsCartVisible(true)
  }

  function onCloseCart() {
    setIsCartVisible(false)
  }

  return (
    <>
      <HeaderContainer>
        <Image src={logoImg} alt="" />
        <IconContainer onClick={handleOpenCart}>
          <Handbag size={24} weight="bold" />
          {number > 0 && <span>{number}</span>}
        </IconContainer>
      </HeaderContainer>
      {isCartVisible && <Cart onCloseCart={onCloseCart} />}
    </>
  )
}
