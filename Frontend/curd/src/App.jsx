import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'

import Register from './component/register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Register />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
