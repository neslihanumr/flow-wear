import React, { useState } from 'react';
import productData from '../../assets/data/productData';
import SidebarFilter from '../../components/SidebarFilter';
import siteImages from '../../assets/images/siteImage';
import ProductCard from '../../components/ProductCard';
import MobileFilterBar from '../../components/MobileFilterBar';
import MobileCollectionSearch from '../../components/MobileCollectionSearch';

const FormalWear = () => {
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [filters, setFilters] = useState({
    category: ['Formal'],
    price: 200,
    size: [],
    brands: [],
  });

  
  const handleFilterChange = (filterType, filterValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: filterValue,
    }));
  };

  const applyFilters = () => {
    let updatedProducts = productData;

    if (filters.category.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        filters.category.includes(product.categories[0])
      );
    }

    updatedProducts = updatedProducts.filter(
      (product) => product.price <= filters.price
    );

    if (filters.size.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        product.sizes.some((size) => filters.size.includes(size))
      );
    }

    if (filters.brands.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        filters.brands.some((brand) => product.brand === brand)
      );
    }

    setFilteredProducts(updatedProducts);
  };

  React.useEffect(() => {
    applyFilters();
  }, [filters]);


  const handleSearch = (query) => {
    const results = productData.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) &&
        product.categories.includes('Formal') 
    );
    setFilteredProducts(results);
  };


  return (
    <div>
      {/* Header and Hero */}
      <section className="relative w-full h-40 md:h-72 bg-cover bg-center hidden md:block">
        <img
          src={siteImages.formalhero}
          alt="Formal Wear"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl md:text-8xl font-bold font-text tracking-wide text-[#d2d2d2]">
            Formal Wear
          </h2>
        </div>
      </section>
 {/* Mobile Collection Search */}
    <MobileCollectionSearch category="Formal" onSearch={handleSearch} />
      {/* Category */}
      <div className="flex mb-36 md:mt-10 mt-20">
          {/* Sidebar */}
        <div className="w-1/4 p-5 hidden md:block">
          <SidebarFilter onFilterChange={handleFilterChange} />
        </div>
      {/* Product List */}
      <div className="md:w-3/4 w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
    </div>
    {/* Mobile Filter Bar */}
    <MobileFilterBar
        onFilterChange={handleFilterChange}
        filters={filters}
        applyFilters={applyFilters}
      />
    </div>
  );
};

export default FormalWear;
