// src/app/routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import MinimalLayout from "../layouts/MinimalLayout";

import Home from "../components/Home";
import Catalogue from "../components/Catalogue";
import ContactUs from "../components/ContactUs";
import CartPage from "../components/CartPage";
import PaymentPage from "../components/PayementPage"

export default function AppRoutes() {
  return (
    <Routes>

      {/* Main website layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>

      {/* Minimal layout (no header/footer) */}
      <Route element={<MinimalLayout />}>
        <Route path="/payment" element={<PaymentPage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<h1>Page Not Found</h1>} />

    </Routes>
  );
}
