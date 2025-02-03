import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import siteImages from '../../assets/images/siteImage';
import BrandLogos from '../../components/BrandLogos';
import HomeProducts from '../../components/HomeProducts';
import Testimonials from '../../components/Testimonials';
import HomeFeatures from '../../components/HomeFeatures';
import CategoriesSection from '../../components/HomeCategory';
import { fadeIn, slideInFromLeft } from '../../utils/animations';

const Home = () => {
  const scrollToCategories = () => {
    const categoriesSection = document.getElementById("categories");
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <img src={siteImages.home} alt="Hero" className="w-full h-full object-cover" />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Hero Content */}
        <motion.div
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 flex items-center justify-start"
        >
          <div className="md:ml-28 px-6 text-white space-y-3 md:space-y-5 -mt-36">
            <h2 className="text-5xl md:text-7xl font-extrabold">
              DISCOVER YOUR <br /> PERFECT FIT
            </h2>
            <p className="text-lg md:text-2xl font-light">Elevate Your Style</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToCategories}
              className="px-8 py-3 bg-white bg-opacity-75 text-black rounded-full hover:bg-opacity-100 transition-all duration-300"
            >
              SHOP NOW
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Brand Logos */}
        <BrandLogos />
     
      {/* Categories Section */}
        <CategoriesSection />  

      {/* Home Products Section */}
        <HomeProducts />

      {/* New Arrivals Section */}
      <section className="new-arrivals-section relative text-center cursor-pointer">
        <img
          src={siteImages.newarrivals}
          alt="New Arrivals"
          className="w-full object-cover min-h-[350px] md:h-[800px] md:bg-fixed bg-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-10 flex items-center justify-center"></div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="absolute inset-0 flex items-center justify-end text-white px-10"
        >
          <div className="md:w-1/2 w-full">
            <p className="text-sm uppercase tracking-wide mb-4">New Arrivals</p>
            <h2 className="md:text-7xl text-4xl font-bold mb-5">
              Introducing Our Newest Arrivals
            </h2>
            <p className="md:text-[16px] text-sm tracking-wide">
              Explore the latest in stylish apparel and accessories, <br />designed to elevate your look.
            </p>
            <Link to="/womencollection">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-transparent border border-white text-white px-6 py-2 rounded-3xl mt-5 hover:bg-white hover:text-black transition-all duration-300"
              >
                Explore
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
        <Testimonials />

      {/* Home Features Section */}
        <HomeFeatures />

    </>
  );
};

export default Home;
