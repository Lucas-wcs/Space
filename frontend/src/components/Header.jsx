import React, { useState } from "react";
import "../css/Header.css";

function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
      <div className="navbar-logo">Logo</div>
      <ul className="navbar-links">
        <li className="navbar-item slideInDown-1">
          <a href="/" className=" navbar-link">
            Acceuil
          </a>
        </li>
        <li className="navbar-item slideInDown-2">
          <a href="/" className=" navbar-link">
            Planète
          </a>
        </li>
        <li className="navbar-item slideInDown-3">
          <a href="/" className=" navbar-link">
            Le sais-tu?
          </a>
        </li>
        <li className="navbar-item slideInDown-4">
          <a href="/" className=" navbar-link">
            Quizz
          </a>
        </li>
      </ul>
      <button
        type="button"
        className="navbar-burger"
        onClick={() => handleShowLinks()}
      >
        <span className="burger-bar" />
      </button>
    </nav>
  );
}

export default Header;
