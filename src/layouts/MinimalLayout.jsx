// src/layouts/MinimalLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

export default function MinimalLayout() {
  return (
    <div className="app minimal">
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}
