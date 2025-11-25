import React from "react";
import "../ui/categories.css";

export default function CategoryList({ categories, selected, onSelect }) {
  if (!categories || !Array.isArray(categories)) {
    return <p>No categories available.</p>;
  }

  return (
    <div className="categories-glass">
      <h1 className="categories-title">Categories</h1>
      <ul className="category-grid">
        {categories.map((cat) => (
          <li
            key={cat.name}
            className={`category-card glass ${
              selected === cat.name ? "active" : ""
            }`}
            onClick={() => onSelect(cat)}
          >
            <div className="category-content">
              <img src={cat.icon} alt={cat.name} className="category-svg" />
              <span className="category-name">{cat.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
