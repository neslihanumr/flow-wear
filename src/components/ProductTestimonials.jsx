import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import reviewsData from "../assets/data/reviewData";

const ProductTestimonials = () => {
  const reviewsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);
  const paginatedReviews = reviewsData.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="testimonials-container mt-12 px-4 md:px-8">
      <div className="flex flex-row">
      <h2 className="text-2xl font-text mb-6">
        Other reviews from this product</h2>
        <span className="ml-3 text-gray-400 mt-1 whitespace-nowrap ">
          ( 7 reviews)
        </span>
        </div>
      <div className="space-y-6">
        {paginatedReviews.map((review) => (
          <div key={review.id}>
            <div className="flex items-center">
              {[...Array(review.stars)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 mr-1" />
              ))}
            </div>
            <p className="mt-2 text-gray-800">{review.comment}</p>
            <div className="text-sm text-gray-500 mt-1">
              <span>
                {review.user} &bull; {review.item}
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">{review.date}</p>
            <hr className="mt-4" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-start mt-6 space-x-4">
        <button
          className={`w-8 h-8 flex items-center justify-center rounded-full ${
            currentPage === 1 ? "bg-gray-300" : "bg-gray-700 text-white"
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              currentPage === index + 1
                ? "bg-gray-700 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`w-8 h-8 flex items-center justify-center rounded-full ${
            currentPage === totalPages ? "bg-gray-300" : "bg-gray-700 text-white"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductTestimonials;
