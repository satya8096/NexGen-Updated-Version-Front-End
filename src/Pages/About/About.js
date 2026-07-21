import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { useAppData } from "../../Data/BackEnd Data/FetchBackEndData";
import { AboutPageSEOs } from "../../Data/AllPageSEOs";

const About = () => {
  const { websiteData, loading } = useAppData();
  let counters = {};
  if (!loading) {
    counters = websiteData.counters;
  }
  const mouseGlow = useRef(null);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    document.title = "About Us | NexGen Web Designs";
  }, []);

  useEffect(() => {
    const moveGlow = (e) => {
      if (!mouseGlow.current) return;

      mouseGlow.current.style.left = `${e.clientX}px`;

      mouseGlow.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveGlow);

    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  const [experience, setExperience] = useState({
    years: 0,
    totalDays: 0,
  });

  useEffect(() => {
    const foundationDate = new Date("2024-10-14");

    const calculateExperience = () => {
      const today = new Date();
      const difference = today - foundationDate;

      const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      let years = today.getFullYear() - foundationDate.getFullYear();

      const anniversary = new Date(
        today.getFullYear(),
        foundationDate.getMonth(),
        foundationDate.getDate(),
      );

      if (today < anniversary) {
        years--;
      }

      setExperience({
        years,
        totalDays,
      });
    };

    calculateExperience();
    const interval = setInterval(calculateExperience, 86400000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="aboutPage">
      {AboutPageSEOs}
      <div ref={mouseGlow} className="mouseGlow"></div>

      <div className="bgGrid"></div>

      <div className="gradientOrb orbOne"></div>

      <div className="gradientOrb orbTwo"></div>

      <div className="gradientOrb orbThree"></div>

      <section className="aboutHero">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <div className="heroContent">
                <span className="heroBadge" data-aos="fade-up">
                  <i className="fa-solid fa-sparkles"></i>
                  Creative Digital Agency
                </span>

                <h3 data-aos="fade">
                  We Don't Just Build
                  <span> Websites.</span>
                  <br />
                  We Build
                  <strong>Digital Experiences.</strong>
                </h3>

                <p data-aos="fade-up">
                  At NexGen Web Designs, every website is crafted with strategy,
                  creativity, and technology to help businesses grow online and
                  create lasting impressions.
                </p>

                <div className="heroButtons" data-aos="fade-up">
                  <Link to="/contact" className="primaryBtn">
                    Start Your Project
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>

                  <Link to="/portfolio" className="secondaryBtn">
                    View Portfolio
                  </Link>
                </div>

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
                    <h3>
                      {counters.clientsCount < 10
                        ? `0${counters.clientsCount}`
                        : counters.clientsCount}
                      +
                    </h3>

                    <span>Clients</span>
                  </div>

                  <div>
                    <h3>98%</h3>

                    <span>Satisfaction</span>
                  </div>
                  <div>
                    <h3>{counters.hoursCount}+</h3>

                    <span>Hours Worked</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="heroVisual">
                <div className="agencyStamp">
                  <div className="stampOuter">
                    <span>NEXGEN</span>

                    <span className="text-center">
                      WEB <br /> DESIGNS
                    </span>

                    <span>
                      DIGITAL <br /> AGENCY
                    </span>

                    <span>CREATIVE</span>
                  </div>

                  <div className="stampCenter">
                    <i className="fa-solid fa-code"></i>
                  </div>
                </div>
                <div className="browserCard">
                  <div className="browserHeader">
                    <span></span>

                    <span></span>

                    <span></span>
                  </div>

                  <div className="browserBody">
                    <div className="browserTag">PREMIUM WEBSITE</div>

                    <h2>Beautiful. Fast. Powerful.</h2>

                    <p>
                      Every pixel is carefully designed to create trust,
                      engagement, and business growth.
                    </p>

                    <div className="browserFeatures">
                      <div>
                        <i className="fa-solid fa-bolt"></i>
                        Fast
                      </div>

                      <div>
                        <i className="fa-solid fa-mobile-screen"></i>
                        Responsive
                      </div>

                      <div>
                        <i className="fa-solid fa-chart-line"></i>
                        SEO
                      </div>
                    </div>
                  </div>
                </div>

                <div className="floatingCard cardOne">
                  <i className="fa-solid fa-rocket"></i>
                  Launch Ready
                </div>

                <div className="floatingCard cardTwo">
                  <i className="fa-solid fa-star"></i>
                  Premium UI
                </div>

                <div className="floatingCard cardThree">
                  <i className="fa-solid fa-shield"></i>
                  Secure
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="founderSection">
        <div className="container">
          <div className="row align-items-center founder-wrapper gy-5">
            <div className="col-lg-5" data-aos="fade-up" data-aos-delay="200">
              <div className="founderImageWrapper">
                <div className="founderGlow"></div>

                <div className="founderImage">
                  <img
                    src={require("./../../Assets/Founder_Image_Full.jpeg")}
                    alt="Founder"
                    className="img-fluid"
                  />
                </div>

                <div className="experienceBadge">
                  <h3>
                    {experience.years < 10
                      ? `0${experience.years}`
                      : experience.years}
                    +
                  </h3>

                  <span>
                    Years Building
                    <br />
                    Digital Brands
                  </span>
                  <br />
                  <span>
                    ({experience.totalDays} Days Since <br></br>Foundation)
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="founderContent">
                <span className="founderLabel" data-aos="fade-left">
                  MESSAGE FROM FOUNDER
                </span>
                <h3 data-aos="fade-left" data-aos-delay="200">
                  Every Business Deserves a Powerful Digital Identity.
                </h3>

                <p data-aos="fade-left" data-aos-delay="400">
                  When I started NexGen Web Designs, I didn't want to become
                  another website company. I wanted to build an agency that
                  understands businesses, solves real problems, and creates
                  websites that inspire confidence.
                </p>

                <p data-aos="fade-left" data-aos-delay="600">
                  Every website we build is crafted with strategy, creativity,
                  performance and user experience in mind. Because your website
                  isn't just a design... It's your first impression. Your
                  digital office. Your strongest salesperson.
                </p>

                <div
                  className="signatureArea"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div>
                    <h4>K Satyanarayana</h4>

                    <span>Founder & CEO</span>
                    <p className="mt-2">
                      <Link
                        to={
                          "https://www.linkedin.com/in/katta-venkata-rama-satyanarayana-b5116224a/"
                        }
                      >
                        <i
                          className="fa-brands fa-linkedin"
                          style={{ fontSize: "1.8rem" }}
                        ></i>
                      </Link>
                    </p>
                  </div>

                  <div
                    className="signatureLine"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    NexGen Web Designs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ourStory">
        <div className="container">
          <div className="sectionHeading">
            <span data-aos="fade-up">OUR JOURNEY</span>

            <h3 data-aos="fade-up">
              Every Great Brand
              <br />
              Starts With One Bold Decision.
            </h3>

            <p data-aos="fade-up">
              NexGen Web Designs was founded with one vision — to help
              businesses establish a strong digital identity through modern,
              high-performance websites.
            </p>
          </div>

          <div className="storyTimeline">
            <div className="timelineLine"></div>

            <div className="storyCard left">
              <div className="storyYear">2024</div>

              <div className="storyContent" data-aos="fade-right">
                <i className="fa-solid fa-lightbulb"></i>

                <h4>The Beginning</h4>

                <p>
                  NexGen Web Designs started with a simple goal: create premium
                  websites that truly help businesses grow instead of just
                  existing online.
                </p>
              </div>
            </div>

            <div className="storyCard right">
              <div className="storyYear">
                {counters.clientsCount < 10
                  ? `0${counters.clientsCount}`
                  : counters.clientsCount}
                +
              </div>

              <div className="storyContent" data-aos="fade-left">
                <i className="fa-solid fa-users"></i>

                <h4>Happy Clients</h4>

                <p>
                  Businesses from different industries trusted our creativity,
                  professionalism, and dedication.
                </p>
              </div>
            </div>
            <div className="storyCard left">
              <div className="storyYear">
                {counters.projectsCount < 10
                  ? `0${counters.projectsCount}`
                  : counters.projectsCount}
                +
              </div>

              <div className="storyContent" data-aos="fade-right">
                <i className="fa-solid fa-code"></i>

                <h4>Successful Projects</h4>

                <p>
                  From landing pages to complete business platforms, every
                  project was crafted with quality and attention to detail.
                </p>
              </div>
            </div>

            <div className="storyCard right">
              <div className="storyYear">NEXT</div>

              <div className="storyContent" data-aos="fade-left">
                <i className="fa-solid fa-rocket"></i>

                <h4>Future Vision</h4>

                <p>
                  We continue pushing boundaries by creating modern digital
                  experiences that help brands compete confidently in the online
                  world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="coreValues">
        <div className="container">
          <div className="sectionHeading">
            <span data-aos="fade-up">OUR CORE VALUES</span>

            <h3 data-aos="fade-up">
              The Principles That
              <br />
              Drive Everything We Build
            </h3>

            <p data-aos="fade-up">
              Every project we deliver follows the same principles. These values
              shape every design, every interaction, and every website we
              create.
            </p>
          </div>

          <div className="valuesGrid">
            <div className="valueCard">
              <div data-aos="zoom-in" data-aos-delay="100">
                <div className="hexagon">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>

                <h4>Innovation</h4>

                <p>
                  We continuously explore new ideas, technologies and creative
                  solutions.
                </p>
              </div>
            </div>

            <div className="valueCard">
              <div data-aos="zoom-in" data-aos-delay="200">
                <div className="hexagon">
                  <i className="fa-solid fa-gem"></i>
                </div>

                <h4>Quality</h4>

                <p>
                  Every pixel is carefully designed for performance and
                  professionalism.
                </p>
              </div>
            </div>

            <div className="valueCard">
              <div data-aos="zoom-in" data-aos-delay="300">
                <div className="hexagon">
                  <i className="fa-solid fa-handshake"></i>
                </div>

                <h4>Trust</h4>

                <p>
                  Strong relationships are built through transparency and
                  honesty.
                </p>
              </div>
            </div>

            <div className="valueCard">
              <div data-aos="zoom-in" data-aos-delay="400">
                <div className="hexagon">
                  <i className="fa-solid fa-shield"></i>
                </div>

                <h4>Reliability</h4>
                <p>Secure, stable and dependable websites every single time.</p>
              </div>
            </div>

            <div className="valueCard">
              <div data-aos="zoom-in" data-aos-delay="500">
                <div className="hexagon">
                  <i className="fa-solid fa-rocket"></i>
                </div>

                <h4>Growth</h4>

                <p>Every project is designed to help businesses grow online.</p>
              </div>
            </div>

            <div className="valueCard">
              <div data-aos="zoom-in" data-aos-delay="600">
                <div className="hexagon">
                  <i className="fa-solid fa-headset"></i>
                </div>

                <h4>Support</h4>

                <p>We're always available to help our clients succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="companyStats">
        <div className="container">
          <div className="sectionHeading">
            <span data-aos="fade-up">OUR IMPACT</span>

            <h3 data-aos="fade-up">
              Trusted By Businesses.
              <br />
              Driven By Results.
            </h3>

            <p data-aos="fade-up">
              Every website we create is focused on quality, performance and
              helping businesses establish a powerful digital presence.
            </p>
          </div>

          <div className="statsGrid">
            <div className="statCard large">
              <div data-aos="zoom-in" data-aos-delay="200">
                <div className="statIcon">
                  <i className="fa-solid fa-face-smile"></i>
                </div>

                <h1>98%</h1>

                <h4>Client Satisfaction</h4>

                <p>
                  Long-term relationships built through quality work and
                  reliable support.
                </p>
              </div>
            </div>

            <div className="statCard">
              <div data-aos="zoom-in" data-aos-delay="400">
                <div className="statIcon">
                  <i className="fa-solid fa-code"></i>
                </div>

                <h2>
                  {counters.projectsCount < 10
                    ? `0${counters.projectsCount}`
                    : counters.projectsCount}
                  +
                </h2>

                <h5>Projects</h5>
              </div>
            </div>

            <div className="statCard">
              <div data-aos="zoom-in" data-aos-delay="600">
                <div className="statIcon">
                  <i className="fa-solid fa-users"></i>
                </div>

                <h2>
                  {counters.clientsCount < 10
                    ? `0${counters.clientsCount}`
                    : counters.clientsCount}
                  +
                </h2>

                <h5>Clients</h5>
              </div>
            </div>

            <div className="statCard">
              <div data-aos="zoom-in" data-aos-delay="800">
                <div className="statIcon">
                  <i className="fa-solid fa-headset"></i>
                </div>

                <h2>24/7</h2>

                <h5>Support</h5>
              </div>
            </div>

            <div className="statCard">
              <div data-aos="zoom-in" data-aos-delay="1000">
                <div className="statIcon">
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </div>

                <h2>100%</h2>

                <h5>Responsive</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ourProcess">
        <div className="container">
          <div className="sectionHeading">
            <span data-aos="fade-up">OUR PROCESS</span>

            <h3 data-aos="fade-up">
              From Your Idea
              <br />
              To A Powerful Website
            </h3>

            <p data-aos="fade-up">
              Every successful website follows a proven process. We don't just
              design beautiful pages—we create digital experiences that help
              businesses grow.
            </p>
          </div>

          <div className="processWrapper">
            <div className="processLine"></div>

            <div className="processItem">
              <div className="processNumber">01</div>

              <div className="processCard">
                <div data-aos="fade-left">
                  <i className="fa-solid fa-comments"></i>

                  <h4>Discover</h4>

                  <p>
                    We understand your business, audience and goals before
                    writing a single line of code.
                  </p>
                </div>
              </div>
            </div>

            <div className="processItem">
              <div className="processNumber">02</div>

              <div className="processCard">
                <div data-aos="fade-right">
                  <i className="fa-solid fa-pen-ruler"></i>

                  <h4>Design</h4>

                  <p>
                    Beautiful interfaces focused on branding, conversions and
                    user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="processItem">
              <div className="processNumber">03</div>

              <div className="processCard">
                <div data-aos="fade-left">
                  <i className="fa-solid fa-code"></i>

                  <h4>Develop</h4>

                  <p>
                    Fast, secure and scalable websites using modern
                    technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="processItem">
              <div className="processNumber">04</div>

              <div className="processCard">
                <div data-aos="fade-right">
                  <i className="fa-solid fa-rocket"></i>

                  <h4>Launch</h4>

                  <p>
                    Testing, optimization, deployment and continuous support
                    after launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyChoose">
        <div className="container">
          <div className="sectionHeading">
            <span data-aos="fade-up">WHY CHOOSE US</span>

            <h3 data-aos="fade-up">
              More Than A Website.
              <br />A Complete Digital Experience.
            </h3>

            <p data-aos="fade-up">
              Every website we build is designed to attract, engage and convert
              your visitors into customers.
            </p>
          </div>

          <div className="heroChooseWrapper">
            <div className="heroChooseDevice">
              <div className="heroChooseHeader">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="heroChooseScreen">
                <div data-aos="fade-up">
                  <img
                    src={require("../../Assets/NexGen_Web_Designs_Finla_Light_Logo_With_Background.png")}
                    alt="NexGen Web Designs"
                    className="heroChooseLogo"
                  />

                  <p>Beautiful. Fast. Professional.</p>
                </div>
              </div>
            </div>

            <div className="heroChooseCard heroChooseCard1" data-aos="zoom-in">
              <i className="fa-solid fa-bolt"></i>
              <h5>Fast Performance</h5>
            </div>

            <div className="heroChooseCard heroChooseCard2" data-aos="zoom-in">
              <i className="fa-solid fa-mobile-screen-button"></i>
              <h5>Responsive Design</h5>
            </div>

            <div className="heroChooseCard heroChooseCard3" data-aos="zoom-in">
              <i className="fa-solid fa-shield"></i>
              <h5>Secure Websites</h5>
            </div>

            <div className="heroChooseCard heroChooseCard4" data-aos="zoom-in">
              <i className="fa-brands fa-searchengin"></i>
              <h5>SEO Optimized</h5>
            </div>

            <div className="heroChooseCard heroChooseCard5" data-aos="zoom-in">
              <i className="fa-solid fa-palette"></i>
              <h5>Modern UI/UX</h5>
            </div>

            <div className="heroChooseCard heroChooseCard6" data-aos="zoom-in">
              <i className="fa-solid fa-headset"></i>
              <h5>Lifetime Support</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutCTA">
        <div className="ctaGlow ctaGlowOne"></div>
        <div className="ctaGlow ctaGlowTwo"></div>

        <div className="container">
          <div className="ctaBox_about">
            <di data-aos="fade-up"></di>
            <span>🚀 READY TO BUILD SOMETHING AMAZING?</span>

            <h2>
              Let's Build A Website
              <br />
              That Your Customers Will Never Forget.
            </h2>

            <p>
              Whether you're starting a new business or upgrading an existing
              one, NexGen Web Designs is ready to create a fast, modern and
              professional website that helps your business grow online.
            </p>

            <div className="ctaButtons">
              <Link to="/contact" className="primaryCTA">
                Start Your Project
                <i className="fa-solid fa-arrow-right"></i>
              </Link>

              <Link to="/portfolio" className="secondaryCTA">
                View Portfolio
              </Link>
            </div>

            <div className="ctaFeatures">
              <div>
                <i className="fa-solid fa-circle-check"></i>
                Free Consultation
              </div>

              <div>
                <i className="fa-solid fa-circle-check"></i>
                Mobile Friendly
              </div>

              <div>
                <i className="fa-solid fa-circle-check"></i>
                SEO Ready
              </div>

              <div>
                <i className="fa-solid fa-circle-check"></i>
                Lifetime Support
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
