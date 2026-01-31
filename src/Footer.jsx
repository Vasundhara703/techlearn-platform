import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo / Brand */}
        <div className="footer-brand">
          <h2>TechLearn</h2>
          <p>Level up your coding skills every day.</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div className="link-section">
            <h4>Platform</h4>
            <ul>
              
              <li><a href="#experts">Experts</a></li>
            </ul>
          </div>
          <div className="link-section">
            <h4>Resources</h4>
            <ul>
             
              <li><a href="#">Community</a></li>
            </ul>
          </div>
          <div className="link-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <a href="#" aria-label="Twitter">🐦</a>
          <a href="#" aria-label="LinkedIn">💼</a>
          <a href="#" aria-label="GitHub">🐙</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TechLearn. All rights reserved.</p>
      </div>
    </footer>
  );
}
