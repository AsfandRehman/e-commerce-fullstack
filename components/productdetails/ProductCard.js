"use client";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { toast } from 'react-toastify';

export default function ProductCard({ id }) {
  const [product, setProduct] = useState(null);
  const { addToCart } = useAppContext();

  // Fetch product data by ID
  useEffect(() => {
    const fetchProduct = async () => {
      console.log("Fetching product with ID:", id);
      try {
        const res = await fetch(`/api/allproducts/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  const handleCart = (e) => {
    e.preventDefault();
    addToCart(product._id);
    toast.success(`${product.name} added to cart!`);
  };

  if (!product) return <div className="text-black">Loading...</div>;

  return (
    <>
    <div className="text-black w-full mx-auto p-4 bg-white shadow-lg rounded-xl md:w-312 md:p-6 md:rounded-2xl md:grid md:grid-cols-3 md:gap-6">
  {/* Image Section - Full width on mobile, first column on desktop */}
  <div className="col-span-1 flex flex-col items-center mb-4 md:mb-0">
    <img src={product.image} alt={product.name} className="w-48 h-48 object-contain" />
  </div>

  {/* Product Details - Full width on mobile, second column on desktop */}
  <div className="col-span-2 space-y-2 md:space-y-4">
    <div>
      <p className="text-green-600 font-medium text-sm">In stock</p>
      <h2 className="text-xl font-bold">{product.name}</h2>
      <div className="flex items-center space-x-1 text-yellow-500">
        {[...Array(4)].map((_, i) => (
          <Star key={i} size={14} fill="orange" />
        ))}
        <span className="text-gray-700 text-xs">9.3 · 32 reviews · 154 sold</span>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-1 bg-orange-50 p-2 rounded text-xs md:p-4 md:text-sm">
      <div className="text-center">
        <p className="text-red-600 font-semibold text-sm md:text-lg">${product.price}</p>
        <p className="text-xxs md:text-xs">50-100 pcs</p>
      </div>
      <div className="text-center">
        <p className="font-semibold text-sm md:text-lg">${product.discountedPrice1}</p>
        <p className="text-xxs md:text-xs">100-700 pcs</p>
      </div>
      <div className="text-center">
        <p className="font-semibold text-sm md:text-lg">${product.discountedPrice2}</p>
        <p className="text-xxs md:text-xs">700+ pcs</p>
      </div>
    </div>

    <ul className="text-xs text-gray-600 space-y-0.5 md:space-y-1">
      <li><strong>Price:</strong> Negotiable</li>
      <li><strong>Type:</strong> Classic shoes</li>
      <li><strong>Material:</strong> Plastic material</li>
      <li><strong>Design:</strong> Modern nice</li>
      <li><strong>Customization:</strong> Customized logo and design custom packages</li>
      <li><strong>Protection:</strong> Refund Policy</li>
      <li><strong>Warranty:</strong> 2 years full warranty</li>
    </ul>
  </div>

  {/* Supplier Info and Buttons - Full width below details on mobile, third column on desktop */}
  <div className="md:col-span-3 mt-2 pt-2 border-t md:mt-4 md:pt-4">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="mb-2 md:mb-0">
        <p className="font-semibold text-sm">Supplier: Guanjoi Trading LLC</p>
        <p className="text-xxs text-gray-500">📍 Germany, Berlin</p>
        <p className="text-xxs text-green-600">✅ Verified Seller</p>
        <p className="text-xxs text-gray-500">🌐 Worldwide shipping</p>
      </div>
      <div className="flex flex-col items-start md:items-end space-y-2">
        <button onClick={handleCart} type="submit" className="bg-blue-600 cursor-pointer text-white px-3 py-1.5 rounded text-sm">
          Add to Cart
        </button>
        <button className="text-blue-600 text-xxs underline">Seller's profile</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
