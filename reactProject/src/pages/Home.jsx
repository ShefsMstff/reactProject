import React, { useState, useEffect } from 'react';
import './_Home.scss';
import mainImage from '../assets/image/main.png.jpg';
import Products from '../components/Products/Products';

const Home = () => {
  const [cartCount, setCartCount] = useState(0);

 
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cart.length); 
  }, []);

 
  const updateCart = (count) => setCartCount(count);

  return (
    <>
      <section id='home-image'>
        <img src={mainImage} alt="Main" />
        <div className="home-image-text">
          <h1>New Season Arrivals</h1>
          <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </section>
      
      
      <Products updateCart={updateCart} />
    </>
  );
};

export default Home;
