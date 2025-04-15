"use client"
import { useAppContext } from '@/context/AppContext';
import React, {useState, useEffect} from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Example icon library

const SavedForLater = (props) => {
  
  const { router } = useAppContext()
 

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState(products);

  const handleDelete = async (productId) => {
    const confirmDelete = confirm('Are you sure you want to delete this product?');
    if (!confirmDelete) return;

    const res = await fetch(`/api/products/${productId}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      // Remove the product from local state to update the UI
      setProductList(productList.filter(p => p._id !== productId));
    } else {
      const data = await res.json();
      alert('Error: ' + data.error);
    }
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">
          Saved Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((item) => (
            <div key={item._id} className="relative rounded-md shadow-sm">
              <div onClick={() => { router.push(`/product/${item._id}`); scrollTo(0, 0) }} className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2">
                <p className="text-sm font-semibold text-gray-900">${item.price.toFixed(2)}</p>
                <h3 className="text-xs text-gray-700 mt-1 truncate">{item.name}</h3>
                <p className="text-xs text-gray-500 truncate">{item.description}</p>
                <button className="mt-2 bg-white border border-gray-300 rounded-md cursor-pointer hover:bg-blue-200 shadow-sm py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full">
                  <FaShoppingCart className="inline-block mr-2" /> Move to cart
                </button>
                <button onClick={() => handleDelete(item._id)} className="mt-2 bg-white border border-gray-300 cursor-pointer  hover:bg-red-400 rounded-md shadow-sm py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full">
                  Delete Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedForLater;