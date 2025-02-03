import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-300 py-4">
      {/* Question */}
      <div
        onClick={toggleFAQ}
        className="flex justify-between items-center cursor-pointer hover:text-[#752424] transition duration-300"
      >
        <h5 className="text-lg font-semibold">{question}</h5>
        <span className="text-xl font-bold">{isOpen ? "-" : "+"}</span>
      </div>
      {/* Answer */}
      {isOpen && (
        <p className="mt-2 text-gray-600 transition-all duration-300 ease-in-out">
          {answer}
        </p>
      )}
    </div>
  );
};

const Faq = ({ data }) => (
  <section className="w-full flex justify-center items-center mt-16 flex-col mb-28">
    <h2 className="text-center font-semibold text-4xl mb-3 font-text">FAQ</h2>
    <hr className='border-1 w-32 border-black mb-8' />

    <div className="md:w-1/2 w-80 space-y-3 font-main">
      {data.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  </section>
);

export default Faq;
