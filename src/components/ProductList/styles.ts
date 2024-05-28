import styled from "styled-components"

export const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #0f52ba;
  color: white;
`

export const Brand = styled.div`
  font-size: 1.25rem;
`

export const MenuButton = styled.button`
  font-size: 1.5rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

export const Modal = styled.div`
  position: absolute;
  top: 4rem;
  right: 1rem;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
