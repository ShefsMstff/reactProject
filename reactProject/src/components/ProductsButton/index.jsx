import React from 'react';
import './_ProductsButton.scss';

const ProductsButton = ({ onCategoryChange }) => {
  return (
    <section id="ProductsButton">
      <div className="container">
        <div className="section-links">
          <button onClick={() => onCategoryChange('all')}>All</button>
          <button onClick={() => onCategoryChange("men's clothing")}>Men clothing</button>
          <button onClick={() => onCategoryChange("women's clothing")}>Womens Clothing</button>
          <button onClick={() => onCategoryChange('jewelery')}>Jewellery</button>
          <button onClick={() => onCategoryChange('electronics')}>Electronics</button>
        </div>
      </div>
    </section>
  );
};

export default ProductsButton;
