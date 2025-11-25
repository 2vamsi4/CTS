import React from 'react'
import GiftCard from './GiftCard.jsx'

export default function GiftList({ gifts }) {
  if (!gifts.length) {
    return (
      <div className="empty">
        <div className="empty__box">No gifts match your filters 😿</div>
      </div>
    )
  }
  return (
    <section id="home" className="grid">
      {gifts.map(g => (
        <GiftCard key={g.id} gift={g} />
      ))}
    </section>
  )
}