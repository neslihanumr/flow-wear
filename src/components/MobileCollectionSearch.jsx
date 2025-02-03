import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";

const MobileCollectionSearch = ({ category, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const collectionRoutes = {
    men: '/mencollection',
    women: '/womencollection',
    accessories: '/accessories',
    formalwear: '/formalwear',
  };


  const formatCategory = (cat) => {
    return cat.toLowerCase().replace(/\s+/g, ''); 
  };
  const getPlaceholder = () => {
    return category ? `Search in ${category}` : 'Search for a product';
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      onSearch(searchQuery);

      const formattedCategory = formatCategory(category);
      const targetRoute = collectionRoutes[formattedCategory] ;
      navigate(targetRoute);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center p-4 md:hidden">
        {/* Back Button */}
        <button onClick={handleBack} className="text-xl mr-3 text-gray-600">
          <FaArrowLeft />
        </button>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="flex items-center w-full sm:max-w-[95%] relative z-20"
        >
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
            <CiSearch />
          </span>
          <input
            type="text"
            placeholder={getPlaceholder()}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-200"
          />
        </form>
      </div>
    </div>
  );
};

export default MobileCollectionSearch;
