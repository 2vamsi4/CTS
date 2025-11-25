import React from 'react'

export default function PriceRange({ value, onChange, min, max }) {
  const [low, high] = value
  return (
    <div className="price">
      <label className="price__label">Price: <strong>₹{low}</strong> – <strong>₹{high}</strong></label>
      <div className="price__sliders">
        <input
          type="range"
          min={min}
          max={max}
          step="10"
          value={low}
          onChange={(e) => onChange([Math.min(+e.target.value, high - 10), high])}
        />
        <input
          type="range"
          min={min}
          max={max}
          step="10"
          value={high}
          onChange={(e) => onChange([low, Math.max(+e.target.value, low + 10)])}
        />
      </div>
    </div>
  )
}