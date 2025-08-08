// src/components/CategoryFilter.jsx
import React from 'react';

export default function CategoryFilter({ categories, onSelect, selected }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-full font-medium shadow ${
            selected === cat ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
          } hover:bg-blue-600 hover:text-white transition`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
