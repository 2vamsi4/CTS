import React, { useMemo, useState } from 'react';
import CategoryList from './CategoryList.jsx';
import GiftList from './GiftList.jsx';
import { categories } from '../data/categories.js';
import { gifts as allGifts } from '../data/gifts.js';
import AllIcon from "../assets/categories/all-inclusive.png";


export default function Catalogue() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredGifts = useMemo(() => {
    if (selectedCategory === 'All') return allGifts;
    return allGifts.filter(g => g.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <CategoryList
        categories={[{ name: 'All', icon: AllIcon }, ...categories]}
        selected={selectedCategory}
        onSelect={(cat) => setSelectedCategory(cat.name)}
      />

      <h2 style={{ marginTop: 24 }}>
        {selectedCategory === 'All' ? 'All Gifts' : selectedCategory}
      </h2>

      <GiftList gifts={filteredGifts} />
    </div>
  );
}
