import React from 'react';
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import siteTestimonials from '../assets/data/siteTestimonials'; 

const TestimonialCard = ({ name, image, review, rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0; 
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); 

  return (
    <div className="bg-[#EBEBEB] font-main p-8 flex flex-col items-center text-center min-h-[250px] h-full rounded-3xl cursor-pointer shadow-md">
      <img src={image} alt={name} className="w-14 h-14 rounded-full mb-3"/>
      <p className="text-lg font-semibold">{name}</p>
      <div className="flex justify-center my-2">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} className="w-4 h-4 text-yellow-500" />
        ))}
        {hasHalfStar && <FaStarHalf key="half" className="w-4 h-4 text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} className="w-4 h-4 text-gray-300" />
        ))}
      </div>
      <p className="text-sm mt-2 line-clamp-2">{review}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="w-full max-w-7xl mx-auto my-44 px-4 font-main">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-medium">What Our Clients Say About Us</h2>
      </div>
      <Swiper
        lazy={true}
        navigation={false}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        grabCursor={true}
        touchStartPreventDefault={false}
        className="w-full overflow-hidden"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {siteTestimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="flex justify-center items-stretch">
            <div className="w-full h-full max-w-md p-4 flex">
              <TestimonialCard {...testimonial} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
