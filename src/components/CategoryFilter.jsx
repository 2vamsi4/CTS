import React from 'react';
import '../ui/categoryFilter.css';

export default function CategoryFilter({ value, onChange, categories }) {
  const allCategories = ['All', ...categories];

  return (
    <div className="category-filter" role="tablist" aria-label="Gift Categories">
      {allCategories.map(cat => (
        <button
          key={cat}
          role="tab"
          aria-selected={value === cat}
          className={`category-chip glass ${value === cat ? 'active' : ''}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
