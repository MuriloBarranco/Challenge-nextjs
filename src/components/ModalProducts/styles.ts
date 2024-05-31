import styled from "styled-components"

export const Modal = styled.div`
  width: 486px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--primary);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`

export const ModalHeader = styled.div`
  width: 100%;
  height: 101px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;

  h3 {
    width: 180px;
    font-size: 27px;
    color: var(--text-white);
    font-weight: bold;
  }

  button {
    width: 45px;
    height: 45px;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--black);
    border: none;
    border-radius: 50%;
    position: relative;

    transition: background 0.3s ease;

    &:hover {
      background: var(--white-dark);
    }
  }
`

export const ProductList = styled.ul`
  flex: 1;
  padding: 1rem 3rem;
  position: relative;

  .scrollable {
    max-height: 62vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 10px;
  }

  .scrollable::-webkit-scrollbar {
    width: 2px;
  }

  .scrollable::-webkit-scrollbar-track {
    background: transparent;
  }

  .scrollable::-webkit-scrollbar-thumb {
    background: var(--white);
    border-radius: 3px;
  }
`

export const ProductItem = styled.li`
  margin-bottom: 10px;
  width: 100%;
  height: 95px;
  background-color: var(--white);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;

  .delete_product {
    width: 18px;
    height: 18px;
    font-size: 14px;
    position: absolute;
    top: -6px;
    right: -6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--black);
    border: none;
    border-radius: 50%;
    transition: background 0.3s ease;

    &:hover {
      background: red;
    }
  }

  img {
    width: 46px;
    height: 57px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    object-fit: contain;
  }
`

export const ProductName = styled.p`
  margin-right: 10px;
  color: var(--text);
  font-size: 13px;
`

export const ModalCurrent = styled.div`
  width: 100%;
  height: 97px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;

  p {
    font-size: 28px;
    color: var(--text-white);
    font-weight: bold;
  }
`

export const ModalBottom = styled.div`
  width: 100%;
  height: 97px;
  background-color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: var(--green);
  }

  h6 {
    font-size: 28px;
    color: var(--text-white);
    font-weight: bold;
  }
`
