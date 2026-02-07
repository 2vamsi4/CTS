import { motion } from "framer-motion";
import api from "../api/axios";
import { useState } from "react";
import "../ui/profile.css";

const EditProfileModal = ({ user, onClose, onUpdated }) => {
  const [name, setName] = useState(user.name);
  const [toast, setToast] = useState(null); // { type, message }
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    try {
      setLoading(true);

      await api.put(`/user/${user.id}`, { name });

      setToast({
        type: "success",
        message: "Profile updated successfully"
      });

      onUpdated();

      setTimeout(() => {
        setToast(null);
        onClose();
      }, 1800);

    } catch (err) {
      setToast({
        type: "error",
        message: err?.response?.data?.message || "Failed to update profile"
      });

      setTimeout(() => setToast(null), 2500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>✕</button>

        <h3>Edit Profile</h3>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />

        <div className="modal-actions">
          <button className="secondary" onClick={onClose} disabled={loading}>
            Cancel
          </button>
          <button
            className="primary"
            onClick={handleSave}
            disabled={loading || !name.trim()}
          >
            {loading ? "Saving..." : "Save"}
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
      </motion.div>
    </motion.div>
  );
};

export default EditProfileModal;
