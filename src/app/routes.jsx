// src/app/routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import MinimalLayout from "../layouts/MinimalLayout";
import ProtectedRoute from "./ProtectedRoute";

import Home from "../components/Home";
import Catalogue from "../components/Catalogue";
import ContactUs from "../components/ContactUs";
import CartPage from "../components/CartPage";
import PaymentPage from "../components/PayementPage";
import ProductPage from "../components/ProductPage";
import LoginPage from "../components/Login";
import MyAccountPage from "../components/MyAccountPage";
import OrderPreviewPage from "../components/OrderPreviewPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Main website layout */}
        <Route path="/" element={<LoginPage />} />
      <Route element={<MainLayout />}>

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />


        <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/profile" element={<MyAccountPage />} />
        <Route path="/order-preview" element={<OrderPreviewPage />} />

        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Route>

      {/* Minimal layout */}
      <Route element={<MinimalLayout />}>
        <Route path="/payment" element={<PaymentPage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}
