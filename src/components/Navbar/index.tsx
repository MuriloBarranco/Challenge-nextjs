import React, { useState } from "react"
import { Title, MenuButton, Modal, NavbarContainer } from "./styles"

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <NavbarContainer>
      <Title>
        <h2>ASA</h2>
        <p>Sistemas</p>
      </Title>
      <MenuButton onClick={handleModalToggle}>⋮</MenuButton>
      {isModalOpen && (
        <Modal>
          <p>Modal Content</p>
        </Modal>
      )}
    </NavbarContainer>
  )
}

export default Navbar
