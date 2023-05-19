import React, { useState, useEffect } from "react";
import "./Navigation.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(
        lastScrollTop - currentScrollTop >= 1 || currentScrollTop === 0
      );
      setLastScrollTop(currentScrollTop);
    };
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, [lastScrollTop]);

  return (
    <div className="header-container">
      <div className="nav-logo">
        <a href="/">INDREX</a>
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
      <nav
        className={`nav-container ${isOpen && "active"} ${
          isVisible ? "" : "hidden"
        }`}
      >
        <ul className={`nav-menu ${isOpen && "is-active"}`}>
          <li className="menu">
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
          <li className="social-links">
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/michael-edes-401724215/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/MichaelEdes/indrix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </li>
        </ul>
      </nav>
      <div className="vertical-nav-container">
        <ul>
          <span />
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/michael-edes-401724215/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MichaelEdes/indrix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </li>
          <span />
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
