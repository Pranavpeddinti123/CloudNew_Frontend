import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import About from './pages/About';
import Menu from './components/Menu';
import Profile from './pages/Profile';
import ProductBasedId from './components/ProductBasedId';
import Cart from './pages/Cart';

function App() {


  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-[5vw] md:px-[4vw] lg:px-[4vw] fffaf4 bg-[#fffaf4]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/menu" element={<Menu />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/menu/:itemId" element={<ProductBasedId/>} />
          <Route path='/loginOrRegister' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App
