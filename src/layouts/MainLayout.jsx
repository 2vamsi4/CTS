import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  useEffect(() => {
    const root = document.querySelector(".app");
    requestAnimationFrame(() => root?.classList.add("app--in"));
  }, []);

  return (
    <div className="app">
    <Navbar />
      <main className="container">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
