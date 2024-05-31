import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  Container,
  Card,
  ProductListUl,
  CardHeader,
  CardInfo,
  CardBottom,
} from "./styles"
import api from "../../../services/api"
import { FaArchive } from "react-icons/fa"
import { toast } from "react-toastify"
import { formatPrice } from "@/functions/formatReal"

interface Product {
  brand: string
  createdAt: string
  description: string
  id: number
  name: string
  photo: string
  price: string
  updatedAt: string
}

interface ProductListProps {
  addProduct: (product: Product) => void
}

const ProductList: React.FC<ProductListProps> = ({ addProduct }) => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("products", {
          params: {
            page: 1,
            rows: 8,
            sortBy: "id",
            orderBy: "ASC",
          },
        })
        setProducts(response.data.products || [])
      } catch (error) {
        console.error("Erro ao buscar produtos:", error)
      }
    }

    fetchProducts()
  }, [])

  const handleBuyProduct = (product: Product) => {
    const purchasedProducts = JSON.parse(
      localStorage.getItem("products_purchased") || "[]"
    )

    const isProductAlreadyPurchased = purchasedProducts.some(
      (purchasedProduct: Product) => purchasedProduct.id === product.id
    )

    if (isProductAlreadyPurchased) {
      toast.warning("Você já comprou esse produto. 🖐🏻")
      return
    }

    purchasedProducts.push(product)
    localStorage.setItem(
      "products_purchased",
      JSON.stringify(purchasedProducts)
    )
    toast.success("Produto comprado. 🥰")

    window.dispatchEvent(new Event("productsUpdated"))
  }

  return (
    <Container>
      <ProductListUl>
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <img src={product.photo} alt={product.name} />
              </CardHeader>
              <CardInfo>
                <div>
                  <h3>{product.name}</h3>
                  <button>
                    <p>{formatPrice(product.price)}</p>
                  </button>
                </div>
                <p>{product.description}</p>
              </CardInfo>
              <CardBottom onClick={() => handleBuyProduct(product)}>
                <FaArchive size={13} />
                <p>COMPRAR</p>
              </CardBottom>
            </Card>
          </motion.div>
        ))}
      </ProductListUl>
    </Container>
  )
}

export default ProductList
