'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

// 1. Make ProductList a named component
export default function ProductList() {
  const router = useRouter()
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(`/api/search?q=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  }, [query]);

  if (!products.length) return <p className='text-black ml-129 my-4 text-4xl'>No products found.</p>;

  return (
    <>
        {products.map((product) => (
    <div key={product._id} onClick={() => { router.push(`/product/${product._id}`); scrollTo(0, 0) }} className="cursor-pointer grid my-4 mx-4 border-1 border-blue-300 p-4 grid-cols-1 md:grid-cols-3 text-black gap-4">
       <div className="col-span-1 flex flex-col items-center">
        <img
          src={product.image}
          alt={product.name}
          width={250}
          height={250}
        />
      </div>

      {/* Product Info */}
      <div className="text-black col-span-2 space-y-4">
        <div>
          <p className="text-green-600 font-medium">In stock</p>
          <h2 className="text-xl font-bold">
            {product.name}
          </h2>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-3 gap-2 bg-orange-50 p-4 rounded">
          <div className="text-center">
            <p className="text-red-600 font-semibold text-lg">$98.00</p>
            <p className="text-xs">50-100 pcs</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-lg">$90.00</p>
            <p className="text-xs">100-700 pcs</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-lg">$78.00</p>
            <p className="text-xs">700+ pcs</p>
          </div>
        </div>

        {/* Product Details */}
        <ul className="text-sm text-gray-600 space-y-1">
          <li><strong>Price:</strong> Negotiable</li>
          <li><strong>Type:</strong> Classic shoes</li>
          <li><strong>Material:</strong> Plastic material</li>
          <li><strong>Design:</strong> Modern nice</li>
          <li><strong>Customization:</strong> Customized logo and design custom packages</li>
          <li><strong>Protection:</strong> Refund Policy</li>
          <li><strong>Warranty:</strong> 2 years full warranty</li>
        </ul>
      </div>
    
      </div>
        ))}
      </>
  );
}

export function ProductListPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductList />
    </Suspense>
  );
}