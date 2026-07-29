import React from 'react'
import { Route, Routes } from 'react-router'
import Login from './Login'
import Register from './Register'
import Navbar from './Navbar'
import ProductForm from './ProductForm'
import Products from './Products'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/create-product" element={<ProductForm/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
      </Routes>
    </div>
  )
}

export default App