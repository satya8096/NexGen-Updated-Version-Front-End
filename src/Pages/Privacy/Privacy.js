import React from "react";
import { Link } from "react-router-dom";
import "./Privacy.css";

import {
  emailAddress1,
  phoneNumber,
  whatsappLink1,
} from "./../../Data/BrandData";
import { PrivacyPolicySEO } from "../../Data/AllPageSEOs";

const navigation = [
  { id: "information", label: "Information We Collect" },
  { id: "usage", label: "How We Use Information" },
  { id: "cookies", label: "Cookies Policy" },
  { id: "thirdparty", label: "Third Party Services" },
  { id: "security", label: "Data Security" },
  { id: "rights", label: "Your Rights" },
  { id: "retention", label: "Data Retension" },
  { id: "children", label: "Children's Privacy" },
  { id: "changes", label: "Changes to the policy" },
  { id: "contact", label: "Contact Information" },
];

const PrivacyPolicy = () => {
  return (
    <main className="privacy-page">
      {PrivacyPolicySEO}
      <section className="privacy-hero">
        <div className="privacy-grid"></div>

        <div className="privacy-glow glow-one"></div>
        <div className="privacy-glow glow-two"></div>

        <div className="container">
          <div className="privacy-hero-content">
            <div className="privacy-breadcrumb" data-aos="fade-up">
              <Link to="/">Home</Link>

              <span>/</span>

              <span>Privacy Policy</span>
            </div>

            <span className="privacy-tag" data-aos="fade-up">
              <i className="fa-solid fa-shield-halved"></i>
              Your Privacy Matters
            </span>

            <h2 data-aos="fade-up">Privacy Policy</h2>

            <p data-aos="fade-up">
              At <strong>NexGen Web Designs</strong>, we value your trust. This
              Privacy Policy explains how we collect, use, protect, and manage
              your personal information whenever you interact with our website
              or digital services.
            </p>

            <div className="privacy-hero-footer" data-aos="fade-up">
              <div className="privacy-date">
                <i className="fa-regular fa-calendar"></i>
                Last Updated
                <strong>July 2026</strong>
              </div>

              <div className="privacy-secure">
                <i className="fa-solid fa-lock"></i>
                Secure & Transparent
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-summary">
        <div className="container">
          <div className="privacy-summary-grid">
            <div
              className="privacy-summary-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <i className="fa-solid fa-user-shield"></i>

              <h3>Your Data</h3>

              <p>
                We only collect information necessary to deliver our services
                professionally.
              </p>
            </div>

            <div
              className="privacy-summary-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="fa-solid fa-eye"></i>

              <h3>Transparency</h3>

              <p>
                We clearly explain what information is collected, why it is
                collected and how it is used.
              </p>
            </div>

            <div
              className="privacy-summary-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="fa-solid fa-shield-check"></i>

              <h3>Security</h3>

              <p>
                Your information is handled with security-focused practices and
                modern technologies.
              </p>
            </div>

            <div
              className="privacy-summary-card"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="fa-solid fa-scale-balanced"></i>

              <h3>Your Rights</h3>

              <p>
                You remain in control of your information and can request
                updates or deletion whenever applicable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-content">
        <div className="container">
          <div className="privacy-layout">
            <aside className="privacy-sidebar" data-aos="fade-right">
              <div className="privacy-sidebar-card">
                <h4>
                  <i className="fa-solid fa-book-open me-3"></i>
                  Quick Navigation
                </h4>

                <ul>
                  {navigation.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="privacy-main">
              <section id="information" className="privacy-card">
                <div className="privacy-card-header">
                  <div className="privacy-icon">
                    <i className="fa-solid fa-database"></i>
                  </div>

                  <div data-aos="fade-up">
                    <span>01</span>
                    <h2>Information We Collect</h2>
                  </div>
                </div>

                <p data-aos="fade-up">
                  When you interact with NexGen Web Designs, we may collect
                  information necessary to provide our services and improve your
                  experience.
                </p>

                <div className="privacy-list">
                  <div
                    className="privacy-item"
                    data-aos="fade-left"
                    data-aos-delay="100"
                  >
                    <i className="fa-solid fa-user"></i>
                    <div>
                      <h4>Personal Information</h4>
                      <p>
                        Name, email address, phone number and business details
                        submitted through contact forms.
                      </p>
                    </div>
                  </div>

                  <div
                    className="privacy-item"
                    data-aos="fade-left"
                    data-aos-delay="200"
                  >
                    <i className="fa-solid fa-globe"></i>
                    <div>
                      <h4>Website Usage</h4>
                      <p>
                        Anonymous analytics including browser type, pages
                        visited and device information.
                      </p>
                    </div>
                  </div>

                  <div
                    className="privacy-item"
                    data-aos="fade-left"
                    data-aos-delay="300"
                  >
                    <i className="fa-solid fa-file"></i>
                    <div>
                      <h4>Project Information</h4>
                      <p>
                        Content, images, logos and files you voluntarily provide
                        for website development.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="usage" className="privacy-card">
                <div className="privacy-card-header">
                  <div className="privacy-icon">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>

                  <div data-aos="fade-up">
                    <span>02</span>
                    <h2>How We Use Your Information</h2>
                  </div>
                </div>

                <p data-aos="fade-up">
                  Every piece of information collected is used only for
                  legitimate business purposes that help us deliver professional
                  digital services.
                </p>

                <div className="privacy-grid-two">
                  <div
                    className="privacy-small-card"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <i className="fa-solid fa-check"></i>
                    Deliver website development services
                  </div>

                  <div
                    className="privacy-small-card"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <i className="fa-solid fa-check"></i>
                    Respond to enquiries
                  </div>

                  <div
                    className="privacy-small-card"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <i className="fa-solid fa-check"></i>
                    Improve website performance
                  </div>

                  <div
                    className="privacy-small-card"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <i className="fa-solid fa-check"></i>
                    Customer support
                  </div>

                  <div
                    className="privacy-small-card"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  >
                    <i className="fa-solid fa-check"></i>
                    Security monitoring
                  </div>

                  <div
                    className="privacy-small-card"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                  >
                    <i className="fa-solid fa-check"></i>
                    Service improvements
                  </div>
                </div>
              </section>

              <section id="cookies" className="privacy-card">
                <div className="privacy-card-header">
                  <div className="privacy-icon">
                    <i className="fa-solid fa-cookie-bite"></i>
                  </div>

                  <div data-aos="fade-up">
                    <span>03</span>
                    <h2>Cookies Policy</h2>
                  </div>
                </div>

                <p data-aos="fade-up">
                  Cookies help improve browsing experience, remember preferences
                  and understand website performance.
                </p>

                <div className="privacy-note" data-aos="fade-up">
                  <i className="fa-solid fa-circle-info"></i>

                  <p>
                    You can disable cookies from your browser settings, although
                    some website functionality may be affected.
                  </p>
                </div>
              </section>

              <section id="thirdparty" className="privacy-card">
                <div className="privacy-card-header">
                  <div className="privacy-icon">
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>

                  <div data-aos="fade-up">
                    <span>04</span>
                    <h2>Third Party Services</h2>
                  </div>
                </div>

                <p data-aos="fade-up">
                  Our website may integrate trusted third-party providers
                  including hosting companies, analytics platforms, payment
                  gateways and communication tools.
                </p>
              </section>
              <section id="security" className="privacy-card">
                <div className="privacy-card-header">
                  <div className="privacy-icon">
                    <i className="fa-solid fa-lock"></i>
                  </div>

                  <div data-aos="fade-up">
                    <span>05</span>
                    <h2>Data Security</h2>
                  </div>
                </div>

                <p data-aos="fade-up">
                  We implement reasonable technical and organizational
                  safeguards to help protect your information against
                  unauthorized access, misuse or disclosure.
                </p>

                <div className="security-banner">
                  <div data-aos="zoom-in">
                    <i className="fa-solid fa-shield-halved"></i>
                    Secure Hosting
                  </div>

                  <div data-aos="zoom-in">
                    <i className="fa-solid fa-key"></i>
                    Encrypted Access
                  </div>

                  <div data-aos="zoom-in">
                    <i className="fa-solid fa-user-lock"></i>
                    Restricted Access
                  </div>
                </div>
              </section>
              <section id="rights" className="privacy-card">
                <div className="privacy-card-header">
                  <div className="privacy-icon">
                    <i className="fa-solid fa-scale-balanced"></i>
                  </div>

                  <div data-aos="fade-up">
                    <span>06</span>
                    <h2>Your Rights</h2>
                  </div>
                </div>

                <p data-aos="fade-up">
                  Depending on applicable laws, you may have the right to
                  request access to, correction of or deletion of your personal
                  information.
                </p>
              </section>

              <section id="retention" className="privacy-card">
                <div className="privacy-card-header">
                  <div className="privacy-icon">
                    <i className="fa-solid fa-clock-rotate-left"></i>
                  </div>

                  <div data-aos="fade-up">
                    <span>07</span>
                    <h2>Data Retention</h2>
                  </div>
                </div>

                <p data-aos="fade-up">
                  We retain personal information only for as long as necessary
                  to provide our services, comply with legal obligations,
                  resolve disputes, and maintain accurate business records.
                </p>

                <div className="privacy-highlight" data-aos="fade-up">
                  <i className="fa-solid fa-circle-check"></i>

                  <div>
                    <h4>Our Commitment</h4>

                    <p>
                      Once information is no longer required, we take reasonable
                      steps to securely remove or anonymize it where
                      appropriate.
                    </p>
                  </div>
                </div>
              </section>

              <section id="children" className="privacy-card">
                <div className="privacy-card-header">
                  <div className="privacy-icon">
                    <i className="fa-solid fa-child"></i>
                  </div>

                  <div data-aos="fade-up">
                    <span>08</span>
                    <h2>Children's Privacy</h2>
                  </div>
                </div>

                <p data-aos="fade-up">
                  Our services are intended for businesses and individuals who
                  can legally enter into agreements. We do not knowingly collect
                  personal information from children.
                </p>
              </section>

              <section id="changes" className="privacy-card">
                <div className="privacy-card-header">
                  <div className="privacy-icon">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </div>

                  <div data-aos="fade-up">
                    <span>09</span>
                    <h2>Changes To This Policy</h2>
                  </div>
                </div>

                <p data-aos="fade-up">
                  This Privacy Policy may be updated occasionally to reflect
                  changes in legal requirements, technology, or our business
                  operations. Any updates will be published on this page with
                  the latest revision date.
                </p>
              </section>
              <section id="contact" className="privacy-card">
                <div className="privacy-card-header">
                  <div className="privacy-icon">
                    <i className="fa-solid fa-envelope-open-text"></i>
                  </div>

                  <div data-aos="fade-up">
                    <span>10</span>

                    <h2>Contact Information</h2>
                  </div>
                </div>

                <p data-aos="fade-up">
                  If you have any questions regarding this Privacy Policy or how
                  your information is handled, please feel free to contact us.
                </p>

                <div className="privacy-contact-grid">
                  <div className="contact-box" data-aos="fade-up">
                    <i className="fa-solid fa-building"></i>

                    <div>
                      <h4 style={{ lineHeight: 1.8 }}>NexGen Web Designs</h4>

                      <p>Professional Website Development Agency</p>
                    </div>
                  </div>

                  <div className="contact-box" data-aos="fade-up">
                    <i className="fa-solid fa-phone"></i>

                    <div>
                      <h4>Phone</h4>

                      <p>{phoneNumber}</p>
                    </div>
                  </div>

                  <div className="contact-box" data-aos="fade-up">
                    <i className="fa-solid fa-envelope"></i>

                    <div>
                      <h4>Email</h4>

                      <p>{emailAddress1}</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="privacy-promise">
        <div className="container">
          <div className="privacy-promise-card" data-aos="fade-up">
            <span>
              <i className="fa-solid fa-shield-heart"></i>
              OUR PRIVACY PROMISE
            </span>

            <h2>Your Trust Is The Foundation Of Everything We Build.</h2>

            <p>
              Whether we're designing your website or communicating with you,
              protecting your privacy and maintaining transparency remain at the
              heart of our business.
            </p>
          </div>
        </div>
      </section>
      <section className="privacy-cta">
        <div className="container">
          <div className="privacy-cta-card" data-aos="fade-up">
            <span>READY TO START?</span>

            <h2>Let's Build Something Amazing Together.</h2>

            <p>
              Have questions about our services or policies? We'd love to help
              you.
            </p>

            <div className="privacy-buttons">
              <Link to="/contact" className="privacy-btn-primary">
                Start Your Project
                <i className="fa-solid fa-arrow-right"></i>
              </Link>

              <a
                href={whatsappLink1}
                target="_blank"
                rel="noreferrer"
                className="privacy-btn-secondary"
              >
                <i className="fa-brands fa-whatsapp"></i>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
