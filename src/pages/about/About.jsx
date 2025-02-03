import React from 'react'
import siteImages from '../../assets/images/siteImage'
import { BsArrowRight } from "react-icons/bs";


const features = [
    {
      description: "Our mission is to make every customer feel confident and stylish, whether they're heading to a business meeting or spending a casual day out. We're here to inspire your style with classic pieces designed to last."
    },
    {
      description: "Founded in 2021 with a passion for fashion and a commitment to excellence, Flow Wear has become a trusted name for classic, high-quality clothing. Our collections are thoughtfully curated to offer timeless styles that never go out of trend."
    },
    {
      description: "We believe in providing timeless, quality pieces for modern individuals. Each collection reflects our commitment to craftsmanship, sustainability, and style."
    },
    {
      description: "Quality, authenticity, and sustainability are at the core of everything we do. We are proud to offer a range of products made with the finest materials, designed with care, and crafted with integrity"
    }
  ];

const About = () => {
  return (
    <>
      {/* Header and Hero */}
      <section className="relative w-full h-40 md:h-72 bg-cover bg-center ">
        <img 
          src={siteImages.hero3} 
          alt="About" 
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center'}}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col text-[#d2d2d2] font-text">
          <h2 className="text-4xl md:text-8xl font-bold tracking-wide ">
            About us
          </h2>
        </div>
      </section>

      <section className='max-w-7xl mx-5 md:mx-auto flex flex-col md:flex-row items-start my-20 md:my-44 font-text gap-28'>
          <div className=' flex-1 text-left'>
           <div className="flex justify-left flex-col">
           <span className="text-4xl font-jura ">
                Why Choose Us
              </span>
              <hr className='w-72 h-[2px] bg-black mt-2' />
              {features.map((feature, index) => (
         <div key={index} className="group relative flex items-start gap-3 mt-10 p-4 transition-all duration-300 border border-transparent hover:border-black rounded-lg">
         <BsArrowRight className="w-9 h-9 text-black" />
         <p className="text-[17px] font-light">{feature.description}</p>
       </div>
      ))}
           </div>
          </div>
          <div className='flex-1 flex justify-end items-start md:mt-0'>
             <img src={siteImages.about} alt="About Img" className="rounded-tl-[150px] md:h-auto" />
          </div>        
      </section>
      <div className='flex justify-center text-center mt-64 mb-24'>
              <p className='font-navbar md:text-3xl text-lg cursor-pointer'>Discover what makes us different and join our journey  <br /> to redefine style with integrity.</p>
          </div>
      </>
  )
}

export default About
