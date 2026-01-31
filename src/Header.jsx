import React, { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [showToast, setShowToast] = useState(false);

  // Scroll listener for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "features", "coding", "leaderboard", "testimonials"];
      let current = "about";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop - 80;
          if (window.scrollY >= offsetTop) current = section;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleNotify = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500); // auto-close
  };

  const closeToast = () => {
    setShowToast(false);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <h1>TechLearn</h1>
        </div>

        <nav className="nav-links">
          {["about", "features", "coding", "leaderboard", "testimonials"].map((section) => (
            <button
              key={section}
              className={activeSection === section ? "active" : ""}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>

        <button className="notify-btn" onClick={handleNotify}>
          Notify Me
        </button>
      </header>

      {/* Modern Toast with close button */}
      {showToast && (
        <div className="toast-modern">
          <span>🎉</span>
          <span>Ok, we will notify you! Thank you for clicking.</span>
          <button className="toast-close" onClick={closeToast}>×</button>
        </div>
      )}
    </>
  );
}
