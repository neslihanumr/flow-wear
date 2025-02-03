import React, { useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

const Account = () => {
  const location = useLocation();
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  const links = [
    { label: "My Profile", to: "/account/myprofile" },
    { label: "My Addresses", to: "/account/addresses" },
    { label: "My Favorites", to: "/account/favorites" },
  ];

  const orders = [{ label: "My Orders", to: "/account/orders" }];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="mx-auto min-h-screen grid grid-cols-1 md:grid-cols-4 font-text">
      {/* Sidebar */}
      <div className="left-menu bg-[#F8F7F7] md:col-span-1 md:block hidden">
        <div className="mt-16 px-10 mb-5">
          <h2 className="text-xl font-light">My Account</h2>
          <span className="flex flex-row items-center gap-1 mt-1 text-sm text-red-500 hover:text-red-700 cursor-pointer">
            <IoIosLogOut /> Log out
          </span>

          {/* Profile Links */}
          <div className="flex flex-col mt-14">
            <h3 className="text-lg font-semibold">My Profile</h3>
            <div className="flex flex-col space-y-3 text-sm mt-3">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className={`hover:underline ${
                    isActive(link.to) ? "text-black font-semibold" : "text-gray-400"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Orders Info */}
          <div className="flex flex-col mt-16">
            <h3 className="text-lg font-semibold text-black">My Orders Info</h3>
            <div className="flex flex-col text-sm mt-3">
              {orders.map((order, index) => (
                <Link
                  key={index}
                  to={order.to}
                  className={`hover:underline ${
                    isActive(order.to) ? "text-black font-semibold" : "text-gray-400"
                  }`}
                >
                  {order.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="md:hidden bg-[#F8F7F7]">
        <div className="mt-5 px-5 mb-5">
          <button
            onClick={() => setIsDropdownMenuOpen(!isDropdownMenuOpen)}
            className="w-full flex justify-end"
          >
            <FiChevronDown
              className={`transform transition-transform ${
                isDropdownMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isDropdownMenuOpen ? "max-h-[300px]" : "!max-h-[0px]"
            }`}
          >
            {/* Profile Links */}
            <div className="flex flex-col mt-3">
              <h3 className="text-lg font-semibold">My Profile</h3>
               <span className="flex flex-row items-center gap-1 mt-1 text-sm text-red-500 hover:text-red-700 cursor-pointer">
            <IoIosLogOut /> Log out
          </span>
              <div className="flex flex-col space-y-3 text-sm mt-8">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    className={`hover:underline ${
                      isActive(link.to) ? "text-black font-semibold" : "text-gray-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Orders Info */}
            <div className="flex flex-col mt-10">
              <h3 className="text-lg font-semibold text-black">My Orders Info</h3>
              <div className="flex flex-col space-y-3 text-sm mt-3">
                {orders.map((order, index) => (
                  <Link
                    key={index}
                    to={order.to}
                    className={`hover:underline ${
                      isActive(order.to) ? "text-black font-semibold" : "text-gray-400"
                    }`}
                  >
                    {order.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="content-area md:col-span-3 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Account;
