import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/create-product">Create Prodtuct</Link>
        <Link to="/products">Products</Link>
    </div>
  )
}

export default Navbar