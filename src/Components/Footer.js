import React from "react";
import {
  brandName,
  emailAddress,
  fullAddress1,
  fullAddress2,
  phoneNumber,
  whatsappNumber,
  whatsappNumber1,
} from "../Data/BrandData";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    name: "Web Development",
    link: "/services",
    icon: "fa-solid fa-check",
  },
  { id: 2, name: "Web Design", link: "/services", icon: "fa-solid fa-check" },
  {
    id: 3,
    name: "Landing Pages",
    link: "/services",
    icon: "fa-solid fa-check",
  },
  { id: 4, name: "Portfolios", link: "/services", icon: "fa-solid fa-check" },
  {
    id: 5,
    name: "Hosting Provider",
    link: "/services",
    icon: "fa-solid fa-check",
  },
  {
    id: 6,
    name: "Educational Websites",
    link: "/services",
    icon: "fa-solid fa-check",
  },
  {
    id: 7,
    name: "Small Business Websites",
    link: "/services",
    icon: "fa-solid fa-check",
  },
];

const quickLinks = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about-us" },
  { name: "Services", url: "/services" },
  { name: "Portfolio", url: "/portfolio" },
  { name: "Careers", url: "/careers" },
  { name: "Contact Us", url: "/contact-us" },
  { name: "Blogs", url: "/blogs" },
];

const links = [
  { text: "FAQs", href: "/frequently-asked-questions" },
  { text: "Support", href: "/support" },
  { text: "Terms & Conditions", href: "/terms-and-conditions" },
  { text: "Privacy Policy", href: "/privacy-policy" },
  { text: "Refund & Cancellation", href: "/refund-and-cancellation" },
];

const Footer = () => {
  return (
    <footer className="pt-5 overflow-hidden" style={{ marginBottom: "-2rem" }}>
      <div className="container">
        <div className="row">
          {/* Brand and Slogan */}
          <div className="col-md-3 col-sm-12 mb-4" data-aos="fade-up">
            <div className="mb-3 ">
              {" "}
              <img
                src={require("./../Assets/NexGen_Final_Logo.png")}
                alt="logo"
                style={{ width: "10rem" }}
              />
            </div>
            <p className="text-white">
              "{brandName} is dedicated to bringing the best services to help
              you reach your success goals effortlessly."
            </p>
          </div>

          {/* Navigation Links */}
          <div
            className="col-md-3 col-sm-12 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h5 className="text-white">Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-white text-decoration-none"
                  >
                    <i className="fa-solid fa-angles-right"></i> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div
            className="col-md-3 col-sm-12 mb-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h5 className="text-white">Our Services</h5>
            <ul className="list-unstyled">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={service.link}
                    className="text-white text-decoration-none"
                  >
                    <i className="fa-solid fa-angles-right"></i> {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Terms & Social Media */}
          <div
            className="col-md-3 col-sm-12 mb-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h5 className="text-white">Terms & Conditions</h5>
            <ul className=" list-unstyled">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white text-decoration-none"
                  >
                    <i className="fa-solid fa-angles-right"></i> {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Deatils */}
          <div
            className=" mb-4 d-flex flex-wrap gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <ul className="list-unstyled">
              <h5 className="text-white">Contact Us</h5>
              <li className="mt-3 text-white">
                <h6 style={{ lineHeight: "2rem" }}>
                  <i className="fa-solid fa-envelope me-2"></i>
                  Email : <span>{emailAddress}</span>
                </h6>
              </li>
              <li className="mt-3 text-white">
                <h6 style={{ lineHeight: "2rem" }}>
                  <i className="fa-solid fa-square-phone me-2"></i>
                  Phone Number : <span>{phoneNumber}</span>
                </h6>
              </li>
              <li className="mt-3 text-white">
                <h6 style={{ lineHeight: "2rem" }}>
                  <i className="fa-brands fa-whatsapp me-2"></i>
                  WhatsApp Number 1: <span>{whatsappNumber1}</span>
                </h6>
              </li>
              <li className="mt-3 text-white">
                <h6 style={{ lineHeight: "2rem" }}>
                  <i className="fa-brands fa-whatsapp me-2"></i>
                  WhatsApp Number 2: <span>{whatsappNumber}</span>
                </h6>
              </li>
            </ul>
            <div
              className="col-md-3 col-sm-12 mb-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h5 className="text-white">Branch - 1</h5>
              <p className="text-white">{fullAddress1}</p>
            </div>
            <div
              className="col-md-3 col-sm-12 mb-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h5 className="text-white">Branch - 2</h5>
              <p className="text-white">{fullAddress2}</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div
            className="text-center mb-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h5 className="text-white">
              Follow us or Contact via Social Media
            </h5>
            <ul className="list-unstyled footer-social-media">
              <li className="mt-3">
                {/* Social Media Icons */}
                <a
                  href="https://www.facebook.com/people/NexGen-Web-Designs/61567090174518/"
                  className="text-light me-3"
                >
                  <img
                    src={require("./../Assets/facebook.png")}
                    alt="Facebook"
                    style={{ width: "2rem" }}
                  />
                </a>
                <a href="https://x.com/nexgenweb14" className="text-light me-3">
                  <img
                    src={require("./../Assets/twitter.png")}
                    alt="Twitter"
                    style={{ width: "2rem" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/nexgenwebdesignsofficial/"
                  className="text-light me-3"
                >
                  <img
                    src={require("./../Assets/instagram.png")}
                    alt="Instagram"
                    style={{ width: "2.3rem" }}
                  />
                </a>

                <a
                  href="https://www.linkedin.com/company/nexgen-web-designs/"
                  className="text-light me-3"
                >
                  <img
                    src={require("./../Assets/linkedin.png")}
                    alt="LinkedIn"
                    style={{ width: "2rem" }}
                  />
                </a>
                <a
                  href="https://www.youtube.com/@NexGenWebDesigns"
                  className="text-light"
                >
                  <img
                    src={require("./../Assets/youtube.png")}
                    alt="Youtube"
                    style={{ width: "2.6rem" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr></hr>
        {/* Copyright */}
        <div className="text-center">
          <p
            className="text-center text-white"
            style={{ fontSize: "1.1rem" }}
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="200"
          >
            &copy; 2024 - {new Date().getFullYear()} {brandName}. All rights
            reserved | Design & Developed with{" "}
            <i className="fa-solid fa-heart text-info"></i> by{" "}
            <Link to={"/"} className="text-white footer-brandname-link">
              {brandName}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   brandName,
//   emailAddress,
//   phoneNumber,
//   whatsappNumber,
//   whatsappNumber1,
//   fullAddress1,
//   fullAddress2,
// } from "../Data/BrandData";

// import Logo from "../Assets/NexGen_Final_Logo.png";

// const quickLinks = [
//   { name: "Home", url: "/" },
//   { name: "About", url: "/about-us" },
//   { name: "Services", url: "/services" },
//   { name: "Portfolio", url: "/portfolio" },
//   { name: "Careers", url: "/careers" },
//   { name: "Blogs", url: "/blogs" },
//   { name: "Contact", url: "/contact-us" },
// ];

// const services = [
//   "Business Websites",
//   "Web Applications",
//   "Landing Pages",
//   "Portfolio Websites",
//   "Educational Websites",
//   "SEO Optimization",
//   "Website Maintenance",
// ];

// const resources = [
//   "FAQs",
//   "Support",
//   "Privacy Policy",
//   "Terms & Conditions",
//   "Refund Policy",
// ];

// const Footer = () => {
//   return (
//     <div>
//       <section className="footer-cta-section">
//         <div className="container">
//           <div className="footer-cta-card">
//             <div className="row align-items-center">
//               <div className="col-lg-8">
//                 <span className="footer-badge">🚀 Let's Build Together</span>

//                 <h2 className="footer-cta-title">
//                   Ready to Build a Website
//                   <br />
//                   That Actually Grows Your Business?
//                 </h2>

//                 <p className="footer-cta-desc">
//                   We don't just design beautiful websites. We build fast,
//                   SEO-optimized, mobile-first websites that increase trust,
//                   generate leads, and help businesses grow online.
//                 </p>
//               </div>

//               <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
//                 <Link to="/contact-us" className="footer-primary-btn">
//                   Start Your Project
//                   <i className="fa-solid fa-arrow-right ms-2"></i>
//                 </Link>

//                 <Link
//                   to="/portfolio"
//                   className="footer-outline-btn ms-lg-3 mt-3 mt-lg-0"
//                 >
//                   View Portfolio
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Footer;
