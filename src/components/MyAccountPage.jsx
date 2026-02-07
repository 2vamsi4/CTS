import React, { useEffect, useState } from "react";
import api from "../api/axios";
import AddAddressModal from "./AddAddressModal";
import EditProfileModal from "./EditProfileModal";
import "../ui/profile.css";
import { jwtDecode } from "jwt-decode";
import { motion, AnimatePresence } from "framer-motion";

const MyAccountPage = () => {
  const [user, setUser] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [orders, setOrders] = useState([]);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [userId, setUserId] = useState(null);
  const [editingAddress, setEditingAddress] = useState(null);


  /* 🔐 Decode JWT */
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const decoded = jwtDecode(token);
      setUserId(decoded.userId);
    } catch (err) {
      console.error("Invalid JWT", err);
    }
  }, []);

  /* 📡 Fetch all data */
  useEffect(() => {
    if (userId) {
      fetchProfile(userId);
      fetchAddresses();
      fetchOrders(userId);
    }
  }, [userId]);

  const fetchProfile = async (id) => {
    const res = await api.get(`/user/${id}`);
    setUser(res.data);
  };

  const fetchAddresses = async () => {
    const res = await api.get("/user/address");
    setAddresses(res.data);
  };

  const fetchOrders = async (id) => {
    const res = await api.get(`/orders/user/${id}`);
    setOrders(res.data);
  };

  const setDefault = async (id) => {
    await api.put(`/user/address/${id}/default`);
    fetchAddresses();
  };

  const deleteAddress = async (id) => {
    await api.delete(`/user/address/${id}`);
    fetchAddresses();
  };
  const openEditAddress = (address) => {
  setEditingAddress(address);
  setShowAddressModal(true);
};

const closeAddressModal = () => {
  setEditingAddress(null);
  setShowAddressModal(false);
};


  if (!user) return <p className="loading">Loading...</p>;

  return (
    <div className="account-container">
      <h2>My Account</h2>

      {/* PROFILE */}
      <motion.div className="card" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="header">
          <h3>Profile</h3>
          <button onClick={() => setShowEditProfile(true)}>✏️ Edit</button>
        </div>
        <p><b>Name:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>
      </motion.div>

      {/* ADDRESSES */}
      <motion.div className="card" initial={{ y: 20 }} animate={{ y: 0 }}>
        <div className="header">
          <h3>My Addresses</h3>
          <button onClick={() => setShowAddressModal(true)}>+ Add Address</button>
        </div>

        {addresses.map(addr => (
          <motion.div
            key={addr.id}
            className={`address ${addr.default ? "default" : ""}`}
            whileHover={{ scale: 1.02 }}
          >
            <p>{addr.houseNo}, {addr.street}, {addr.city}</p>
            <p>{addr.state} - {addr.pincode}</p>
            <p>📞 {addr.mobile}</p>

            <div className="actions">
  <button className="btn-edit" onClick={() => openEditAddress(addr)}>
    Edit
  </button>

  {!addr.default && (
    <button className="btn-default" onClick={() => setDefault(addr.id)}>
      Set Default
    </button>
  )}

  <button className="btn-delete" onClick={() => deleteAddress(addr.id)}>
    Delete
  </button>
</div>


          </motion.div>
        ))}
      </motion.div>

      {/* ORDER HISTORY */}
      <motion.div className="card" initial={{ y: 30 }} animate={{ y: 0 }}>
        <h3>📦 Order History</h3>

        {orders.length === 0 ? (
          <p>No orders yet</p>
        ) : (
          orders.map(order => (
            <motion.div
              key={order.id}
              className="order"
              whileHover={{ scale: 1.01 }}
            >
              <p><b>Order #</b>{order.id}</p>
              <p>Status: {order.status}</p>
              <p>Total: ₹{order.total}</p>
              <p>Date: {order.createdAt}</p>
            </motion.div>
          ))
        )}
      </motion.div>

      <AnimatePresence>
  {showAddressModal && (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowAddressModal(false)}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <AddAddressModal
        address={editingAddress}
        onClose={closeAddressModal}
        onSaved={fetchAddresses}
      />
      </motion.div>
    </motion.div>
  )}

  {showEditProfile && (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowEditProfile(false)}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <EditProfileModal
          user={user}
          onClose={() => setShowEditProfile(false)}
          onSaved={() => fetchProfile(userId)}
        />
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default MyAccountPage;
