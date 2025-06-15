import React, { useEffect, useState } from "react";
import "./Scrollup.css";
import { FaArrowUp } from "react-icons/fa";

const Scrollup = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY >= 560);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#"
      className={`scrollup ${showScroll ? "show-scroll" : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="scrollup_icon" />
    </a>
  );
};

export default Scrollup;
