import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'
import Movie from './components/Movie'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App