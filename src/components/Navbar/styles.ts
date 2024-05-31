import styled from "styled-components"
import { FaShoppingCart } from "react-icons/fa"

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 101px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--primary);
  color: white;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 40px;
    font-family: "Plate";
  }

  p {
    font-size: 20px;
  }
`

export const MenuButton = styled.div`
  width: 90px;
  height: 45px;
  gap: 5px;
  border-radius: 8px;

  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;
  cursor: pointer;

  p {
    font-size: 18px;
    color: var(--text);
  }
  &:hover {
    filter: brightness(0.9);
  }
`

export const Icon = styled(FaShoppingCart)`
  color: var(--text);
`

export const Modal = styled.div`
  position: absolute;
  top: 4rem;
  right: 0rem;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const ProductList = styled.ul`
  width: 486px;
  height: 100%;
`

export const ProductItem = styled.li`
  margin-bottom: 10px;
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
`

export const ProductName = styled.p`
  margin-right: 10px;
  color: var(--text);
`

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`
