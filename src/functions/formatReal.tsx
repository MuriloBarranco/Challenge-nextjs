export const formatPrice = (price: string) => {
  const parsedPrice = parseFloat(price)
  const roundedPrice = Math.floor(parsedPrice)
  return roundedPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  })
}
