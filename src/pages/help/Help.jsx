import React from 'react';
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaUserShield } from "react-icons/fa6";
import Faq from '../../components/Faq';

const HelpFeatures = ({ icon, title, content, linkText, linkHref }) => (
  <div className="text-center flex flex-col items-center cursor-pointer">
    {icon && <div className="text-4xl mb-3 flex items-center justify-center">{icon}</div>}
    {title && <h5 className="text-2xl font-semibold mb-2 hover:text-[#9a9a9a] transition duration-300">{title}</h5>}
    {content && <p className="font-light text-lg mb-4">{content}</p>}
    {linkHref && linkText && (
      <a href={linkHref} className= "hover:text-[#752424] transition duration-300">
        {linkText}
      </a>
    )}
  </div>
);

const HelpCard = ({ children, large }) => (
  <div className={`bg-[#EBE0E0] shadow-md rounded-2xl flex flex-col justify-center items-center p-6 my-10 ${large ? 'h-80' : 'h-72'}`}>
    {children}
  </div>
);

const Help = () => {
  const faqData = [
    {
      question: "What is your return policy?",
      answer:
        "You can return any item within 30 days of purchase if it meets our return conditions. Please visit our Returns page for more details.",
    },
    {
      question: "How do I find my size?",
      answer:
        "We provide a detailed size chart on each product page. Simply click on the 'Size Guide' link for assistance.",
    },
    {
      question: "Do you provide international shipping?",
      answer:
        "Yes, we ship to over 50 countries worldwide. Shipping fees and delivery times vary depending on the destination.",
    },
    {
      question: "Are your products ethically sourced?",
      answer:
        "Yes, we are committed to ethical sourcing practices. All our suppliers meet strict sustainability and labor standards.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and select local payment methods depending on your region.",
    },
  ];
  return (
    <>
    <section className='max-w-7xl mx-6 md:mx-auto flex justify-center items-center font-text my-24 flex-col'>
      <h2 className='text-center font-semibold text-6xl'>
        <span className='font-semibold text-3xl'>24/7 Support</span><br />
        We're Here To Assist
      </h2>
      <hr className='border-1 w-52 border-black mt-5' />

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-24'>
        <HelpCard>
          <HelpFeatures
            icon={<FaUserShield />}
            title="User Privacy"
            content="Your privacy is of utmost importance to us. We adhere to strict privacy policies to protect your personal information and ensure a secure shopping experience on our platform."
            linkText="Privacy Policy"
            linkHref="/privacy-policy"
          />
        </HelpCard>
        
        <HelpCard large>
          <HelpFeatures
            icon={<RiCustomerService2Line />}
            title="Dedicated Customer Support"
            content="Our dedicated customer support team is always available to assist you with any questions or concerns you may have. We aim to provide prompt and helpful responses to ensure a smooth experience."
            linkText="Contact Support"
            linkHref="/contact-support"
          />
        </HelpCard>

        <HelpCard>
          <HelpFeatures
            icon={<MdOutlineVerifiedUser />}
            title="Product Quality Assurance"
            content="We ensure that all products on our platform meet high-quality standards. Our team performs rigorous checks to guarantee that you're receiving the best possible products."
            linkText="Learn More"
            linkHref="/quality-assurance"
          />
        </HelpCard>
      </div>
    </section>
        {/* FAQ */}
        <Faq data={faqData} />
        </>
  );
};

export default Help;
