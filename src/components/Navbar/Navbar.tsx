import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY < 100); // Navbar vizibil doar când scroll-ul este sub 100px
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${!isVisible ? "hidden" : ""}`}>
      <a href="/" className="navbar-logo">
        I'm lazy to read allat
      </a>
      <div className="navbar-links">
        <a href="/upload" className="navbar-link">
          Upload File
        </a>
        <a href="/summary" className="navbar-link">
          Generate Summary
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
