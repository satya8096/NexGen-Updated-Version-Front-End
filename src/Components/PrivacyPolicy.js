import React, { useEffect } from "react";
import {
  brandName,
  emailAddress1,
  fullAddress2,
  phoneNumber,
} from "./../Data/BrandData";
import { PrivacyPolicySEO } from "../Data/AllPageSEOs";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="privacy-policy">
      {PrivacyPolicySEO}
      <div className="privacy-main-background d-flex align-items-center justify-content-center flex-column">
        {/* Page Heading */}
        <h1 className="text-center section-heading gradient-heading text-white">
          Privacy Policy
        </h1>
        <p className="text-center text-white">
          At <strong>{brandName}</strong>, values your privacy and is committed
          to protecting your personal information.
        </p>
      </div>
      <div className=" mt-5">
        {/* Section 1: Data Collection */}
        <div className="policy-section">
          <h5 className="section-title">1. Data Collection</h5>
          <p>
            When you use our services, we gather a variety of information,
            including personal data such your name, email address, phone number,
            and other pertinent facts.
          </p>
          <ul className="icon-list">
            <li>
              <i className="fas fa-user"></i> Personal Information
            </li>
            <li>
              <i className="fas fa-envelope"></i> Contact Information
            </li>
            <li>
              <i className="fas fa-address-card"></i> Transaction Information
            </li>
          </ul>
        </div>

        {/* Section 2: Data Usage */}
        <div className="policy-section">
          <h5 className="section-title">2. Data Usage</h5>
          <p>
            Your data enables us to provide tailored services, connect with you,
            and enhance our website. We may use your information for marketing
            and promotional reasons only with your permission.
          </p>
        </div>

        {/* Section 3: Data Sharing */}
        <div className="policy-section">
          <h5 className="section-title">3. Data Sharing</h5>
          <p>
            We do not share or sell your information with other parties, unless
            as required by law or to provide services (e.g., payment gateways,
            hosting providers). We ensure that your data is kept private and
            only shared as needed.
          </p>
        </div>

        {/* Section 4: Data Security */}
        <div className="policy-section">
          <h5 className="section-title">4. Data Security</h5>
          <p>
            We use industry-standard security features like encryption,
            firewalls, and secure servers to keep your data safe from unwanted
            access, loss, or theft.
          </p>
        </div>

        {/* Section 5: Cookies Policy */}
        <div className="policy-section">
          <h5 className="section-title">5. Cookies Policy</h5>
          <p>
            We use cookies to improve your online experience by remembering your
            choices and collecting statistical data. Your browser's settings
            allow you to restrict cookie usage.
          </p>
        </div>

        {/* Section 6: Your Rights */}
        <div className="policy-section">
          <h5 className="section-title">6. Your Rights</h5>
          <p>
            You have the right to access, amend, and remove your personal
            information at any time. You may also withdraw consent for data use
            by contacting us directly.
          </p>
        </div>

        {/* Section 7: Changes to Privacy Policy */}
        <div className="policy-section">
          <h5 className="section-title">7. Changes to Privacy Policy</h5>
          <p>
            We may amend our Privacy Policy from time to time. We will notify
            you of any major changes by revising the date at the top of this
            page. Please examine the policy on a frequent basis to keep
            informed.
          </p>
        </div>

        {/* Section 8: Contact Information */}
        <div className="policy-section">
          <h5 className="section-title">8. Contact Information</h5>
          <p>
            If you have any questions or complaints regarding our privacy
            policy, please contact us.
          </p>
          <ul className="icon-list">
            <li>
              <i className="fas fa-phone-alt"></i> {phoneNumber}
            </li>
            <li>
              <i className="fas fa-envelope"></i> {emailAddress1}
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> {fullAddress2}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
