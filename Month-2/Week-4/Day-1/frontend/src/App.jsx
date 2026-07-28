import React from 'react'
import { Route, Routes } from 'react-router'
import Login from './Login'
import Register from './Register'
import Navbar from './Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </div>
  )
}

export default App