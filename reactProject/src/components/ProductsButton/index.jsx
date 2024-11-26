import React from 'react';
import './_ProductsButton.scss';

const ProductsButton = ({ onCategoryChange, activeCategory }) => {
  return (
    <section id="ProductsButton">
      <div className="container">
        <div className="section-links">
          <button
            onClick={() => onCategoryChange('all')}
            className={activeCategory === 'all' ? 'active' : ''}
          >
            All
          </button>
          <button
            onClick={() => onCategoryChange("men's clothing")}
            className={activeCategory === "men's clothing" ? 'active' : ''}
          >
            Men's clothing
          </button>
          <button
            onClick={() => onCategoryChange("women's clothing")}
            className={activeCategory === "women's clothing" ? 'active' : ''}
          >
            Women's Clothing
          </button>
          <button
            onClick={() => onCategoryChange('jewelery')}
            className={activeCategory === 'jewelery' ? 'active' : ''}
          >
            Jewellery
          </button>
          <button
            onClick={() => onCategoryChange('electronics')}
            className={activeCategory === 'electronics' ? 'active' : ''}
          >
            Electronics
          </button>
        </div>
      </div>
    </section>
  );
};


export default ProductsButton;
