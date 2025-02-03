import React from 'react';
import brandLogos from '../assets/images/brands/brand';

const BrandLogos = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-content">
        {brandLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`Brand Logo ${index + 1}`} className="logo" />
        ))}
      
        {brandLogos.map((logo, index) => (
          <img key={index + brandLogos.length} src={logo} alt={`Brand Logo ${index + 1}`} className="logo" />
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;
