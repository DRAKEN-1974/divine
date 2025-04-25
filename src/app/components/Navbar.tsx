"use client";

import Link from 'next/link';
import { useState } from 'react';
import './Navbar.css';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="logo">
            <Link href="/">
              <img src="/image/logo.jpeg" alt="Temple Logo" />
              <span>Divine Temple</span>
            </Link>
          </div>

          <div className="desktop-menu">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/register">Register</Link>
            <Link href="/donate" className="donate-btn">Donate</Link>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/register">Register</Link>
            <Link href="/donate" className="donate-btn">Donate</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;