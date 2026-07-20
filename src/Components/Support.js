import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { emailAddress1, phoneNumber, whatsappLink } from "../Data/BrandData";
import { SupportSEO } from "../Data/AllPageSEOs";

const supportData = [
  {
    id: 1,
    icon: "fas fa-question-circle mb-3",
    title: "Frequently Asked Questions",
    description:
      "Explore our FAQs to easily get answers to often asked questions regarding our services.",
    link: "/frequently-asked-questions",
    linkText: "View FAQs",
    linkIcon: "fa-solid fa-eye",
    bgColor: "orange",
  },
  {
    id: 2,
    icon: "fas fa-envelope-open-text mb-3",
    title: "Email Support",
    description:
      "Need more help? Contact our support team by email, and we'll get back to you shortly.",
    link: `mailto:${emailAddress1}`,
    linkText: "Email Us",
    linkIcon: "fa-solid fa-envelope",
    bgColor: "green",
  },
  {
    id: 3,
    icon: "fas fa-comments mb-3",
    title: "Live Chat Support",
    description:
      "Chat with our support experts in real time for prompt assistance with any pressing issues.",
    link: whatsappLink,
    linkText: "Start Chat",
    linkIcon: "fa-solid fa-message",
    bgColor: "blue",
  },
  {
    id: 4,
    icon: "fas fa-phone-alt mb-3",
    title: "Phone Support",
    description:
      "Do you like to talk? For instant assistance, please call us immediately and chat with our support team.",
    link: `tel:${phoneNumber}`,
    linkText: "Call Us Now",
    linkIcon: "fa-solid fa-phone",
    bgColor: "purple",
  },
  {
    id: 5,
    icon: "fas fa-book mb-3",
    title: "Knowledge Base",
    description:
      "Explore our huge knowledge library to discover informative articles, guides, and tutorials.",
    link: "/blogs",
    linkText: "Explore Articles",
    linkIcon: "fa-solid fa-brain",
    bgColor: "pink",
  },
];

const Support = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section className="">
      {SupportSEO}

      {/* Support Page Header */}
      <div className="text-center mb-5 support-center-main-background d-flex align-items-center justify-content-center flex-column">
        <h1 className="section-heading mb-3 text-white">Support Center</h1>
        <p className="text-white">
          We are here to assist you with any inquiries or concerns you may have.
          You may reach us at any moment!
        </p>
      </div>

      <div className="d-flex justify-content-around flex-wrap">
        {supportData.map((item) => (
          <div key={item.id} className="">
            <div
              className={`support-center-card text-center p-4  ${item.bgColor}`}
              style={{ margin: "2rem 0.5rem" }}
            >
              <div className="service-icon">
                <span>
                  <i className={item.icon}></i>
                </span>
              </div>
              <h5 className="mb-3">{item.title}</h5>
              <p className="text-dark">{item.description}</p>
              <Link to={item.link} className="btn btn-info mt-3">
                <i className={item.linkIcon}></i> {item.linkText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Support;
