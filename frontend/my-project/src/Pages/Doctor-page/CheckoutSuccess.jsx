import React from "react";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-5 md:px-20 py-10 pt-[60px] bg-[#f5f5f5]">
      <div className="min-h-screen flex items-center justify-center bg-green-100">
        <div className="bg-white p-8 rounded shadow-md text-center">
          <div className="mb-4">
            <svg
              className="w-16 h-16 mx-auto text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-4.414l-3.707-3.707a1 1 0 011.414-1.414L9 11.586l4.293-4.293a1 1 0 111.414 1.414L9 14.586z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-green-800">
            Payment Successful!
          </h2>
          <p className="text-gray-600 mb-4">
            Thank you for booking. Your payment was successful.
          </p>
          <div>
            <Link
              to="/home"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Go to home back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
