import React from 'react';
import { CartProvider } from "../context/CartContext";
import { useCart } from "../context/UseCart";


export default function GiftCard({ gift }) {
  const { cart, addToCart, decreaseQty } = useCart();

  const itemInCart = cart.find((item) => item.id === gift.id);

  return (
    <article className="card gift" tabIndex="0">
      <div className="gift__image-wrap">
        <img loading="lazy" src={gift.image} alt={gift.name} className="gift__image" />
        <span className="gift__badge">{gift.category}</span>
      </div>
      <div className="gift__body">
        <h3 className="gift__title">{gift.name}</h3>
        <p className="gift__desc">{gift.description}</p>
        <div className="gift__meta">
          <span className="gift__price">₹{gift.price.toLocaleString('en-IN')}</span>

          {itemInCart ? (
  <div className="quantity-control">
    <button 
      className="btn btn--secondary" 
      onClick={() => decreaseQty(gift.id)}  // decrease
    >
      -
    </button>
    <span className="quantity">{itemInCart.quantity}</span>
    <button 
      className="btn btn--secondary" 
      onClick={() => addToCart(gift)}      // increase
    >
      +
    </button>
  </div>
) : (
  <button className="btn btn--primary" onClick={() => addToCart(gift)}>
    <span className="btn__shine" />
    Add to Cart
  </button>
)}

        </div>
      </div>
    </article>
  );
}
