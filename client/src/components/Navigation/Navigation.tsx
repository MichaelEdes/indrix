import React, { useState } from "react";
import "./Navigation.css";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header-container">
      <div className="nav-logo">
        <a href="/">LOGO</a>
      </div>
      <button
        className={`mobile-nav-toggle ${isOpen && "active"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className="sr-only"
          aria-controls="nav-menu"
          aria-expanded="false"
        />
        <span
          className="sr-only"
          aria-controls="nav-menu"
          aria-expanded="false"
        />
      </button>

      <nav className={`nav-container ${isOpen && "active"}`}>
        <ul className={`nav-menu ${isOpen && "is-active"}`}>
          <li>
            <a href="/">
              <span aria-hidden="true">00</span>Home
            </a>
          </li>
          <li>
            <a href="/Model">
              <span aria-hidden="true">01</span>Models
            </a>
          </li>
          <li>
            <a href="/Dealerships">
              <span aria-hidden="true">02</span>Dealerships
            </a>
          </li>
          <li>
            <a href="Store">
              <span aria-hidden="true">03</span>Store
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
