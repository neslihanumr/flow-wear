import React, { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHeart, FaUser, FaShoppingCart } from 'react-icons/fa';
import Cart from './Cart';
import { useCart } from '../context/CartContext';
import { FavoritesContext } from '../context/FavoritesContext';
import { FiChevronDown } from "react-icons/fi";
import { CSSTransition } from 'react-transition-group';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { hasNewFavorite } = useContext(FavoritesContext);
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const menuRef = useRef(null);

  const handleCartToggle = () => {
    setIsCartOpen((prev) => !prev);
  };

  const closeDropdowns = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="w-full fixed bg-white shadow-md top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="md:hidden flex items-center">
          <button onClick={handleMobileMenuToggle} className="text-black text-2xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Logo */}
        <h1 className="font-logo text-2xl cursor-pointer whitespace-nowrap text-center ml-9 md:ml-0 flex-1 md:flex-none">
          Flow Wear
        </h1>
          {/* Desktop Links */}
        <div className="hidden md:flex space-x-20 text-[17px]">
          <Link to="/" 
           className="relative text-black after:absolute after:left-0 after:bottom-[-1.5px] after:w-full after:h-[1.5px] after:bg-black after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
           onClick={closeDropdowns}>
             Home
          </Link>
          <div className="relative">
            <button
              onClick={handleDropdownToggle}
              className="relative text-black flex items-center after:absolute after:left-0 after:bottom-[-1.5px] after:w-full after:h-[1.5px] after:bg-black after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
              Collections
              <FiChevronDown
                className={`ml-2 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-48 bg-white shadow-lg z-20 overflow-hidden">
                {['Women Collection', 'Men Collection', 'Formal Wear', 'Accessories'].map((item) => (
                  <Link
                    key={item}
                    to={`/${item.replace(/ /g, '').toLowerCase()}`}
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    onClick={closeDropdowns}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/about"
            className="relative text-black  after:absolute after:left-0 after:bottom-[-1.5px] after:w-full after:h-[1.5px] after:bg-black after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
            onClick={closeDropdowns}>
            About
          </Link>
          <Link to="/contact" 
           className="relative text-black  after:absolute after:left-0 after:bottom-[-1.5px] after:w-full after:h-[1.5px] after:bg-black after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
           onClick={closeDropdowns}>
            Contact
          </Link>
        </div>
      {/* Desktop Icons */}
        <div className="md:flex items-center space-x-4">
          <div className="flex md:space-x-3 space-x-2 md:text-2xl text-xl">
            <Link to="/account/favorites" onClick={closeDropdowns} className="relative">
              <FaHeart className="cursor-pointer hover:text-[#d8d8d8] transition-colors duration-300 "/>
              {hasNewFavorite && (
                <span className="absolute bg-red-600 top-1 right-0 text-white rounded-full w-2 h-2 flex items-center justify-center text-xs translate-x-1/2 -translate-y-1/2">
                </span>
              )}
            </Link>
            <button onClick={handleCartToggle}>
              <FaShoppingCart className="cursor-pointer hover:text-[#d8d8d8] transition-colors duration-300" />
              {cartItemCount > 0 && (
                <span className="absolute top-5 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs translate-x-1/2 -translate-y-1/2">
                  {cartItemCount}
                </span>
              )}
            </button>
            <Link to="/account/myprofile">
              <FaUser className="cursor-pointer hover:text-[#d8d8d8] transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </div>
       {/* Cart Component */}

      <Cart isOpen={isCartOpen} closeCart={handleCartToggle} />
       {/* Mobile Menu */}
      <CSSTransition
        in={isMobileMenuOpen}
        timeout={300}
        classNames="slide"
        unmountOnExit
        nodeRef={menuRef}
      >
        <div ref={menuRef} className="fixed inset-0 bg-white z-20 flex flex-col items-start p-6 space-y-6 text-lg w-2/3">
          <button className="self-end text-black text-2xl" onClick={handleMobileMenuToggle}>
            <FaTimes />
          </button>
          {['Home', 'Collections', 'About', 'Contact'].map((item) => (
            <React.Fragment key={item}>
              {item === 'Collections' ? (
                <div className="w-full">
              <button
              onClick={handleDropdownToggle}
              className="text-black hover:text-[#d8d8d8] flex items-center"
            >
              Collections
              <FiChevronDown
                className={`ml-2 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
                  {isDropdownOpen && (
                    <div className="pl-4 mt-2 bg-white">
                      {['Women Collection', 'Men Collection', 'Formal Wear', 'Accessories'].map((subItem) => (
                        <Link
                          key={subItem}
                          to={`/${subItem.replace(/ /g, '').toLowerCase()}`}
                          className="block px-4 py-2 text-black hover:bg-gray-200"
                          onClick={closeDropdowns}
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '')}`}
                  className="text-black hover:text-[#d8d8d8]"
                  onClick={closeDropdowns}
                >
                  {item}
                </Link>
              )}
              <hr className="w-full border-t-2 border-gray-300" />
            </React.Fragment>
          ))}
        </div>
      </CSSTransition>
    </nav>
  );
};

export default Navbar;
