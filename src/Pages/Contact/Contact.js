import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
// import { sendProjectInquiry } from "../../Components/Email Template Service/EmailService";
import {
  // emailAddress,
  // emailAddress1,
  phoneNumber,
  // whatsappNumber1,
  // whatsappNumber,
  // serverUrl,
  whatsappLink1,
} from "../../Data/BrandData";
// import axios from "axios";
import { useAppData } from "../../Data/BackEnd Data/FetchBackEndData";
import { Link } from "react-router-dom";
import {
  conatactTimeLineItems,
  words,
  timelines,
  contactWhyChooseItems,
  websiteTypes,
  branches,
} from "../../Data/Page Data/ContactPageData";
import ContactHub from "../../Components/Contact Hub/ContactHub";
import { submitWeb3Form } from "../../Components/WebFormFunction/WebFormFunction";
import { askWhatsappConfirmation } from "../../Components/Whatsapp Confirmation/WhatsappConfirmation";
import { toast } from "react-toastify";
import { ContactPageSEO } from "../../Data/AllPageSEOs";

export default function Contact() {
  const [wordIndex, setWordIndex] = useState(0);
  const heroRef = useRef(null);
  // const [submittedData, setSubmittedData] = useState(null);
  // const whatsappNumber = "918331889448";
  const dashboardRef = useRef(null);

  const { websiteData, loading } = useAppData();
  let counters = {};
  // let projects = [];
  let pricings = [];
  if (!loading) {
    counters = websiteData.counters;
    // projects = websiteData.projects;
    pricings = websiteData.pricings;
  }

  const glowRef = useRef(null);
  const [errors, setErrors] = useState({});

  const [formLoading, setFormLoading] = useState(false);

  // const [success, setSuccess] = useState(false);

  const nameRef = useRef(null);

  const emailRef = useRef(null);

  const phoneRef = useRef(null);

  const messageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let frame;

    const handleMove = (e) => {
      if (!dashboardRef.current) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 35;

      const y = (e.clientY / window.innerHeight - 0.5) * 35;

      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        dashboardRef.current.style.transform = `translate(${x}px,${y}px)`;

        if (glowRef.current) {
          glowRef.current.style.left = `${e.clientX}px`;

          glowRef.current.style.top = `${e.clientY}px`;
        }
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",

    company: "",

    email: "",

    phone: "",

    websiteType: "",

    budget: 25000,

    timeline: "",

    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your name.";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Business name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }

    if (!formData.websiteType) {
      newErrors.websiteType = "Select website type.";
    }

    if (!formData.timeline) {
      newErrors.timeline = "Select timeline.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Project details required.";
    } else if (formData.message.length < 20) {
      newErrors.message = "Minimum 20 characters required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      if (errors.fullName && nameRef.current) {
        nameRef.current.focus();
      } else if (errors.email && emailRef.current) {
        emailRef.current.focus();
      } else if (errors.phone && phoneRef.current) {
        phoneRef.current.focus();
      } else if (errors.message && messageRef.current) {
        messageRef.current.focus();
      }
      return;
    }

    setFormLoading(true);

    const formDataUpdated = new FormData(event.target);
    formDataUpdated.append(
      "from_name",
      "NexGen Web Designs Website - Contact Form",
    );
    formDataUpdated.append("subject", "New Contact Enquiry Form");
    const response = await submitWeb3Form(formDataUpdated);
    if (response.success) {
      setFormLoading(false);
      toast.success("Your request has been submitted successfully.");

      const message = `

*NEW WEBSITE ENQUIRY*

━━━━━━━━━━━━━━━━━━

*Client Details*

Name : ${formData.fullName}

Company : ${formData.company || "Not Provided"}

Email : ${formData.email}

Phone : ${formData.phone}

━━━━━━━━━━━━━━━━━━

*Project Details*

Website Type :
${formData.websiteType}

Estimated Budget :
₹${Number(formData.budget).toLocaleString("en-IN")}

Expected Timeline :
${formData.timeline}

━━━━━━━━━━━━━━━━━━

*Project Requirements*

${formData.message}

━━━━━━━━━━━━━━━━━━

Submitted From
NexGen Web Designs Website

Page
Website Enquiry Form - Contact Page

Submitted On
${new Date().toLocaleString("en-IN")}

━━━━━━━━━━━━━━━━━━

Please follow up with this client promptly.

`;

      const url = `https://wa.me/918331889448?text=${encodeURIComponent(message)}`;
      setTimeout(async () => {
        await askWhatsappConfirmation(url);

        setFormData({
          fullName: "",

          company: "",

          email: "",

          phone: "",

          websiteType: "",

          budget: 25000,

          timeline: "",

          message: "",
        });
      }, 1000);
    }
  };

  //     const message = `Hello NexGen Web Designs,

  // I'm interested in building a website.

  // --------------------------------

  // Name : ${submittedData.fullName}

  // Business : ${submittedData.company}

  // Email : ${submittedData.email}

  // Phone : ${submittedData.phone}

  // Website Type : ${submittedData.websiteType}

  // Budget : ₹${Number(submittedData.budget).toLocaleString()}

  // Timeline : ${submittedData.timeline}

  // Project Details :

  // ${submittedData.message}

  // --------------------------------

  // Looking forward to discussing my project.`;

  //     window.open(
  //       `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,

  //       "_blank",
  //     );
  //   };
  return (
    <>
      {/*=================================
            HERO
      =================================*/}
      {ContactPageSEO}
      <section className="contactHero" ref={heroRef}>
        {/* Animated Background */}

        <div className="heroBg bgOne"></div>
        <div className="heroBg bgTwo"></div>
        <div className="heroBg bgThree"></div>

        {/* Glow */}

        <div className="heroGlow glowOne"></div>
        <div className="heroGlow glowTwo"></div>

        {/* Grid */}

        <div className="heroGrid"></div>
        <div className="mouseGlow" ref={glowRef}></div>

        <div className="container">
          <div className="row align-items-center min-vh-100">
            {/* LEFT */}

            <div className="col-lg-7">
              <div className="contactHeroContent">
                <span className="contactBadge">
                  <i className="fa-solid fa-circle"></i>
                  Available For New Projects
                </span>

                <h2>
                  Let's Build Your
                  <br />
                  <span className="words-index-contact mt-4">
                    {words[wordIndex]}
                  </span>
                  <br />
                  Into Something Extraordinary.
                </h2>

                <p>
                  Whether you're starting from scratch or upgrading your
                  existing website, we're here to transform your ideas into a
                  modern digital experience that attracts customers and grows
                  your business.
                </p>

                <div className="heroButtons">
                  <Link to={`tel:${phoneNumber}`} className="primaryBtn">
                    Start Your Project
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>

                  <Link to={whatsappLink1} className="secondaryBtn">
                    <i className="fa-brands fa-whatsapp"></i>
                    WhatsApp Us
                  </Link>
                </div>

                {/* Small Stats */}

                <div className="heroStats">
                  <div>
                    <h3>
                      {counters.projectsCount < 10
                        ? `0${counters.projectsCount}`
                        : counters.projectsCount}
                      +
                    </h3>

                    <span>Projects</span>
                  </div>

                  <div>
                    <h3>98%</h3>

                    <span>Happy Clients</span>
                  </div>

                  <div>
                    <h3>24/7</h3>

                    <span>Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="col-lg-5">
              <div className="contactDashboard" ref={dashboardRef}>
                <div className="dashboardHeader">
                  <span>New Project</span>

                  <div className="online"></div>
                </div>

                <div className="dashboardBody">
                  <div className="dashboardCard">
                    <i className="fa-solid fa-clock"></i>

                    <div>
                      <h4>Average Reply</h4>

                      <p>Within 30 Minutes</p>
                    </div>
                  </div>

                  <div className="dashboardCard">
                    <i className="fa-solid fa-laptop-code"></i>

                    <div>
                      <h4>Website Delivery</h4>

                      <p>Starting from 5 Days</p>
                    </div>
                  </div>

                  <div className="dashboardCard">
                    <i className="fa-solid fa-headset"></i>

                    <div>
                      <h4>Free Support</h4>

                      <p>After Project Launch</p>
                    </div>
                  </div>

                  <div className="dashboardCard">
                    <i className="fa-solid fa-star"></i>

                    <div>
                      <h4>Client Rating</h4>

                      <p>★★★★★ 5.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll */}

        <div className="scrollDown">
          <span>Scroll</span>

          <i className="fa-solid fa-arrow-down-long"></i>
        </div>
      </section>

      <ContactHub />

      <section className="findus-section">
        <div className="container">
          {/* Heading */}

          <div className="findus-section-title">
            <span>Visit Our Offices</span>

            <h2>Find NexGen Web Designs Near You</h2>

            <p>
              Whether you're planning a new website, redesign, or consultation,
              our team is ready to welcome you.
            </p>
          </div>

          {/* Cards */}

          <div className="row g-5">
            {branches.map((branch) => (
              <div className="col-lg-6" key={branch.id}>
                <div className="branch-card">
                  {/* Header */}

                  <div className="branch-header">
                    <div
                      className="branch-icon"
                      style={{
                        background: branch.color,
                      }}
                    >
                      <i className={branch.icon}></i>
                    </div>

                    <div>
                      <h3>{branch.name}</h3>

                      <span>NexGen Web Designs</span>
                    </div>
                  </div>

                  {/* Details */}

                  <div className="branch-details">
                    <div>
                      <i className="fa-solid fa-location-dot"></i>

                      <span>{branch.address}</span>
                    </div>

                    <div>
                      <i className="fa-solid fa-phone"></i>

                      <span>{branch.phone}</span>
                    </div>

                    <div>
                      <i className="fa-solid fa-envelope"></i>

                      <span>{branch.email}</span>
                    </div>

                    <div>
                      <i className="fa-solid fa-clock"></i>

                      <span>{branch.timing}</span>
                    </div>
                  </div>

                  {/* Buttons */}

                  <div className="branch-buttons">
                    <a
                      href={branch.directions}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-solid fa-location-arrow"></i>
                      Get Directions
                    </a>

                    <a href={`tel:${phoneNumber}`}>
                      <i className="fa-solid fa-phone"></i>
                      Call Now
                    </a>
                  </div>

                  {/* Google Map */}

                  <div className="map-wrapper">
                    <iframe
                      src={branch.map}
                      loading="lazy"
                      allowFullScreen
                      title={branch.name}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="projectInquiry ">
        <div className="container">
          <div className="">
            {/* LEFT */}

            <div>
              <div className="inquiryContent">
                <span>Start Your Project</span>

                <h2 id="projectInquiryHeading">
                  Tell Us About Your Dream Website
                </h2>

                <p id="projectInquiryDescription">
                  Complete this quick form and we'll prepare the perfect
                  solution for your business. The more details you share, the
                  better recommendations we can provide.
                </p>

                <div className="projectFeatures">
                  <div>
                    <i className="fa-solid fa-check"></i>
                    Free Consultation
                  </div>

                  <div>
                    <i className="fa-solid fa-check"></i>
                    Custom Design
                  </div>

                  <div>
                    <i className="fa-solid fa-check"></i>
                    SEO Ready
                  </div>

                  <div>
                    <i className="fa-solid fa-check"></i>
                    Mobile Friendly
                  </div>

                  <div>
                    <i className="fa-solid fa-check"></i>
                    Fast Delivery
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="inquiryFormContainer">
              <form
                className="projectForm"
                onSubmit={handleSubmit}
                noValidate
                aria-labelledby="projectInquiryHeading"
                aria-describedby="projectInquiryDescripton"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="formGroup">
                      <label htmlFor="fullName">
                        Full Name
                        <span className="required">*</span>
                      </label>

                      <input
                        id="fullName"
                        ref={nameRef}
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your fulll name"
                        required
                        autoComplete="name"
                        aria-required="true"
                        aria-invalid={errors.fullName ? "true" : "false"}
                        aria-describedby={
                          errors.fullName ? "fullNameError" : undefined
                        }
                        disabled={formLoading}
                      />
                      {errors.fullName && (
                        <p id="fullNameError" className="error" role="alert">
                          {errors.fullName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="formGroup">
                      <label htmlFor="company">Business Name</label>

                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Enter your business name"
                        value={formData.company}
                        onChange={handleChange}
                        autoComplete="organization"
                        aria-invalid={errors.company ? "true" : "false"}
                        aria-describedby={
                          errors.company ? "companyError" : undefined
                        }
                        disabled={formLoading}
                      />

                      {errors.company && (
                        <p id="companyError" className="error" role="alert">
                          {errors.company}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="formGroup">
                      <label htmlFor="email">
                        Email Address
                        <span className="required">*</span>
                      </label>

                      <input
                        id="email"
                        ref={emailRef}
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                        aria-required="true"
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={
                          errors.email ? "emailError" : undefined
                        }
                        disabled={formLoading}
                      />

                      {errors.email && (
                        <p id="emailError" className="error" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="formGroup">
                      <label htmlFor="phone">
                        Phone Number
                        <span className="required">*</span>
                      </label>

                      <input
                        id="phone"
                        ref={phoneRef}
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        required
                        aria-required="true"
                        aria-invalid={errors.phone ? "true" : "false"}
                        aria-describedby={
                          errors.phone ? "phoneError" : undefined
                        }
                        disabled={formLoading}
                      />

                      {errors.phone && (
                        <p id="phoneError" className="error" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* WEBSITE TYPE */}

                <h5 className="sectionTitle">Website Type</h5>

                <div className="websiteCards">
                  {websiteTypes.map((item) => (
                    <div
                      key={item.id}
                      className={`websiteCard ${
                        formData.websiteType === item.title ? "active" : ""
                      }`}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          websiteType: item.title,
                        }))
                      }
                      disabled={formLoading}
                    >
                      <i className={item.icon}></i>
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>

                {errors.websiteType && (
                  <p className="error">{errors.websiteType}</p>
                )}

                {/* BUDGET */}

                <div className="budgetBox">
                  <label>Estimated Budget</label>

                  <h3>₹ {formData.budget.toLocaleString()}</h3>

                  <input
                    type="range"
                    min={(!loading && pricings[0].actualPrice) || 0}
                    max="100000"
                    step="5000"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    disabled={formLoading}
                  />
                  {errors.budget && <p className="error">{errors.budget}</p>}
                </div>

                {/* TIMELINE */}

                <h5 className="sectionTitle">Project Timeline</h5>

                <div
                  className="timelineButtons"
                  role="radiogroup"
                  aria-label="Project Timeline"
                >
                  {timelines.map((item, index) => (
                    <button
                      type="button"
                      key={index}
                      aria-pressed={formData.timeline === item}
                      className={formData.timeline === item ? "active" : ""}
                      onClick={() =>
                        setFormData({
                          ...formData,

                          timeline: item,
                        })
                      }
                      disabled={formLoading}
                    >
                      {item}
                    </button>
                  ))}
                  {errors.timeline && (
                    <p className="error">{errors.timeline}</p>
                  )}
                </div>

                <div className="formGroup mt-4">
                  <label htmlFor="message">
                    Project Details
                    <span className="required">*</span>
                  </label>

                  <textarea
                    id="message"
                    ref={messageRef}
                    rows="6"
                    name="message"
                    placeholder="Enter about your business"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={500}
                    required
                    aria-required="true"
                    disabled={formLoading}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby="
messageHelp
messageCounter
messageError
"
                  ></textarea>
                  {errors.message && (
                    <p id="messageError" className="error" role="alert">
                      {errors.message}
                    </p>
                  )}
                  <p id="messageHelp" className="inputHelp mt-3">
                    Please describe your project requirements.
                  </p>
                  <div
                    id="messageCounter"
                    className="characterCount"
                    aria-live="polite"
                  >
                    {formData.message.length}/ 500
                  </div>
                </div>

                <button
                  className="submitProject"
                  type="submit"
                  disabled={formLoading}
                  aria-busy={loading}
                  aria-live="polite"
                >
                  {formLoading ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send project enquiry
                      <i className="fa-solid fa-arrow-right"></i>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="whyChooseSection">
        <div className="container">
          <div className="contact-why-chooseus-section-heading">
            <span>Why Choose Us</span>

            <h2>
              More Than A Website.
              <br />
              We Build Your Digital Growth.
            </h2>

            <p>
              Every website we build is crafted to help businesses attract
              customers, build trust, and increase sales.
            </p>
          </div>

          <div className="whyChooseWrapper">
            {/* CENTER */}

            <div className="centerCircle">
              <div className="centerGlow"></div>

              <i className="fa-solid fa-laptop-code"></i>

              <h4>
                NexGen
                <br />
                Web Designs
              </h4>
            </div>

            {/* ITEMS */}

            {contactWhyChooseItems.map((item, index) => (
              <div className={`featureCard card${index + 1}`} key={index}>
                <div className="featureIcon">
                  <i className={item.icon}></i>
                </div>

                <h5>{item.title}</h5>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="process-heading contact-why-chooseus-section-heading">
            <span>Our Process</span>

            <h2>
              From Your Idea
              <br />
              To A Successful Website
            </h2>

            <p>
              We follow a structured process to ensure every website is
              delivered with quality, performance, and attention to detail.
            </p>
          </div>

          <div className="process-timeline">
            {conatactTimeLineItems.map((step) => (
              <div className="process-step" key={step.number}>
                <div className="process-step-left">
                  <div className="process-circle">{step.number}</div>

                  <div className="process-line"></div>
                </div>

                <div className="process-card">
                  <div className="process-icon">
                    <i className={step.icon}></i>
                  </div>

                  <div>
                    <h3>{step.title}</h3>

                    <p>{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
