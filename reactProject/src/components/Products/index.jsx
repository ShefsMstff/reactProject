import React, { useState, useEffect } from 'react';
import './_Product.scss';
import ProductsButton from '../ProductsButton';

const Products = ({ updateCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Məlumatları çəkə bilmədik!');
      }
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (err) {
      setError(err.message);

    } finally {
      setLoading(false);
    }
  };

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const productExists = existingCart.find((item) => item.id === product.id);


    let updatedCart;
    if (productExists) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...existingCart, { ...product, quantity: 1 }];
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCart(updatedCart.length);

  };

  const filterProducts = (category) => {
    setActiveCategory(category);
    setCategory(category);
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section id="products">
      <div className="container">
        <h1>Latest Products</h1>
        <hr />
        <ProductsButton onCategoryChange={filterProducts} activeCategory={activeCategory} />

        {loading ? (
          <p style={{ fontSize: '20px' }}>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="row">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-4 pad">
                <div className="card">
                  <div className="card-image">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="card-actions">
                    <div className="card-actions-name">
                      <h3>{product.title.substring(0, 20)}...</h3>
                      <p>{product.description.substring(0, 60)}...</p>
                    </div>
                    <div className="card-actions-price line">
                      <p>${product.price}</p>
                    </div>
                    <div className="card-actions-buttons">
                      <button>Buy Now</button>
                      <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
