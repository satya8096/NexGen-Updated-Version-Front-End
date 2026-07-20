import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  clientProjects,
  experienceData,
  featuresData,
  processSteps,
  projectTimelines,
  services,
  technologies,
} from "./../Data/Page Data/PortfolioPageData";
import { phoneNumber, serverUrl } from "../Data/BrandData";
import { PortfolioPageSEO } from "../Data/AllPageSEOs";
import axios from "axios";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchingProjects();
  }, []);

  const fetchingProjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${serverUrl}/public/projects`);

      if (response.data.status === "Success") {
        setError("");
        setLoading(false);
        setProjects(response.data.data);
      }
    } catch (error) {
      setError("Failed to load projects. Please try again later.");
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
      {PortfolioPageSEO}
      {/* Main Intro */}
      <div className="portfolio-main-cotainer-img d-flex align-items-center justify-content-center flex-column">
        <h3 className="text-center text-warning">Our Creative Works</h3>
        <p className="text-center text-white">
          " Creating websites that are as distinct as your business, with an
          emphasis on long-term success and growth. "
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
              Portfolio
            </li>
          </ol>
        </nav>
      </div>

      <section id="projects" className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold section-heading">🚀 Projects We've Built</h2>
          <p className="text-muted">
            Crafted with precision, tailored for impact — a few of our proud
            works.
          </p>
        </div>

        {!loading && projects.length > 0 && (
          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div
                  className="project-pro-card"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="project-pro-image-wrapper">
                    <img
                      src={
                        project.projectImg
                          ? project.projectImg.url
                          : "https://res.cloudinary.com/daelyy9vj/image/upload/v1769625305/dummy-image_d7hw26.jpg"
                      }
                      alt={project.projectName}
                      className="img-fluid"
                    />
                    <div className="project-pro-overlay">
                      <h5>{project.projectName}</h5>
                      <p>{project.projectDescription}</p>
                      <a
                        href={project.projectURL}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-warning btn-sm"
                      >
                        <i className="fa-solid fa-eye"></i> View Live
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {loading && (
          <div className="text-center">
            <div
              className="spinner-border text-secondary mb-3"
              role="status"
            ></div>
            <p>Projects loading....</p>
          </div>
        )}

        {!loading && error && (
          <div className="alert alert-danger text-center">{error}</div>
        )}

        {!loading && !error && projects.length === 0 && (
          <div className="alert alert-warning text-center">
            No projects available at the moment.
          </div>
        )}
      </section>

      {/* Projects Section */}
      <section className="client-projects">
        <h2 className="section-heading mt-3" id="client-projects-heading">
          Sample Projects
        </h2>
        <p className="text-center p-2">
          Explore our portfolio of cutting-edge web designs, where creativity
          meets functionality, delivering exceptional results for businesses of
          all sizes.
        </p>
        <div className="project-grid">
          {clientProjects.map((project, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={`${(index + 1) * 50}`}
              key={index}
            >
              <div key={project.id} className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-info">
                  <h5 className="mt-1">{project.title}</h5>
                  <p>{project.description}</p>
                  <Link
                    to={`/portfolio/${project.id}`}
                    className={`btn ${project.buttonClass}`}
                  >
                    {project.buttonLabel}{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Technologies Section */}
      <section className="technologies-used-section">
        <h2 className="section-heading">Technologies We Use</h2>
        <div className="tech-items-wrapper">
          {technologies.map((tech, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={`${(index + 1) * 50}`}
              key={index}
            >
              {" "}
              <div
                key={tech.id}
                className={`tech-item ${tech.name
                  .toLowerCase()
                  .replace(".", "")}-tech`}
              >
                <i
                  className={`${tech.icon} tech-icon`}
                  style={{ color: `${tech.color}` }}
                ></i>
                <h5 className="tech-title">{tech.name}</h5>
                <p>{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Services Section */}
      <section className="services-offered-section">
        <h2 className="section-heading">Services Offered</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={`${(index + 1) * 100}`}
              key={index}
            >
              {" "}
              <div
                key={service.id}
                className={`service-card service-shape${service.id}`}
              >
                <i className={`${service.icon} service-icon`}></i>
                <h5>{service.title}</h5>
                <p>{service.description}</p>
                <Link
                  to={"/services"}
                  className={`btn ${service.buttonClass} service-btn`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Experience Section */}
      <section className="industry-experience-section">
        <h2 className="section-heading">Industry Experience</h2>
        <div className="experience-grid">
          {experienceData.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={`${(index + 1) * 100}`}
              key={index}
            >
              <div className={`experience-item ${item.colorCode}`}>
                <div className="service-icon">
                  <i className={`${item.icon} experience-icon`}></i>
                </div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project TimeLine Section */}
      <section className="project-timelines pb-3">
        <h2 className="section-heading">Project Timelines</h2>
        <div className="timeline-grid">
          {projectTimelines.map((project, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={`${(index + 1) * 100}`}
              key={project.id}
            >
              <div
                className={`timeline-card ${project.title
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                <div className="icon-container">
                  <img src={project.icon} alt={project.title} width={"30%"} />
                </div>
                <h5>{project.title}</h5>
                <p>{project.duration}</p>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Features Section */}
      <section className="dynamic-features">
        <h2 className="section-heading">Dynamic Features</h2>
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={`${(index + 1) * 100}`}
              key={index}
            >
              <div className="feature-card bg-white">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="feature-image"
                />
                <div className="feature-content">
                  <i className={feature.icon}></i>
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Proceess Overview Section */}
      <section className="process-overview">
        <h2 className="section-heading">Process Overview</h2>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={`${(index + 1) * 100}`}
              key={index}
            >
              <div className="process-card bg-white">
                <div className="process-icon">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="process-image"
                  />
                </div>
                <h5>{step.title}</h5>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Lets Connect */}
      <section
        className="text-center py-5 text-white"
        style={{ backgroundColor: "#592E83" }}
      >
        <div className="container">
          <h2 className=" fw-bold section-heading text-white mb-4">
            Let's Connect
          </h2>
          <p className="lead mb-4">
            Ready to make your thoughts a reality? Contact us for unique web
            creation.
          </p>
          <Link
            className="btn btn-light btn-lg rounded-pill px-5 py-2"
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#ffd700")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
            to={`tel:${phoneNumber}`}
          >
            <i className="fa-solid fa-phone pe-2"></i> Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
