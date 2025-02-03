import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import productData from '../assets/data/productData';
import Breadcrumb from '../components/Breadcrumb';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';
import ProductTestimonials from '../components/ProductTestimonials';
import OtherProducts from '../components/OtherProduct';
import { useCart } from '../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate();

  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const { addToCart } = useCart();
  const isFavorited = favorites.some((item) => item.id === parseInt(id, 10));

  useEffect(() => {
    const foundProduct = productData.find((item) => item.id === parseInt(id, 10));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleFavoriteClick = () => {
    if (isFavorited) {
      removeFavorite(product.id);
      toast.info('Removed from favorites!', {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      addFavorite(product);
      toast.success('Added to favorites!', {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size!', {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    addToCart(product, selectedSize, quantity);
    toast.success('Product added to cart!', {
      position: "top-center",
      autoClose: 3000,
    });
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-page max-w-7xl mx-auto my-8 font-text">
      <ToastContainer />
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <img src={product.image} alt={product.name} className="w-full object-cover md:ml-4" />
        </div>

        <div className="flex-1 relative p-6 md:ml-8">
          <Breadcrumb categories={product.categories} productName={product.name} />
          <h1 className="text-2xl font-bold mt-12">{product.name}</h1>
          <p className="mt-3 text-gray-700 text-sm">{product.description}</p>

          <div className="flex items-center mt-3">
            <span className="text-sm text-gray-700 mr-2">{product.rating.toFixed(1)}</span>
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i + 1 <= Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}
              />
            ))}
          </div>

          <div className="mt-6 flex flex-row gap-3">
            <select
              className="text-sm text-gray-700 border rounded p-1"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="" disabled>Choose Size</option>
              {product.sizes.map((size, index) => (
                <option key={index} value={size}>{size}</option>
              ))}
            </select>
            <div className="flex items-center">
              <button className="px-4 py-2 bg-gray-100 text-lg text-gray-700 rounded-l-md hover:bg-gray-300" onClick={handleDecrease}>-</button>
              <span className="w-12 text-center py-2 text-lg">{quantity}</span>
              <button className="px-4 py-2 bg-gray-100 text-lg text-gray-700 rounded-r-md hover:bg-gray-300" onClick={handleIncrease}>+</button>
            </div>
          </div>

          <ul className="mt-12 text-sm list-disc list-inside space-y-2">
            <p className='text-xl mb-3'>Free shipping on orders over $50!</p>
            <li>No-Risk Money Back Guarantee!</li>
            <li>No Hassle Refunds</li>
            <li>Secure Payments</li>
          </ul>

          <div className='flex flex-row mt-6'>
            <button onClick={handleAddToCart} className="px-[83px] py-2 mr-5 bg-black text-white rounded hover:bg-zinc-800 transition-colors">
              Add to Cart
            </button>
            <button onClick={handleFavoriteClick} aria-label="Toggle Favorite">
              {isFavorited ? <IoMdHeart size={35} /> : <IoMdHeartEmpty size={35} color="black" />}
            </button>
          </div>
        </div>
      </div>
      <ProductTestimonials />
      <OtherProducts products={productData.slice(9, 24)} />
    </div>
  );
};

export default ProductPage;
