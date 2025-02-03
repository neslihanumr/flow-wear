import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ categories, productName }) => {
  const categoryRoutes = {
    Women: '/womencollection',
    Men: '/mencollection',
    Formal: '/formalwear',
    Accessories: '/accessories',
  };

  const safeCategory =
    categories && categories.length > 0
      ? categoryRoutes[categories[0]] || '/default-category'
      : '/default-category';

  const safeProductName = productName || 'Product Name';

  return (
    <div className="breadcrumb absolute mt-3 top-0 left-4 tracking-wide text-xl text-zinc-600 p-2">
      <Link to="/">Home</Link>
      <span> / </span>
      <Link to={safeCategory}>
        {categories && categories.length > 0 ? categories[0] : 'Category'}
      </Link>
      <span> / </span>
      <span>{safeProductName}</span>
    </div>
  );
};

export default Breadcrumb;
