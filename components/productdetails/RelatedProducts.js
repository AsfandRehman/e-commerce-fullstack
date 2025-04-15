"use client"
import React from 'react';
import { relatedProducts } from '@/images/assets';
import { useAppContext } from '@/context/AppContext';

const RelatedProducts = () => {
  const {router} = useAppContext()
  return (
    <div className="bg-white text-black py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg leading-6 font-medium text-gray-900">
          Related products
        </h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {relatedProducts.map((product, index) => (
            <div key={index} onClick={() => { router.push(`/product/${product._id}`); scrollTo(0, 0) }} className="cursor-pointer relative rounded-md shadow-sm">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectfit="contain"
                />
              </div>
              <div className="mt-2 mx-5">
                <h3 className="text-sm font-medium text-gray-900">
                  Xiaomi Redmi 8
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  {product.original && 'Original'}
                </p>
                <p className="mt-1 text-sm text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;