// src/App.jsx
import React, { useState } from 'react';
import { foodData } from './data';
import CategoryFilter from './components/CategoryFilter';
import FoodCard from './components/FoodCard';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFood =
    selectedCategory === 'All'
      ? foodData
      : foodData.filter((item) => item.category === selectedCategory);

  const categories = ['All', ...new Set(foodData.map((item) => item.category))];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl md:text-5xl text-center font-bold mb-8">Triranga Food Menu</h1>
      <CategoryFilter categories={categories} onSelect={setSelectedCategory} selected={selectedCategory} />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredFood.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}
