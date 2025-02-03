import React from 'react';
import { Link } from 'react-router-dom';
import siteImages from '../assets/images/siteImage';

const categories = [
    { name: 'Women Collection', image: siteImages.womencol, path: '/womencollection' },
    { name: 'Men Collection', image: siteImages.mencolhero, path: '/mencollection' },
    { name: 'Formal Wear', image: siteImages.formalhero, path: '/formalwear' },
    { name: 'Accessories', image: siteImages.accessories, path: '/accessories' },
];

const CategoriesSection = () => {
  return (
    <section id='categories' className='max-w-7xl mx-5 md:mx-auto my-24 md:my-44 font-main text-center'>
      <span className='text-xl font-thin my-3'>Trending</span>
      <h3 className='md:text-4xl text-3xl font-semibold'>Shop by categories</h3>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-9'>
        {categories.map((category, index) => (
          <Link to={category.path} key={index} className='transition-transform duration-300 hover:scale-105 cursor-pointer'>
            <img src={category.image} alt={category.name} className='w-full rounded-xl h-40 sm:h-48 md:h-64 lg:h-80 object-cover mb-2'/>
            <p className='text-lg sm:text-xl md:text-2xl font-normal'>{category.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
