"use client"
import React, { useState, useEffect } from "react"
import Navbar from "@/components/Navbar"
import ProductList from "@/components/ProductList"
import Footer from "@/components/Footer"
import ModalProducts from "@/components/ModalProducts"

interface Product {
  id: number
  name: string
}

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [purchasedProducts, setPurchasedProducts] = useState<Product[]>([])

  useEffect(() => {
    const handleGetProducts = () => {
      const produtosSalvos = JSON.parse(
        localStorage.getItem("products_purchased") || "[]"
      )
      setPurchasedProducts(produtosSalvos)
    }

    handleGetProducts()
  }, [])
  // purchasedProducts

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const addProduct = (product: Product) => {
    setPurchasedProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, product]
      localStorage.setItem(
        "products_purchased",
        JSON.stringify(updatedProducts)
      )
      return updatedProducts
    })
  }

  return (
    <div
      style={{ backgroundColor: "#f3f3f3" }}
      className="flex flex-col bg-white min-h-screen"
    >
      <Navbar purchasedProducts={purchasedProducts} openModal={toggleModal} />
      <main className="flex-grow p-4">
        <ProductList addProduct={addProduct} />
      </main>
      <Footer />
      <ModalProducts
        isOpen={isModalOpen}
        products={purchasedProducts}
        closeModal={toggleModal}
      />
    </div>
  )
}

export default Home
