import React from "react";
import { Link } from "react-router-dom";
import { useAppData } from "../../Data/BackEnd Data/FetchBackEndData";
import "./Services.css";
import { whatsappLink1 } from "../../Data/BrandData";
import {
  featuresGridData,
  industriesData,
  processData,
  servicesData,
  whyChooseData,
} from "../../Data/Page Data/ServicesPageData";
import { ServicesPageSEO } from "../../Data/AllPageSEOs";

const Services = () => {
  const { websiteData, loading } = useAppData();
  let counters = {};
  if (!loading) {
    counters = websiteData.counters;
  }
  return (
    <div>
      {ServicesPageSEO}
      <section className="nxServicesHero">
        <div className="nxServicesHero__bg">
          <span className="nxServicesHero__blob blobOne"></span>

          <span className="nxServicesHero__blob blobTwo"></span>

          <span className="nxServicesHero__grid"></span>

          <span className="nxServicesHero__ring ringOne"></span>

          <span className="nxServicesHero__ring ringTwo"></span>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="nxServicesHero__content">
                <div className="nxServicesHero__badge" data-aos="fade-up">
                  <i className="fa-solid fa-sparkles"></i>
                  Premium Website Development Services
                </div>

                <h1 data-aos="fade-up">
                  We Build
                  <span>High-Converting</span>
                  Websites That Grow Your Business.
                </h1>

                <p data-aos="fade-up">
                  From business websites to e-commerce platforms, NexGen Web
                  Designs creates modern, responsive and SEO-friendly websites
                  that impress visitors and convert them into customers.
                </p>

                <div className="nxServicesHero__buttons" data-aos="fade-up">
                  <Link to="/contact" className="nxServicesHero__primaryBtn">
                    Start Your Project
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>

                  <Link
                    to="/portfolio"
                    className="nxServicesHero__secondaryBtn"
                  >
                    View Portfolio
                  </Link>
                </div>
                <div className="nxServicesHero__stats">
                  <div data-aos="zoom-in" data-aos-delay="200">
                    <h3>
                      {" "}
                      {counters.projectsCount < 10
                        ? `0${counters.projectsCount}`
                        : counters.projectsCount}
                      +
                    </h3>

                    <span>Websites Delivered</span>
                  </div>

                  <div data-aos="zoom-in" data-aos-delay="300">
                    <h3>98%</h3>

                    <span>Happy Clients</span>
                  </div>

                  <div data-aos="zoom-in" data-aos-delay="400">
                    <h3>24/7</h3>

                    <span>Support</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="nxServicesHero__visual">
                <div
                  className="nxServicesHero__browser"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="nxServicesHero__browserTop">
                    <span></span>

                    <span></span>

                    <span></span>
                  </div>

                  <div className="nxServicesHero__browserBody">
                    <div className="nxServicesHero__sidebar">
                      <span></span>

                      <span></span>

                      <span></span>

                      <span></span>
                    </div>

                    <div className="nxServicesHero__page">
                      <div className="nxServicesHero__banner"></div>

                      <div className="nxServicesHero__cards">
                        <div></div>

                        <div></div>

                        <div></div>
                      </div>

                      <div className="nxServicesHero__lines">
                        <span></span>

                        <span></span>

                        <span></span>

                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="nxServicesHero__floatingCard speedCard"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <i className="fa-solid fa-gauge-high"></i>

                  <div>
                    <h5>Performance</h5>

                    <strong>98%</strong>
                  </div>
                </div>

                <div
                  className="nxServicesHero__floatingCard seoCard"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <i className="fa-solid fa-chart-line"></i>

                  <div>
                    <h5>SEO Ready</h5>

                    <strong>Optimized</strong>
                  </div>
                </div>

                <div
                  className="nxServicesHero__floatingCard mobileCard"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                >
                  <i className="fa-solid fa-mobile-screen-button"></i>

                  <div>
                    <h5>Responsive</h5>

                    <strong>All Devices</strong>
                  </div>
                </div>
                <div
                  className="nxServicesHero__floatingCard securityCard"
                  data-aos="zoom-in"
                  data-aos-delay="800"
                >
                  <i className="fa-brands fa-expeditedssl"></i>

                  <div>
                    <h5>Secure SSL</h5>

                    <strong>Protected</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="nxServicesGrid">
        <div className="container">
          <div className="nxServicesGrid__heading">
            <span data-aos="fade-up">WHAT WE OFFER</span>

            <h2 data-aos="fade-up">
              Complete Digital Solutions
              <br />
              For Every Business
            </h2>

            <p data-aos="fade-up">
              Every website we build is carefully crafted to deliver outstanding
              performance, beautiful design, and measurable business growth.
            </p>
          </div>

          <div className="row g-4" id="web-design-services">
            {servicesData.map((service, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="nxServicesGrid__card">
                  <div className="nxServicesGrid__badge">{service.badge}</div>
                  <div
                    className="nxServicesGrid__icon"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}, #00C2FF)`,
                    }}
                  >
                    <i className={service.icon}></i>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="nxServicesGrid__tech">
                    {service.technologies.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>

                  <div className="nxServicesGrid__footer">
                    <Link
                      to="/contact"
                      className="nxServicesGrid__button"
                      state={{
                        service: service.title,
                      }}
                    >
                      Get Started
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nxIndustries" id="industries-we-serve">
        <div className="container">
          <div className="nxIndustries__heading">
            <span data-aos="fade-up">INDUSTRIES</span>

            <h2 data-aos="fade-up">Websites Built For Every Industry</h2>

            <p data-aos="fade-up">
              No matter your business, we create websites that help you attract
              customers, build trust and grow online.
            </p>
          </div>

          <div className="row g-4">
            {industriesData.map((industry, index) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6"
                key={industry.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="nxIndustries__card">
                  <img
                    src={industry.icon}
                    alt={industry.title}
                    style={{ width: "100%", height: "8rem" }}
                  />

                  <h4 className="mt-4">{industry.title}</h4>

                  <p>{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nxProcess">
        <div className="container">
          <div className="nxProcess__heading">
            <span data-aos="fade-up">OUR PROCESS</span>

            <h2 data-aos="fade-up">
              From Idea
              <br />
              To Successful Launch
            </h2>

            <p data-aos="fade-up">
              Every project follows a structured workflow that ensures quality,
              transparency and on-time delivery.
            </p>
          </div>

          <div className="nxProcess__timeline">
            {processData.map((item, index) => (
              <div
                className="nxProcess__item"
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {index !== processData.length - 1 && (
                  <div className="nxProcess__line"></div>
                )}

                <div className="nxProcess__step">{item.step}</div>

                <div className="nxProcess__icon">
                  <i className={item.icon}></i>
                </div>

                <h4>{item.title}</h4>

                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nxWhy">
        <div className="container">
          <div className="nxWhy__heading">
            <span data-aos="fade-up">WHY CHOOSE US</span>

            <h2 data-aos="fade-up">
              More Than A Website
              <br />
              We Build Digital Growth
            </h2>

            <p data-aos="fade-up">
              Every project is built with performance, strategy and long-term
              business success in mind.
            </p>
          </div>

          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="nxWhy__comparison">
                <div className="nxWhy__column" data-aos="fade-up">
                  <h3>Typical Agencies</h3>

                  <ul>
                    <li>
                      <i className="fa-solid fa-xmark"></i>
                      Generic Templates
                    </li>

                    <li>
                      <i className="fa-solid fa-xmark"></i>
                      Slow Delivery
                    </li>

                    <li>
                      <i className="fa-solid fa-xmark"></i>
                      Hidden Charges
                    </li>

                    <li>
                      <i className="fa-solid fa-xmark"></i>
                      Poor Support
                    </li>

                    <li>
                      <i className="fa-solid fa-xmark"></i>
                      Limited SEO
                    </li>
                  </ul>
                </div>

                <div className="nxWhy__vs" data-aos="zoom-in">
                  VS
                </div>

                <div className="nxWhy__column active" data-aos="fade-up">
                  <h3>NexGen</h3>

                  <ul>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Custom Design
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      Fast Delivery
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      Transparent Pricing
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      Dedicated Support
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      SEO Ready
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                {whyChooseData.map((item, index) => (
                  <div
                    className="col-md-6"
                    key={item.id}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <div className="nxWhy__feature">
                      <div className="nxWhy__icon">
                        <i className={item.icon}></i>
                      </div>

                      <h4>{item.title}</h4>

                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nxTransformation">
        <div className="container">
          <div className="nxTransformation__heading">
            <span data-aos="fade-up">DIGITAL TRANSFORMATION</span>

            <h2 data-aos="fade-up">
              Transform Your Business
              <br />
              From Ordinary To Outstanding
            </h2>

            <p data-aos="fade-up">
              We don't just create websites. We transform how customers perceive
              your business online.
            </p>
          </div>

          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div
                className="nxTransformation__card beforeCard"
                data-aos="fade-up"
              >
                <div className="nxTransformation__label">BEFORE</div>

                <div className="nxTransformation__icon">
                  <i className="fa-solid fa-face-frown"></i>
                </div>

                <ul>
                  <li>
                    <i className="fa-solid fa-xmark"></i>
                    No Professional Website
                  </li>

                  <li>
                    <i className="fa-solid fa-xmark"></i>
                    Losing Potential Customers
                  </li>

                  <li>
                    <i className="fa-solid fa-xmark"></i>
                    Outdated Design
                  </li>

                  <li>
                    <i className="fa-solid fa-xmark"></i>
                    Slow Loading Pages
                  </li>

                  <li>
                    <i className="fa-solid fa-xmark"></i>
                    Poor Mobile Experience
                  </li>

                  <li>
                    <i className="fa-solid fa-xmark"></i>
                    Difficult To Rank On Google
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="nxTransformation__card afterCard"
                data-aos="fade-up"
              >
                <div className="nxTransformation__label success">AFTER</div>

                <div className="nxTransformation__icon">
                  <i className="fa-solid fa-rocket"></i>
                </div>

                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Modern Premium Website
                  </li>

                  <li>
                    <i className="fa-solid fa-check"></i>
                    Higher Customer Trust
                  </li>

                  <li>
                    <i className="fa-solid fa-check"></i>
                    Fast Loading Performance
                  </li>

                  <li>
                    <i className="fa-solid fa-check"></i>
                    Fully Mobile Responsive
                  </li>

                  <li>
                    <i className="fa-solid fa-check"></i>
                    SEO Ready Structure
                  </li>

                  <li>
                    <i className="fa-solid fa-check"></i>
                    Better Leads & Conversions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nxFeatureGrid">
        <div className="container">
          <div className="nxFeatureGrid__heading">
            <span data-aos="fade-up">INCLUDED FEATURES</span>

            <h2 data-aos="fade-up">Everything Your Website Needs To Succeed</h2>

            <p data-aos="fade-up">
              Every project includes premium features designed to improve
              performance, security and customer experience.
            </p>
          </div>

          <div className="row g-4">
            {featuresGridData.map((feature, index) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6"
                key={feature.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="nxFeatureGrid__card">
                  <div className="nxFeatureGrid__icon">
                    <i className={feature.icon}></i>
                  </div>

                  <h4>{feature.title}</h4>

                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nxPremiumCta">
        <div className="container">
          <div className="nxPremiumCta__wrapper" data-aos="fade-up">
            <span className="nxPremiumCta__shape shapeOne"></span>

            <span className="nxPremiumCta__shape shapeTwo"></span>

            <span className="nxPremiumCta__shape shapeThree"></span>

            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="nxPremiumCta__content">
                  <span className="nxPremiumCta__tag">
                    🚀 LET'S BUILD SOMETHING AMAZING
                  </span>

                  <h2>
                    Your Business
                    <br />
                    Deserves A Website
                    <span>That Works 24/7</span>
                  </h2>

                  <p>
                    We create modern, fast and SEO-friendly websites that help
                    businesses build trust, generate leads and grow online.
                    Whether you're starting from scratch or upgrading an
                    existing website, we're ready to help.
                  </p>

                  <div className="nxPremiumCta__benefits">
                    <div>
                      <i className="fa-solid fa-circle-check"></i>
                      Free Consultation
                    </div>

                    <div>
                      <i className="fa-solid fa-circle-check"></i>
                      Transparent Pricing
                    </div>

                    <div>
                      <i className="fa-solid fa-circle-check"></i>
                      Mobile Responsive
                    </div>

                    <div>
                      <i className="fa-solid fa-circle-check"></i>
                      SEO Optimized
                    </div>
                  </div>

                  <div className="nxPremiumCta__buttons">
                    <Link to="/contact" className="nxPremiumCta__primary">
                      Start Your Project
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>

                    <a
                      href={whatsappLink1}
                      target="_blank"
                      rel="noreferrer"
                      className="nxPremiumCta__secondary"
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="nxPremiumCta__dashboard">
                  <div
                    className="nxPremiumCta__card"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <h3>100%</h3>

                    <span>Responsive Design</span>
                  </div>

                  <div
                    className="nxPremiumCta__card"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <h3>24/7</h3>

                    <span>Client Support</span>
                  </div>

                  <div
                    className="nxPremiumCta__card"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                  >
                    <h3>SEO</h3>

                    <span>Optimized Structure</span>
                  </div>

                  <div
                    className="nxPremiumCta__card"
                    data-aos="zoom-in"
                    data-aos-delay="800"
                  >
                    <h3>Fast</h3>

                    <span>Loading Performance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
