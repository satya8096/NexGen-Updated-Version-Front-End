import React, { useEffect, useState } from "react";
import "./Home.css";
import { whatsappLink1 } from "./../../Data/BrandData";
import HeroSection from "../../Components/Home Hero Section/HeroSection";
import { useAppData } from "../../Data/BackEnd Data/FetchBackEndData";
import { Link } from "react-router-dom";
import { HomePageSEO } from "../../Data/AllPageSEOs";
import {
  problems,
  content,
  industries,
  reasons,
  reviews,
  services,
  transformations,
} from "../../Data/Page Data/HomePageData";

const Home = () => {

  const { websiteData, loading } = useAppData();
  let counters = {};
  if (!loading) {
    counters = websiteData.counters;
  }

  const [journey, setJourney] = useState({
    years: 0,
    months: 0,
    days: 0,
    totalDays: 0,
  });

  useEffect(() => {
    const startDate = new Date("2024-10-14");
    const today = new Date();

    const difference = today - startDate;

    const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));

    let years = today.getFullYear() - startDate.getFullYear();

    let months = today.getMonth() - startDate.getMonth();

    let days = today.getDate() - startDate.getDate();

    if (days < 0) {
      months--;

      const previousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0,
      ).getDate();

      days += previousMonth;
    }

    if (months < 0) {
      years--;

      months += 12;
    }

    setJourney({
      years,
      months,
      days,
      totalDays,
    });
  }, []);

  const stats = [
    {
      number: `${journey.years < 10 ? `0${journey.years}` : journey.years}+`,
      title: "Years Journey",
      description: "Creating digital solutions since 2024",
    },

    {
      number: `${journey.totalDays}+`,
      title: "Days Of Growth",
      description: "Every day building better experiences",
    },

    {
      number: `${counters.projectsCount < 10 ? `0${counters.projectsCount}` : counters.projectsCount}+`,
      title: "Projects",
      description: "Websites designed and developed",
    },

    {
      number: "100%",
      title: "Commitment",
      description: "Focused on client success",
    },
  ];
  return (
    <>
      <HeroSection />
      <section className="nx-stats-section">
        {HomePageSEO}
        <div className="container">
          <div className="nx-stats-heading">
            <span data-aos="fade-up">OUR JOURNEY</span>

            <h2 data-aos="fade-up">
              Turning Ideas Into
              <strong>Digital Experiences</strong>
            </h2>

            <p data-aos="fade-up">
              Since October 2024, NexGen Web Designs has been helping businesses
              build their digital identity with creative websites and modern
              technology.
            </p>
          </div>

          <div className="nx-stats-grid">
            {stats.map((item, index) => (
              <div className="nx-stat-card" key={index}>
                <div data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
                  <div className="nx-stat-number">{item.number}</div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="nx-problem-section">
        <div className="container">
          <div className="nx-problem-wrapper">
            <div className="nx-problem-content">
              <span className="nx-section-tag" data-aos="fade-up">
                THE DIGITAL CHALLENGE
              </span>

              <h2 data-aos="fade-up">
                Your Business Is Great.
                <br />
                <span>But Is The Internet Showing It?</span>
              </h2>

              <p data-aos="fade-up">
                Your customers are searching online every day. A professional
                website helps them discover, trust, and choose your business.
              </p>

              <div className="nx-problem-highlight" data-aos="fade-up">
                "Your website is not just a page. It is your digital
                salesperson."
              </div>
            </div>

            <div className="nx-problem-cards">
              {problems.map((item, index) => (
                <div className="nx-problem-card" key={index}>
                  <div data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
                    <div className="nx-problem-icon">
                      <i className={item.icon}></i>
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="nx-solution-section">
        <div className="container">
          <div className="nx-solution-heading">
            <span data-aos="fade-up">OUR SOLUTION</span>

            <h2 data-aos="fade-up">
              We Transform Businesses Into
              <strong>Digital Experiences</strong>
            </h2>

            <p data-aos="fade-up">
              A powerful website is more than design. It is a platform that
              builds trust, connects with customers, and grows your business.
            </p>
          </div>

          <div className="nx-solution-wrapper">
            <div className="nx-before-card">
              <div data-aos="zoom-in">
                <div className="nx-label">BEFORE</div>

                <h3>Traditional Business</h3>

                <ul>
                  <li>❌ Difficult to discover online</li>

                  <li>❌ Low customer confidence</li>

                  <li>❌ Missed opportunities</li>
                </ul>
              </div>
            </div>

            <div
              className="nx-transform-arrow"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <span>→</span>
            </div>

            <div className="nx-after-card" data-aos-delay="200">
              <div data-aos="zoom-in">
                <div className="nx-label">AFTER</div>

                <h3>Digital Growth Partner</h3>

                <ul>
                  <li>✓ Professional Website</li>

                  <li>✓ Strong Brand Presence</li>

                  <li>✓ Customer Growth</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="nx-transformation-list">
            {transformations.map((item, index) => (
              <div className="nx-transform-item" key={index}>
                <div data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
                  <div>
                    <span>Before</span>

                    <p>{item.before}</p>
                  </div>

                  <div className="nx-line">→</div>

                  <div>
                    <span>After</span>

                    <p>{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="nx-services-section">
        <div className="container">
          <div className="nx-services-heading">
            <span data-aos="fade-up">WHAT WE DO</span>

            <h2 data-aos="fade-up">
              Complete Digital Solutions
              <strong>For Your Business Growth</strong>
            </h2>

            <p data-aos="fade-up">
              From designing your first website to growing your online presence,
              we provide everything your business needs in one place.
            </p>
          </div>

          <div className="nx-services-grid">
            {services.map((service, index) => (
              <div className="nx-service-card" key={index}>
                <div data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
                  <div className="nx-service-icon">
                    <i className={service.icon}></i>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <Link to="/services#web-design-services">
                    Explore Service
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="nxHeroButtons justify-content-center mt-5">
          <Link
            to="/services#web-design-services"
            className="nxPrimaryButton"
            data-aos="fade-right"
          >
            View more services <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>
      <section className="nx-industries-section">
        <div className="container">
          <div className="nx-industries-heading">
            <span data-aos="fade-up">INDUSTRIES WE SERVE</span>

            <h2 data-aos="fade-up">
              Digital Solutions For
              <strong>Every Growing Business</strong>
            </h2>

            <p data-aos="fade-up">
              Every business has a unique story. We create websites that match
              your goals, audience and industry requirements.
            </p>
          </div>

          <div className="nx-industries-grid">
            {industries.map((item, index) => (
              <div className="nx-industry-card" key={index}>
                <div data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
                  <div className="nx-industry-icon">
                    <i className={item.icon}></i>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <Link
                    to={"/services#industries-we-serve"}
                    className="nx-industry-link"
                  >
                    Explore
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="nxHeroButtons justify-content-center mt-5">
          <Link
            to="/services#industries-we-serve"
            className="nxPrimaryButton"
            data-aos="fade-right"
          >
            View more industries <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>
      <section className="nx-why-section">
        <div className="container">
          <div className="nx-why-heading">
            <span data-aos="fade-up">WHY CHOOSE US</span>

            <h2 data-aos="fade-up">
              Why Businesses Trust
              <strong>NexGen Web Designs</strong>
            </h2>

            <p data-aos="fade-up">
              We don't just create websites. We create digital experiences that
              help businesses build trust and grow online.
            </p>
          </div>

          <div className="nx-why-grid">
            {reasons.map((item, index) => (
              <div className="nx-why-card" key={index}>
                <div data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
                  <div className="nx-why-icon">
                    <i className={item.icon}></i>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="agency-banner-section">
        <div className="agency-banner">
          <div className="agency-marquee">
            <div className="agency-track">
              {[...content, ...content].map((item, index) => (
                <span key={index}>
                  {item}

                  <b>✦</b>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="nx-testimonial-section">
        <div className="container">
          <div className="nx-testimonial-heading">
            <span data-aos="fade-up">CLIENT LOVE</span>

            <h2 data-aos="fade-up">
              What Our Clients Say About
              <strong>NexGen Web Designs</strong>
            </h2>

            <p data-aos="fade-up">
              We believe every successful project starts with trust,
              communication and commitment.
            </p>
          </div>

          <div className="nx-review-grid">
            {reviews.map((item, index) => (
              <div className="nx-review-card" key={index}>
                <div data-aos="zoom-in">
                  <div className="nx-stars">★★★★★</div>

                  <p>"{item.testimonial}"</p>

                  <div className="nx-client">
                    <div className="nx-client-avatar">
                      {item.name.charAt(0)}
                    </div>

                    <div>
                      <h4>{item.name}</h4>

                      <span>{item.projectTitle}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="nx-google-badge" data-aos="fade-up">
            <div>★★★★★</div>

            <p>Rated by happy clients</p>
          </div>
        </div>
      </section>

      <section className="nx-cta-section">
        <div className="container">
          <div className="nx-cta-box">
            <div className="nx-cta-circle one"></div>

            <div className="nx-cta-circle two"></div>

            <div className="nx-cta-content">
              <div data-aos="zoom-in">
                <span>START YOUR DIGITAL JOURNEY</span>

                <h2>
                  Ready To Build A<strong>Powerful Online Presence?</strong>
                </h2>

                <p>
                  Let's create a professional website that helps your business
                  attract customers, build trust and grow digitally.
                </p>

                <div className="nx-cta-buttons">
                  <a
                    href={whatsappLink1}
                    target="_blank"
                    rel="noreferrer"
                    className="nx-cta-primary"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                    Chat On WhatsApp
                  </a>

                  <a href="/contact" className="nx-cta-secondary">
                    Start Your Project
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
