import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { brandName, emailAddress } from "./../Data/BrandData";
import { TermsAndConditionsSEO } from "../Data/AllPageSEOs";
const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="">
      {TermsAndConditionsSEO}
      <div className="terms-main-background d-flex align-items-center justify-content-center flex-column">
        <h2 className="text-center mb-4 section-heading text-white">
          Terms and Conditions
        </h2>
      </div>
      <div className="container pt-5">
        <div className="mb-4">
          <h5>1. Introduction</h5>
          <p>
            Welcome to {brandName}. These Terms and Conditions apply to your
            access and use of our services, website, and any related software.
            By using our services, you agree to follow these terms.
          </p>
        </div>

        <div className="mb-4">
          <h5>2. Services</h5>
          <p>
            {brandName} offers website design, development, and maintenance
            services. All services are delivered according to the requirements
            agreed upon with the customer.
          </p>
        </div>

        <div className="mb-4">
          <h5>3. Intellectual Property</h5>
          <p>
            Unless otherwise noted, {brandName} retains intellectual property
            rights to all information, designs, and materials generated,
            including logos, photos, and text. Unauthorized usage is forbidden.
          </p>
        </div>

        <div className="mb-4">
          <h5>4. Client Responsibilities</h5>
          <p>
            Clients must provide precise and full information to guarantee
            project success. Delays in delivering essential assets or permits
            may cause project delays.
          </p>
        </div>

        <div className="mb-4">
          <h5>5. Payment Terms</h5>
          <p>
            All payments for services are required in accordance with the
            invoice schedule issued at the outset of each project. Failure to
            meet payment deadlines may result in the suspension or cancellation
            of services.
          </p>
        </div>

        <div className="mb-4">
          <h5>6. Confidentiality</h5>
          <p>
            {brandName} values customer confidentiality and will not reveal
            sensitive information to third parties unless the client expressly
            consents.
          </p>
        </div>

        <div className="mb-4">
          <h5>7. Limitation of Liability</h5>
          <p>
            {brandName} is not liable for any indirect, incidental, or
            consequential damages resulting from the use of our services,
            including but not limited to data loss and business disruption.
          </p>
        </div>

        <div className="mb-4">
          <h5>8. Termination</h5>
          <p>
            Either party may cancel the contract for any reason with 3 days
            written notice. {brandName} retains the right to immediately cancel
            services if the customer breaches these conditions.
          </p>
        </div>

        <div className="mb-4">
          <h5>9. Governing Law</h5>
          <p>
            These Terms and Conditions are regulated by the laws of ______. Any
            disputes will be heard in the courts of _______.
          </p>
        </div>

        <div className="mb-4">
          <h5>10. Changes to Terms</h5>
          <p>
            {brandName} has the right to amend these Terms and Conditions at any
            time. The continued use of our services after such modifications
            signifies acceptance of the updated conditions.
          </p>
        </div>

        <div className="mb-4">
          <h5>11. Contact Us</h5>
          <p>
            If you have any issues concerning our Terms & Conditions, please
            contact us at{" "}
            <Link to={`mailto:${emailAddress}`}>{emailAddress}</Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
