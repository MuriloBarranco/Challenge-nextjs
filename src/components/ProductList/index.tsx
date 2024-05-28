import React from "react"

const products = [
  { id: 1, name: "Produto 1", price: "R$ 100" },
  { id: 2, name: "Produto 2", price: "R$ 200" },
  { id: 3, name: "Produto 3", price: "R$ 300" },
]

const ProductList = () => {
  return (
    <div className="w-full p-4">
      <h2 className="text-2xl mb-4">Lista de Produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="border p-2 mb-2">
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
