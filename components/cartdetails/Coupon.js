import React, { useState } from 'react';

const CouponInput = () => {
  const [couponCode, setCouponCode] = useState('');

  const handleInputChange = (event) => {
    setCouponCode(event.target.value);
  };

  const handleApplyCoupon = () => {
    // Implement your logic to apply the coupon here
    console.log('Applying coupon:', couponCode);
    // You might want to send this code to your backend for validation
  };

  return (
    <div className="bg-white rounded-md my-8 shadow-sm p-4">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Have a coupon ?</h3>
      <div className="flex rounded-md shadow-sm">
        <input
          type="text"
          className="flex-grow min-w-0 block w-full px-3 py-2 rounded-l-md border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Add coupon"
          value={couponCode}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className="bg-gray-100 border cursor-pointer border-l-0 border-gray-300 text-indigo-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 font-medium px-4 py-2 rounded-r-md sm:text-sm"
          onClick={handleApplyCoupon}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default CouponInput;