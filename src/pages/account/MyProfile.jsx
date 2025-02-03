import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const MyProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [alert, setAlert] = useState(null);

  const validateForm = () => {
    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|icloud\.com|outlook\.com)$/;
    if (!emailPattern.test(formData.email)) {
      return { type: "error", message: "Invalid email address. Must be @gmail.com, @icloud.com, or @outlook.com." };
    }

    // Phone number validation
    if (formData.phone.length < 10) {
      return { type: "error", message: "Invalid phone number. Must be at least 10 digits." };
    }

    // Other validation 
    if (!formData.firstName || !formData.lastName) {
      return { type: "error", message: "All fields are required." };
    }

    return { type: "success", message: "Profile saved successfully!" };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationResult = validateForm();
    setAlert(validationResult);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full md:w-2/3 md:p-5 md:mx-24 md:my-16 my-40">
      <h2 className="text-xl font-semibold mb-6">My Profile</h2>

      {/* Alert Box */}
      {alert && (
        <div
          className={`mb-4 p-4 rounded-md ${
            alert.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          } flex justify-between items-center`}
        >
          <span>{alert.message}</span>
          <button
            onClick={() => setAlert(null)}
            className="font-bold text-lg hover:opacity-70"
          >
            ×
          </button>
        </div>
      )}

      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6" onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium mb-2">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-black"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium mb-2">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-black"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium mb-3">
            Phone <span className="text-red-500">*</span>
          </label>
          <PhoneInput
            country={"tr"}
            value={formData.phone}
            onChange={(value) => handleChange("phone", value)}
            inputClass="!w-full !border-0 !border-b !border-gray-300 !focus:outline-none !focus:border-black"
            dropdownClass="custom-dropdown"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-black"
          />
        </div>

        {/* Save Button */}
        <div className="md:col-span-1">
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-zinc-800"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
