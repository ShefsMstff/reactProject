




import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import './App.css'
import Products from "./components/Products/Products"
import Footer from "./components/Footer/Footer"
import Register from "./pages/Register"
import Login from "./pages/Login"
import About from './pages/About';
import Contact from './pages/Contact';
import Card from './pages/Card';
import ProductsButton from './components/ProductsButton';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const updateCart = (count) => setCartCount(count);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(savedCart.length); 
  }, []);

  return (
   <>
    <BrowserRouter>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productsbutton' element={<ProductsButton />} />
        <Route path="/products" element={<Products updateCart={updateCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card" element={<Card updateCart={updateCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
   </>
  )
}

export default App;
