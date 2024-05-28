"use client"

import Navbar from "@/components/Navbar"
import ProductList from "@/components/ProductList"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <ProductList />
      </main>
      <Footer />
    </div>
  )
}
