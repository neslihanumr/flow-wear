import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = ({ isOpen, closeCart }) => {
  const { cartItems, totalPrice, removeFromCart, handleQuantityChange } = useCart();

  // Handle quantity change
  const handleQuantity = (item, operation) => {
    if (operation === 'increase') {
      handleQuantityChange(item.id, item.size, 'increase');
    } else if (operation === 'decrease') {
      handleQuantityChange(item.id, item.size, 'decrease');
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={closeCart}
        ></div>
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-30 p-6 shadow-lg flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-4 right-4 text-xl text-gray-700" onClick={closeCart}>
          <FaTimes />
        </button>
        <h2 className="font-bold text-lg mb-4">Cart ({cartItems.length})</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 flex-grow">Your cart is empty.</p>
        ) : (
          <div className="space-y-4 flex-grow overflow-y-scroll max-h-[calc(100vh-150px)] hidden-scrollbar">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-start space-x-4 border-b pb-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                <div className="flex-1">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-gray-600">Size: {item.size}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    {/* Quantity Control */}
                    <button
                      onClick={() => handleQuantity(item, 'decrease')}
                      className="text-gray-600 text-lg  w-6 h-6 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantity(item, 'increase')}
                      className="text-gray-600 text-lg  w-6 h-6 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm font-bold flex justify-end"> ${parseFloat(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id, item.size)}
                  className="text-red-600 text-sm"
                >
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Sticky Total and Go to Cart Section */}
        <div className="sticky bottom-0 bg-white pt-4 border-t">
          <div className="flex justify-between items-center font-bold text-lg mb-4">
            <p>Total</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <Link
            to="/cart"
            className="block text-center bg-btncolor text-white py-2 rounded"
            onClick={closeCart}
          >
            Go to Cart
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;

