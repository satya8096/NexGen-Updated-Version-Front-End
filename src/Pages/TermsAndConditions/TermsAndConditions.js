import React from "react";
import { Link } from "react-router-dom";
import "./TermsAndConditions.css";
import {
  emailAddress1,
  phoneNumber,
  whatsappLink1,
} from "../../Data/BrandData";
import { TermsAndConditionsSEO } from "../../Data/AllPageSEOs";

const navigation = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "services", label: "Our Services" },
  { id: "client", label: "Client Responsibilities" },
  { id: "pricing", label: "Pricing & Quotations" },
  { id: "payments", label: "Payments" },
  { id: "latepayments", label: "Late Payments" },
  { id: "refund", label: "Refund Policy" },
  { id: "timeline", label: "Project Timeline" },
  { id: "ownership", label: "Intellectual Property" },
  { id: "hosting", label: "Hosting & Domains" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "confidensiality", label: "Confidensiality" },
  { id: "forcemajeure", label: "Force Majeure" },
  { id: "termination", label: "Termination" },
  { id: "law", label: "Governing Law" },
  { id: "contact", label: "Contact Us" },
];

const TermsConditions = () => {
  return (
    <main className="terms-page">
      {TermsAndConditionsSEO}
      <section className="terms-hero">
        <div className="terms-grid"></div>

        <div className="terms-glow glow-left"></div>
        <div className="terms-glow glow-right"></div>

        <div className="container">
          <div className="terms-hero-content">
            <div className="terms-breadcrumb" data-aos="fade-up">
              <Link to="/">Home</Link>

              <span>/</span>

              <p>Terms & Conditions</p>
            </div>

            <span className="terms-badge" data-aos="fade-up">
              <i className="fa-solid fa-file-contract"></i>
              Legal Information
            </span>

            <h1 data-aos="fade-up">Terms & Conditions</h1>

            <p data-aos="fade-up">
              These Terms & Conditions govern your use of the NexGen Web Designs
              website and our professional web design and development services.
              By accessing our website or engaging our services, you agree to
              these terms.
            </p>

            <div className="terms-meta" data-aos="fade-up">
              <div className="meta-box">
                <i className="fa-regular fa-calendar"></i>
                Last Updated
                <strong>July 2026</strong>
              </div>

              <div className="meta-box">
                <i className="fa-solid fa-scale-balanced"></i>
                Transparent Business Practices
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="terms-summary">
        <div className="container">
          <div className="terms-summary-grid">
            <div
              className="summary-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <i className="fa-solid fa-handshake"></i>

              <h3>Fair Agreement</h3>

              <p>
                Clear expectations for both NexGen Web Designs and every client.
              </p>
            </div>

            <div
              className="summary-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="fa-solid fa-credit-card"></i>

              <h3>Transparent Payments</h3>

              <p>
                Pricing, quotations and payment schedules are clearly
                communicated before work begins.
              </p>
            </div>

            <div
              className="summary-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="fa-solid fa-shield"></i>

              <h3>Professional Standards</h3>

              <p>
                Every project is delivered following industry best practices.
              </p>
            </div>

            <div
              className="summary-card"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="fa-solid fa-users"></i>

              <h3>Mutual Responsibilities</h3>

              <p>
                Successful projects require collaboration between client and
                agency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="terms-content">
        <div className="container">
          <div className="terms-layout">
            <aside className="terms-sidebar" data-aos="fade-right">
              <div className="terms-sidebar-card">
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
            <div className="terms-main">
              <section
                id="acceptance"
                className="terms-card"
                data-aos="fade-up"
              >
                <div className="terms-header">
                  <div className="terms-icon">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>

                  <div>
                    <span>01</span>

                    <h2>Acceptance of Terms</h2>
                  </div>
                </div>

                <p>
                  By accessing this website or using the services provided by
                  NexGen Web Designs, you acknowledge that you have read,
                  understood and agreed to be bound by these Terms & Conditions.
                  If you do not agree with any part of these terms, you should
                  discontinue using our website and services.
                </p>
              </section>

              <section id="services" className="terms-card" data-aos="fade-up">
                <div className="terms-header">
                  <div className="terms-icon">
                    <i className="fa-solid fa-laptop-code"></i>
                  </div>

                  <div>
                    <span>02</span>

                    <h2>Our Services</h2>
                  </div>
                </div>

                <p>
                  NexGen Web Designs provides professional digital services
                  including website design, website development, responsive web
                  applications, landing pages, website maintenance, UI/UX
                  design, hosting assistance, domain guidance and other related
                  digital solutions.
                </p>
              </section>

              <section id="client" className="terms-card" data-aos="fade-up">
                <div className="terms-header">
                  <div className="terms-icon">
                    <i className="fa-solid fa-user-group"></i>
                  </div>

                  <div>
                    <span>03</span>

                    <h2>Client Responsibilities</h2>
                  </div>
                </div>

                <p>
                  Clients are responsible for providing accurate information,
                  project requirements, branding assets, written content,
                  approvals and timely feedback. Delays in providing required
                  materials may affect project timelines.
                </p>
              </section>

              <section id="pricing" className="terms-card" data-aos="fade-up">
                <div className="terms-header">
                  <div className="terms-icon">
                    <i className="fa-solid fa-file-invoice-dollar"></i>
                  </div>

                  <div>
                    <span>04</span>

                    <h2>Pricing & Quotations</h2>
                  </div>
                </div>

                <p>
                  Every quotation is prepared according to the agreed project
                  scope. Requests for additional features, revisions beyond the
                  agreed scope or significant changes may require revised
                  pricing.
                </p>
              </section>

              <section id="payments" className="terms-card" data-aos="fade-up">
                <div className="terms-header">
                  <div className="terms-icon">
                    <i className="fa-solid fa-wallet"></i>
                  </div>

                  <div>
                    <span>05</span>

                    <h2>Payments</h2>
                  </div>
                </div>

                <p>
                  Payments shall be made according to the agreed proposal or
                  invoice. Project work may begin after the required advance
                  payment is received. Remaining balances are payable according
                  to the agreed milestones or before final project delivery,
                  unless otherwise agreed in writing.
                </p>
              </section>

              <section
                id="latepayments"
                className="terms-card"
                data-aos="fade-up"
              >
                <div className="terms-header">
                  <div className="terms-icon">
                    <i className="fa-solid fa-money-check-dollar"></i>
                  </div>

                  <div>
                    <span>06</span>
                    <h2>Late Payments</h2>
                  </div>
                </div>

                <p>
                  Clients agree to make payments according to the agreed
                  proposal or invoice. Delayed payments may result in temporary
                  suspension of project work, delayed delivery, withholding of
                  website files or deployment until outstanding balances are
                  cleared.
                </p>
              </section>

              <section id="refund" className="terms-card" data-aos="fade-up">
                <div className="terms-header">
                  <div className="terms-icon">
                    <i className="fa-solid fa-receipt"></i>
                  </div>

                  <div>
                    <span>07</span>
                    <h2>Refund Policy</h2>
                  </div>
                </div>

                <p>
                  Due to the custom nature of website design and development,
                  payments already applied to completed work, consultation,
                  planning, design or development are generally non-refundable.
                  Refund requests, where applicable, will be considered based on
                  the circumstances and any written agreement between the
                  parties.
                </p>
              </section>

              <section id="timeline" className="terms-card" data-aos="fade-up">
                <div className="terms-header">
                  <div className="terms-icon">
                    <i className="fa-solid fa-shield"></i>
                  </div>

                  <div>
                    <span>08</span>
                    <h2>Project Timeline</h2>
                  </div>
                </div>

                <p>
                  The estimated project timeline begins once all required
                  content, images, branding materials, and the agreed initial
                  payment have been received from the client. Timelines may vary
                  depending on the project's size, complexity, and requested
                  features. Clients are responsible for providing timely
                  feedback, approvals, and required resources. Delays in
                  communication, content submission, or approval may extend the
                  project's completion date. Additional features or revisions
                  requested after project commencement may also affect the
                  agreed timeline. While we strive to deliver every project
                  within the estimated schedule, NexGen Web Designs shall not be
                  held responsible for delays caused by client-side
                  dependencies, third-party services, hosting providers, domain
                  registrars, or unforeseen technical circumstances.
                </p>
              </section>

              <section id="ownership" className="terms-card" data-aos="fade-up">
                <div className="terms-header">
                  <div className="terms-icon">
                    <i className="fa-solid fa-shield"></i>
                  </div>

                  <div>
                    <span>09</span>
                    <h2>Intellectual Property</h2>
                  </div>
                </div>

                <p>
                  Upon full payment of the agreed project amount, the client
                  will own the final website design, custom content, and project
                  deliverables specifically developed for their business, unless
                  otherwise agreed in writing. NexGen Web Designs retains
                  ownership of all proprietary development methods, reusable
                  code libraries, frameworks, templates, design systems,
                  utilities, and internal tools used during the development
                  process. These components may be reused in future projects.
                  Clients are responsible for ensuring that any logos, images,
                  videos, fonts, trademarks, or other materials they provide do
                  not infringe upon the intellectual property rights of third
                  parties. NexGen Web Designs shall not be liable for any
                  copyright or trademark disputes arising from client-supplied
                  content. Unless requested otherwise, NexGen Web Designs
                  reserves the right to showcase completed projects in its
                  portfolio, marketing materials, and social media for
                  promotional purposes.
                </p>
              </section>

              <section id="hosting" className="terms-card" data-aos="fade-up">
                <div className="terms-header">
                  <div className="terms-icon">
                    <i className="fa-solid fa-shield"></i>
                  </div>

                  <div>
                    <span>10</span>
                    <h2>Hosting & Domains</h2>
                  </div>
                </div>

                <p>
                  Hosting services and domain name registrations are managed
                  separately from website development unless explicitly included
                  in the selected service package. If NexGen Web Designs
                  purchases or manages hosting or domain services on behalf of
                  the client, the client is responsible for all renewal charges,
                  subscription fees, and applicable taxes after the initial
                  registration period. Failure to renew hosting or domain
                  services before their expiration date may result in website
                  downtime, email interruptions, or permanent loss of website
                  data or domain ownership. NexGen Web Designs shall not be held
                  responsible for any losses resulting from expired hosting or
                  domain services due to unpaid renewal fees. Clients who choose
                  third-party hosting providers remain responsible for
                  maintaining their hosting accounts, billing information, and
                  server resources. While we provide reasonable technical
                  assistance when possible, the availability and performance of
                  third-party hosting services are outside our control.
                </p>
              </section>

              <section id="liability" className="terms-card" data-aos="fade-up">
                <div className="terms-header">
                  <div className="terms-icon">
                    <i className="fa-solid fa-shield"></i>
                  </div>

                  <div>
                    <span>11</span>
                    <h2>Limitation of Liability</h2>
                  </div>
                </div>

                <p>
                  To the fullest extent permitted by applicable law, NexGen Web
                  Designs shall not be liable for indirect, incidental,
                  consequential, special or business losses, including loss of
                  revenue, profits, data or business opportunities arising from
                  the use of our services, except where liability cannot legally
                  be excluded.
                </p>
              </section>

              <section
                id="confidensiality"
                className="terms-card"
                data-aos="fade-up"
              >
                <div className="terms-header">
                  <div className="terms-icon">
                    <i className="fa-solid fa-user-secret"></i>
                  </div>

                  <div>
                    <span>12</span>
                    <h2>Confidentiality</h2>
                  </div>
                </div>

                <p>
                  Both NexGen Web Designs and the client agree to maintain the
                  confidentiality of any non-public information shared during
                  the course of a project, except where disclosure is required
                  by law or expressly authorized by the other party.
                </p>
              </section>

              <section
                id="forcemajeure"
                className="terms-card"
                data-aos="fade-up"
              >
                <div className="terms-header">
                  <div className="terms-icon">
                    <i className="fa-solid fa-cloud"></i>
                  </div>

                  <div>
                    <span>13</span>
                    <h2>Force Majeure</h2>
                  </div>
                </div>

                <p>
                  Neither party shall be responsible for delays or failure to
                  perform obligations due to events beyond reasonable control,
                  including natural disasters, internet outages, government
                  actions, pandemics or other unforeseen events.
                </p>
              </section>

              <section
                id="termination"
                className="terms-card"
                data-aos="fade-up"
              >
                <div className="terms-header">
                  <div className="terms-icon">
                    <i className="fa-solid fa-ban"></i>
                  </div>

                  <div>
                    <span>14</span>
                    <h2>Termination</h2>
                  </div>
                </div>

                <p>
                  Either party may terminate a project where permitted under the
                  agreed proposal. Upon termination, the client remains
                  responsible for payment of work completed up to the date of
                  termination unless otherwise agreed in writing.
                </p>
              </section>

              <section id="law" className="terms-card" data-aos="fade-up">
                <div className="terms-header">
                  <div className="terms-icon">
                    <i className="fa-solid fa-scale-balanced"></i>
                  </div>

                  <div>
                    <span>15</span>
                    <h2>Governing Law</h2>
                  </div>
                </div>

                <p>
                  These Terms & Conditions shall be governed by the laws
                  applicable in the jurisdiction where NexGen Web Designs
                  operates. Any disputes shall be resolved through the
                  appropriate courts or legal authorities having jurisdiction.
                </p>
              </section>

              <section id="contact" className="terms-card" data-aos="fade-up">
                <div className="terms-header">
                  <div className="terms-icon">
                    <i className="fa-solid fa-envelope-open-text"></i>
                  </div>

                  <div>
                    <span>16</span>
                    <h2>Contact Information</h2>
                  </div>
                </div>

                <p>
                  Questions regarding these Terms & Conditions may be sent to
                  NexGen Web Designs using the contact information below.
                </p>

                <div className="terms-contact-grid">
                  <div className="contact-item">
                    <i className="fa-solid fa-building"></i>

                    <div>
                      <h4>NexGen Web Designs</h4>

                      <p>Professional Website Design & Development</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <i className="fa-solid fa-phone"></i>

                    <div>
                      <h4>Phone</h4>

                      <p>{phoneNumber}</p>
                    </div>
                  </div>

                  <div className="contact-item">
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

      <section className="terms-final-cta text-center">
        <div className="container">
          <div className="terms-final-card">
            <span className="terms-final-tag">LET'S BUILD TOGETHER</span>

            <h2>Ready To Start Your Website Project?</h2>

            <p>
              Have questions before getting started? Contact NexGen Web Designs
              and let's discuss your business goals.
            </p>

            <div className="terms-final-buttons ">
              <Link
                to="/contact"
                className="terms-final-primary btn btn-outline-dark m-2"
              >
                Contact Us
                <i className="fa-solid fa-arrow-right ms-3"></i>
              </Link>

              <Link
                to={whatsappLink1}
                className="terms-final-secondary btn btn-outline-primary m-2"
              >
                <i className="fa-brands fa-whatsapp me-3"></i>
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsConditions;
