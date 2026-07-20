import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Portfolio.css";
import { whatsappLink1 } from "../../Data/BrandData";
// import axios from "axios";
import { useAppData } from "../../Data/BackEnd Data/FetchBackEndData";
import {
  sampleCategories,
  // categories,
  sampleProjects,
  technologies,
  // testimonials,
  whyChooseItems,
} from "../../Data/Page Data/PortfolioPageData";
import PremiumTestimonials from "../../Components/Testimonial Card/Testimonial";
import { PortfolioPageSEO } from "../../Data/AllPageSEOs";

const Portfolio = () => {
  // const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  // const [activeCategory, setActiveCategory] = useState("All");

  const [sampleCategory, setSampleCategory] = useState("All");

  const filteredSamples =
    sampleCategory === "All"
      ? sampleProjects
      : sampleProjects.filter((item) => item.category === sampleCategory);

  const { websiteData, loading } = useAppData();
  let counters = {};
  // let projects = [];
  let filteredProjects;
  if (!loading) {
    counters = websiteData.counters;
    // projects = websiteData.projects;
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
      {/*====================================================
                    HERO SECTION
      =====================================================*/}
      {PortfolioPageSEO}
      <section className="nxPortfolioHero">
        {/* Background Elements */}

        <div className="nxPortfolioHero__grid"></div>

        <div className="nxPortfolioHero__blur nxPortfolioHero__blurOne"></div>

        <div className="nxPortfolioHero__blur nxPortfolioHero__blurTwo"></div>

        <div className="nxPortfolioHero__circle circleOne"></div>

        <div className="nxPortfolioHero__circle circleTwo"></div>

        <div className="nxPortfolioHero__circle circleThree"></div>

        <div className="container">
          <div className="row align-items-center">
            {/*==============================
                    LEFT CONTENT
            ==============================*/}

            <div className="col-lg-6">
              <div className="nxPortfolioHero__content">
                <div className="nxPortfolioHero__badge">
                  <span></span>
                  Creative Portfolio
                </div>

                <h2>
                  Websites That
                  <br />
                  <span>Grow Businesses.</span>
                </h2>

                <p>
                  Every project tells a story. We don't just design beautiful
                  websites — we create digital experiences that increase trust,
                  generate leads and help businesses grow.
                </p>

                <div className="nxPortfolioHero__buttons">
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

                {/*==========================
                        STATS
                ==========================*/}

                <div className="nxPortfolioHero__stats">
                  <div>
                    <h2>
                      {" "}
                      {counters.projectsCount < 10
                        ? `0${counters.projectsCount}`
                        : counters.projectsCount}
                      +
                    </h2>

                    <p>Projects Designed</p>
                  </div>

                  <div>
                    <h2>98%</h2>

                    <p>Happy Clients</p>
                  </div>

                  <div>
                    <h2>
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

            {/*==============================
                    RIGHT SIDE
            ==============================*/}

            <div className="col-lg-6">
              <div className="nxPortfolioHero__visual">
                {/*============================
                        MAIN BROWSER
                ============================*/}

                <div className="nxPortfolioHero__browser">
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

                {/*============================
                        FLOAT CARD 1
                ============================*/}

                <div className="nxPortfolioHero__floatingCard floatingOne">
                  <div className="floatingIcon">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>

                  <h4>SEO Ready</h4>

                  <p>Better Visibility</p>
                </div>

                {/*============================
                        FLOAT CARD 2
                ============================*/}

                <div className="nxPortfolioHero__floatingCard floatingTwo">
                  <div className="floatingIcon">
                    <i className="fa-solid fa-mobile-screen-button"></i>
                  </div>

                  <h4>Responsive</h4>

                  <p>Mobile First</p>
                </div>

                {/*============================
                        FLOAT CARD 3
                ============================*/}

                <div className="nxPortfolioHero__floatingCard floatingThree">
                  <div className="floatingIcon">
                    <i className="fa-solid fa-bolt"></i>
                  </div>

                  <h4>Fast Loading</h4>

                  <p>Optimized Speed</p>
                </div>

                <div className="nxPortfolioHero__stamp">
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
            <span>FEATURED PROJECT</span>

            <h2>
              A Website That
              <br />
              Speaks For Our Work
            </h2>

            <p>
              Every successful business deserves an exceptional online presence.
              Here's one of our featured projects built with modern
              technologies, premium UI and performance-first development.
            </p>
          </div>

          <div className="row align-items-center gy-5">
            {/*=========================
            LEFT SIDE
      =========================*/}

            <div className="col-lg-7">
              <div className="nxPortfolioSpotlight__preview">
                <img
                  src={require("./../../Assets/joypictures.png")}
                  alt="Featured Project"
                />

                <div className="nxPortfolioSpotlight__badge">
                  <i className="fa-solid fa-award"></i>
                  Featured Project
                </div>

                <div className="nxPortfolioSpotlight__floating">
                  <i className="fa-solid fa-circle-check"></i>
                  Fully Responsive
                </div>
              </div>
            </div>

            {/*=========================
            RIGHT SIDE
      =========================*/}

            <div className="col-lg-5">
              <div className="nxPortfolioSpotlight__content">
                <span className="nxPortfolioSpotlight__category">
                  Photography Website
                </span>

                <h3>Joypictures Studio</h3>

                <p>
                  A premium church website designed with React, Bootstrap and
                  modern UI principles. Optimized for performance, SEO and all
                  screen sizes.
                </p>

                <div className="nxPortfolioSpotlight__tech">
                  <span>React JS</span>

                  <span>Bootstrap</span>

                  <span>Responsive</span>

                  <span>SEO</span>

                  <span>WhatsApp</span>

                  <span>Hosting</span>
                </div>

                <div className="nxPortfolioSpotlight__stats">
                  <div>
                    <h4>98</h4>

                    <small>Performance</small>
                  </div>

                  <div>
                    <h4>100%</h4>

                    <small>Responsive</small>
                  </div>

                  <div>
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
            <span>LIVE PROJECTS</span>

            <h2>
              Websites We've
              <br />
              Successfully Delivered
            </h2>

            <p>
              Explore our latest live projects developed for businesses across
              multiple industries.
            </p>
          </div>

          <div className="nxPortfolioLive__topBar">
            {/* Search */}

            <div className="nxPortfolioLive__search">
              <i className="fa-solid fa-magnifying-glass"></i>

              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Filter */}

            {/* <div className="nxPortfolioLive__filters">
              {categories.map((item) => (
                <button
                  key={item}
                  className={activeCategory === item ? "activeFilter" : ""}
                  onClick={() => setActiveCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div> */}
          </div>

          {/*==============================
            PROJECT COUNT
    ==============================*/}

          <div className="nxPortfolioLive__count">
            Showing
            <strong>{!loading && filteredProjects.length}</strong>
            Projects
          </div>

          {/*==============================
            LOADING
    ==============================*/}

          {loading && (
            <div className="nxPortfolioLive__loading">Loading Projects...</div>
          )}

          {/*==============================
            ERROR
    ==============================*/}

          {/* {error && <div className="nxPortfolioLive__error">{error}</div>} */}

          <div className="row g-4">
            {!loading &&
              filteredProjects.map((project) => (
                <div className="col-lg-4 col-md-6" key={project._id}>
                  <div className="nxPortfolioLive__card">
                    {/* IMAGE */}

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

                    {/* BODY */}

                    <div className="nxPortfolioLive__body">
                      <span>{project.category}</span>

                      <h3>{project.projectName}</h3>

                      <p>{project.projectDescription}</p>

                      {/* TECHNOLOGY */}

                      {/* <div className="nxPortfolioLive__technology">
                        {project.technology.map((tech, index) => (
                          <small key={index}>{tech}</small>
                        ))}
                      </div> */}

                      {/* FOOTER */}

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
      {/*====================================================
                DEVELOPMENT PROCESS
=====================================================*/}

      <section className="nxPortfolioProcess">
        <div className="container">
          {/*==========================
            Heading
    ==========================*/}

          <div className="nxPortfolioProcess__heading">
            <span>OUR PROCESS</span>

            <h2>
              From Idea To
              <br />
              Successful Website
            </h2>

            <p>
              Every project follows a proven workflow that ensures beautiful
              design, fast performance and a successful launch.
            </p>
          </div>

          {/*==========================
            Timeline
    ==========================*/}

          <div className="nxPortfolioProcess__wrapper">
            {/* STEP 1 */}

            <div className="nxPortfolioProcess__card">
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

            {/* STEP 2 */}

            <div className="nxPortfolioProcess__card">
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

            {/* STEP 3 */}

            <div className="nxPortfolioProcess__card">
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

            {/* STEP 4 */}

            <div className="nxPortfolioProcess__card">
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
      {/*====================================================
                SAMPLE WEBSITE CONCEPTS
=====================================================*/}

      <section className="nxPortfolioConcepts">
        <div className="container">
          {/*==============================
            SECTION HEADING
    ==============================*/}

          <div className="nxPortfolioConcepts__heading">
            <span>DESIGN CONCEPTS</span>

            <h2>
              Creative Website
              <br />
              Design Collection
            </h2>

            <p>
              These are premium UI concepts created by our designers. Every
              design can be customized for your business.
            </p>
          </div>

          {/*==============================
            CATEGORY FILTERS
    ==============================*/}

          <div className="nxPortfolioConcepts__filters">
            {sampleCategories.map((item) => (
              <button
                key={item}
                className={sampleCategory === item ? "activeConcept" : ""}
                onClick={() => setSampleCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {/*==============================
            GRID
    ==============================*/}
          <div className="nxPortfolioLive__count">
            Showing
            <strong>{filteredSamples.length}</strong>
            Sample Projects
          </div>

          <div className="row g-4">
            {filteredSamples.map((project) => (
              <div className="col-lg-4 col-md-6" key={project.id}>
                <div className="nxPortfolioConcepts__card">
                  {/* IMAGE */}

                  <div className="nxPortfolioConcepts__image">
                    <img src={project.image} alt={project.title} />

                    <div className="nxPortfolioConcepts__overlay">
                      <Link to={project.liveLink}>Preview Design</Link>
                    </div>
                  </div>

                  {/* BODY */}

                  <div className="nxPortfolioConcepts__body">
                    <span>{project.category}</span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    {/* Technology */}

                    <div className="nxPortfolioConcepts__tech">
                      {project.technologiesUsed.map((item, index) => (
                        <small key={index}>{item}</small>
                      ))}
                    </div>

                    {/* Footer */}
                  </div>
                  <div className="nxPortfolioConcepts__footer">
                    <Link to={"/contact"}>Request Similar Design</Link>
                    {/* <Link to={"/portfolio"}>Read More</Link> */}
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

      {/*====================================================
                TECHNOLOGY STACK
=====================================================*/}

      <section className="nxPortfolioTech">
        <div className="container">
          {/*==============================
                HEADING
        ==============================*/}

          <div className="nxPortfolioTech__heading">
            <span>OUR TECH STACK</span>

            <h2>
              Modern Technologies
              <br />
              That Power Every Project
            </h2>

            <p>
              We build fast, scalable, secure and SEO-friendly websites using
              the latest web technologies.
            </p>
          </div>

          {/*==============================
                CONTENT
        ==============================*/}

          <div className="nxPortfolioTech__wrapper">
            {/*==========================
                    CENTER
            ==========================*/}

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

            {/*==========================
                    TECHNOLOGIES
            ==========================*/}

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
      {/*====================================================
                WHY CHOOSE NEXGEN
=====================================================*/}

      <section className="nxPortfolioWhy">
        <div className="container">
          {/*=========================
                Heading
        =========================*/}

          <div className="nxPortfolioWhy__heading">
            <span>WHY CHOOSE US</span>

            <h2>
              More Than A Website
              <br />
              We Build Your Online Growth
            </h2>

            <p>
              Every website we create is designed to attract customers, improve
              trust, increase conversions and help your business grow faster.
            </p>
          </div>

          {/*=========================
                Features
        =========================*/}

          <div className="row g-4">
            {whyChooseItems.map((item) => (
              <div className="col-xl-4 col-md-6" key={item.id}>
                <div className="nxPortfolioWhy__card">
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

      <section className="nxPortfolioCTA">
        <div className="container">
          <div className="nxPortfolioCTA__wrapper">
            {/* Floating Decorations */}

            <span className="nxPortfolioCTA__shape shapeOne"></span>
            <span className="nxPortfolioCTA__shape shapeTwo"></span>
            <span className="nxPortfolioCTA__shape shapeThree"></span>

            {/* Content */}

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

              {/* Trust */}

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

              {/* Buttons */}

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
