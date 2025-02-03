import React from 'react';
import siteImages from '../../assets/images/siteImage';
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const SectionHeader = ({ title }) => (
  <h3 className="text-4xl font-semibold text-center mb-10">{title}</h3>
);

const ContactInfoCard = ({ icon, title, content }) => (
  <div className="bg-gray-100 shadow-md rounded-2xl flex flex-col justify-center items-center p-4 my-5 md:my-10 h-40 md:h-52 transition-transform duration-300 hover:scale-105 cursor-pointer">
    <div className="text-4xl mb-3">{icon}</div>
    <h5 className="text-2xl font-semibold mb-2 hover:text-[#9a9a9a] transition duration-300">{title}</h5>
    <span className="font-light text-lg">{content}</span>
  </div>
);

const FormInput = ({ label, id, type = "text", placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-lg font-medium mb-2">{label}</label>
    <input
      type={type}
      id={id}
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-500"
      placeholder={placeholder}
    />
  </div>
);

const Contact = () => {
  const contactData = [
    { icon: <FaPhoneAlt />, title: "Phone", content: "929-242-6868" },
    { icon: <IoIosMail />, title: "Email", content: <a href="mailto:info@flowwear.com" className="hover:underline">info@flowwear.com</a> },
    { icon: <IoLocationSharp />, title: "Address", content: "123 Flow St, Mt. City" }
  ];

  return (
    <>
      {/* Header */}
      <section className="relative w-full h-40 md:h-72 bg-cover bg-center">
        <img src={siteImages.contact} alt="Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col text-[#d2d2d2] font-text">
          <h2 className="text-4xl md:text-8xl font-bold tracking-wide">Contact</h2>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-6 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 my-32 font-text">
        {contactData.map((info, index) => (
          <ContactInfoCard key={index} {...info} />
        ))}
      </section>

      {/* Contact Form */}
      <section className="w-full md:w-1/2 md:mx-auto mb-56">
        <SectionHeader title="Get in Touch" />
        <div className="bg-gray-100 md:mx-auto mx-6 shadow-md rounded-2xl p-14 font-text mb-32">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput label="First Name" id="firstName" placeholder="Enter your first name" />
            <FormInput label="Last Name" id="lastName" placeholder="Enter your last name" />
            <FormInput label="Email" id="email" type="email" placeholder="Enter your email" />
            <FormInput label="Phone" id="phone" type="tel" placeholder="Enter your phone number" />
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
              <textarea id="message" rows="5" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-300" placeholder="Enter your message"></textarea>
            </div>
            <div className="md:col-span-2 text-right">
              <button type="submit" className="px-6 py-3 rounded-full bg-btncolor text-white hover:bg-[#752424] transition-colors duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
