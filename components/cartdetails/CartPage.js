"use client"
import React, {useState, useEffect} from 'react';
import CartItems from './CartItems';
import CouponInput from './Coupon';
import CheckOutSummary from './CheckOut';
import { useAppContext } from '@/context/AppContext';

const CartPageLayout = () => {
  const {getTotalCartItems} = useAppContext()
  const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);

  return (
    <>
    <div className="bg-gray-100 py-8">
      {isClient && (
      <h1 className=' text-black mx-22 text-3xl'>My Cart ({getTotalCartItems()})</h1>
    )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Cart Items */}
        <div className="lg:col-span-2">
          <CartItems/>
        </div>

        {/* Right Side: Coupon and Summary */}
        <div className="lg:col-span-1 space-y-6">
          <CouponInput/>
          <CheckOutSummary/>
        </div>
      </div>
    </div>
  </>
  );
};

export default CartPageLayout;