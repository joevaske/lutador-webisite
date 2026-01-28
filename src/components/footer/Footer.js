import "./Footer.css";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-heading">
        <div className="footer-heading-text">
          <h3>Zapratite Lutador</h3>
        </div>
        <div className="footer-heading-line"></div>
        <div className="footer-heading-social-icons">
          <div className="youtube">
            <FaYoutube />
          </div>
          <div className="facebook">
            <FaFacebookF />
          </div>
          <div className="instagram">
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className="footer-content">
        <h2>LUTADOR</h2>
        <h3> - Brazilian Jiu Jitsu - </h3>
      </div>
      <div className="footer-menu">
        <div className="footer-menu-item">Početna</div>
        <div className="footer-menu-item">Instruktori</div>
        <div className="footer-menu-item">Treninzi</div>
        <div className="footer-menu-item">Kontakt</div>
      </div>
      <div className="footer-footer">
        <p>Lutador @{new Date().getFullYear()}. All rights reserved </p>
      </div>
    </div>
  );
};

export default Footer;
