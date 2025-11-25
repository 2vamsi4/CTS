import React from 'react'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <input
        className="input"
        type="text"
        placeholder="Search gifts by name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}