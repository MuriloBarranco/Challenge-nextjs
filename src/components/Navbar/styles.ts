import styled from "styled-components"

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
