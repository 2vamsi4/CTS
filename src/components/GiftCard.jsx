import { useNavigate } from "react-router-dom";
import { useCart } from "../context/UseCart";

export default function GiftCard({ gift }) {
  const navigate = useNavigate();
  const { cart, addToCart, decreaseQty } = useCart();

  const itemInCart = cart.find((item) => item.id === gift.id);

  const goToProduct = () => {
    navigate(`/product/${gift.id}`);
  };

  return (
    <article className="card gift" tabIndex="0">
      
      {/* Clickable Area */}
      <div 
        className="gift__image-wrap"
        onClick={goToProduct}
        style={{ cursor: "pointer" }}
      >
        <img
          loading="lazy"
          src={gift.image}
          alt={gift.name}
          className="gift__image"
        />
        <span className="gift__badge">{gift.category}</span>
      </div>

      <div className="gift__body">
        <h3 
          className="gift__title"
          onClick={goToProduct}
          style={{ cursor: "pointer" }}
        >
          {gift.name}
        </h3>

        <p className="gift__desc">{gift.description}</p>

        <div className="gift__meta">
          <span className="gift__price">
            ₹{gift.price.toLocaleString("en-IN")}
          </span>

          {/* Prevent navigation when clicking buttons */}
          {itemInCart ? (
            <div
              className="quantity-control"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="btn btn--secondary"
                onClick={() => decreaseQty(gift.id)}
              >
                -
              </button>
              <span className="quantity">{itemInCart.quantity}</span>
              <button
                className="btn btn--secondary"
                onClick={() => addToCart(gift)}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="btn btn--primary"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(gift);
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
