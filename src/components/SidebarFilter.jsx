import React, { useState } from "react";

const brands = ["Mango", "Chanel", "YSL", "Zara", "Bershka", "Nike"];
const sizes = ["XS", "S", "M", "L", "XL", "STD"];

const SidebarFilter = ({ onFilterChange }) => {
  const [accordionOpen, setAccordionOpen] = useState({
    brands: true,
    price: true,
    size: true,
  });
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [price, setPrice] = useState(0);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const toggleAccordion = (section) => {
    setAccordionOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleBrandChange = (brand) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((item) => item !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(updatedBrands);
    onFilterChange("brands", updatedBrands);
  };

  const handleSizeChange = (size) => {
    const updatedSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((item) => item !== size)
      : [...selectedSizes, size];
    setSelectedSizes(updatedSizes);
    onFilterChange("sizes", updatedSizes);
  };

  return (
    <div className="w-3/4 md:p-5 font-main whitespace-nowrap">
      {/* Brands Filter */}
      <div className="mb-6">
        <h2
          className="font-normal text-md md:text-2xl mb-2 cursor-pointer"
          onClick={() => toggleAccordion("brands")}
        >
          Brands
        </h2>
        <hr className="text-black mb-3" />
        {accordionOpen.brands && (
          <div>
            {brands.map((brand) => (
              <div key={brand} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={brand}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                  className="accent-black"
                />
                <label htmlFor={brand} className="ml-2 text-sm md:text-lg">
                  {brand}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h2
          className="font-normal text-md md:text-2xl mb-2 cursor-pointer"
          onClick={() => toggleAccordion("price")}
        >
          Price
        </h2>
        <hr className="text-black mb-3" />
        {accordionOpen.price && (
          <>
            <input
              type="range"
              min="0"
              max="200"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                onFilterChange("price", e.target.value);
              }}
              className="w-full accent-black"
            />
            <div className="flex justify-between text-sm">
              <span>$0</span>
              <span>${price}</span>
              <span>$200</span>
            </div>
          </>
        )}
      </div>

      {/* Size Filter */}
      <div className="mb-6">
        <h2
          className="font-normal text-md md:text-2xl mb-2 cursor-pointer"
          onClick={() => toggleAccordion("size")}
        >
          Size
        </h2>
        <hr className="text-black mb-3" />
        {accordionOpen.size && (
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <div
                key={size}
                className={`border border-gray-300 p-2 text-center rounded-md cursor-pointer transition-all duration-200 ${
                  selectedSizes.includes(size)
                    ? "bg-gray-300 text-black shadow-inner"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarFilter;
