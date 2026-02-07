import React, { useState } from "react";
import api from "../api/axios";
import "../ui/profile.css";

const AddAddressModal = ({ onClose, onSaved, address }) => {
  const [form, setForm] = useState({
  houseNo: address?.houseNo || "",
  street: address?.street || "",
  landmark: address?.landmark || "",
  city: address?.city || "",
  state: address?.state || "",
  pincode: address?.pincode || "",
  country: address?.country || "",
  mobile: address?.mobile || ""
});


  const [toast, setToast] = useState(null); // { type: "success" | "error", message: "" }
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    try {
      setLoading(true);
      await api.post("/user/address/addAddress", form);

      setToast({ type: "success", message: "Address added successfully" });
      onSaved();

      setTimeout(() => {
        setToast(null);
        onClose();
      }, 1800);

    } catch (err) {
      setToast({
        type: "error",
        message: err?.response?.data?.message || "Failed to add address"
      });

      setTimeout(() => setToast(null), 2500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal">
      <button className="modal-close" onClick={onClose}>✕</button>

        <h3>{address ? "Edit Address" : "Add Address"}</h3>

      {Object.keys(form).map(key => (
        <input
          key={key}
          placeholder={key}
          value={form[key]}
          onChange={e => setForm({ ...form, [key]: e.target.value })}
        />
      ))}

      <div className="modal-actions">
        <button className="secondary" onClick={onClose} disabled={loading}>
          Cancel
        </button>

<button className="primary" onClick={submit}>
  {loading ? "Saving..." : address ? "Update" : "Save"}
</button>

      </div>

      {/* TOAST */}
      {toast && (
        <div className="toast-container">
          <div className={`toast ${toast.type}`}>
            {toast.message}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddAddressModal;
