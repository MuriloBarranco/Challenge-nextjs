import styled from "styled-components"
export const Container = styled.div`
  width: 50px;
  height: 19px;
  border: solid 1px var(--white-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 6px;
`

export const Square = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 8px;
  color: var(--black);
  cursor: pointer;
`

export const ValueSquare = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  color: #343a40;
  border-radius: 5px;
  font-size: 8px;
`
