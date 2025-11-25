import React from "react";
import { useNavigate } from "react-router-dom";
import "../ui/cart.css";
import { useCart } from "../context/UseCart";

export default function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();
  const navigate = useNavigate();

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate("/payment", { state: { total: totalAmount } });
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} width="60" />
              <div className="cart-info">
                <h4>{item.name}</h4>
                <p>₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="btn btn-danger"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <>
          <h3>Total: ₹{totalAmount.toLocaleString("en-IN")}</h3>
          <button className="btn btn-primary" onClick={handleCheckout}>
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
}
