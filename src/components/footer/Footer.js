import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./Footer.css";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

// This function calculates the target position minus the height of your fixed header
const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  // Adjust the offset value (e.g., 64px) to match the height of your fixed header/navbar
  const yOffset = -64;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY;
      setSticky(offset > 140);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
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
        <div className="footer-menu-item">
          {" "}
          <Link
            smooth
            to="/#header"
            onClick={() => setOpen(!open)}
            scroll={scrollWithOffset}
          >
            Početna
          </Link>
        </div>
        <div className="footer-menu-item">
          <Link smooth to="/#about-us" onClick={() => setOpen(!open)}>
            Instruktori
          </Link>
        </div>
        <div className="footer-menu-item">
          <Link smooth to="/#schedule" onClick={() => setOpen(!open)}>
            Treninzi
          </Link>
        </div>
        <div className="footer-menu-item">
          {" "}
          <Link
            smooth
            to="/#contact"
            onClick={() => setOpen(!open)}
            scroll={scrollWithOffset}
          >
            Kontakt
          </Link>
        </div>
      </div>
      <div className="footer-footer">
        <p>Lutador @{new Date().getFullYear()}. All rights reserved </p>
      </div>
    </div>
  );
};

export default Footer;
