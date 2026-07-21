import React from "react";
import { Link } from "react-router-dom";
import "./Careers.css";
import {
  jobs,
  benefits,
  cultureHighlights,
  departments,
  employeeStories,
  hiringSteps,
  whyJoinCards,
} from "../../Data/Page Data/CareersPageData";
import { useAppData } from "../../Data/BackEnd Data/FetchBackEndData";
import { CareersPageSEO } from "../../Data/AllPageSEOs";

const Careers = () => {
  const [activeDepartment, setActiveDepartment] = React.useState("All");
  const { websiteData, loading } = useAppData();
  let counters = {};
  if (!loading) {
    counters = websiteData.counters;
  }

  const [application, setApplication] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    message: "",
  });
  const filteredJobs =
    activeDepartment === "All"
      ? jobs
      : jobs.filter((job) => job.department === activeDepartment);

  const handleChange = (e) => {
    setApplication({
      ...application,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Present we are not accepting applications !");
    setApplication({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      portfolio: "",
      message: "",
    });
  };
  return (
    <>
      {CareersPageSEO}
      <section className="careers-hero">
        <div className="container">
          <div className="careers-grid">
            <div className="careers-left">
              <div className="career-badge" data-aos="fade-up">
                <span className="badge-dot"></span>
                We're Growing • Join Our Team
              </div>

              <h2 data-aos="fade-up">
                Build The Future
                <span>With NexGen</span>
              </h2>

              <p data-aos="fade-up">
                We're looking for passionate designers, developers and creative
                thinkers who want to create world-class digital experiences.
                Work on exciting projects. Learn continuously. Grow your career
                with us.
              </p>

              <div className="career-buttons" data-aos="fade-up">
                <Link to="/contact" className="career-primary-btn">
                  Apply Now
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>

                <Link to="/about" className="career-secondary-btn">
                  Life At NexGen
                </Link>
              </div>

              <div className="career-stats">
                <div data-aos="zoom-in">
                  <h2>
                    {" "}
                    {counters.projectsCount < 10
                      ? `0${counters.projectsCount}`
                      : counters.projectsCount}
                    +
                  </h2>

                  <span>Projects Completed</span>
                </div>

                <div data-aos="zoom-in">
                  <h2>98%</h2>

                  <span>Client Satisfaction</span>
                </div>

                <div data-aos="zoom-in">
                  <h2>0+</h2>

                  <span>Open Positions</span>
                </div>
              </div>
            </div>

            <div className="careers-right" data-aos="fade-left">
              <div className="gradient-circle one"></div>

              <div className="gradient-circle two"></div>

              <div className="gradient-circle three"></div>

              <div className="career-main-card">
                <div className="career-card-header">
                  <div>
                    <h4>Hiring Dashboard</h4>

                    <p>Updated Today</p>
                  </div>

                  <span>LIVE</span>
                </div>
                <p className="text-danger">
                  Thank you for your interest in becoming part of our journey.
                  Currently, we don't have any active job openings. We encourage
                  you to visit this page again in the future as new
                  opportunities become available.
                </p>
                <div className="career-footer-card">
                  <div>
                    <h3>Hiring This Month</h3>

                    <h2>0 Positions</h2>
                  </div>

                  <div className="career-progress">
                    <div className="career-progress-fill"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="career-scroll">
          <span>Scroll</span>

          <div></div>
        </div>
      </section>

      <section className="career-values">
        <div className="container">
          <div className="career-values-grid">
            <div className="career-values-content">
              <span data-aos="fade-up">WHY JOIN US</span>

              <h2 data-aos="fade-up">
                Build More Than Websites.
                <br />
                Build Your Career.
              </h2>

              <p data-aos="fade-up">
                At NexGen Web Designs, every project is an opportunity to learn,
                innovate and make an impact. We believe talented people deserve
                an environment where creativity, technology and personal growth
                come together.
              </p>

              <div className="career-value-highlight" data-aos="fade-up">
                <div className="highlight-icon">
                  <i className="fa-solid fa-star"></i>
                </div>

                <div>
                  <h4>People First Culture</h4>

                  <p>
                    We invest in people before projects. Your growth directly
                    contributes to our success.
                  </p>
                </div>
              </div>
            </div>

            <div className="career-values-cards">
              {whyJoinCards.map((item, index) => (
                <div
                  className="career-value-card"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={`${index * 200}`}
                >
                  <div className="career-value-icon">
                    <i className={item.icon}></i>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="career-culture">
        <div className="container">
          <div className="career-culture-grid">
            <div className="career-culture-content">
              <span data-aos="fade-up">LIFE AT NEXGEN</span>

              <h2 data-aos="fade-up">
                We Don't Just Build Websites.
                <br />
                We Build Careers.
              </h2>

              <p data-aos="fade-up">
                At NexGen Web Designs, we believe great digital experiences are
                created by passionate people. Our workplace encourages
                curiosity, collaboration, innovation and continuous improvement.
              </p>

              <p data-aos="fade-up">
                Whether you're designing beautiful interfaces, developing
                scalable applications or helping clients grow online, every
                contribution makes a real impact.
              </p>

              <div className="culture-highlight-list">
                {cultureHighlights.map((item, index) => (
                  <div
                    className="culture-highlight-item"
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                  >
                    <div className="culture-highlight-icon">
                      <i className={item.icon}></i>
                    </div>

                    <div>
                      <h4>{item.title}</h4>

                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="career-culture-gallery">
              <div className="gallery-large" data-aos="zoom-in">
                <img
                  src={require("./../../Assets/colleagues-working-project-discussing-details.jpg")}
                  alt="Team Working"
                />
              </div>

              <div className="gallery-small gallery-top" data-aos="zoom-in">
                <img
                  src={require("./../../Assets/three-dark-skinned-guy-chatting-laptop-sitting-sideways-desk-studio-black-background_613910-20785.jpg")}
                  alt="Meeting"
                />
              </div>

              <div className="gallery-small gallery-bottom" data-aos="zoom-in">
                <img
                  src={require("./../../Assets/NexGen_Web_Designs_Finla_Light_Logo_With_Background.png")}
                  alt="Design"
                />
              </div>

              <div className="floating-achievement" data-aos="zoom-in">
                <i className="fa-solid fa-award"></i>

                <div>
                  <strong>Creative Team</strong>

                  <span>Learn • Build • Grow</span>
                </div>
              </div>

              <div className="floating-years" data-aos="zoom-in">
                <h3>
                  {" "}
                  {counters.projectsCount < 10
                    ? `0${counters.projectsCount}`
                    : counters.projectsCount}
                  +
                </h3>

                <span>Successful Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="career-jobs">
        <div className="container">
          <div className="careers-section-heading">
            <span data-aos="fade-up">OPEN POSITIONS</span>

            <h2 data-aos="fade-up">Find Your Perfect Role</h2>

            <p data-aos="fade-up">
              Explore opportunities where your creativity, technical skills and
              passion can make a real difference.
            </p>
          </div>

          <div className="career-filter">
            {departments.map((item, index) => (
              <button
                key={index}
                className={
                  activeDepartment === item
                    ? "career-filter-btn active"
                    : "career-filter-btn"
                }
                onClick={() => setActiveDepartment(item)}
                data-aos="zoom-in"
                data-aos-delay={`${index * 200}`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="career-job-grid">
            {filteredJobs.map((job, index) => (
              <div
                className="career-opening-card"
                key={job.id}
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
              >
                {job.featured && <span className="featured-job">Featured</span>}

                <div className="opening-icon">
                  <i className={job.icon}></i>
                </div>

                <h3>{job.title}</h3>

                <div className="opening-meta">
                  <span>
                    <i className="fa-solid fa-layer-group"></i>

                    {job.department}
                  </span>

                  <span>
                    <i className="fa-solid fa-clock"></i>

                    {job.type}
                  </span>

                  <span>
                    <i className="fa-solid fa-user"></i>

                    {job.experience}
                  </span>

                  <span>
                    <i className="fa-solid fa-location-dot"></i>

                    {job.location}
                  </span>
                </div>

                <div className="opening-salary">{job.salary}</div>

                <Link className="career-apply-btn">
                  Coming Very Soon...
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="career-process">
        <div className="container">
          <div className="career-process-section-heading">
            <span data-aos="fade-up">HIRING PROCESS</span>

            <h2 data-aos="fade-up">Your Journey Starts Here</h2>

            <p data-aos="fade-up">
              We've designed a transparent hiring process that focuses on your
              skills, creativity and potential. Here's what you can expect after
              applying.
            </p>
          </div>

          <div className="career-process-wrapper">
            <div className="process-line"></div>

            {hiringSteps.map((item, index) => (
              <div
                className={`process-item ${index % 2 === 0 ? "left" : "right"}`}
                key={index}
                data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
              >
                <div className="process-circle">{item.step}</div>

                <div className="process-content">
                  <div className="process-icon">
                    <i className={item.icon}></i>
                  </div>

                  <span>{item.duration}</span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="career-benefits">
        <div className="container">
          <div className="career-benefits-grid">
            <div className="career-benefits-content">
              <span data-aos="fade-up">BENEFITS & PERKS</span>

              <h2 data-aos="fade-up">
                Everything You Need To Build An Amazing Career.
              </h2>

              <p data-aos="fade-up">
                At NexGen Web Designs, we believe that exceptional people
                deserve an exceptional workplace. Our focus is on helping every
                team member learn faster, innovate confidently and enjoy
                meaningful work.
              </p>

              <div className="benefit-feature-card" data-aos="fade-up">
                <div className="benefit-feature-icon">
                  <i className="fa-solid fa-star"></i>
                </div>

                <div>
                  <h4>People First Culture</h4>

                  <p>
                    We prioritize learning, collaboration, respect and
                    continuous improvement over unnecessary hierarchy.
                  </p>
                </div>
              </div>
            </div>

            <div className="career-benefits-cards">
              {benefits.map((item, index) => (
                <div
                  className={`benefit-card benefit-${index + 1}`}
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 200}
                >
                  <div className="benefit-icon">
                    <i className={item.icon}></i>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="career-testimonials">
        <div className="container">
          <div className="career-section-heading">
            <span data-aos="fade-up">EMPLOYEE STORIES</span>

            <h2 data-aos="fade-up">Hear From Our Team</h2>

            <p data-aos="fade-up">
              Every great company is built by great people. Here's what our team
              members say about working at NexGen Web Designs.
            </p>
          </div>

          <div className="career-testimonial-grid">
            <div className="featured-story" data-aos="zoom-in">
              <img
                src={employeeStories[0].image}
                alt={employeeStories[0].name}
              />

              <div className="story-stars">
                {[...Array(employeeStories[0].rating)].map((_, index) => (
                  <i key={index} className="fa-solid fa-star"></i>
                ))}
              </div>

              <p>{employeeStories[0].quote}</p>

              <h3>{employeeStories[0].name}</h3>

              <span>{employeeStories[0].role}</span>
            </div>

            <div className="story-side">
              {employeeStories.slice(1).map((item, index) => (
                <div
                  className="story-card"
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="story-header">
                    <img src={item.image} alt={item.name} />

                    <div>
                      <h4>{item.name}</h4>

                      <span>{item.role}</span>
                    </div>
                  </div>

                  <div className="story-stars">
                    {[...Array(item.rating)].map((_, index) => (
                      <i key={index} className="fa-solid fa-star"></i>
                    ))}
                  </div>

                  <p>{item.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="career-apply-section">
        <div className="container">
          <div className="career-apply-grid">
            <div className="career-apply-content">
              <span data-aos="fade-up">JOIN OUR TEAM</span>

              <h2 data-aos="fade-up">
                Ready To Build Something Amazing With Us?
              </h2>

              <p data-aos="fade-up">
                Whether you're an experienced professional, a creative designer,
                or just starting your career, we'd love to hear from you. Become
                part of a team that values innovation, collaboration and
                continuous learning.
              </p>

              <div className="career-points">
                <div data-aos="fade-up">
                  <i className="fa-solid fa-circle-check"></i>

                  <span>Real Client Projects</span>
                </div>

                <div data-aos="fade-up">
                  <i className="fa-solid fa-circle-check"></i>

                  <span>Career Growth</span>
                </div>

                <div data-aos="fade-up">
                  <i className="fa-solid fa-circle-check"></i>

                  <span>Flexible Work Culture</span>
                </div>

                <div data-aos="fade-up">
                  <i className="fa-solid fa-circle-check"></i>

                  <span>Supportive Team</span>
                </div>
              </div>
            </div>

            <div className="career-form-card" data-aos="fade-up">
              <p className="text-danger mb-3">
                Note: Present we are not accepting applications !
              </p>
              <form onSubmit={handleSubmit}>
                <div className="career-form-grid">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    value={application.fullName}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={application.email}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={application.phone}
                    onChange={handleChange}
                    required
                  />

                  <select
                    name="position"
                    value={application.position}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Position</option>

                    <option>React Developer</option>

                    <option>UI/UX Designer</option>

                    <option>Frontend Developer</option>

                    <option>Digital Marketing</option>

                    <option>Internship</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Experience"
                    name="experience"
                    value={application.experience}
                    onChange={handleChange}
                  />

                  <input
                    type="url"
                    placeholder="Portfolio / LinkedIn"
                    name="portfolio"
                    value={application.portfolio}
                    onChange={handleChange}
                  />

                  <textarea
                    rows="6"
                    placeholder="Tell us about yourself..."
                    name="message"
                    value={application.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="career-submit-btn">
                  Submit Application
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="career-community">
        <div className="container">
          <div className="career-community-card" data-aos="fade-up">
            <div className="career-community-bg"></div>

            <span>STAY CONNECTED</span>

            <h2>Can't Find The Right Opportunity Today?</h2>

            <p>
              We're always looking for talented designers, developers, marketers
              and creative thinkers. Join our talent community and we'll let you
              know when a suitable opportunity becomes available.
            </p>

            <div className="career-community-buttons">
              <Link to="/contact" className="community-primary-btn">
                Join Talent Community
                <i className="fa-solid fa-arrow-right"></i>
              </Link>

              <Link to="/support" className="community-secondary-btn">
                Contact Recruitment
              </Link>
            </div>

            <div className="career-community-stats">
              <div>
                <h3>
                  {counters.projectsCount < 10
                    ? `0${counters.projectsCount}`
                    : counters.projectsCount}
                  +
                </h3>

                <span>Projects Delivered</span>
              </div>

              <div>
                <h3>100%</h3>

                <span>Growth Mindset</span>
              </div>

              <div>
                <h3>24/7</h3>

                <span>Team Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
