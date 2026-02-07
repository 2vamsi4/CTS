import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/axios";
import "../ui/orderPreview.css";

const TAX_RATE = 0.05;
const DELIVERY_FEE = 49;

const OrderPreviewPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [pendingAddress, setPendingAddress] = useState(null);

  const [loading, setLoading] = useState(true);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const subtotal = state?.subtotal || 0;
  const tax = Math.round(subtotal * TAX_RATE);
  const total = subtotal + tax + DELIVERY_FEE - discount;

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    setLoading(true);
    const res = await api.get("/user/address");
    setAddresses(res.data);
    const def = res.data.find(a => a.default);
    setSelectedAddress(def || res.data[0]);
    setLoading(false);
  };

  /* 🏷️ Coupon logic (simple example) */
  const applyCoupon = () => {
    if (coupon === "SAVE100") setDiscount(100);
    else if (coupon === "SAVE10") setDiscount(Math.round(subtotal * 0.1));
    else setDiscount(0);
  };

  const confirmAddressChange = () => {
    setSelectedAddress(pendingAddress);
    setPendingAddress(null);
  };

  return (
    <div className="order-preview-layout">
      {/* LEFT */}
      <div className="order-left">
        <h2>Order Preview</h2>

        {/* ADDRESS */}
        <div className="card">
          <h3>Delivery Address</h3>

          {loading ? (
            <SkeletonAddress />
          ) : (
            <div className="address-list">
              {addresses.map(addr => (
                <div
                  key={addr.id}
                  className={`address-option ${
                    selectedAddress?.id === addr.id ? "active" : ""
                  }`}
                  onClick={() => {
                    if (selectedAddress?.id !== addr.id)
                      setPendingAddress(addr);
                  }}
                >
                  <div className="address-header">
                    <span className="address-icon">
                      {selectedAddress?.id === addr.id ? "✅" : "📍"}
                    </span>
                    <span>{addr.houseNo}, {addr.street}</span>
                  </div>
                  <p>{addr.city}, {addr.state} - {addr.pincode}</p>
                  <p>📞 {addr.mobile}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <motion.div
        className="order-summary"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <h3>Order Summary</h3>

        <div className="price-row">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="price-row">
          <span>Tax</span>
          <span>₹{tax}</span>
        </div>

        <div className="price-row">
          <span>Delivery</span>
          <span>₹{DELIVERY_FEE}</span>
        </div>

        {discount > 0 && (
          <div className="price-row discount">
            <span>Discount</span>
            <span>-₹{discount}</span>
          </div>
        )}

        <div className="price-total">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        {/* COUPON */}
        <div className="coupon-box">
          <input
            placeholder="Promo code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button onClick={applyCoupon}>Apply</button>
        </div>

        <button
          className="btn-pay"
          onClick={() =>
            navigate("/payment", {
              state: { address: selectedAddress, total }
            })
          }
        >
          Continue to Payment
        </button>
      </motion.div>

      {/* CONFIRM ADDRESS CHANGE */}
      <AnimatePresence>
        {pendingAddress && (
          <motion.div className="modal-overlay">
            <motion.div className="modal-content">
              <h3>Change delivery address?</h3>
              <p>This will update the address for this order.</p>

              <div className="modal-actions">
                <button
                  className="secondary"
                  onClick={() => setPendingAddress(null)}
                >
                  Cancel
                </button>
                <button className="primary" onClick={confirmAddressChange}>
                  Confirm
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* 🦴 Skeleton */
const SkeletonAddress = () => (
  <div className="skeleton-wrap">
    {[1, 2].map(i => (
      <div key={i} className="skeleton skeleton-address" />
    ))}
  </div>
);

export default OrderPreviewPage;
