import React from 'react';
import { servicesProducts } from '@/images/assets';

const ExtraServices = () => {
  return (
    <div className="bg-white text-black p-4">
      <h2 className="text-lg font-semibold mb-4">Our extra services</h2>
      <div className="flex space-x-4">
        {servicesProducts.map((service, index) => (
          <div key={index} className="flex flex-col items-center border rounded-lg p-4 w-84">
            <div className="relative mb-2">
              <img src={service.image} alt={service.title} className="w-74 h-32 object-cover rounded-md" />
              <div className="absolute bottom-2 right-2 bg-blue-100 rounded-full p-2">
                {service.icon}
              </div>
            </div>
            <p className="text-sm font-semibold text-center mb-1">{service.title}</p>
            <p className="text-xs text-gray-500 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraServices;