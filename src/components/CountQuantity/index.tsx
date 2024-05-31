import React, { useState } from "react"
import { Container, Square, ValueSquare } from "./styles"

const CountQuantity = () => {
  const [count, setCount] = useState(0)

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <Container>
      <Square onClick={handleDecrement}>-</Square>
      <ValueSquare>{count}</ValueSquare>
      <Square onClick={handleIncrement}>+</Square>
    </Container>
  )
}

export default CountQuantity
