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
          <FontAwesomeIcon className="twitter icon" icon={faTwitter} />
          <FontAwesomeIcon className="yt icon" icon={faYoutube} />
          <FontAwesomeIcon className="email icon" icon={faEnvelope} />
        </div>
        <div className="info-container">
          <ul className="list1-container">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <ul className="list2-container">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <ul className="list3-container">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
