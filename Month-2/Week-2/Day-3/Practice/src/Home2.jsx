import React, { useContext } from 'react'
import { nameContext } from './App'

function Home2() {
    const home2Name=useContext(nameContext)
  return (
    <div>Home2
        <br />
    Home 2 Name :{home2Name}
    </div>
  )
}

export default Home2