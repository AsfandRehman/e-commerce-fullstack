import { useAppContext } from "@/context/AppContext";
import { useState, useEffect } from "react";

export default function DealsSection() {
  const {router} = useAppContext()

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      async function fetchOrders() {
        try {
          const res = await fetch('/api/orders');
          const data = await res.json();
          console.log(data)
          setOrders(data.orders || []);
        } catch (error) {
          console.error('Failed to load products:', error);
        } finally {
          setLoading(false);
        }
      }
  
      fetchOrders();
    }, []);

  return (
    <section className="bg-white text-black p-4 md:p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div>
          <h2 className="text-lg font-bold md:text-xl">Deals and offers</h2>
          <p className="text-gray-500 text-sm">Electronic equipments</p>
        </div>
        <div className="flex gap-2">
          <div className="bg-gray-200 p-2 rounded-md text-center w-10 md:w-12">
            <p className="font-semibold text-sm">13</p>
            <span className="text-xs">Hour</span>
          </div>
          <div className="bg-gray-200 p-2 rounded-md text-center w-10 md:w-12">
            <p className="font-semibold text-sm">34</p>
            <span className="text-xs">Min</span>
          </div>
          <div className="bg-gray-200 p-2 rounded-md text-center w-10 md:w-12">
            <p className="font-semibold text-sm">56</p>
            <span className="text-xs">Sec</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto -mx-4 px-4 md:overflow-auto md:mx-0 md:px-0">
        <div className="whitespace-nowrap md:grid md:grid-cols-5 md:gap-4">
          {orders.map((deal) => (
            <div
              key={deal._id}
              onClick={() => {
                router.push(`/product/${deal._id}`);
                window.scrollTo(0, 0);
              }}
              className="inline-block border p-4 rounded-lg cursor-pointer text-center w-32 sm:w-40 md:w-auto md:block mr-4 md:mr-0"
            >
              <img
                src={deal.image}
                alt={deal.name}
                width={80}
                height={80}
                className="mx-auto object-contain"
              />
              <p className="mt-2 font-medium text-sm truncate">{deal.name}</p>
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded-lg text-xs">
                {deal.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
