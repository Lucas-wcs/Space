// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-container">
          <a href="https://facebook.com/">
            <FontAwesomeIcon className="fb icon" icon={faFacebookSquare} />
          </a>
          <a href="https://facebook.com/">
            <FontAwesomeIcon className="twitter icon" icon={faTwitter} />
          </a>
          <a href="https://facebook.com/">
            <FontAwesomeIcon className="yt icon" icon={faYoutube} />
          </a>
          <a href="https://facebook.com/">
            <FontAwesomeIcon className="email icon" icon={faEnvelope} />
          </a>
        </div>
        <div className="info-container">
          <ul className="lorem1 list-container">
            <h2>Contact</h2>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <ul className="lorem2 list-container">
            <h2>Links</h2>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <ul className="lorem3 list-container">
            <h2>Planetarium</h2>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
