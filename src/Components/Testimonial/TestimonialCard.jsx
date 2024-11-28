import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ image, name, title, review }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full border-2 border-teal-500"
        />
      </div>
      <FaQuoteLeft className="text-teal-500 text-3xl mb-4 mx-auto" />
      <p className="text-gray-700 mb-4">{review}</p>
      <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  );
};

export default TestimonialCard;
