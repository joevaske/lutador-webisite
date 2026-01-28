import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./MobileMenu.css";

// This function calculates the target position minus the height of your fixed header
const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  // Adjust the offset value (e.g., 64px) to match the height of your fixed header/navbar
  const yOffset = -64;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const MobileMenu = () => {
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
    <div
      className={`mobile-menu ${open === true ? "open" : ""} ${
        sticky ? "is-sticky" : ""
      }`}
    >
      <div className="nav-icon-wrapper" onClick={() => setOpen(!open)}>
        <div className={`nav-icon ${open === true ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`mobile-menu-list ${open === true ? "open" : ""}`}>
        <ul>
          <li>
            <Link
              smooth
              to="/#header"
              onClick={() => setOpen(!open)}
              scroll={scrollWithOffset}
            >
              Početna
            </Link>
          </li>
          <li>
            <Link smooth to="/#about-us" onClick={() => setOpen(!open)}>
              Instruktori
            </Link>
          </li>
          <li>
            <Link smooth to="/#schedule" onClick={() => setOpen(!open)}>
              Treninzi
            </Link>
          </li>
          <li>
            <Link
              smooth
              to="/#contact"
              onClick={() => setOpen(!open)}
              scroll={scrollWithOffset}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
