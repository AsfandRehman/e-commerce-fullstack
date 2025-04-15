"use client"
import React, {useState, useEffect} from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ContentTop from '../listview/ContentTop';
import { useAppContext } from '@/context/AppContext';



const ProductCard = () => {
  const { router } = useAppContext()

  const [allproducts, setAllproducts] = useState([]);
    const [loading, setLoading] = useState(true);
      
        useEffect(() => {
            async function fetchAllproducts() {
              try {
                const res = await fetch('/api/allproducts');
                const data = await res.json();
                setAllproducts(data.allproducts || []);
              } catch (error) {
                console.error('Failed to load products:', error);
              } finally {
                setLoading(false);
              }
            }
        
            fetchAllproducts();
          }, []);

  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {allproducts.map((e, i) => (
        <div key={e._id}  className="bg-white text-black rounded-md shadow-sm overflow-hidden">
        <div onClick={() => { router.push(`/product/${e._id}`); scrollTo(0, 0) }} className="cursor-pointer relative aspect-w-1 aspect-h-1">
        <img
          src={e.image} alt={i.name}
          className="w-full h-full object-cover"
          />
      </div>
      <div className="p-4">
        <div className="flex items-baseline">
          <span className="text-xl font-bold text-gray-900">$98.50</span>
          <span className="ml-2 text-gray-500 line-through">$1128.00</span>
        </div>
        <div className="flex items-center mt-1">
          <span className="ml-1 text-sm text-gray-700">7.5</span>
        {[5].map((stars) => (
          <label key={stars} className="block mx-2 text-md text-yellow-600">
            {"★".repeat(stars) + "☆".repeat(5 - stars)}
          </label>
        ))}
        </div>
        <h3 className="mt-2 text-lg font-medium text-gray-800">{e.name}</h3>
        <p className="text-gray-600 text-sm">Camera - Black</p>
      </div>
      <div className="absolute top-2 right-2">
        <button className="bg-white rounded-full p-2 text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        </button>
      </div>
    </div>
      ))}
    </div>
  );
};

const Sidebar = () => {
     const [price, setPrice] = useState([0, 999999]);
      const [condition, setCondition] = useState("Any");
  return (
    <aside className="bg-white p-6 w-64 shadow-md rounded-md">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Category</h2>
        <ul>
          <li className="text-gray-600 py-1 cursor-pointer hover:text-blue-500">Mobile accessory</li>
          <li className="text-gray-600 py-1 cursor-pointer hover:text-blue-500">Electronics</li>
          <li className="text-gray-600 py-1 cursor-pointer hover:text-blue-500">Smartphones</li>
          <li className="text-gray-600 py-1 cursor-pointer hover:text-blue-500">Modern Tech</li>
          <li className="text-blue-500 cursor-pointer">See all</li>
          {/* Add more categories */}
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Brands</h2>
        <ul>
          <li className="text-gray-600 py-1 cursor-pointer hover:text-blue-500">
          <input type="checkbox" className="mr-2" />
          Samsung</li>
          <li className="text-gray-600 py-1 cursor-pointer hover:text-blue-500">
          <input type="checkbox" className="mr-2" />Apple</li>
          <li className="text-gray-600 py-1 cursor-pointer hover:text-blue-500">
          <input type="checkbox" className="mr-2" />Huawei</li>
          <li className="text-gray-600 py-1 cursor-pointer hover:text-blue-500">
          <input type="checkbox" className="mr-2" />Poco</li>
          <li className="text-gray-600 py-1 cursor-pointer hover:text-blue-500">
          <input type="checkbox" className="mr-2" />Lenovo</li>
          {/* Add more brands */}
          <li className="text-blue-500 py-1 cursor-pointer">See all</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Features</h2>
        <ul>
          <li className="text-gray-600 py-1 cursor-pointer hover:text-blue-500">
          <input type="checkbox" className="mr-2" />Metallic</li>
          <li className="text-gray-600 py-1 cursor-pointer hover:text-blue-500">
          <input type="checkbox" className="mr-2" />Plastic cover</li>
          <li className="text-gray-600 py-1 cursor-pointer hover:text-blue-500">
          <input type="checkbox" className="mr-2" />8GB Ram</li>
          <li className="text-gray-600 py-1 cursor-pointer hover:text-blue-500">
          <input type="checkbox" className="mr-2" />Super power</li>
          <li className="text-gray-600 py-1 cursor-pointer hover:text-blue-500">
          <input type="checkbox" className="mr-2" />Large Memory</li>
          {/* Add more features */}
          <li className="text-blue-500 py-1 cursor-pointer">See all</li>
        </ul>
      </div>

       {/* Price Range */}
       <div className="text-black mb-4">
        <h3 className="text-black font-semibold">Price range</h3>
        <input
          type="range"
          min="0"
          max="999999"
          value={price[1]}
          onChange={(e) => setPrice([price[0], e.target.value])}
          className="w-full"
        />
        <div className="flex justify-between text-sm">
          <input
            type="number"
            value={price[0]}
            min="0"
            className="w-1/2 border rounded p-1"
            readOnly
          />
          <input
            type="number"
            value={price[1]}
            max="999999"
            className="w-1/2 border rounded p-1"
            readOnly
          />
        </div>
        <button className="bg-blue-500 text-white w-full mt-2 py-1 rounded">Apply</button>
      </div>

       {/* Condition */}
       <div className="text-black mb-4">
        <h3 className="text-lg font-semibold">Condition</h3>
        {["Any", "Refurbished", "Brand new", "Old items"].map((cond) => (
          <label key={cond} className="block text-md text-gray-600">
            <input
              type="radio"
              name="condition"
              value={cond}
              checked={condition === cond}
              onChange={() => setCondition(cond)}
              className="mr-2"
            />
            {cond}
          </label>
        ))}
      </div>

      {/* Ratings */}
      <div className='text-black'>
        <h3 className="text-black text-lg font-semibold">Ratings</h3>
        {[5, 4, 3, 2].map((stars) => (
          <label key={stars} className="block text-md text-yellow-600">
            <input type="checkbox" className="text-md mr-2" />
            {"★".repeat(stars) + "☆".repeat(5 - stars)}
          </label>
        ))}
      </div>

      {/* Add more sidebar sections like Condition if needed */}
    </aside>
  );
};

const Pagination = () => {
  return (
    <div className="flex items-center justify-end mt-4">
      <button className="bg-white border border-gray-300 rounded-l-md px-3 py-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        <FaChevronLeft />
      </button>
      <button className="bg-white border-t border-b border-gray-300 px-4 py-2 text-blue-500 font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        1
      </button>
      <button className="bg-white border-t border-b border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        2
      </button>
      <button className="bg-white border-t border-b border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        3
      </button>
      <button className="bg-white border border-gray-300 rounded-r-md px-3 py-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        <FaChevronRight />
      </button>
    </div>
  );
};


const SecondHome = () => {
  return (
    <div className="py-6 min-h-screen bg-gray-100">
      <div className='container mx-auto px-4 flex'>
        <Sidebar/>
      <main className="ml-8 flex-1">
        <div className='mb-4'>
        <ContentTop/>
        </div>
        <div className=" md:grid-cols-3">
          <ProductCard/>
          {/* You can add more ProductCard components here to fill the grid */}
        </div>
        <Pagination/>
      </main>
      </div>
    </div>
  );
};

export default SecondHome;