import React, { useEffect, useState } from "react"
import {
  Modal,
  ProductList,
  ProductItem,
  ProductName,
  ModalHeader,
  ModalBottom,
  ModalCurrent,
} from "./styles"
import { toast } from "react-toastify"
import { formatPrice } from "@/functions/formatReal"
import CountQuantity from "../CountQuantity"

interface Product {
  id: number
  name: string
  photo: string
  price: string
}

interface Props {
  isOpen: boolean
  products: Product[]
  closeModal: () => void
}

const ModalProducts: React.FC<Props> = ({ isOpen, products, closeModal }) => {
  const [purchasedProducts, setPurchasedProducts] = useState<Product[]>([])
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    const handleStorageChange = () => {
      const produtosComprados: Product[] = JSON.parse(
        localStorage.getItem("products_purchased") || "[]"
      )
      setPurchasedProducts(produtosComprados)
    }

    handleStorageChange()

    window.addEventListener("productsUpdated", handleStorageChange)

    return () => {
      window.removeEventListener("productsUpdated", handleStorageChange)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      const produtosComprados: Product[] = JSON.parse(
        localStorage.getItem("products_purchased") || "[]"
      )
      setPurchasedProducts(produtosComprados)
    } else {
      setPurchasedProducts([])
    }
  }, [isOpen])

  useEffect(() => {
    const calculateTotal = () => {
      const totalValue = purchasedProducts.reduce(
        (sum, product) => sum + parseFloat(product.price),
        0
      )
      setTotal(totalValue)
    }

    calculateTotal()
  }, [purchasedProducts])

  const handleRemoveProduct = (productId: number) => {
    const updatedProducts = purchasedProducts.filter(
      (product) => product.id !== productId
    )
    setPurchasedProducts(updatedProducts)
    localStorage.setItem("products_purchased", JSON.stringify(updatedProducts))
  }

  const handleFinalizeShopping = () => {
    localStorage.removeItem("products_purchased")
    toast.success("Compra efetuada com sucesso! 🥰")
    closeModal()
  }

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    const updatedProducts = purchasedProducts.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          price: (parseFloat(product.price) * newQuantity).toString(),
        }
      }
      return product
    })
    setPurchasedProducts(updatedProducts)
  }

  return (
    <>
      {isOpen && (
        <Modal>
          <ModalHeader>
            <h3>Carrinho de compras</h3>
            <button onClick={closeModal}>x</button>
          </ModalHeader>

          <ProductList>
            <div className={purchasedProducts.length > 5 ? "scrollable" : ""}>
              {purchasedProducts.map((product) => (
                <ProductItem key={product.id}>
                  <button
                    className="delete_product"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    X
                  </button>
                  <img src={product.photo} alt={product.name} />
                  <ProductName>{product.name}</ProductName>
                  <CountQuantity />
                  <ProductName>{formatPrice(product.price)}</ProductName>
                </ProductItem>
              ))}
            </div>
          </ProductList>

          <ModalCurrent>
            <p>Total</p>
            <p>{formatPrice(total.toFixed(2))}</p>
          </ModalCurrent>

          <ModalBottom onClick={handleFinalizeShopping}>
            <h6>Finalizar Compra</h6>
          </ModalBottom>
        </Modal>
      )}
    </>
  )
}

export default ModalProducts
