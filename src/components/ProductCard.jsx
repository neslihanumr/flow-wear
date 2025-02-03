import React, { useState, useContext } from 'react';
import { FaStar, FaHeart } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';
import { showSuccessToast, showErrorToast } from '../utils/toastUtils';

const ProductCard = ({ product, variant = "default" }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext); 
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState({}); 
 
  const handleSizeChange = (e) => {
    setSelectedSize({ ...selectedSize, [product.id]: e.target.value });
  };

  const isFavorite = favorites.some((fav) => fav.id === product.id);
  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(product.id);
      showSuccessToast('Removed from favorites!');
    } else {
      addFavorite(product); 
      showSuccessToast('Added to favorites!');
    }
  };

  const handleAddToCart = () => {
    const size = selectedSize[product.id];
    if (!size) {
      showErrorToast('Please select a size!');
      return;
    }

    addToCart(product, size, 1); 
    showSuccessToast('Product added to cart!');
  };
;

  return (
<div
  className={`${
    variant === "otherProducts" ? "w-64" : "w-full"
  } bg-white  mx-auto flex flex-col items-center mb-6 pb-8 cursor-pointer relative group`}
>
  {/* Favorite Icon */}
  <button
    onClick={toggleFavorite}
    className={`absolute top-2 right-2 text-2xl ${
      isFavorite ? "text-black" : "text-gray-300"
    }`}
  >
    <FaHeart />
  </button>

  {/* Product Image */}
  <Link to={`/product/${product.id}`} className="w-full">
    <img
      src={product.image}
      alt={product.name}
      className="w-full md:h-72 h-52 object-cover mb-4 "
    />
  </Link>

  {/* Product Details */}
  <h4 className="text-sm md:text-xl font-medium text-center min-h-[40px] flex items-center justify-center ">
    {product.name}
  </h4>
  <div className="flex items-center justify-center space-x-2 mb-2 mt-3">
    <p className="text-sm md:text-xl font-normal ">{`$${product.price.toFixed(2)}`}</p>
    <div className="flex items-center">
      <FaStar className="text-yellow-500" />
      <span className="ml-1 text-sm text-gray-700">| {product.rating}</span>
    </div>
  </div>

  {/* Size Selector */}
  <div className="absolute inset-0 flex items-start md:mt-60 mt-44 justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <select
      className="text-sm text-gray-700 border rounded p-1 w-16 md:w-24 h-8"
      value={selectedSize[product.id] || ""}
      onChange={handleSizeChange}
    >
      <option value="" disabled>
        Size
      </option>
      {product.sizes.map((size, index) => (
        <option key={index} value={size}>
          {size}
        </option>
      ))}
    </select>

    {/* Add button */}
    <button
      onClick={handleAddToCart}
      className="px-2 w-1/2 md:text-sm text-[12px] bg-black text-white rounded h-8 hover:bg-zinc-800 transition-colors duration-500 whitespace-nowrap"
    >
      Add
    </button>
  </div>
</div>
  );
};

export default ProductCard;
