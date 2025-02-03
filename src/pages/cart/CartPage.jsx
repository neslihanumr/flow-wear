import React from 'react';
import { useCart } from '../../context/CartContext'; 
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, totalPrice, handleQuantityChange, removeFromCart } = useCart(); 

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const shippingFee = totalPrice >= 50 ? 0 : 10.0;
  const grandTotal = totalPrice + shippingFee;

  return (
    <div className="max-w-7xl mx-auto min-h-screen p-4 font-text mb-36">
      <h1 className="text-2xl font-bold mb-4 md:mt-28 mt-10"> My Cart ({totalItems})</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
         {/* Left Column: Cart Items */}
      <div className="lg:col-span-2">
          {cartItems.map((item) => (
              <div key={item.id} className="flex items-start space-x-4 pb-4 mt-5 border-b mb-4">
                 <Link to={`/product/${item.id}`} className="flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                          </Link>
                          <div className="flex-1">
                            <p className="font-bold">{item.name}</p>
                            <p className="text-sm text-gray-600 mt-2">Size: {item.size}</p>
                            <div className="flex items-center space-x-2 mt-2">
                              {/* Quantity Control */}
                              <button
                            onClick={() => handleQuantityChange(item.id, item.size, 'decrease')}
                            className="text-gray-600 text-lg w-6 h-6 flex items-center justify-center"
                            >
                              -
                           </button>
                           <span className="text-sm">{item.quantity}</span>
                           <button
                            onClick={() => handleQuantityChange(item.id, item.size, 'increase')}
                          className="text-gray-600 text-lg w-6 h-6 flex items-center justify-center"
                          >
                            +
                       </button>
                            </div>
                            <p className="text-lg font-semibold flex justify-end"> ${parseFloat(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id, item.size)}
                            className="text-sm"
                          >
                            <FaTimes />
                          </button>
                        </div>
                   ))}
                    <div className='mt-6 text-gray-600 tracking-wide underline '>
          <Link to="/"> Continue shopping</Link>
          </div>
          </div>
                  {/* Right Column: Subtotal and Checkout */}
           <div className='border rounded lg bg-[#F8F7F7] p-8 h-72'>
             <h3 className='text-lg font-semibold mb-5'>Order Summary</h3>
               {/* Subtotal */}
             <div className='flex justify-between text-sm mb-2'>
             <p>Subtotal:</p>
             <p>${totalPrice.toFixed(2)}</p>
             </div>

           {/* Shipping */}
          <div className="flex justify-between text-sm mb-2">
            <p>Shipping:</p>
            <p>${shippingFee.toFixed(2)}</p>
          </div>
          
          {/* Grand Total */}
          <div className="flex justify-between text-lg font-bold mb-4 border-b">
            <p>Total:</p>
            <p>${grandTotal.toFixed(2)}</p>
          </div>

          {/* Checkout Button */}
          <button className="bg-black text-white px-6 py-3 rounded w-full text-center mt-3">
            Complete Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;