import React, { useState, useEffect } from "react";
import SidebarFilter from "../../components/SidebarFilter";
import productData from "../../assets/data/productData";
import siteImages from "../../assets/images/siteImage";
import ProductCard from "../../components/ProductCard";
import MobileFilterBar from "../../components/MobileFilterBar";
import MobileCollectionSearch from "../../components/MobileCollectionSearch";

const WomenCollection = () => {
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [filters, setFilters] = useState({
    category: ["Women"],
    price: 200,
    size: [],
    brands: [],
  });

  useEffect(() => {
    const applyFilters = () => {
      setFilteredProducts(
        productData.filter(
          (product) =>
            filters.category.includes(product.categories[0]) &&
            product.price <= filters.price &&
            (filters.size.length === 0 || product.sizes.some((size) => filters.size.includes(size))) &&
            (filters.brands.length === 0 || filters.brands.includes(product.brand))
        )
      );
    };
    applyFilters();
  }, [filters]);

  const handleFilterChange = (filterType, filterValue) => {
    setFilters((prev) => ({ ...prev, [filterType]: filterValue }));
  };

  const handleSearch = (query) => {
    setFilteredProducts(
      productData.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) &&
          product.categories.includes("Women")
      )
    );
  };

  return (
    <>
      {/* Header and Hero */}
      <section className="relative w-full h-40 md:h-72 bg-cover bg-center hidden md:block">
        <img 
          src={siteImages.womencolhome} 
          alt="Women's Collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl md:text-8xl font-bold font-text tracking-wide text-[#d2d2d2]">
            Women's Collection
          </h2>
        </div>
      </section>

      {/* Mobile Search */}
      <div>
        <MobileCollectionSearch category="Women" onSearch={handleSearch} />
      </div>

      {/* Products and Filter */}
      <div className="flex mb-36 md:mt-10 mt-20">
        {/* Sidebar */}
        <div className="w-1/4 p-5 hidden md:block">
          <SidebarFilter onFilterChange={handleFilterChange} />
        </div>

        {/* Product List */}
        <div className="md:w-3/4 w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Filter */}
      <div>
        <MobileFilterBar onFilterChange={handleFilterChange} filters={filters} />
      </div>
    </>
  );
}; 

export default WomenCollection;