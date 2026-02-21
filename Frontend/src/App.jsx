import React, { useState, useEffect } from "react"
import axios from "axios"
import './App.css'
import PaymentButton from "./paymentButton"

function App() {
  const [product, setproduct] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:3000/api/products/get-item")
      .then(res => {
        setproduct(res.data.product)
        console.log(res.data.product)
      })
  }, [])

  const handleBuyNow = () => {
    console.log("Buy Now clicked for product:", product._id)
    // Add your buy now logic here
  }

  const formatPrice = (price) => {
    if (!price) return ''
    const amount = (price.amount / 100).toLocaleString('en-IN', {
      style: 'currency',
      currency: price.currency
    })
    return amount
  }

  if (!product) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return (
    <div className="app-container">
      <div className="product-card">
        <div className="product-image-container">
          <img 
            src={product.image} 
            alt={product.title} 
            className="product-image"
          />
        </div>
        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <div className="product-price-section">
            <span className="product-price">{formatPrice(product.price)}</span>
          </div>
         <PaymentButton />
        </div>
      </div>
    </div>
  )
}

export default App
