// src/pages/Home.jsx
import React, { useMemo, useState } from 'react';
import GiftList from './GiftList.jsx';
import { gifts as allGifts } from '../data/gifts.js'
import fireIcon from "../assets/graph.png";
import trendingIcon from "../assets/hashtag.png";
import GiftBanner from './GiftBanner.jsx';

export default function Home() {

  const [search, setSearch] = useState('')
  // Example: Just pick top 5 for each category for now
  const topSelling = useMemo(() => allGifts.slice(0, 5), []);
  const trending = useMemo(() => allGifts.slice(5, 10), []);

  return (
    <div>
      {/* Search bar */}
      <GiftBanner />
      <section className="toolbar card">
        <div className="search">
          <input
            className="input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search gifts..."
          />
        </div>
      </section>

      {/* Top Selling Gifts */}

      <h2 style={{ marginTop: 24, display: "flex", alignItems: "center", gap: "8px" }}>
         <img src={fireIcon} alt="Top Selling" style={{ width: "30px", height: "30px" ,backgroundColor:"white",padding:"3px",borderRadius:"5px"}} />
                Top Selling Gifts
      </h2>
      
      <GiftList gifts={topSelling} />

      {/* Trending Gifts */}
      <h2 style={{ marginTop: 24, display: "flex", alignItems: "center", gap: "8px" }}>
         <img src={trendingIcon} alt="Trending" style={{ width: "30px", height: "30px" ,backgroundColor:"white",padding:"3px",borderRadius:"5px"}} />Trending Gifts</h2>
      <GiftList gifts={trending} />
    </div>
  );
}
