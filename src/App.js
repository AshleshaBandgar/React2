import React from 'react'
import './App.css'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import PagenotFound from './pages/PagenotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

export default function App(){
  return (
    <div>   
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/SignUp' element={<SignUp/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Menu' element={<Menu/>}/>
            <Route path='*' element={<PagenotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
