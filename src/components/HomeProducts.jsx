import React, { useState } from 'react';
import productData from '../assets/data/productData';
import ProductCard from './ProductCard';

const HomeProducts = () => {
    const limitedProducts = productData.slice(0, 8);
  
    return (
        <section className="max-w-7xl md:mx-auto mx-5 my-44 font-main text-center">
            <span className="text-xl font-thin my-3">Featured products</span>
            <h3 className="text-4xl font-semibold">Popular Right Now</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 mt-16 justify-items-center">
        {limitedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
    );
};

export default HomeProducts;
