"use client";

import Link from 'next/link';
import Image from 'next/image';
import './footer.css'; // Assuming you have a CSS file for styling
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <Image 
                src="/temple-logo.png" 
                alt="Divine Temple Logo" 
                width={60} 
                height={60}
              />
              <h3>Divine Temple</h3>
            </div>
            <p>A sacred space for spiritual growth, peace, and community connection.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/teachings">Teachings</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><Link href="/donate">Make a Donation</Link></li>
              <li><Link href="/volunteer">Volunteer</Link></li>
              <li><Link href="/register">Register</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <address>
              <p>123 Temple Street</p>
              <p>Spiritual City, SC 12345</p>
              <p>Email: info@divinetemple.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Divine Temple. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;