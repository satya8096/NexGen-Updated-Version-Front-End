import React, { useEffect, useState } from "react";
import "./TopandWhatsapp.css";
import { phoneNumber } from "../../Data/BrandData";

const FloatingActions = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY >= 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  };
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello NexGen Web Designs 👋%0A%0AI would like to build a professional website for my business.",
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,

      "_blank",

      "noopener,noreferrer",
    );
  };
  const handleMouseMove = (event) => {
    const button = event.currentTarget;

    const rect = button.getBoundingClientRect();

    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;

    const moveX = (x - rect.width / 2) * 0.18;

    const moveY = (y - rect.height / 2) * 0.18;

    button.style.transform = `translate(${moveX}px, ${moveY}px)`;
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.style.transform = "";
  };

  return (
    <aside className="nxFloatDock">
      <button
        type="button"
        className="nxFloatButton nxWhatsappButton"
        onClick={handleWhatsApp}
        aria-label="Chat on WhatsApp"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <span className="nxFloatGlow"></span>

        <span className="nxFloatBorder"></span>

        <span className="nxFloatRipple"></span>

        <i className="fa-brands fa-whatsapp"></i>
      </button>

      <button
        type="button"
        className={`nxFloatButton nxScrollButton ${showTopButton ? "show" : ""}`}
        onClick={handleScrollTop}
        aria-label="Scroll To Top"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <span className="nxFloatGlow"></span>

        <span className="nxFloatBorder"></span>

        <span className="nxFloatRipple"></span>

        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </aside>
  );
};

export default FloatingActions;
