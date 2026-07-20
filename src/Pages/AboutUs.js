import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  contactInfo,
  goals,
  missionData,
  visionDetails,
} from "./../Data/Page Data/AboutUsPageData";
import AcheivementsCount from "../Components/AcheivementsCount";
import { brandName, phoneNumber } from "../Data/BrandData";
import Testimonials from "../Components/Testimonials";
import { AboutPageSEOs } from "../Data/AllPageSEOs";

const AboutUs = () => {
  useEffect(() => {
    const wrapper = document.querySelector(".testimonial-wrapper");
    wrapper.addEventListener("mouseover", () => {
      wrapper.style.animationPlayState = "paused"; // Pause on hover
    });
    wrapper.addEventListener("mouseout", () => {
      wrapper.style.animationPlayState = "running"; // Resume on mouse out
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      {AboutPageSEOs}
      <div style={{ overflow: "hidden" }}>
        <div className="about-main-cotainer-img d-flex align-items-center justify-content-center flex-column">
          <h3 className="text-center text-warning about-main-headning">
            Get to Know Us
          </h3>
          <p className="text-center text-white">
            " We believe in collaboration, creativity, and a commitment to
            delivering outstanding results for every customer. "
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
                About Us
              </li>
            </ol>
          </nav>
        </div>

        <section className="py-5 bg-white border-top border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-md-5 text-center mb-4 mb-md-0"
                data-aos="fade-right"
              >
                <div className="position-relative d-inline-block founder-image-wrapper">
                  <img
                    src={require("./../Assets/Founder_image.png")}
                    alt="Founder and CEO"
                    className="img-fluid rounded-circle founder-img"
                    style={{
                      width: "220px",
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />
                  <p className="founder-badge text-white px-4 py-1 rounded-pill shadow">
                    Founder & CEO
                  </p>
                </div>
                {/* <p>satya.k@nexgenwebdesigns.com</p> */}
                <h5 className="mt-3 fw-bold">K. Satyanarayana</h5>
                <Link
                  to={
                    "https://www.linkedin.com/in/katta-venkata-rama-satyanarayana-b5116224a/"
                  }
                  className="mt-2"
                  style={{ fontSize: "1.5rem" }}
                >
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
              </div>

              {/* Founder Description */}
              <div className="col-md-7" data-aos="fade-left">
                <h4 className="fw-bold mb-3 text-dark">
                  Building the Future of Web Experiences
                </h4>
                <p className="">
                  <strong className="text-dark fs-5">{brandName}</strong> was
                  founded in 2024, with a vision to empower businesses and
                  entrepreneurs by crafting modern, responsive, and scalable
                  digital solutions. As a forward-thinking web agency, we focus
                  on intuitive design, performance, and innovation.
                </p>
                <p className="">
                  Our mission is to transform ideas into impactful products.
                  Through a client-first approach and agile mindset, we bring
                  value, clarity, and effectiveness to every project.
                </p>
                <p className="">
                  From concept to deployment, we deliver high-quality solutions
                  tailored to your goals, brand, and future vision.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-5 position-relative overflow-hidden">
          <div className="container">
            {/* Vision */}
            <div className="text-center">
              <h3 className="fw-bold section-heading" data-aos="fade">
                {brandName}
              </h3>
            </div>

            {/* Why We Started */}
            <div className="row justify-content-center mb-5" data-aos="fade">
              <div className="col-md-10">
                <div className="p-4 bg-light rounded shadow-sm text-center">
                  <blockquote className="blockquote mb-0 fs-5">
                    <em>
                      “We started NexGen with one goal — to make stunning web
                      design accessible to everyone. From startups to
                      established brands, we believe design and performance go
                      hand in hand.”
                    </em>
                  </blockquote>
                  <p className="blockquote-footer mt-2">NexGen Team</p>
                </div>
              </div>
            </div>
            <p className="text-center mt-3 px-md-5" data-aos="fade">
              We’re a modern web agency helping businesses transform digitally
              with intuitive, scalable, and visually compelling web solutions
              tailored for growth.
            </p>

            {/* Timeline */}
            <div className="timeline">
              <div className="timeline-item left" data-aos="fade-right">
                <div className="content">
                  <h5>💡 Idea Born</h5>
                  <p>
                    The vision of creating a digital-first agency was sparked by
                    real-world business needs.
                  </p>
                </div>
              </div>
              <div className="timeline-item right" data-aos="fade-left">
                <div className="content">
                  <h5>🧪 Initial Projects</h5>
                  <p>
                    We began with passion projects to test our tools and refine
                    our skills.
                  </p>
                </div>
              </div>
              <div className="timeline-item left" data-aos="fade-right">
                <div className="content">
                  <h5>🚀 Launch</h5>
                  <p>
                    NexGen Web Designs officially launched with a focus on
                    startups and SMBs.
                  </p>
                </div>
              </div>
              <div className="timeline-item right" data-aos="fade-left">
                <div className="content">
                  <h5>🌐 Serving Clients</h5>
                  <p>
                    We’ve successfully delivered websites and apps for a range
                    of industries across India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Background Shapes */}
          <div className="bg-shape-1"></div>
          <div className="bg-shape-2"></div>
        </section>

        {/* Our Achevements Section */}
        <AcheivementsCount />

        {/* Mission Section */}
        <section style={{ padding: "50px 0" }}>
          <div className="text-center mb-5">
            <h2 className="section-heading mb-4">Our Mission</h2>
            <p className="">
              Empowering companies with innovative digital solutions and great
              service.
            </p>
          </div>
          <div className="d-flex justify-content-around flex-wrap gap-2">
            {missionData.map((mission, index) => (
              <div key={index} data-aos="zoom-in">
                <div className="card border-0 shadow our-mission-card">
                  <img
                    src={mission.imgSrc}
                    className="mission-image"
                    alt={mission.altText}
                    style={{ width: "50%" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{mission.title}</h5>
                    <p className="card-text">{mission.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vision Section */}
        <section className="text-center py-5">
          <div className="text-center mb-4">
            <h2 className="mb-4 section-heading">Our Vision</h2>
            <p className="">
              To be a leading digital solutions provider, empowering businesses
              through innovative technology and service.
            </p>
          </div>
          <div className="row" style={{ margin: "0" }}>
            {visionDetails.map((detail) => (
              <div key={detail.id} className="col-md-4" data-aos="zoom-in">
                <div className="icon-circle mb-3">
                  <i className={detail.icon}></i>
                </div>
                <h5>{detail.title}</h5>
                <p>{detail.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Goals Section */}
        <section
          className="text-white py-5 text-center"
          style={{ backgroundColor: "#FFBC42" }}
        >
          <h2 className="mb-4 section-heading text-white">Our Goals</h2>
          <div className="row" style={{ margin: "0" }}>
            {goals.map((goal, index) => (
              <div className="col-md-4 mb-4" key={index} data-aos="zoom-in">
                <div className="p-4 border rounded shadow bg-white text-dark">
                  <img src={goal.icon} width={"20%"} alt={goal.title} />
                  <h5>{goal.title}</h5>
                  <p>{goal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Client Testimonials Section */}
        <Testimonials />

        {/* Call to Action Section */}
        <section
          className="text-center text-white py-5 position-relative"
          style={{ width: "100%", backgroundColor: "#33658A" }}
        >
          <h2 className="section-heading mb-4 text-white">
            Join Us on Our Journey
          </h2>
          <p>
            Let us work together to build something extraordinary. Contact us
            immediately!
          </p>
          <Link to={`tel:${phoneNumber}`} className="btn btn-light">
            <i className="fa-solid fa-phone"></i> Get in Touch
          </Link>
          <div className="shapes">
            <div className="shape-circle position-absolute"></div>
          </div>
        </section>

        <section className="d-flex align-items-center justify-content-around flex-wrap text-center gap-4">
          {contactInfo.map((each, index) => {
            return (
              <div className="email-container" key={index} data-aos="zoom-in">
                <div className="email-design-container"></div>
                <img
                  src={each.icon}
                  width={"15%"}
                  alt={each.title}
                  className="mb-2"
                />
                <h4>{each.title}</h4>
                <p>{each.detail}</p>
                <Link className={`btn ${each.btnBtn}`} to={each.btnLink}>
                  {each.btnText} <i className="fa-solid fa-paper-plane"></i>
                </Link>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default AboutUs;
