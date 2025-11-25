// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./context/CartContext.jsx";

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Catalogue from './components/Catalogue.jsx';
import WhatsAppContactForm from './components/ContactUs.jsx';
import CartPage from './components/CartPage.jsx';
import PaymentPage from './components/PayementPage.jsx';

export default function App() {
  useEffect(() => {
    const app = document.querySelector('.app');
    requestAnimationFrame(() => app?.classList.add('app--in'));
  }, []);

  return (
    <Router>
      <CartProvider>   {/* ✅ wrap everything inside here */}
        <div className="app">
          <Header />
          <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/contact" element={<WhatsAppContactForm />} />        
              <Route path="/cart" element={<CartPage />} />
              <Route path="/payment" element={<PaymentPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}
