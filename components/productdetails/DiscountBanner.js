import React from 'react';

const DiscountBanner = () => {
  return (
    <div className="bg-blue-600 text-black rounded-md overflow-hidden shadow-md">
      <div className="relative flex items-center">
        <div className="pl-6 py-4 md:pl-8 md:py-5 lg:pl-10 lg:py-6">
          <h2 className="text-white text-sm font-semibold md:text-base lg:text-lg">
            Super discount on more than 100 USD
          </h2>
          <p className="text-blue-200 text-xs md:text-sm lg:text-base mt-1">
            Have you ever finally just write dummy info
          </p>
        </div>
        <div className="absolute right-0 top-0 h-full flex items-center pr-4 md:pr-6 lg:pr-8">
          <button className="bg-orange-500 text-white font-semibold text-xs md:text-sm lg:text-base py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;