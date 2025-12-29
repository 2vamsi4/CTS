import { useCart } from "../context/UseCart";

export default function ProductInfo({ product }) {

    const { cart, addToCart, decreaseQty } = useCart();
    
      const itemInCart = cart.find((item) => item.id === product.id);

 

  return (
    <div className="product-info">
      <h1>{product.name}</h1>

      <div className="rating">
        ⭐ {product.rating} ({product.reviewsCount} reviews)
      </div>

      <div className="price">
        ₹{product.price}
        <span className="strike">₹{product.originalPrice}</span>
      </div>

      <input type="text" placeholder="Enter delivery pincode" />

      <div className="actions">
        {itemInCart ? (
            <div
              className="quantity-control"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="btn btn--secondary"
                onClick={() => decreaseQty(product.id)}
              >
                -
              </button>
              <span className="quantity">{itemInCart.quantity}</span>
              <button
                className="btn btn--secondary"
                onClick={() => addToCart(product)}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="btn btn--primary"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
            >
              Add to Cart
            </button>
          )}
        <button className="buy">Buy Now</button>
      </div>

      <ul className="offers">
        {product.offers.map((offer, i) => (
          <li key={i}>{offer}</li>
        ))}
      </ul>
    </div>
  );
}
