import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './_Card.scss'

const Card = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const handleIncrement = (product) => {
    const updatedCart = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleDecrement = (product) => {
    const updatedCart = cartItems.map((item) =>
      item.id === product.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };
return (
    <div className="Card-storage">
      <div className="container">
        <h1>Card</h1>
        <hr />
        {cartItems.length === 0 ? (
          <div className="card-window">
            <h1>Your Cart is Empty</h1>
            <button className="navigation">
              <FaArrowLeft />
              <Link to="/products">Continue shopping</Link>
            </button>
          </div>
        ) : (
          <div className="card-window">
            <div className="card-window-products">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrement(item)}>-</button>
                    <span>{item.quantity || 0}</span>
                    <button onClick={() => handleIncrement(item)}>+</button>
                  </div>
                  <p>${item.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
