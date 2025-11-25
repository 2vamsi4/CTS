// src/components/layout/Footer.jsx
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <p className="muted">© {year} CTS Gift Store. All rights reserved.</p>
        <p className="muted">Made with ❤️ by CTS Team</p>
      </div>
    </footer>
  );
}
