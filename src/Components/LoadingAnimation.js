import React from "react";

const ColorfulLoader = () => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center vh-100"
      style={{ backgroundColor: "#f0f4f8" }}
    >
      {/* Startup Name Animation */}
      <img
        className="m-3"
        src={require("./../Assets/NexGen_Final_Black_Logo.png")}
        style={{ width: "10rem" }}
        alt="loader"
      />
      {/* Colorful Loader */}
      <div className="loader"></div>
    </div>
  );
};

export default ColorfulLoader;
