import React from 'react';
import ProfileLogo from '../assets/Logo1.jpg';
import { NavLink } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import { CartProvider } from "../context/CartContext";
import { useCart } from "../context/UseCart";



export default function Header() {
    const { cart } = useCart();

      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);


  return (
    <header className="header">
      <div className="container header__inner">
        <div className="brand">
          <div className="brand__logo">
            <img src={ProfileLogo} alt="Profile Logo" />
          </div>
          <div className="brand__text">
            <h1>CTS - Gift Store</h1>
            <p className="tagline muted">Find the perfect present</p>
          </div>
        </div>
           <nav className="nav">
  <NavLink
    className={({ isActive }) =>
      isActive ? 'nav__link active' : 'nav__link'
    }
    to="/"
  >
    Home
  </NavLink>
  <NavLink
    className={({ isActive }) =>
      isActive ? 'nav__link active' : 'nav__link'
    }
    to="/catalogue"
  >
    Catalogue
  </NavLink>
  <NavLink
    className={({ isActive }) =>
      isActive ? 'nav__link active' : 'nav__link'
    }
    to="/contact"
  >
       Contact
     </NavLink>
     <NavLink
        className={({ isActive }) =>
          isActive ? 'nav__link active' : 'nav__link'
        }
        to="/cart"
     >
       <i className="bi bi-cart3 cart-icon"></i>
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}

     </NavLink>
   </nav>

      </div>
    </header>
  );
}
