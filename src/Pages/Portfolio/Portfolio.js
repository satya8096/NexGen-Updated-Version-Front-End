import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Portfolio.css";
import { whatsappLink1 } from "../../Data/BrandData";
import { useAppData } from "../../Data/BackEnd Data/FetchBackEndData";
import {
  sampleCategories,
  sampleProjects,
  technologies,
  whyChooseItems,
} from "../../Data/Page Data/PortfolioPageData";
import PremiumTestimonials from "../../Components/Testimonial Card/Testimonial";
import { PortfolioPageSEO } from "../../Data/AllPageSEOs";

const Portfolio = () => {

  const [search, setSearch] = useState("");

  const [sampleCategory, setSampleCategory] = useState("All");

  const filteredSamples =
    sampleCategory === "All"
      ? sampleProjects
      : sampleProjects.filter((item) => item.category === sampleCategory);

  const { websiteData, loading } = useAppData();
  let counters = {};
  let filteredProjects;
  if (!loading) {
    counters = websiteData.counters;
    filteredProjects = websiteData.projects.filter((project) => {
      const matchesSearch = project.projectName

        .toLowerCase()

        .includes(search.toLowerCase());

      return matchesSearch;
    });
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {PortfolioPageSEO}
      <section className="nxPortfolioHero">
        <div className="nxPortfolioHero__grid"></div>

        <div className="nxPortfolioHero__blur nxPortfolioHero__blurOne"></div>

        <div className="nxPortfolioHero__blur nxPortfolioHero__blurTwo"></div>

        <div className="nxPortfolioHero__circle circleOne"></div>

        <div className="nxPortfolioHero__circle circleTwo"></div>

        <div className="nxPortfolioHero__circle circleThree"></div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="nxPortfolioHero__content">
                <div className="nxPortfolioHero__badge" data-aos="fade-up">
                  <span></span>
                  Creative Portfolio
                </div>

                <h2 data-aos="fade-up">
                  Websites That
                  <br />
                  <span>Grow Businesses.</span>
                </h2>

                <p data-aos="fade-up">
                  Every project tells a story. We don't just design beautiful
                  websites — we create digital experiences that increase trust,
                  generate leads and help businesses grow.
                </p>

                <div className="nxPortfolioHero__buttons" data-aos="fade-up">
                  <Link to="/contact" className="nxPortfolioHero__primaryBtn">
                    Start Your Project
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>

                  <a
                    href="#liveProjects"
                    className="nxPortfolioHero__secondaryBtn"
                  >
                    View Portfolio
                  </a>
                </div>

                <div className="nxPortfolioHero__stats">
                  <div>
                    <h2 data-aos="zoom-in">
                      {" "}
                      {counters.projectsCount < 10
                        ? `0${counters.projectsCount}`
                        : counters.projectsCount}
                      +
                    </h2>

                    <p>Projects Designed</p>
                  </div>

                  <div data-aos="zoom-in">
                    <h2>98%</h2>

                    <p>Happy Clients</p>
                  </div>

                  <div>
                    <h2 data-aos="zoom-in">
                      {" "}
                      {counters.clientsCount < 10
                        ? `0${counters.clientsCount}`
                        : counters.clientsCount}
                      +
                    </h2>

                    <p>Industries Served</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="nxPortfolioHero__visual">

                <div className="nxPortfolioHero__browser" data-aos="zoom-in">
                  <div className="nxPortfolioHero__browserTop">
                    <div className="browserDots">
                      <span></span>

                      <span></span>

                      <span></span>
                    </div>

                    <div className="browserAddress">
                      https://amruthasalon.com
                    </div>
                  </div>

                  <div className="nxPortfolioHero__browserBody">
                    <img
                      src={require("./../../Assets/Amruthasalon.png")}
                      alt="Portfolio Showcase"
                    />
                  </div>
                </div>

                <div
                  className="nxPortfolioHero__floatingCard floatingOne"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="floatingIcon">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>

                  <h4>SEO Ready</h4>

                  <p>Better Visibility</p>
                </div>

                <div
                  className="nxPortfolioHero__floatingCard floatingTwo"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="floatingIcon">
                    <i className="fa-solid fa-mobile-screen-button"></i>
                  </div>

                  <h4>Responsive</h4>

                  <p>Mobile First</p>
                </div>

                <div
                  className="nxPortfolioHero__floatingCard floatingThree"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="floatingIcon">
                    <i className="fa-solid fa-bolt"></i>
                  </div>

                  <h4>Fast Loading</h4>

                  <p>Optimized Speed</p>
                </div>

                <div className="nxPortfolioHero__stamp" data-aos="fade-up">
                  <div className="agencyStamp">
                    <div className="stampOuter">
                      <span>CREATIVE</span>

                      <span className="text-center">MODERN</span>

                      <span>PREMIUM</span>

                      <span>RESPONSIVE</span>
                    </div>
                    <div className="stampCenter">
                      <img
                        src={require("../../Assets/NexGen_Web_Designs_Finla_Light_Logo_With_Background.png")}
                        alt="NexGen Web Designs"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nxPortfolioHero__scroll">
          <span>Scroll</span>

          <div className="scrollMouse">
            <div className="scrollWheel"></div>
          </div>
        </div>
      </section>

      <section className="nxPortfolioSpotlight">
        <div className="container">
          <div className="nxPortfolioSpotlight__heading">
            <span data-aos="fade-up">FEATURED PROJECT</span>

            <h2 data-aos="fade-up">
              A Website That
              <br />
              Speaks For Our Work
            </h2>

            <p data-aos="fade-up">
              Every successful business deserves an exceptional online presence.
              Here's one of our featured projects built with modern
              technologies, premium UI and performance-first development.
            </p>
          </div>

          <div className="row align-items-center gy-5">
            <div className="col-lg-7">
              <div className="nxPortfolioSpotlight__preview">
                <img
                  src={require("./../../Assets/joypictures.png")}
                  alt="Featured Project"
                  data-aos="fade-right"
                />

                <div
                  className="nxPortfolioSpotlight__badge"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <i className="fa-solid fa-award"></i>
                  Featured Project
                </div>

                <div
                  className="nxPortfolioSpotlight__floating"
                  data-aos-delay="200"
                  data-aos="zoom-in"
                >
                  <i className="fa-solid fa-circle-check"></i>
                  Fully Responsive
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="nxPortfolioSpotlight__content">
                <span
                  className="nxPortfolioSpotlight__category"
                  data-aos="fade-up"
                >
                  Photography Website
                </span>

                <h3 data-aos="fade-up">Joypictures Studio</h3>

                <p data-aos="fade-up">
                  A premium church website designed with React, Bootstrap and
                  modern UI principles. Optimized for performance, SEO and all
                  screen sizes.
                </p>

                <div className="nxPortfolioSpotlight__tech">
                  <span data-aos="zoom-in" data-aos-delay="200">
                    React JS
                  </span>

                  <span data-aos="zoom-in" data-aos-delay="400">
                    Bootstrap
                  </span>

                  <span data-aos="zoom-in" data-aos-delay="600">
                    Responsive
                  </span>

                  <span data-aos="zoom-in" data-aos-delay="800">
                    SEO
                  </span>

                  <span data-aos="zoom-in" data-aos-delay="1000">
                    WhatsApp
                  </span>

                  <span data-aos="zoom-in" data-aos-delay="1200">
                    Hosting
                  </span>
                </div>

                <div className="nxPortfolioSpotlight__stats">
                  <div data-aos="fade-up">
                    <h4>98</h4>

                    <small>Performance</small>
                  </div>

                  <div data-aos="fade-up">
                    <h4>100%</h4>

                    <small>Responsive</small>
                  </div>

                  <div data-aos="fade-up">
                    <h4>SEO</h4>

                    <small>Optimized</small>
                  </div>
                </div>

                <div className="nxPortfolioSpotlight__buttons">
                  <a
                    href="https://joypicturestudios.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="nxPortfolioSpotlight__live"
                  >
                    Visit Website
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>

                  <button className="nxPortfolioSpotlight__case">
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nxPortfolioLive" id="liveProjects">
        <div className="container">
          <div className="nxPortfolioLive__heading">
            <span data-aos="fade-up">LIVE PROJECTS</span>

            <h2 data-aos="fade-up">
              Websites We've
              <br />
              Successfully Delivered
            </h2>

            <p data-aos="fade-up">
              Explore our latest live projects developed for businesses across
              multiple industries.
            </p>
          </div>

          <div className="nxPortfolioLive__topBar">
            <div className="nxPortfolioLive__search" data-aos="fade-up">
              <i className="fa-solid fa-magnifying-glass"></i>

              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="nxPortfolioLive__count" data-aos="fade">
            Showing
            <strong>{!loading && filteredProjects.length}</strong>
            Projects
          </div>

          {loading && (
            <div className="nxPortfolioLive__loading">Loading Projects...</div>
          )}

          <div className="row g-4">
            {!loading &&
              filteredProjects.map((project, index) => (
                <div
                  className="col-lg-4 col-md-6"
                  key={project._id}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="nxPortfolioLive__card">
                    <div className="nxPortfolioLive__image">
                      <img
                        src={
                          project.projectImg
                            ? project.projectImg.url
                            : "https://res.cloudinary.com/daelyy9vj/image/upload/v1769625305/dummy-image_d7hw26.jpg"
                        }
                        alt={project.projectName}
                      />

                      <div className="nxPortfolioLive__overlay">
                        <a
                          href={project.projectURL}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit Website
                          <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                      </div>
                    </div>

                    <div className="nxPortfolioLive__body">
                      <span>{project.category}</span>

                      <h3>{project.projectName}</h3>

                      <p>{project.projectDescription}</p>

                      <div className="nxPortfolioLive__footer">
                        <a
                          href={project.projectURL}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit Live
                        </a>

                        <button>Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="text-center m-5">
          {!loading && filteredProjects.length <= 0 && (
            <p className="text-danger">No projects found</p>
          )}
        </div>
      </section>

      <section className="nxPortfolioProcess">
        <div className="container">
          <div className="nxPortfolioProcess__heading">
            <span data-aos="fade-up">OUR PROCESS</span>

            <h2 data-aos="fade-up">
              From Idea To
              <br />
              Successful Website
            </h2>

            <p data-aos="fade-up">
              Every project follows a proven workflow that ensures beautiful
              design, fast performance and a successful launch.
            </p>
          </div>
          <div className="nxPortfolioProcess__wrapper">
            <div
              className="nxPortfolioProcess__card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="nxPortfolioProcess__number">01</div>

              <div className="nxPortfolioProcess__icon">
                <i className="fa-solid fa-comments"></i>
              </div>

              <h3>Consultation</h3>

              <p>
                Understanding your business, audience, competitors and website
                goals before starting the project.
              </p>
            </div>

            <div
              className="nxPortfolioProcess__card"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="nxPortfolioProcess__number">02</div>

              <div className="nxPortfolioProcess__icon">
                <i className="fa-solid fa-pen-ruler"></i>
              </div>

              <h3>UI / UX Design</h3>

              <p>
                We create modern layouts, wireframes and user experiences
                focused on conversion.
              </p>
            </div>
            <div
              className="nxPortfolioProcess__card"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="nxPortfolioProcess__number">03</div>

              <div className="nxPortfolioProcess__icon">
                <i className="fa-solid fa-code"></i>
              </div>

              <h3>Development</h3>

              <p>
                Responsive development using React, Bootstrap and modern
                technologies with SEO optimization.
              </p>
            </div>

            <div
              className="nxPortfolioProcess__card"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="nxPortfolioProcess__number">04</div>

              <div className="nxPortfolioProcess__icon">
                <i className="fa-solid fa-rocket"></i>
              </div>

              <h3>Launch & Support</h3>

              <p>
                After testing, we launch your website and continue supporting
                your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="nxPortfolioConcepts">
        <div className="container">
          <div className="nxPortfolioConcepts__heading">
            <span data-aos="fade-up">DESIGN CONCEPTS</span>

            <h2 data-aos="fade-up">
              Creative Website
              <br />
              Design Collection
            </h2>

            <p data-aos="fade-up">
              These are premium UI concepts created by our designers. Every
              design can be customized for your business.
            </p>
          </div>

          <div className="nxPortfolioConcepts__filters">
            {sampleCategories.map((item, index) => (
              <button
                key={item}
                className={sampleCategory === item ? "activeConcept" : ""}
                onClick={() => setSampleCategory(item)}
                data-aos="zoom-in"
                data-aos-delay={index * 200}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="nxPortfolioLive__count" data-aos="fade">
            Showing
            <strong>{filteredSamples.length}</strong>
            Sample Projects
          </div>

          <div className="row g-4">
            {filteredSamples.map((project, index) => (
              <div className="col-lg-4 col-md-6" key={project.id}>
                <div
                  className="nxPortfolioConcepts__card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="nxPortfolioConcepts__image">
                    <img src={project.image} alt={project.title} />

                    <div className="nxPortfolioConcepts__overlay">
                      <Link to={project.liveLink}>Preview Design</Link>
                    </div>
                  </div>

                  <div className="nxPortfolioConcepts__body">
                    <span>{project.category}</span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="nxPortfolioConcepts__tech">
                      {project.technologiesUsed.map((item, index) => (
                        <small key={index}>{item}</small>
                      ))}
                    </div>
                  </div>
                  <div className="nxPortfolioConcepts__footer">
                    <Link to={"/contact"}>Request Similar Design</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center m-5">
          {filteredSamples.length <= 0 && (
            <p className="text-danger">No projects found</p>
          )}
        </div>
      </section>

      <section className="nxPortfolioTech">
        <div className="container">
          <div className="nxPortfolioTech__heading">
            <span data-aos="fade-up">OUR TECH STACK</span>

            <h2 data-aos="fade-up">
              Modern Technologies
              <br />
              That Power Every Project
            </h2>

            <p data-aos="fade-up">
              We build fast, scalable, secure and SEO-friendly websites using
              the latest web technologies.
            </p>
          </div>

          <div className="nxPortfolioTech__wrapper">
            <div className="nxPortfolioTech__center">
              <div className="nxPortfolioTech__core">
                <img
                  className="nxPortfolioTech__logo"
                  src={require("../../Assets/NexGen_Web_Designs_Finla_Light_Logo_With_Background.png")}
                  alt="NexGen Web Designs"
                />
                <h3>
                  NexGen
                  <br />
                  Web Designs
                </h3>

                <p>
                  Building modern digital experiences for growing businesses.
                </p>
              </div>
            </div>

            <div className="nxPortfolioTech__items">
              {technologies.map((item) => (
                <div key={item.id} className="nxPortfolioTech__card">
                  <div className="nxPortfolioTech__icon">
                    <i className={item.icon}></i>
                  </div>

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>

                  <div className="nxPortfolioTech__level">
                    <div
                      style={{
                        width: `${item.level}%`,
                      }}
                    ></div>
                  </div>

                  <small>{item.level}% Expertise</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="nxPortfolioWhy">
        <div className="container">
          <div className="nxPortfolioWhy__heading">
            <span data-aos="fade-up">WHY CHOOSE US</span>

            <h2 data-aos="fade-up">
              More Than A Website
              <br />
              We Build Your Online Growth
            </h2>

            <p data-aos="fade-up">
              Every website we create is designed to attract customers, improve
              trust, increase conversions and help your business grow faster.
            </p>
          </div>

          <div className="row g-4">
            {whyChooseItems.map((item, index) => (
              <div className="col-xl-4 col-md-6" key={item.id}>
                <div
                  className="nxPortfolioWhy__card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="nxPortfolioWhy__icon">
                    <i className={item.icon}></i>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="nxPortfolioWhy__arrow">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PremiumTestimonials />

      <section className="nxPortfolioCTA" data-aos="fade-up">
        <div className="container">
          <div className="nxPortfolioCTA__wrapper">
            <span className="nxPortfolioCTA__shape shapeOne"></span>
            <span className="nxPortfolioCTA__shape shapeTwo"></span>
            <span className="nxPortfolioCTA__shape shapeThree"></span>

            <div className="nxPortfolioCTA__content">
              <div className="nxPortfolioCTA__badge">
                <span></span>
                Available For New Projects
              </div>

              <h2>
                Let's Build A Website
                <br />
                Your Customers Will Remember
              </h2>

              <p>
                Whether you're launching a startup, growing your business, or
                building your brand online, NexGen Web Designs is ready to
                create a website that delivers results.
              </p>

              <div className="nxPortfolioCTA__trust">
                <div>
                  <i className="fa-solid fa-circle-check"></i>
                  SEO Ready
                </div>

                <div>
                  <i className="fa-solid fa-circle-check"></i>
                  Mobile Friendly
                </div>

                <div>
                  <i className="fa-solid fa-circle-check"></i>
                  Fast Delivery
                </div>

                <div>
                  <i className="fa-solid fa-circle-check"></i>
                  Secure Hosting
                </div>
              </div>

              <div className="nxPortfolioCTA__buttons">
                <Link to="/contact" className="nxPortfolioCTA__primary">
                  Start Your Project
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>

                <a
                  href={whatsappLink1}
                  target="_blank"
                  rel="noreferrer"
                  className="nxPortfolioCTA__secondary"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
