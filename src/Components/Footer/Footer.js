import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import Logo from "../../Assets/NexGen_Web_Designs_Finla_Light_Logo_With_Background.png";
import { emailAddress, emailAddress1, phoneNumber } from "../../Data/BrandData";

export default function Footer() {
  // const [showButton, setShowButton] = useState(false);
  const services = [
    "Website Design",
    "Website Development",
    "E-Commerce",
    "UI / UX Design",
    "SEO Optimization",
    "Website Maintenance",
  ];

  const quickLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Support",
      link: "/support",
    },
  ];

  const socialIcons = [
    {
      icon: "fab fa-facebook-f",
      link: "https://www.facebook.com/people/NexGen-Web-Designs/61567090174518/",
    },
    {
      icon: "fab fa-instagram",
      link: "https://www.instagram.com/nexgenwebdesignsofficial/",
    },
    {
      icon: "fab fa-linkedin-in",
      link: "https://www.linkedin.com/company/nexgen-web-designs/",
    },
    {
      icon: "fab fa-twitter",
      link: "https://x.com/nexgenweb14",
    },
    {
      icon: "fab fa-youtube",
      link: "https://www.youtube.com/@NexGenWebDesigns",
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-5">
          {/* ==========================
                        COMPANY
                    ========================== */}

          <div className="col-lg-4 col-md-6">
            <div className="footer-company">
              <Link to="/" className="footer-logo">
                <img src={Logo} alt="NexGen Web Designs" />

                <span>NexGen Web Designs</span>
              </Link>

              <p>
                We create modern, fast and conversion-focused websites that help
                businesses build trust, generate more leads and grow their brand
                online.
              </p>

              <div className="footer-social">
                {socialIcons.map((item, index) => (
                  <a key={index} href={item.link}>
                    <i className={item.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ==========================
                        SERVICES
                    ========================== */}

          <div className="col-lg-2 col-md-6">
            <div className="footer-links">
              <h4>Services</h4>

              <ul>
                {services.map((service, index) => (
                  <li key={index}>
                    <Link to="/services">{service}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ==========================
                        QUICK LINKS
                    ========================== */}

          <div className="col-lg-2 col-md-6">
            <div className="footer-links">
              <h4>Quick Links</h4>

              <ul>
                {quickLinks.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ==========================
                        CONTACT
                    ========================== */}

          <div className="col-lg-4 col-md-6">
            <div className="footer-contact">
              <h4>Contact Us</h4>

              <div className="contact-item">
                <i className="fa-solid fa-phone"></i>

                <div>
                  <span>Phone</span>

                  <h6>{phoneNumber}</h6>
                </div>
              </div>

              <div className="contact-item">
                <i className="fa-solid fa-envelope"></i>

                <div>
                  <span>Sales Email</span>

                  <h6>{emailAddress}</h6>
                </div>
              </div>

              <div className="contact-item">
                <i className="fa-solid fa-envelope"></i>

                <div>
                  <span>Contact Email</span>

                  <h6>{emailAddress1}</h6>
                </div>
              </div>

              <div className="contact-item">
                <i className="fa-solid fa-location-dot"></i>

                <div>
                  <span>Location</span>

                  <h6>Andhra Pradesh, Hyderabad, India</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================
                    FOOTER BOTTOM
                ========================== */}

        <div className="footer-bottom">
          <p>
            © 2024 - {new Date().getFullYear()} NexGen Web Designs. All Rights
            Reserved.
          </p>

          <div className="bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>

            <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      {/* ==========================
                BACK TO TOP
            ========================== */}

      <button
        className="scroll-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </footer>
  );
}
