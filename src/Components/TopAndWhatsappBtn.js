import React from "react";
import { whatsappLink1 } from "../Data/BrandData";

const TopAndWhatsappBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="position-fixed"
      style={{
        right: "1.5rem",
        bottom: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.7rem",
        zIndex: "1000",
      }}
    >
      {/* Back to Top Button */}
      <button
        className="btn btn-info rounded-circle top-btn"
        onClick={scrollToTop}
        id="topButton"
        style={{
          width: "50px",
          height: "50px",
          zIndex: "1000",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <i className="fas fa-chevron-up"></i>
      </button>

      {/* WhatsApp Button */}
      <a
        href={whatsappLink1}
        className="btn btn-success rounded-circle whats-app-btn"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          fontSize: "1.3rem",
          justifyContent: "center",
          zIndex: "1000",
          border: "1px solid black",
        }}
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default TopAndWhatsappBtn;
