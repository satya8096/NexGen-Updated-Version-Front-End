import React from "react";
import { emailAddress, phoneNumber } from "./../Data/BrandData";

const MaintenancePage = () => {
  return (
    <div className="maintenance-container d-flex flex-column justify-content-center align-items-center text-center">
      <img src={require("./../Assets/NexGen_Final_Logo.png")} alt="logo" />
      <h1 className="display-4 text-warning">🚧 Under Maintenance 🚧</h1>
      <p className="lead text-light">
        We are currently working hard to improve our website. Please check back
        soon!
      </p>
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="text-muted mt-3">Thank you for your patience.</p>
      <div className="d-flex gap-4 flex-wrap text-center justify-content-center">
        <p>Contact: {phoneNumber}</p>
        <p>Email: {emailAddress}</p>
      </div>
    </div>
  );
};

export default MaintenancePage;
