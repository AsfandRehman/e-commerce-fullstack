import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import { assets } from '@/images/assets';
import { useAppContext } from '@/context/AppContext';

const CategoryGrid = () => {
  const { router } = useAppContext()

  const [outdoor, setOutdoor] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        async function fetchOutdoor() {
          try {
            const res = await fetch('/api/outdoor');
            const data = await res.json();
            setOutdoor(data.outdoor || []);
          } catch (error) {
            console.error('Failed to load products:', error);
          } finally {
            setLoading(false);
          }
        }
    
        fetchOutdoor();
      }, []);

  return (
    <section className="bg-white text-black p-4 md:p-6 rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-bold md:text-xl mb-4">Home and outdoor</h2>
      <div className="md:flex">
        {/* Left Side with Image (Desktop Only) */}
        <div className="hidden md:block w-1/4 pr-4 relative">
          <Image
            src={assets.sofa}
            alt="Sofa set"
            height={null}
            width={null}
            className="w-full rounded-md"
          />
          {/* Overlay for text and button (Desktop Only) */}
          <div className="absolute bottom-27 right-24 w-full h-full flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold text-black mb-4 text-center">
              Home and<br /> outdoor
            </h2>
            <button className="bg-white text-black px-4 py-2 rounded-md text-sm">
              Source now
            </button>
          </div>
        </div>

        {/* Grid Section (Desktop) / Horizontal Scroll (Mobile) */}
        <div className="w-full md:w-3/4 overflow-x-auto md:overflow-hidden -mx-4 px-4 md:mx-0 md:px-0">
          <div className="whitespace-nowrap md:grid md:grid-cols-4 md:gap-4">
            {outdoor.map((deal) => (
              <div
                key={deal._id}
                onClick={() => {
                  router.push(`/product/${deal._id}`);
                  window.scrollTo(0, 0);
                }}
                className="inline-block border p-4 rounded-lg cursor-pointer text-center w-32 sm:w-40 md:w-auto md:block mr-4 md:mr-0"
              >
                <p className="text-sm mt-2 font-semibold truncate">{deal.name}</p>
                <p className="text-xs text-gray-500">From USD {deal.price}</p>
                <img
                  src={deal.image}
                  alt={deal.name}
                  width={80}
                  height={70}
                  className="object-contain mx-auto mt-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile-Specific Label and "Source now" Button */}
      <div className="md:hidden mt-4 flex items-center justify-between">
        <button className="bg-white text-black px-4 py-2 rounded-md text-sm border">
          Source now
        </button>
      </div>
    </section>
  );
};

export default CategoryGrid;