import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
`

export const ProductListUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Card = styled.li`
  border: 1px solid #ccc;
  width: 218px;
  height: 285px;
  border-radius: 8px;
  margin: 10px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`

export const CardHeader = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 147px;
    height: 138px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    object-fit: contain;
  }
`

export const CardInfo = styled.div`
  width: 100%;
  height: 30%;

  padding: 0px 15px;

  div {
    display: flex;
    justify-content: space-between;
    gap: 10px;

    h3 {
      font-size: 16px;
      color: var(--text);
    }

    button {
      width: 64px;
      height: 26px;
      background-color: var(--black);
      border-radius: 8px;

      p {
        font-size: 13px;
        color: var(--text-white);
      }
    }
  }

  p {
    font-size: 10px;
    color: var(--text);
  }
`

export const CardBottom = styled.div`
  width: 100%;
  height: 32px;
  background-color: var(--primary);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  p {
    font-size: 14px;
    color: var(--text-white);
  }
`
