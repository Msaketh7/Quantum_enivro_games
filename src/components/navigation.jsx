import React, { useState } from "react";

export const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to handle navigation and scroll to the start of the target section
  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault(); // Prevent default link behavior

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Scroll to the start of the target section
      targetElement.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Align the section to the top of the viewport
      });
    }

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
              <a
                href="#about"
                className="page-scroll"
                onClick={(e) => handleNavLinkClick(e, "#about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="page-scroll"
                onClick={(e) => handleNavLinkClick(e, "#services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="page-scroll"
                onClick={(e) => handleNavLinkClick(e, "#team")}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#play"
                className="page-scroll"
                onClick={(e) => handleNavLinkClick(e, "#play")}
              >
                Play
              </a>
            </li>
            <li>
              <a
                href="#careers"
                className="page-scroll"
                onClick={(e) => handleNavLinkClick(e, "#careers")}
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="page-scroll"
                onClick={(e) => handleNavLinkClick(e, "#contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
