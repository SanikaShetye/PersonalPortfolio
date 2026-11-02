
import React, { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import "../css/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // Close mobile menu after clicking a navigation link
  const handleNavClick = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  // Close menu using Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Close menu when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Highlight navigation based on visible section
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section && section.getBoundingClientRect().top <= 160) {
          current = item.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="header-container">

        {/* Logo */}
        <a
          href="#home"
          className="brand"
          onClick={() => handleNavClick("home")}
          aria-label="Sanika Shetye Home"
        >
          <div className="brand-logo">SS</div>
        </a>

        {/* Navigation */}
        <nav
          className={`nav-links ${menuOpen ? "open" : ""}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${
                activeSection === item.id ? "active" : ""
              }`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Download Resume */}
        <a
          href="/Sanika_Shetye.pdf"
          className="resume-button"
          download="Sanika_Shetye.pdf"
          aria-label="Download Resume"
        >
          <Download size={20} strokeWidth={2.2} />
          <span>Download Resume</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </div>
    </header>
  );
}

export default Header;
