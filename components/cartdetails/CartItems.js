"use client"
import React, {useState, useEffect} from 'react';
import { FaArrowLeft } from 'react-icons/fa'; // Example icon library
import { productsData } from '@/images/assets';
import { useAppContext } from '@/context/AppContext';
import Link from 'next/link';

const CartItems = () => {
  const { cartItems, removeFromCart, removeAll, setCartItems} = useAppContext()
  const [isClient, setIsClient] = useState(false);
    
      useEffect(() => {
        setIsClient(true);
      }, []);
  

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item._id === itemId ? { ...item, quantity: parseInt(newQuantity, 10) } : item
      )
    );
    console.log(`Item ID: ${itemId}, New Quantity: ${newQuantity}`);
  };

  return (
    <div className="bg-gray-100 text-black py-8">
        {isClient && (
      <div className="max-w-3xl mx-auto bg-white rounded-md shadow-md overflow-hidden">
        {productsData.map((item) => {
          if(cartItems[item._id]>0)
          { return <div key={item._id} className="px-4 py-5 sm:px-6 border-b border-gray-200 last:border-b-0 flex items-start md:items-center justify-between">
            <div className="flex items-start md:items-center">
              <div className="w-20 h-20 rounded-md overflow-hidden shadow-sm mr-4">
                <img
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  objectfit="cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Size: medium, Color: all, Material: fabric
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">Seller: Asfand</p>
                <div className="mt-2 flex items-center text-sm">
                  <button onClick={()=>{removeFromCart(item._id)}} className="text-red-500 cursor-pointer border p-1 rounded-md border-red-600 hover:text-red-700 focus:outline-none mr-4">
                    Remove
                  </button>
                  <button  className="text-blue-500 border cursor-pointer p-1 rounded-md border-blue-600 hover:text-blue-700 focus:outline-none">
                    Save for later
                  </button>
                </div>
              </div>
            </div>
                
                  <div className="text-right md:text-left ml-4 md:ml-0">
              <p className="text-sm font-semibold text-gray-900">${item.price.toFixed(2)}</p>
              <div className="cursor-pointer mt-2">
                <label htmlFor={`qty-${item.id}`} className="cursor-pointer sr-only">
                  Quantity
                </label>
                <div className="relative cursor-pointer rounded-md shadow-sm">
                  <select
                    id={`qty-${item._id}`}
                    className="shadow-sm focus:ring-indigo-500 cursor-pointer focus:border-indigo-500 block w-full sm:w-auto pl-3 pr-10 py-2 text-sm border-gray-300 rounded-md"
                    value={cartItems[item._id]}
                    onChange={(event) => handleQuantityChange(item._id, event.target.value)}
                    >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        Qty: {i + 1}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
        
          </div>
          }
          return null;
        })}
        <div className="px-4 py-3 sm:px-6 bg-gray-50 flex justify-between items-center">
          <Link href='/'><button className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <FaArrowLeft className="inline-block mr-2" /> Back to shop
          </button></Link>
          <button onClick={()=>{removeAll(productsData._id)}} className="text-red-500 cursor-pointer hover:text-red-700 focus:outline-none font-semibold">
            Remove all
          </button>
        </div>
      </div>
        )}
    </div>
  );
};

export default CartItems;