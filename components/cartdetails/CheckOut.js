"use client"
import { useAppContext } from '@/context/AppContext';
import React, {useState, useEffect} from 'react';
import { FaCcVisa, FaCcMastercard, FaPaypal, FaApplePay } from 'react-icons/fa';

const CheckOutSummary = () => {
  const {getTotalCartAmount} = useAppContext()
   const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  
  const subtotal = getTotalCartAmount();
  const discount = subtotal ? 60.00 : 0;
  const tax = subtotal ? 14.00 : 0;
  const total = subtotal-discount+tax;

  return (
    <div className="bg-white rounded-md shadow-md p-6">
          {isClient && (
      <div className="mb-4">
        <div className="flex justify-between text-gray-700 text-sm">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-red-500 text-sm mt-1">
          <span>Discount:</span>
          <span>- ${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-green-500 text-sm mt-1">
          <span>Tax:</span>
          <span>+ ${tax.toFixed(2)}</span>
        </div>
        <hr className="my-3 border-gray-200" />
        <div className="flex justify-between text-lg font-semibold text-gray-900">
          <span>Total:</span>
          
          <span>${total.toFixed(2)}</span>
        
        </div>
      </div>
      )}
      <button className="bg-green-500 hover:bg-green-600 text-white cursor-pointer font-semibold py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
        Checkout
      </button>
      <div className="mt-4 flex justify-center space-x-3 text-gray-600">
        <FaCcMastercard className="h-6 w-auto text-red-500" />
        <FaPaypal className="h-6 w-auto text-blue-700" />
        <FaCcVisa className="h-6 w-auto text-blue-500" />
        <FaApplePay className="h-6 w-auto" />
      </div>
    </div>
  );
};

export default CheckOutSummary;