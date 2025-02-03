import React from 'react'
import { FaTools, FaStar, FaRegLightbulb, FaHeart } from 'react-icons/fa';

const FeaturesCard = ({ title, description, icon}) => {
    return(
       <div className='bg-[#EBEBEB] shadow-md p-5 rounded-md flex flex-col items-center text-center transition-transform duration-300 hover:scale-105'>
          <div className='text-2xl mb-2'>{icon}</div>
          <h4 className='text-xl font-semibold mb-2'>{title}</h4>
          <p className='text-sm font-light'>{description}</p>
       </div>
    );
};

const HomeFeatures = () => {
    const features =[
        {
            title: 'Quality Craftsmanship',
            description:
              'Each piece is crafted with precision and care, ensuring that you receive the highest quality products that stand the test of time.',
            icon: <FaTools />,
          },
          {
            title: 'Exclusive Collections',
            description:
              'Discover unique styles that you wont find anywhere else, designed to make you stand out in any crowd.',
            icon: <FaStar />,
          },
          {
            title: 'Innovative Designs',
            description:
              'Our designs are at the forefront of fashion, blending modern trends with timeless elegance.',
            icon: <FaRegLightbulb />,
          },
          {
            title: 'Customer Satisfaction',
            description:
              'We prioritize our customers satisfaction with products that provide both style and comfort.',
            icon: <FaHeart />,
          },
        ];
  return (
    <section className='max-w-7xl mx-auto mb-44 px-6 justify-items-center  cursor-pointer'>
       <span className='text-xl font-thin my-3'>Shop you way</span>
       <h3 className='text-3xl font-semibold'>Why choose us</h3>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {features.map((feature, index) => (
          <FeaturesCard key={index} {...feature} />
        ))}
      </div>
    </section>
  )
}

export default HomeFeatures
