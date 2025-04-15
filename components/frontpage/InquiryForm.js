import React from 'react';

const InquiryForm = () => {
  return (
    <div className="md:flex bg-gradient-to-r text-black from-blue-500 to-blue-300">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-8 md:p-16 text-white flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          An easy way to send <br className="md:hidden" /> requests to all suppliers
        </h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 p-4 md:p-8 bg-white rounded-lg shadow-md m-4 md:m-8 flex flex-col justify-center">
        <h3 className="text-xl font-semibold mb-4">Send quote to suppliers</h3>
        <div className="mb-2 md:mb-4">
          <input
            type="text"
            placeholder="What item you need?"
            className="w-full p-2 border rounded-md text-gray-700"
          />
        </div>
        <div className="mb-2 md:mb-4">
          <input
            type="text"
            placeholder="Type more details"
            className="w-full p-2 border rounded-md text-gray-700"
          />
        </div>
        <div className="flex items-center mb-2 md:mb-4">
          <input
            type="number"
            placeholder="Quantity"
            className="w-1/2 p-2 border rounded-md mr-2 text-gray-700"
          />
          <select className="w-1/2 p-2 border rounded-md text-gray-700">
            <option>Pcs</option>
            <option>Kg</option>
            <option>Ltr</option>
          </select>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full">
          Send inquiry
        </button>
      </div>
    </div>
  );
};

export default InquiryForm;