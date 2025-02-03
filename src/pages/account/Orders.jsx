import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="w-full md:w-2/3 md:p-5 md:mx-24 md:my-16 my-96">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      <p>You haven't ordered yet. <Link to="/" className="underline"> Check out other products</Link></p>
    </div>
  );
};

export default Orders;
