import React, { useState } from 'react';
import { FaTwitter, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FooterColumn = ({ title, children, isDropdown }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:block">
      {/* Header Open/Close Dropdown */}
      {title && (
        <div 
          className={`flex justify-between items-center md:block mb-3 cursor-pointer md:cursor-default`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="font-main font-semibold text-[15px]">{title}</h2>
          {isDropdown && (
            <span className="md:hidden text-sm">
              {isOpen ? <FaMinus /> : <FaPlus />}
            </span>
          )}
        </div>
      )}

      {/* content */}
      <div className={`md:block ${isDropdown ? (isOpen ? "block" : "hidden") : "block"}`}>
        {children}
      </div>
    </div>
  );
};

const FooterLink = ({ to, text }) => (
  <li className="mb-2">
    <Link to={to} className="font-main font-light hover:text-gray-600 transition-colors duration-300">
      {text}
    </Link>
  </li>
);

const Footer = () => {
  return (
    <footer className="bg-[#EBEBEB] py-8">
      <div className="max-w-7xl mx-3 md:mx-auto px-4">
        
        {/* Logo */}
        <div className="text-center mb-4 md:mb-10">
          <Link to="/" className="font-logo text-3xl md:text-4xl cursor-pointer hover:text-gray-600 transition-colors duration-300">
            Flow Wear
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          
          {/* Categories */}
          <FooterColumn title="Categories" isDropdown={true}>
            <ul>
              <FooterLink to="/womencollection" text="Women's Collection" />
              <FooterLink to="/mencollection" text="Men's Collection" />
              <FooterLink to="/formalwear" text="Formal Wear" />
              <FooterLink to="/accessories" text="Accessories" />
            </ul>
          </FooterColumn>

          {/* Resources */}
          <FooterColumn title="Resources" isDropdown={true}>
            <ul>
              <FooterLink to="/about" text="About" />
              <FooterLink to="/contact" text="Contact" />
              <FooterLink to="/help" text="Help Center" />
            </ul>
          </FooterColumn>

          {/* Subscribe */}
          <FooterColumn title="Subscribe">
            <input
              type="email"
              placeholder="Enter your email"
              className="border pl-4 border-gray-300 rounded-full p-3 w-full mb-2 focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
            <button className="bg-btncolor text-white py-3 w-full px-4 rounded-full hover:bg-[#752424] transition-colors duration-300">
              Subscribe
            </button>
          </FooterColumn>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start space-x-4 mt-10 md:mt-10">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl cursor-pointer hover:text-gray-600" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl cursor-pointer hover:text-gray-600" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-xl cursor-pointer hover:text-gray-600" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-xl cursor-pointer hover:text-gray-600" />
          </a>
        </div>

        {/* Copyright */}
        <hr className="my-8 border-gray-300" />
        <p className="text-center text-xs text-[#b3b2b2]">
          &copy; 2024 All Rights Reserved By FlowWear
        </p>
      </div>
    </footer>
  );
};

export default Footer;
