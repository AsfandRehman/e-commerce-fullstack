import React, {useState, useEffect} from 'react';
import { useAppContext } from '@/context/AppContext';

const RecommendedItems = () => {
  const {router} = useAppContext()

   const [recommend, setRecommend] = useState([]);
   const [loading, setLoading] = useState(true);
      
        useEffect(() => {
            async function fetchRecommend() {
              try {
                const res = await fetch('/api/recommend');
                const data = await res.json();
                setRecommend(data.recommend || []);
              } catch (error) {
                console.error('Failed to load products:', error);
              } finally {
                setLoading(false);
              }
            }
        
            fetchRecommend();
          }, []);

  return (
    <div className="bg-white text-black p-4 cursor-pointer">
    <h2 className="text-lg font-semibold mb-4">Recommended items</h2>
    <div className="overflow-x-auto -mx-4 px-4 md:overflow-hidden">
      <div className="whitespace-nowrap md:grid md:grid-cols-5 md:gap-4">
        {recommend.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              router.push(`/product/${item._id}`);
              window.scrollTo(0, 0);
            }}
            className="inline-block flex-shrink-0 flex-col items-center border border-blue-300 rounded-lg p-4 mr-4 w-32 sm:w-40 md:inline-flex md:flex-col md:items-center md:border md:rounded-lg md:p-4 md:mr-4 md:w-auto"
          >
            <img
              src={item.image}
              alt={item.name}
              height={74}
              width={104}
              className="object-contain mb-2"
            />
            <p className="text-sm font-semibold mb-1">${item.price}</p>
            <p className="text-xs text-gray-500 text-center truncate">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default RecommendedItems;