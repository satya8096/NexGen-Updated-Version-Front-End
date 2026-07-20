import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AcheivementsCount from "../Components/AcheivementsCount";
import { emailAddress } from "../Data/BrandData";
import ContactForm from "../Components/ContactForm";
import { ContactPageSEO } from "../Data/AllPageSEOs";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      {ContactPageSEO}
      <div className="contact-us-main-cotainer-img d-flex align-items-center justify-content-center flex-column">
        <h3 className="text-center text-warning">Connect Now</h3>
        <p className="text-center text-white">
          " You may contact us at any time! We're here to listen and assist you
          in accomplishing your aims. "
        </p>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="text-info">
                Home
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-white"
              aria-current="page"
            >
              Contact Us
            </li>
          </ol>
        </nav>
      </div>

      <ContactForm />
      {/* Acheiment section */}
      <AcheivementsCount />

      {/* Lets Talk Section */}
      <section
        className="lets-talk-section"
        style={{ backgroundColor: "#eafaf1" }}
      >
        <div className="container text-center py-5">
          <div className="lets-talk-content">
            <h2 className="lets-talk-heading section-heading mb-4">
              Let's Talk
            </h2>
            <p className="lets-talk-text">
              Have a project or an idea? We would love to hear from you! Let's
              make this happen.
            </p>
            <Link
              to={`mailto:${emailAddress}`}
              className="btn btn-primary lets-talk-btn"
            >
              <i className="fas fa-envelope me-2"></i>Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="google-map-section">
        <div className="">
          <h2 className="map-heading text-center mt-4 mb-4 section-heading">
            Find Us on Google Maps
          </h2>
          <div className="map-container">
            <h4 className="text-center m-3">Branch - 1 Address</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.865901327942!2d82.15118491033694!3d16.583256284107204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37f7934c485a61%3A0x4c6666e6410783da!2sNexGen%20Web%20Designs!5e0!3m2!1sen!2sin!4v1745725925970!5m2!1sen!2sin"
              title="Google Map"
              className="google-map w-100"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <h4 className="text-center m-3">Branch - 2 Address</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.884159334933!2d78.36320070974448!3d17.465257700490163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a8cd882099%3A0xa1eeb5040b6b6141!2sNexGen%20Web%20Designs!5e0!3m2!1sen!2sin!4v1755575563443!5m2!1sen!2sin"
              width="600"
              height="450"
              className="google-map w-100"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              title="gooflemap"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
