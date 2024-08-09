import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./assets/Pages/Home"
import Formpage from "./assets/Pages/Formpage"
import Aboutpage from "./assets/Pages/Aboutpage"
import Navbar from './assets/Components/Navbar'
import Privateroute from './assets/Components/PrivateRoute'

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route element={<Privateroute />}>
          <Route path='/forms' element={<Formpage />}></Route>
          <Route path='/about' element={<Aboutpage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
