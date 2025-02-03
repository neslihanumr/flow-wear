import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductCard from './ProductCard';
import 'swiper/css';
import 'swiper/css/navigation';

const OtherProducts = ({ products }) => {
  return (
    <div className="other-products my-36">
      <h2 className="text-2xl font-semibold ml-4 mb-10 md:mb-6">Other Products</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1} 
        breakpoints={{
          640: { slidesPerView: 2 }, 
          1024: { slidesPerView: 4 }, 
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} variant="otherProducts"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OtherProducts;
