import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>I'M LAZY TO READ ALLAT</h2>
          <p>
            Your ultimate tool for generating summaries and converting text to
            speech.
          </p>
          <p>Contact Info:</p>
          <p>prapugicu.andi@gmail.com</p>
        </div>
        <div className="footer-apps">
          <h3>Download Our App</h3>
          <div className="app-buttons">
            <button>Google Play</button>
            <button>App Store</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 I'm lazy to read allat</p>
      </div>
    </footer>
  );
};

export default Footer;
