// src/components/layout/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import ProfileLogo from "../../assets/Logo1.jpg";
import { useCart } from "../../context/UseCart";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <header className="header">
      <div className="container header__inner">

        {/* Brand Section */}
        <div className="brand">
          <div className="brand__logo">
            <img src={ProfileLogo} alt="CTS Gift Store Logo" loading="lazy" />
          </div>

          <div className="brand__text">
            <h1>CTS - Gift Store</h1>
            <p className="tagline muted">Find the perfect present</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="nav" aria-label="Main Navigation">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `nav__link ${isActive ? "active" : ""}`
            }
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/catalogue"
            className={({ isActive }) =>
              `nav__link ${isActive ? "active" : ""}`
            }
          >
            Catalogue
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `nav__link ${isActive ? "active" : ""}`
            }
          >
            Profile
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav__link ${isActive ? "active" : ""}`
            }
          >
            Contact
          </NavLink>

          {/* Cart */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `nav__link nav__cart ${isActive ? "active" : ""}`
            }
            aria-label={`Cart with ${totalItems} items`}
          >
            <i className="bi bi-cart3 cart-icon"></i>

            {totalItems > 0 && (
              <span className="cart-badge" aria-label="Cart Item Count">
                {totalItems}
              </span>
            )}
          </NavLink>
        </nav>

      </div>
    </header>
  );
}
