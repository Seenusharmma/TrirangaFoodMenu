// src/components/FoodCard.jsx
import React from 'react';

export default function FoodCard({ food }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition">
      <img src={food.image} alt={food.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{food.name}</h3>
        <p className="text-gray-600">{food.price}</p>
      </div>
    </div>
  );
}
