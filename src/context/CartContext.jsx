import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";
import { jwtDecode } from "jwt-decode";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const token = localStorage.getItem("token");
  const userId = token ? jwtDecode(token).userId : null;

  /* ===========================
     FETCH CART
  ============================ */
  const fetchCart = async () => {
    if (!userId) return;

    try {
      const res = await api.get(`/cart/${userId}`);
      console.log(res);

      // 🔥 convert backend cart → frontend format
      const items = res.data.items.map((ci) => ({
        id: ci.product.id,              // productId
        cartItemId: ci.id,               // needed for backend ops
        name: ci.product.name,
        price: ci.product.price,
        image: ci.product.image,
        quantity: ci.quantity
      }));

      setCart(items);
    } catch (e) {
      console.error("Fetch cart failed", e);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [userId]);

  /* ===========================
     ADD TO CART
  ============================ */
  const addToCart = async (gift) => {
    try {
      const res = await api.post(`/cart/add/${userId}`, {
        productId: gift.id,
        quantity: 1
      });

      fetchCart();
    } catch (e) {
      console.error("Add to cart failed", e);
    }
  };

  /* ===========================
     REMOVE
  ============================ */
  const removeFromCart = async (productId) => {
    const item = cart.find((i) => i.id === productId);
    if (!item) return;

    try {
      await api.delete(`/cart/remove/${userId}/${item.cartItemId}`);
      fetchCart();
    } catch (e) {
      console.error("Remove failed", e);
    }
  };

  /* ===========================
     INCREASE
  ============================ */
  const increaseQty = async (productId) => {
    const item = cart.find((i) => i.id === productId);
    if (!item) return;

    try {
      await api.put(
        `/cart/update/${userId}/${item.cartItemId}`,
        null,
        { params: { quantity: item.quantity + 1 } }
      );
      fetchCart();
    } catch (e) {
      console.error("Increase qty failed", e);
    }
  };

  /* ===========================
     DECREASE
  ============================ */
  const decreaseQty = async (productId) => {
    const item = cart.find((i) => i.id === productId);
    if (!item) return;

    if (item.quantity <= 1) {
      removeFromCart(productId);
      return;
    }

    try {
      await api.put(
        `/cart/update/${userId}/${item.cartItemId}`,
        null,
        { params: { quantity: item.quantity - 1 } }
      );
      fetchCart();
    } catch (e) {
      console.error("Decrease qty failed", e);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext };
