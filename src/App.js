import React from 'react'
import Home from './screens/users/Home'
import Navbar from './components/common/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route></Routes></BrowserRouter>
    </div>
  )
}

export default App