import React from 'react'
import { useNavigate } from 'react-router'

function Home() {
    const navigate=useNavigate()
  return (
    <div>Home

        <button onClick={()=>navigate("/service")}>Go to Service page</button>
    </div>
  )
}

export default Home