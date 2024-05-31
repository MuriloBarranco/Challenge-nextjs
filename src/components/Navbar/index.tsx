import React, { useEffect } from "react"
import { Title, MenuButton, Icon, NavbarContainer } from "./styles"

interface Product {
  id: number
  name: string
}

interface Props {
  purchasedProducts: Product[]
  openModal: () => void
}

const Navbar: React.FC<Props> = ({ purchasedProducts, openModal }) => {
  const clearProducts = () => {
    localStorage.removeItem("products_purchased")
  }

  return (
    <NavbarContainer>
      <Title>
        <h2>ASA</h2>
        <p>Sistemas</p>
      </Title>
      <MenuButton onClick={openModal}>
        <Icon size={18} />
        <p>{purchasedProducts.length}</p>
      </MenuButton>
      {/* <button onClick={clearProducts}>Limpar Carrinho</button> */}
    </NavbarContainer>
  )
}

export default Navbar
