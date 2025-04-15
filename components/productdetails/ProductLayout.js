"use client"
import { useAppContext } from '@/context/AppContext';
import { suggestedProducts } from '@/images/assets';

export default function ProductLayout() {
  const {router} = useAppContext()
  return (
    <div className="text-black max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Main Block */}
      <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
        {/* Tabs */}
        <div className="border-b mb-4">
          <ul className="flex space-x-6 text-sm font-medium text-gray-600">
            <li className="border-b-2 border-blue-500 text-blue-600 pb-2">Description</li>
            <li className="hover:text-blue-500 cursor-pointer">Reviews</li>
            <li className="hover:text-blue-500 cursor-pointer">Shipping</li>
            <li className="hover:text-blue-500 cursor-pointer">About seller</li>
          </ul>
        </div>

        {/* Description Content */}
        <p className="text-gray-700 text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border text-sm text-left mb-6">
            <tbody>
              <tr><td className="border px-4 py-2 font-semibold">Model</td><td className="border px-4 py-2">#8786867</td></tr>
              <tr><td className="border px-4 py-2 font-semibold">Style</td><td className="border px-4 py-2">Classic style</td></tr>
              <tr><td className="border px-4 py-2 font-semibold">Certificate</td><td className="border px-4 py-2">ISO-898921212</td></tr>
              <tr><td className="border px-4 py-2 font-semibold">Size</td><td className="border px-4 py-2">34mm x 450mm x 19mm</td></tr>
              <tr><td className="border px-4 py-2 font-semibold">Memory</td><td className="border px-4 py-2">36GB RAM</td></tr>
            </tbody>
          </table>
        </div>

        {/* Features List */}
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Some great feature name here</li>
          <li>Lorem ipsum dolor sit amet, consectetur</li>
          <li>Duis aute irure dolor in reprehenderit</li>
          <li>Some great feature name here</li>
        </ul>
      </div>

      {/* Aside */}
      <aside className="bg-white rounded-xl shadow p-4 space-y-4 h-fit">
        <h3 className="text-md font-semibold text-gray-800">You may like</h3>
        {suggestedProducts.map((item, index) => (
          <div key={index} onClick={() => { router.push(`/product/${item._id}`); scrollTo(0, 0) }} className="cursor-pointer flex items-center space-x-3">
            <img src={item.image} alt={item.name} width={50} height={50} className="rounded-md border-1 border-blue-300 object-cover" />
            <div className="text-sm">
              <p className="font-medium text-gray-700">{item.name}</p>
              <p className="text-gray-400">$7.00 - $99.50</p>
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
}
