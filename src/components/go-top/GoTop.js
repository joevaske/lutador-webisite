import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./GoTop.css";

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      // Show button after scrolling 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top with smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="go-top">
      {isVisible && (
        <FaArrowCircleUp // Or a regular button element
          onClick={scrollToTop}
        />
      )}
    </div>
  );
};

export default GoTop;
