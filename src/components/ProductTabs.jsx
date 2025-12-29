import { useState } from "react";

export default function ProductTabs({ product }) {
  const [tab, setTab] = useState("description");

  return (
    <div className="tabs">
      <div className="tab-buttons">
  <button
    className={tab === "description" ? "active" : ""}
    onClick={() => setTab("description")}
  >
    Description
  </button>
  <button
    className={tab === "instructions" ? "active" : ""}
    onClick={() => setTab("instructions")}
  >
    Instructions
  </button>
  <button
    className={tab === "delivery" ? "active" : ""}
    onClick={() => setTab("delivery")}
  >
    Delivery Info
  </button>
</div>


      <div className="tab-content">
        {tab === "description" && <p>{product.description}</p>}
        {tab === "instructions" && <p>{product.instructions}</p>}
        {tab === "delivery" && <p>{product.deliveryInfo}</p>}
      </div>
    </div>
  );
}
