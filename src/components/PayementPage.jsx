import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../ui/payment.css";

export default function PaymentPage() {
  const { state } = useLocation();
  const totalAmount = state?.total || 0; // get total from cart page
  const [method, setMethod] = useState("");

  const handlePayment = () => {
    if (!method) {
      alert("Please select a payment method!");
      return;
    }

    if (method === "razorpay") {
        
         if (!window.Razorpay) {
         alert("Razorpay SDK failed to load. Are you online?");
         return;
       }

      const options = {
        key: "rzp_test_RBdng3KyUPld2f", // Replace with your real Razorpay Key ID
        amount: totalAmount * 100, // Razorpay works in paise
        currency: "INR",
        name: "Gift Store",
        description: "Order Payment",
        image: "/logo.png",
        handler: function (response) {
          alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        },
        prefill: {
          name: "John Doe",
          email: "john@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      alert(`Redirecting to ${method.toUpperCase()} payment for ₹${totalAmount}`);
    }
  };

  return (
    <div className="payment-page">
      <h2>Choose Payment Method</h2>
      <h3>Total Payable: ₹{totalAmount.toLocaleString("en-IN")}</h3>

      <div className="payment-options">
        {["gpay", "phonepe", "paytm", "upi", "razorpay"].map((m) => (
          <label key={m} className="payment-option">
            <input
              type="radio"
              name="payment"
              value={m}
              checked={method === m}
              onChange={(e) => setMethod(e.target.value)}
            />
            {m.charAt(0).toUpperCase() + m.slice(1)}
          </label>
        ))}
      </div>

      <button className="btn btn--primary" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
}
