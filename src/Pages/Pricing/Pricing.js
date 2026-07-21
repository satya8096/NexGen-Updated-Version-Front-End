import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Pricing.css";
import { phoneNumber } from "../../Data/BrandData";
import { useAppData } from "../../Data/BackEnd Data/FetchBackEndData";
import {
  USD_RATE,
  faqData,
  fetchedPlans,
  ourProcess,
} from "../../Data/Page Data/PricingPageData";
import { PricingPageSEO } from "../../Data/AllPageSEOs";
import PricingOfferCard from "../../Components/Prices cards/PricingOfferCard";

const Pricing = () => {
  const [plans] = useState(fetchedPlans);
  const [openFaq, setOpenFaq] = useState(0);

  const [currency, setCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState(USD_RATE);

  const { websiteData, loading } = useAppData();
  let counters = {};
  let pricings = {};
  if (!loading) {
    counters = websiteData.counters;
    pricings = websiteData.pricings;
  }

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const res = await axios.get("https://open.er-api.com/v6/latest/INR");

        if (res.data?.rates?.USD) {
          setExchangeRate(res.data.rates.USD);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchRate();
  }, []);

  const formatPrice = (price) => {
    if (price == null || isNaN(price)) return "";

    if (currency === "INR") {
      return `₹${Number(price).toLocaleString("en-IN")}`;
    }

    return `$${Math.round(Number(price) * exchangeRate).toLocaleString("en-US")}`;
  };

  const getStartingPrice = (pkg) => {
    const today = new Date();

    const actualPrice = Number(pkg.actualPrice);
    const offerPrice = Number(pkg.offerPrice);
    const extraOfferPrice = Number(pkg.extraOfferPrice);

    const extraOfferActive =
      pkg.isActive &&
      new Date(pkg.offerStartDate) <= today &&
      new Date(pkg.offerEndDate) >= today &&
      extraOfferPrice > 0 &&
      extraOfferPrice < actualPrice &&
      extraOfferPrice < offerPrice;

    if (extraOfferActive) {
      return extraOfferPrice;
    }

    const normalOfferActive = offerPrice > 0 && offerPrice < actualPrice;

    if (normalOfferActive) {
      return offerPrice;
    }

    return actualPrice;
  };
  const getPackagePricing = (pkg) => {
    const today = new Date();

    const actualPrice = Number(pkg.actualPrice);
    const offerPrice = Number(pkg.offerPrice);
    const extraOfferPrice = Number(pkg.extraOfferPrice);
    const calculateDiscount = (original, discounted) =>
      Math.round(((original - discounted) / original) * 100);

    const hasOffer = offerPrice > 0 && offerPrice < actualPrice;

    const hasExtraOffer =
      pkg.isActive === true &&
      pkg.offerStartDate &&
      pkg.offerEndDate &&
      new Date(pkg.offerStartDate) <= today &&
      new Date(pkg.offerEndDate) >= today &&
      extraOfferPrice > 0 &&
      extraOfferPrice < actualPrice &&
      extraOfferPrice < offerPrice;
    if (hasExtraOffer) {
      return {
        type: "extraOffer",

        actualPrice,
        offerPrice,
        finalPrice: extraOfferPrice,

        description: pkg.offerDescription,
        offerEndDate: pkg.offerEndDate,
        discountPercentage: calculateDiscount(actualPrice, extraOfferPrice),
      };
    }
    if (hasOffer) {
      return {
        type: "offer",

        actualPrice,
        finalPrice: offerPrice,

        description: null,
        discountPercentage: calculateDiscount(actualPrice, offerPrice),
      };
    }
    return {
      type: "normal",

      actualPrice,
      finalPrice: actualPrice,

      description: null,

      discountPercentage: 0,
    };
  };
  const basicPrices =
    !loading &&
    getPackagePricing(
      pricings.find((price) => {
        return price.packageName === "Basic";
      }),
    );

  const standardPrices =
    !loading &&
    getPackagePricing(
      pricings.find((price) => {
        return price.packageName === "Standard";
      }),
    );

  const premiumPrices =
    !loading &&
    getPackagePricing(
      pricings.find((price) => {
        return price.packageName === "Premium";
      }),
    );

  const customPrices =
    !loading &&
    getPackagePricing(
      pricings.find((price) => {
        return price.packageName === "Custom";
      }),
    );

  const useCountdown = (endDate) => {
    const calculate = () => {
      const diff = new Date(endDate) - new Date();

      if (diff <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          expired: true,
        };
      }

      return {
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
        expired: false,
      };
    };

    const [timeLeft, setTimeLeft] = useState(calculate());

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculate());
      }, 1000);

      return () => clearInterval(timer);
      // eslint-disable-next-line
    }, [endDate]);

    return timeLeft;
  };

  const countdownForBasic = useCountdown(basicPrices.offerEndDate);
  const countdownForStandard = useCountdown(standardPrices.offerEndDate);
  const countdownForPremium = useCountdown(premiumPrices.offerEndDate);
  const countdownForCustom = useCountdown(customPrices.offerEndDate);
  return (
    <>
      {PricingPageSEO}
      <section className="pricingHero">

        <div className="pricingBlur blurOne"></div>
        <div className="pricingBlur blurTwo"></div>
        <div className="pricingGrid"></div>

        <span className="shape one"></span>
        <span className="shape two"></span>
        <span className="shape three"></span>

        <div className="container">
          <div className="row gy-5">


            <div className="col-lg-7">
              <div className="heroContent">
                <span className="heroBadge" data-aos="fade-up">
                  WEBSITE PRICING
                </span>

                <h1 data-aos="fade-up">
                  Affordable <br /> Website Pricing
                </h1>

                <p data-aos="fade-up">
                  Whether you're launching your first business, upgrading your
                  current website, or building an online store, NexGen Web
                  Designs has a package designed to match your goals and budget.
                </p>

                <div className="heroTrust">
                  <div data-aos="zoom-in" data-aos-delay="200">
                    <i className="fa-solid fa-circle-check"></i>
                    Responsive
                  </div>

                  <div data-aos="zoom-in" data-aos-delay="400">
                    <i className="fa-solid fa-circle-check"></i>
                    SEO Ready
                  </div>

                  <div data-aos="zoom-in" data-aos-delay="600">
                    <i className="fa-solid fa-circle-check"></i>
                    Fast Delivery
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="pricingHeroCard" data-aos="fade-left">
                <h5>Select Currency</h5>

                <div className="currencySwitch">
                  <button
                    className={currency === "INR" ? "activeCurrency" : ""}
                    onClick={() => setCurrency("INR")}
                  >
                    ₹ INR
                  </button>

                  <button
                    className={currency === "USD" ? "activeCurrency" : ""}
                    onClick={() => setCurrency("USD")}
                  >
                    $ USD
                  </button>
                </div>

                <div className="startingPrice">
                  <span>Starting From</span>
                  <h2>
                    {(!loading &&
                      formatPrice(
                        getStartingPrice(
                          pricings.find((price) => {
                            return price.packageName === "Basic";
                          }),
                        ),
                      )) ||
                      "loading..."}
                  </h2>
                  <p>Professional websites starting at an affordable price.</p>
                </div>

                <div className="miniStats">
                  <div>
                    <h3>
                      {counters.projectsCount < 10
                        ? `0${counters.projectsCount}`
                        : counters.projectsCount}
                      +
                    </h3>

                    <span>Websites</span>
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
                    <h3>24/7</h3>

                    <span>Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricingHeroSEO pt-5 text-center">
        <div className="container">
          <header className="pricingHeroSEOHeader">
            <span className="pricingHeroSEOBadge" data-aos="fade-up">
              Transparent Pricing • No Hidden Charges
            </span>

            <h2 className="pricingHeroSEOTitle" data-aos="fade-up">
              Affordable Website Design & Web Development Packages for Every
              Business
            </h2>

            <p className="pricingHeroSEODescription" data-aos="fade-up">
              Looking for affordable, professional website design and web
              development services? <strong>NexGen Web Designs</strong> offers
              flexible website pricing packages for startups, small businesses,
              professionals and growing brands across <strong>Hyderabad</strong>
              ,<strong> Telangana</strong>, <strong>Andhra Pradesh</strong> and
              throughout India. Every package includes a modern, responsive,
              SEO-friendly and high-performance website designed to help your
              business build a stronger online presence, attract more customers
              and grow with confidence.
            </p>
          </header>
        </div>
      </section>
      <div className="d-flex flex-wrap pricing-cards-wrapper">
        <PricingOfferCard
          pricesData={basicPrices}
          countDown={countdownForBasic}
          formatPriceFunc={formatPrice}
          priceCardTitle="Basic Plan"
          pricingBadge="New"
        />
        <PricingOfferCard
          pricesData={standardPrices}
          countDown={countdownForStandard}
          formatPriceFunc={formatPrice}
          priceCardTitle="Standard Plan"
          pricingBadge="Featured"
        />
        <PricingOfferCard
          pricesData={premiumPrices}
          countDown={countdownForPremium}
          formatPriceFunc={formatPrice}
          priceCardTitle="Premium Plan"
          pricingBadge="Popular"
        />
        <PricingOfferCard
          pricesData={customPrices}
          countDown={countdownForCustom}
          formatPriceFunc={formatPrice}
          priceCardTitle="Custom Plan"
          pricingBadge="Popular"
        />
      </div>

      <section className="pricingLoader">
        <section className="featureComparison" data-aos="fade-up">
          <div className="container">
            <div className="sectionHeading">
              <span>COMPARE PLANS</span>

              <h2>
                Compare Every
                <br />
                Website Package
              </h2>

              <p>
                Easily compare our plans and choose the package that best fits
                your business goals.
              </p>
            </div>

            <div className="comparisonTable">
              <table>
                <thead>
                  <tr>
                    <th>Features</th>

                    <th>Basic</th>

                    <th>Standard</th>

                    <th>Premium</th>

                    <th>Custom</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Pages</td>

                    <td>5</td>

                    <td>10</td>

                    <td>Unlimited</td>

                    <td>Unlimited</td>
                  </tr>

                  <tr>
                    <td>Responsive Design</td>

                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>

                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>

                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>

                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Mobile Friendly</td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>Hosting</td>

                    <td>6 Months</td>

                    <td>1 Year</td>

                    <td>1 Year</td>

                    <td>1 Year</td>
                  </tr>

                  <tr>
                    <td>Domain</td>

                    <td>1 Year</td>

                    <td>1 Year</td>

                    <td>1 Year</td>

                    <td>1 Year</td>
                  </tr>

                  <tr>
                    <td>Hosting Per Year</td>
                    <td>
                      {loading ? "0" : formatPrice(pricings[0].hostingPrice)}
                    </td>
                    <td>
                      {loading ? "0" : formatPrice(pricings[1].hostingPrice)}
                    </td>
                    <td>
                      {loading ? "0" : formatPrice(pricings[2].hostingPrice)}
                    </td>
                    <td>
                      {loading ? "0" : formatPrice(pricings[3].hostingPrice)}
                    </td>
                  </tr>

                  <tr>
                    <td>Website Maintenance</td>

                    <td>1 Month Free</td>

                    <td>6 Months Free</td>

                    <td>1 Year Free</td>

                    <td>1 Year Free</td>
                  </tr>

                  <tr>
                    <td>Maintenance Per Year</td>
                    <td>
                      {loading
                        ? "0"
                        : formatPrice(pricings[0].maintainancePrice)}
                    </td>
                    <td>
                      {loading
                        ? "0"
                        : formatPrice(pricings[1].maintainancePrice)}
                    </td>
                    <td>
                      {loading
                        ? "0"
                        : formatPrice(pricings[2].maintainancePrice)}
                    </td>
                    <td>
                      {loading
                        ? "0"
                        : formatPrice(pricings[3].maintainancePrice)}
                    </td>
                  </tr>

                  <tr>
                    <td>SSL Certificate</td>

                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>

                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>

                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>

                    <td>
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>SEO</td>

                    <td>Basic</td>

                    <td>Medium</td>

                    <td>Advanced</td>

                    <td>Advanced</td>
                  </tr>

                  <tr>
                    <td>Business Emails</td>

                    <td>1</td>

                    <td>2</td>

                    <td>10</td>

                    <td>10</td>
                  </tr>

                  <tr>
                    <td>Extra Email</td>
                    <td>
                      {loading ? "0" : formatPrice(pricings[0].extraEmailPrice)}
                    </td>
                    <td>
                      {loading ? "0" : formatPrice(pricings[1].extraEmailPrice)}
                    </td>
                    <td>
                      {loading ? "0" : formatPrice(pricings[2].extraEmailPrice)}
                    </td>
                    <td>
                      {loading
                        ? "0"
                        : formatPrice(pricings[3].extraEmailPrice || 1)}
                    </td>
                  </tr>

                  <tr>
                    <td>Extra Page</td>
                    <td>
                      {loading ? "0" : formatPrice(pricings[0].extraPagePrice)}
                    </td>
                    <td>
                      {loading ? "0" : formatPrice(pricings[1].extraPagePrice)}
                    </td>
                    <td>
                      {loading ? "0" : formatPrice(pricings[2].extraPagePrice)}
                    </td>
                    <td>
                      {loading ? "0" : formatPrice(pricings[3].extraPagePrice)}
                    </td>
                  </tr>

                  <tr>
                    <td>Contact Form</td>

                    <td>
                      {" "}
                      <i className="fa-solid fa-check"></i>
                    </td>

                    <td>
                      {" "}
                      <i className="fa-solid fa-check"></i>
                    </td>

                    <td>
                      {" "}
                      <i className="fa-solid fa-check"></i>
                    </td>

                    <td>
                      {" "}
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>Call and WhatsApp Button Integration</td>

                    <td>
                      {" "}
                      <i className="fa-solid fa-check"></i>
                    </td>

                    <td>
                      {" "}
                      <i className="fa-solid fa-check"></i>
                    </td>

                    <td>
                      {" "}
                      <i className="fa-solid fa-check"></i>
                    </td>

                    <td>
                      {" "}
                      <i className="fa-solid fa-check"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>Support</td>

                    <td>Email</td>

                    <td>Priority</td>

                    <td>24/7</td>

                    <td>24/7</td>
                  </tr>

                  <tr>
                    <td>Payment Terms</td>

                    <td> 30% Advance, 70% Before Live Demo</td>

                    <td> 30% Advance, 70% Before Live Demo</td>

                    <td> 30% Advance, 70% Before Live Demo</td>

                    <td> 30% Advance, 70% Before Live Demo</td>
                  </tr>

                  <tr>
                    <td>Delivery</td>

                    <td>5 Days</td>

                    <td>10 Days</td>

                    <td>15 Days</td>

                    <td>20 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mobileComparison">
              {plans.map((plan) => (
                <div
                  className="mobilePlanCard"
                  key={plan.id}
                  data-aos="fade-up"
                >
                  <h3>{plan.packageName}</h3>

                  <ul className="mt-3">
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <i className="fa-solid fa-circle-check"></i>

                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    state={{ package: plan.title }}
                    className="mobilePlanBtn"
                  >
                    Choose Plan
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="developmentProcess">
          <div className="container">
            <div className="sectionHeading">
              <span data-aos="fade-up">OUR PROCESS</span>

              <h2 data-aos="fade-up">
                Your Website Journey
                <br />
                From Idea To Launch
              </h2>

              <p data-aos="fade-up">
                We follow a transparent step-by-step workflow that keeps you
                informed throughout the project until your website goes live.
              </p>
            </div>

            <div className="timeline">
              <div className="timelineLine"></div>

              {ourProcess.map((step, index) => (
                <div
                  className={`timelineItem ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                  data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
                  data-aos-delay={index * 200}
                  key={step.id}
                >
                  <div className="timelineCard">
                    <div className="timelineNumber">{step.id}</div>

                    <div className="timelineIcon">
                      <i className={step.icon}></i>
                    </div>

                    <h4>{step.title}</h4>

                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pricingFaq">
          <div className="container">
            <div className="sectionHeading">
              <span data-aos="fade-up">FAQ</span>

              <h2 data-aos="fade-up">Frequently Asked Questions</h2>

              <p data-aos="fade-up">
                Everything you need to know before starting your website
                project.
              </p>
            </div>

            <div className="faqWrapper">
              {faqData.map((faq, index) => (
                <div
                  className={`faqCard ${openFaq === index ? "activeFaq" : ""}`}
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <button
                    className="faqQuestion"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <span>{faq.question}</span>

                    <i
                      className={`fa-solid ${
                        openFaq === index ? "fa-minus" : "fa-plus"
                      }`}
                    ></i>
                  </button>

                  <div
                    className={`faqAnswer ${
                      openFaq === index ? "showAnswer" : ""
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pricingCTA">
          <div className="container" data-aos="fade-up">
            <div className="ctaBox">
              <span>🚀 READY TO GROW YOUR BUSINESS?</span>

              <h2>Let's Build Your Dream Website</h2>

              <p>
                Join businesses that trust NexGen Web Designs for modern,
                responsive and SEO-friendly websites.
              </p>

              <div className="ctaButtons">
                <Link to="/contact" className="ctaPrimary">
                  Start Your Project
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>

                <a href={`tel:${phoneNumber}`} className="ctaSecondary">
                  Call Now
                </a>
              </div>

              <div className="ctaBottom">
                <div>
                  <i className="fa-solid fa-shield-halved"></i>
                  Secure Payment
                </div>

                <div>
                  <i className="fa-solid fa-headset"></i>
                  Lifetime Support
                </div>

                <div>
                  <i className="fa-solid fa-bolt"></i>
                  Fast Delivery
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Pricing;
