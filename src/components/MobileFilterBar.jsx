import React, { useState } from "react";
import { IoFilter } from "react-icons/io5";

const MobileFilterBar = ({ onFilterChange, filters, applyFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFilterBar = () => {
    setIsOpen(!isOpen);
  };

  const brands = ["Mango", "Chanel", "YSL", "Zara", "Bershka", "Nike"];
  const sizes = ["XS", "S", "M", "L", "XL", "STD"];

  return (
    <div className="md:hidden mx-4 absolute top-[8rem] left-0 right-0  font-main">
      {/* Toggle Button */}
      <button
        onClick={toggleFilterBar}
        className="w-full flex justify-center items-center gap-1 p-4 rounded-lg bg-[#f5f5f5] text-black text-center font-normal"
      >
        {isOpen ? "Close" : "Filter"}
        <IoFilter />
      </button>

      {/* Filter Bar */}
      <div
        className={`overflow-hidden px-4 transition-[max-height] duration-500 ease-in-out bg-[#f5f5f5] ${isOpen ? "max-h-[600px]" : "max-h-0"}`}
      >
        {/* Price Filter */}
        <div className="mb-8">
          <label className="block mb-2 font-bold">Price (Up to)</label>
          <input
            type="range"
            min="0"
            max="200"
            value={filters.price}
            onChange={(e) => onFilterChange("price", e.target.value)}
            className="w-full accent-black"
          />
          <p className="text-sm mt-1">Up to ${filters.price}</p>
        </div>

        {/* Brand Filter */}
        <div className="mb-8">
          <label className="block mb-2 font-bold">Brands</label>
          {brands.map((brand) => (
            <div key={brand} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => {
                  const updatedBrands = filters.brands.includes(brand)
                    ? filters.brands.filter((b) => b !== brand)
                    : [...filters.brands, brand];
                  onFilterChange("brands", updatedBrands);
                }}
                className="mr-2"
              />
              <label>{brand}</label>
            </div>
          ))}
        </div>

        {/* Size Filter */}
        <div className="mb-8">
          <label className="block mb-2 font-bold">Sizes</label>
          <div className="flex gap-2 flex-wrap">
            {sizes.map((size) => (
              <button
                key={size}
                className={`p-2 border rounded-md ${
                  filters.size.includes(size)
                    ? "bg-gray-300 border-gray-500"
                    : "border-gray-300"
                }`}
                onClick={() => {
                  const updatedSizes = filters.size.includes(size)
                    ? filters.size.filter((s) => s !== size)
                    : [...filters.size, size];
                  onFilterChange("size", updatedSizes);
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Apply Filters Button */}
        <button
          onClick={() => {
            applyFilters();
            setIsOpen(false);
          }}
          className="w-full bg-black rounded-lg text-white py-2 mt-4 mb-8"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default MobileFilterBar;
