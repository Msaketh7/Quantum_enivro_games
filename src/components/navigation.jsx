import React, { useState } from "react";

export const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Close the navbar when a link is clicked (on mobile)
  const handleNavLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsNavOpen(false); // Close the menu on smaller screens
    }
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            onClick={() => setIsNavOpen(!isNavOpen)} // Toggle collapse state
            aria-expanded={isNavOpen}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src="/img/logo.jpg" alt="Logo" className="navbar-logo" />
            <span className="navbar-text">Quantum Enviro Games</span>
          </a>
        </div>

        <div
          className={`collapse navbar-collapse ${isNavOpen ? "in" : ""}`}
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll" onClick={handleNavLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll" onClick={handleNavLinkClick}>
                Services
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll" onClick={handleNavLinkClick}>
                Team
              </a>
            </li>
            <li>
              <a href="#play" className="page-scroll" onClick={handleNavLinkClick}>
                Play
              </a>
            </li>
            <li>
              <a href="#careers" className="page-scroll" onClick={handleNavLinkClick}>
                Careers
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll" onClick={handleNavLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
