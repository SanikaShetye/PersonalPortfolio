import React from "react";
import { Download } from "lucide-react";
import "../css/Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo and Name */}
        <a href="#home" className="brand">
          <div className="brand-logo">SS</div>
          <span className="brand-name">Sanika Shetye</span>
        </a>

        {/* Navigation */}
        <nav className="nav-links">
          <a href="#home" className="nav-link active">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

        {/* Resume Button */}
        <a
          href="/Sanika_Shetye_Resume.pdf"
          className="resume-button"
          download
        >
          <Download size={20} strokeWidth={2.2} />
          <span>Download Resume</span>
        </a>
      </div>
    </header>
  );
}

export default Header;