import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/favicon.svg";
import "../css/Header.css";

function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
      <div to="/" className="navbar-logo">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li className="navbar-item slideInDown-1">
          <Link to="/" className=" navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item slideInDown-2">
          <Link to="/planets" className=" navbar-link">
            Planètes
          </Link>
        </li>
        <li className="navbar-item slideInDown-3">
          <Link to="/savoir" className=" navbar-link">
            Le sais-tu?
          </Link>
        </li>
        <li className="navbar-item slideInDown-4">
          <Link to="/quiz" className=" navbar-link">
            Quizz
          </Link>
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
