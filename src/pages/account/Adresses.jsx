import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Addresses = () => {
  const [addressList, setAddressList] = useState([]);
  const [formVisible, setFormVisible] = useState(true);
  const [formData, setFormData] = useState({
    addressTitle: "",
    name: "",
    surname: "",
    address: "",
    country: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const countries = ["USA", "Canada", "UK", "Germany", "Turkey"];
  const cities = ["New York", "Los Angeles", "London", "Berlin", "Istanbul"]; 

  useEffect(() => {
    const storedAddresses = JSON.parse(localStorage.getItem("addressList"));
    if (storedAddresses) {
      setAddressList(storedAddresses);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("addressList", JSON.stringify(addressList));
  }, [addressList]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addAddress = () => {
    if (
      !formData.name ||
      !formData.address ||
      !formData.city ||
      !formData.postalCode
    )
      return alert("Please fill the blanks!");

    const newAddress = { ...formData, id: Date.now() };
    setAddressList([...addressList, newAddress]);
    setFormData({
      addressTitle: "",
      name: "",
      surname: "",
      address: "",
      country: "",
      city: "",
      postalCode: "",
      phone: "",
    });
    setFormVisible(false);
  };

  const deleteAddress = (id) => {
    const updatedList = addressList.filter((item) => item.id !== id);
    setAddressList(updatedList);
    if (updatedList.length === 0) {
      setFormVisible(true); 
    }  
  };

  const editAddress = (id) => {
    const addressToEdit = addressList.find((item) => item.id === id);
    if (!addressToEdit) return;
    
    setFormData(addressToEdit);
    setFormVisible(true);
  };

  return (
    <div className="w-full md:w-2/3 md:p-5 md:mx-24 md:my-16 my-12">
    {/* Title and Add new address */}
    <div className="flex justify-between items-center mb-10">
      <h1 className="text-2xl font-bold">
        My Addresses ({addressList.length})
      </h1>
  
      {addressList.length > 0 && (
        <button
          className="underline"
          onClick={() => setFormVisible(true)}
        >
          + Add New Address
        </button>
      )}
    </div>

      {/* Form */}
      {formVisible && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 font-medium mb-2">
              Address Title <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-black"
              name="addressTitle"
              value={formData.addressTitle}
              onChange={handleChange}
            />
          </div>
         {/* Name, Surname */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <label className="block text-sm text-gray-600 font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-black"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 font-medium mb-2">
                Surname <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-black"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
              />
            </div>
          </div>
        {/* Address */}
          <div>
            <label className="block text-sm text-gray-600 font-medium mb-2">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-black"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        {/* Country and City */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <label className="block text-sm text-gray-600 font-medium mb-2">
                Country <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-black"
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="" disabled>
              
                </option>
                {countries.map((country, idx) => (
                  <option key={idx} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 font-medium mb-2">
                City <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-black"
                name="city"
                value={formData.city}
                onChange={handleChange}
              >
                <option value="" disabled>
               
                </option>
                {cities.map((city, idx) => (
                  <option key={idx} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Postal Code and Phone */} 
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <label className="block text-sm text-gray-600 font-medium mb-2">
                Postal Code <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-black"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 font-medium mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <PhoneInput
                country={"tr"}
                value={formData.phone}
                onChange={(phone) =>
                  setFormData({ ...formData, phone })
                }
                inputClass="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-black"
              />
            </div>
          </div>

          <button
            className="bg-black text-white px-6 py-2 rounded-lg mt-8"
            onClick={addAddress}
          >
            Save Address
          </button>
        </div>
      )}

      {/* Saved Address */}
      {!formVisible && (
        <div className="mt-10 space-y-4">
          {addressList.map((address) => (
            <div
              key={address.id}
              className="border-b border-gray-300 pb-4 flex justify-between"
            >
              <div className="text-gray-500">
                <h3 className="text-lg font-bold text-black">{address.addressTitle}</h3>
                <p className="text-black">{address.name} {address.surname}</p>
                <p>{address.address}, {address.city}, {address.country}</p>
                <p>{address.postalCode}</p>
              </div>

              <div className="flex space-x-4 items-center">
                <FaRegEdit
                  className="cursor-pointer text-green-500"
                  onClick={() => editAddress(address.id)}
                />
                <MdOutlineDelete
                  className="cursor-pointer text-red-500"
                  onClick={() => deleteAddress(address.id)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Addresses;
