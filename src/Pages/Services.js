// ServicesPage.js
import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { services, whyChooseUsData } from "../Data/Page Data/ServicesPageData";
import { phoneNumber, serverUrl, whatsappLink1 } from "../Data/BrandData";
import { ServicesPageSEO } from "../Data/AllPageSEOs";
import useCurrencyRate from "../Components/CurrencyRate";
import axios from "axios";

export const DiscountFun = (cost, totalCost) => {
  return Math.floor(((totalCost - cost) / totalCost) * 100);
};

const ServicesPage = () => {
  const correntDollarRate = useCurrencyRate();
  const [currentPage, setCurrentPage] = useState(0);
  const [pricings, setPricings] = useState([]);
  const [loading, setLoading] = useState(true);

  const servicesPerPage = 12;
  const offset = currentPage * servicesPerPage;
  const currentServices = services.slice(offset, offset + servicesPerPage);

  const pageCount = Math.ceil(services.length / servicesPerPage);
  const [timeLeftForBasic, setTimeLeftForBasic] = useState({});
  const [timeLeftForStandard, setTimeLeftForStandard] = useState({});
  const [timeLeftForPremium, setTimeLeftForPremium] = useState({});
  const [timeLeftForCustom, setTimeLeftForCustom] = useState({});
  const [conditions, setConditions] = useState({
    Basic: "",
    Standard: "",
    Premium: "",
    Custom: "",
  });

  const PricingFeatures = ({ features }) => (
    <ul className="list-unstyled mt-3 mb-4 pricing-list">
      {features.map((f, i) => {
        const label = typeof f.text === "function" ? f.text() : f.text;
        if (!label) return null;

        return (
          <li key={i}>
            <i
              className={`fa-solid ${
                f.included
                  ? "fa-circle-check text-success"
                  : "fa-circle-xmark text-danger"
              }`}
            ></i>{" "}
            {label}
          </li>
        );
      })}
    </ul>
  );

  const basicFeatures = [
    { text: "5 Pages Website", included: true },
    { text: "Responsive Design", included: true },
    { text: "Mobile Friendly", included: true },
    { text: "Free Hosting for 6 months", included: true },
    { text: "Free Domain for 1 year", included: true },
    { text: "Website maintenance for 1 month", included: true },
    { text: "Free SSL Certificate", included: true },
    { text: "Contact Form", included: false },

    {
      text: () =>
        `For Extra Page ${
          currency === "INR" ? "Rs. " : "$"
        } ${convertCurrency(pricings?.[0]?.extraPagePrice)} ${
          currency === "INR" ? "/-" : ""
        }`,
      included: true,
    },

    { text: "WhatsApp Button Integration", included: true },
    { text: "Call Button Integration", included: true },

    {
      text: () =>
        `Hosting Per 1 Year ${
          currency === "INR" ? "Rs. " : "$"
        } ${convertCurrency(pricings?.[0]?.hostingPrice)} ${
          currency === "INR" ? "/-" : ""
        }`,
      included: true,
    },

    { text: "Email Support", included: true },
    { text: "Basic SEO", included: true },
    { text: "Upto 1 Business Email Free", included: true },
    { text: "30% Advance, 70% Before Live Demo", included: true },
    { text: "Delivered in 5 Days", included: true },
  ];

  
  const standardFeatures = [
    { text: "10 Pages Website", included: true },
    { text: "Responsive Design", included: true },
    { text: "Mobile Friendly", included: true },
    { text: "Free Hosting for 1 Year", included: true },
    { text: "Free Domain for 1 year", included: true },
    { text: "Website Maintenance for 6 Months", included: true },
    { text: "Free SSL Certificate", included: true },
    { text: "Contact Form", included: false },

    {
      text: () =>
        pricings?.[1]?.extraPagePrice
          ? `For Extra Page ${
              currency === "INR" ? "Rs. " : "$"
            } ${convertCurrency(pricings[1].extraPagePrice)} ${
              currency === "INR" ? "/-" : ""
            }`
          : null,
      included: true,
    },

    { text: "WhatsApp Button Integration", included: true },
    { text: "Call Button Integration", included: true },

    {
      text: () =>
        pricings?.[1]?.hostingPrice
          ? `Hosting Per 1 Year ${
              currency === "INR" ? "Rs. " : "$"
            } ${convertCurrency(pricings[1].hostingPrice)} ${
              currency === "INR" ? "/-" : ""
            }`
          : null,
      included: true,
    },

    { text: "Priority Support", included: true },
    { text: "Medium SEO", included: true },
    { text: "Upto 2 Business Emails Free", included: true },
    { text: "30% Advance, 70% Before Live Demo", included: true },
    { text: "Delivered in 10 Days", included: true },
  ];

  const premiumFeatures = [
    { text: "Unlimited Pages Website", included: true },
    { text: "Responsive Design", included: true },
    { text: "Mobile Friendly", included: true },
    { text: "Free Hosting for 1 Year", included: true },
    { text: "Free Domain for 1 Year", included: true },
    { text: "Website Maintenance for 1 Year", included: true },
    { text: "Free SSL Certificate", included: true },
    { text: "Contact Form", included: true },
    { text: "WhatsApp Button Integration", included: true },
    { text: "Call Button Integration", included: true },

    {
      text: () =>
        pricings?.[2]?.hostingPrice
          ? `Hosting Per 1 Year ${
              currency === "INR" ? "Rs. " : "$"
            } ${convertCurrency(pricings[2].hostingPrice)} ${
              currency === "INR" ? "/-" : ""
            }`
          : null,
      included: true,
    },

    { text: "24/7 Support", included: true },
    { text: "Advanced SEO", included: true },
    { text: "Upto 10 Business Emails Free", included: true },
    { text: "30% Advance, 70% Before Live Demo", included: true },
    { text: "Delivered in 15 Days", included: true },
  ];

  const customFeatures = [
    {
      text: "Custom-designed, responsive WordPress + WooCommerce site",
      included: true,
    },
    {
      text: "Unlimited pages + free domain, hosting, SSL (1 year)",
      included: true,
    },
    {
      text: "Payment gateway: Razorpay, Gpay, PhonePe, PayPal, etc.",
      included: true,
    },
    {
      text: "Product setup (20 products, expandable)",
      included: true,
    },
    {
      text: "Order tracking + email notifications",
      included: true,
    },
    {
      text: "WhatsApp chat & call button integration",
      included: true,
    },
    {
      text: "Advanced on-page SEO + Google Analytics",
      included: true,
    },
    {
      text: "Contact form + inquiry system",
      included: true,
    },
    {
      text: "10 business emails linked to your domain",
      included: true,
    },
    {
      text: "Shipping setup (local or nationwide)",
      included: true,
    },
    {
      text: "Customer login + order history",
      included: true,
    },
    {
      text: "Basic security (Wordfence) + daily backups (UpdraftPlus)",
      included: true,
    },
    {
      text: "Admin panel + product/order training",
      included: true,
    },
    {
      text: "Delivered in 20 working days",
      included: true,
    },
    {
      text: "24/7 chat/email support after launch",
      included: true,
    },
    {
      text: "Payment Terms: 30% advance, 70% before live demo",
      included: true,
    },
  ];

  const getConditionForDisplay = (packageName) => {
    const price = pricings.find((p) => p.packageName === packageName);

    if (!price) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const offerStart = price.offerStartDate
      ? new Date(`${price.offerStartDate}T00:00:00`)
      : null;

    const offerEnd = price.offerEndDate
      ? new Date(`${price.offerEndDate}T23:59:59`)
      : null;

    return (
      price.isActive === true &&
      offerStart &&
      offerEnd &&
      today >= offerStart &&
      today <= offerEnd &&
      Number(price.extraOfferPrice) > 0 &&
      Number(price.extraOfferPrice) < Number(price.offerPrice)
    );
  };

  const calculateDifferenceTime = (difference) => {
    try {
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        return {
          days: days < 10 ? `0${days}` : days,
          hours: hours < 10 ? `0${hours}` : hours,
          minutes: minutes < 10 ? `0${minutes}` : minutes,
          seconds: seconds < 10 ? `0${seconds}` : seconds,
        };
      }
    } catch (error) {
      console.log(error);
    }
  };

  const calculateTimeLeft = (packageName, offerStartDate, offerEndDate) => {
    try {
      if (offerStartDate < new Date() || offerStartDate === undefined) {
        return;
      }
      if (packageName === "Basic") {
        const difference = new Date(`${offerEndDate}T23:59:59`) - new Date();
        const remainingDays = calculateDifferenceTime(difference);
        setTimeLeftForBasic(remainingDays);
      } else if (packageName === "Standard") {
        const difference = new Date(`${offerEndDate}T23:59:59`) - new Date();
        const remainingDays = calculateDifferenceTime(difference);
        setTimeLeftForStandard(remainingDays);
      } else if (packageName === "Premium") {
        const difference = new Date(`${offerEndDate}T23:59:59`) - new Date();
        const remainingDays = calculateDifferenceTime(difference);
        setTimeLeftForPremium(remainingDays);
      } else if (packageName === "Custom") {
        const difference = new Date(`${offerEndDate}T23:59:59`) - new Date();
        const remainingDays = calculateDifferenceTime(difference);
        setTimeLeftForCustom(remainingDays);
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const gettingTime = async () => {
      try {
        const response = (await axios.get(`${serverUrl}/pricings`)).data;
        if (response.message === "Success") {
          let data = response.data;
          setInterval(() => {
            data.map((pricing) => {
              return calculateTimeLeft(
                pricing.packageName,
                pricing.offerStartDate,
                pricing.offerEndDate,
              );
            });
          }, 1000);
        }
      } catch (error) {
        console.log(error);
      }
    };

    gettingTime();
    // eslint-disable-next-line
  }, []);

  // Handle page click
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const [currency, setCurrency] = useState("INR");

  const convertCurrency = (priceInINR) => {
    return currency === "INR"
      ? priceInINR
      : (priceInINR / correntDollarRate).toFixed(0);
  };

  const fetchPricings = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${serverUrl}/pricings`);
      if (response.data.message === "Success") {
        setPricings(response.data.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const isPricingConfigured = pricings && pricings.length > 0;

  const getPricingByPackage = (packageName) => {
    return pricings.find((p) => p.packageName === packageName) || null;
  };

  const checkBasicPackage = getPricingByPackage("Basic");
  const checkStandardPackage = getPricingByPackage("Standard");
  const checkPremiumPackage = getPricingByPackage("Premium");
  const checkCustomPackage = getPricingByPackage("Custom");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchPricings();
    // eslint-disable-next-line
  }, []);

  console.log(pricings);

  useMemo(() => {
    if (!pricings?.length) return null;

    return setConditions({
      Basic: getConditionForDisplay("Basic"),
      Standard: getConditionForDisplay("Standard"),
      Premium: getConditionForDisplay("Premium"),
      Custom: getConditionForDisplay("Custom"),
    });
    // eslint-disable-next-line
  }, [pricings]);

  return (
    <>
      {ServicesPageSEO}
      {/* Services Section */}
      <section className="">
        <div className="services-main-cotainer-img d-flex align-items-center justify-content-center flex-column">
          <h3 className="text-center text-warning">Service Highlights</h3>
          <p className="text-center text-white">
            " Custom web solutions can help your organization achieve its goals
            and shape its future. "
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
                Services
              </li>
            </ol>
          </nav>
        </div>

        {/* Sevices Section */}
        <h2 className="text-center mb-4 mt-4 services-sub-heading section-heading">
          Our Services
        </h2>
        <p className="text-center p-2">
          Transforming your vision into reality with modern web solutions,
          tailored designs, and reliable services that scale with your business.
        </p>
        <div className="d-flex justify-content-around flex-wrap gap-2">
          {currentServices.map((service, index) => (
            <div key={index} data-aos="zoom-in">
              <div className="card text-center border-0 shadow services-card">
                <div className="card-body p-2 service-image-container">
                  <img
                    alt={service.title}
                    src={service.icon}
                    width={"100%"}
                    className="mb-2"
                  />
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* React Paginate component */}
      <div className="pagination-controls d-flex justify-content-center mt-4">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>

      {/* Pricing Section */}
      <div className="py-5">
        <h2 className="text-center mb-4 section-heading">
          Best Pricing Packages
        </h2>
        <p className="text-center p-3">
          Flexible price based on the requirements of your company. Choose from
          our Basic, Standard, or Premium plans to establish, expand, and scale
          your online presence with expert web development services and top-tier
          support.
        </p>
        <div className="currency-switch text-center">
          <h5>Change Currency</h5>
          <button
            onClick={() => setCurrency("INR")}
            className="btn btn-info"
            style={{ width: "6rem", margin: "1rem 2rem" }}
          >
            <i className={`fa-solid fa-indian-rupee-sign`}></i> INR
          </button>
          <button
            onClick={() => setCurrency("USD")}
            className="btn btn-warning"
            style={{ width: "6rem", margin: "1rem 2rem" }}
          >
            <i className={`fa-solid fa-dollar-sign`}></i> USD
          </button>
        </div>
        <div className="m-auto pricing-cards-container">
          {/* Basic Plan */}
          <div className="card shadow border-primary" data-aos="zoom-in">
            <div className="pricing-badge basic-pricing-badge ">
              <span className="badge">New</span>
            </div>
            <div className="card-body">
              <h4 className="card-title text-primary text-center">
                Basic Plan
              </h4>
              <p className="card-text text-center">
                <i className="fas fa-globe fa-2x text-primary mb-3"></i>
              </p>
              {loading && (
                <div>
                  <p className="text-center">Prices loading....</p>
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status"></div>
                  </div>
                </div>
              )}
              {isPricingConfigured && checkBasicPackage && (
                <div style={{ display: `${!loading ? "flex" : "none"}` }}>
                  <div>
                    <div className="card-price">
                      <span
                        className="text-decoration-line-through"
                        style={{ fontSize: "1.2rem", fontWeight: "500" }}
                      >
                        <i
                          className={`fa-solid fa-${
                            currency === "INR"
                              ? "indian-rupee-sign"
                              : "dollar-sign"
                          }`}
                        ></i>{" "}
                        {convertCurrency(
                          pricings.find(
                            (price) => price.packageName === "Basic",
                          )?.actualPrice || 0,
                        )}
                      </span>{" "}
                      <span className="period">
                        (
                        {currency === "INR"
                          ? DiscountFun(
                              pricings.find(
                                (price) => price.packageName === "Basic",
                              )?.offerPrice || 0,
                              pricings.find(
                                (price) => price.packageName === "Basic",
                              )?.actualPrice || 0,
                            )
                          : DiscountFun(
                              convertCurrency(
                                pricings.find(
                                  (price) => price.packageName === "Basic",
                                )?.offerPrice || 0,
                              ),
                              convertCurrency(
                                pricings.find(
                                  (price) => price.packageName === "Basic",
                                )?.actualPrice || 0,
                              ),
                            )}
                        % Off)
                      </span>
                    </div>

                    {conditions.Basic && (
                      <div className="card-price">
                        <span
                          className="text-decoration-line-through"
                          style={{ fontSize: "1.2rem", fontWeight: "500" }}
                        >
                          {" "}
                          <i
                            className={`fa-solid fa-${
                              currency === "INR"
                                ? "indian-rupee-sign"
                                : "dollar-sign"
                            }`}
                          ></i>{" "}
                          {convertCurrency(
                            pricings.find(
                              (price) => price.packageName === "Basic",
                            )?.offerPrice || 0,
                          )}
                        </span>{" "}
                        <span className="period">
                          (
                          {currency === "INR"
                            ? DiscountFun(
                                pricings.find(
                                  (price) => price.packageName === "Basic",
                                )?.extraOfferPrice || 0,
                                pricings.find(
                                  (price) => price.packageName === "Basic",
                                )?.actualPrice || 0,
                              )
                            : DiscountFun(
                                convertCurrency(
                                  pricings.find(
                                    (price) => price.packageName === "Basic",
                                  )?.extraOfferPrice || 0,
                                ),
                                convertCurrency(
                                  pricings.find(
                                    (price) => price.packageName === "Basic",
                                  )?.actualPrice || 0,
                                ),
                              )}
                          % Off)
                        </span>
                      </div>
                    )}

                    <h4 className="card-price">
                      <i
                        className={`fa-solid fa-${
                          currency === "INR"
                            ? "indian-rupee-sign"
                            : "dollar-sign"
                        }`}
                      ></i>{" "}
                      {conditions.Basic
                        ? convertCurrency(
                            pricings.find(
                              (price) => price.packageName === "Basic",
                            )?.extraOfferPrice,
                          )
                        : convertCurrency(
                            pricings.find(
                              (price) => price.packageName === "Basic",
                            )?.offerPrice,
                          )}
                      <span className="period">/ per Project</span>
                    </h4>

                    {conditions.Basic && (
                      <p className="mt-3 mb-0">
                        {
                          pricings.find((price) => {
                            return price.packageName === "Basic";
                          })?.offerDescription
                        }
                      </p>
                    )}

                    {conditions.Basic && (
                      <div className="countdown-timer">
                        <div className="countdown-item">
                          <span className="countdown-number ">
                            {timeLeftForBasic.days}
                          </span>
                          <span style={{ fontSize: "0.9rem" }}>Days</span>
                        </div>
                        <div style={{ fontSize: "1.4rem" }}>:</div>
                        <div className="countdown-item">
                          <span className="countdown-number ">
                            {" "}
                            {timeLeftForBasic.hours}
                          </span>
                          <span style={{ fontSize: "0.9rem" }}>Hours</span>
                        </div>
                        <div style={{ fontSize: "1.4rem" }}>:</div>
                        <div className="countdown-item">
                          <span className="countdown-number ">
                            {" "}
                            {timeLeftForBasic.minutes}
                          </span>
                          <span style={{ fontSize: "0.9rem" }}>Minutes</span>
                        </div>
                        <div style={{ fontSize: "1.4rem" }}>:</div>
                        <div className="countdown-item">
                          <span className="countdown-number ">
                            {" "}
                            {timeLeftForBasic.seconds}
                          </span>
                          <span style={{ fontSize: "0.9rem" }}>Seconds</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {!checkBasicPackage && (
                <div className="pricing-card disabled">
                  <p className="pricing-muted">Pricing not available</p>
                  <button className="text-danger bg-light btn ">
                    Coming Soon
                  </button>
                </div>
              )}
              <h6 className="mt-4">What's Included:</h6>
              <PricingFeatures features={basicFeatures} />
              <div className="d-flex align-items-center justify-content-around flex-wrap">
                <Link className="btn btn-primary" to={`tel:${phoneNumber}`}>
                  <i className="fa-solid fa-phone"></i> Call Now
                </Link>
                <Link className="btn btn-warning ms-1" to={whatsappLink1}>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp Now
                </Link>
              </div>
            </div>
          </div>

          {/* Standard Plan */}
          <div
            className="card shadow border-success pricing-card"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="pricing-badge">
              <span className="badge">Featured</span>
            </div>
            <div className="card-body">
              <h4 className="card-title text-success text-center">
                Standard Plan
              </h4>
              <p className="card-text text-center">
                <i className="fas fa-laptop-code fa-2x text-success mb-3"></i>
              </p>
              {loading && (
                <div>
                  <p className="text-center">Prices loading....</p>
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status"></div>
                  </div>
                </div>
              )}

              {isPricingConfigured && checkStandardPackage && (
                <div style={{ display: `${!loading ? "flex" : "none"}` }}>
                  <div>
                    <div className="card-price">
                      <span
                        className="text-decoration-line-through"
                        style={{ fontSize: "1.2rem", fontWeight: "500" }}
                      >
                        <i
                          className={`fa-solid fa-${
                            currency === "INR"
                              ? "indian-rupee-sign"
                              : "dollar-sign"
                          }`}
                        ></i>{" "}
                        {convertCurrency(
                          pricings.find(
                            (price) => price.packageName === "Standard",
                          )?.actualPrice || 0,
                        )}
                      </span>{" "}
                      <span className="period">
                        (
                        {currency === "INR"
                          ? DiscountFun(
                              pricings.find(
                                (price) => price.packageName === "Standard",
                              )?.offerPrice || 0,
                              pricings.find(
                                (price) => price.packageName === "Standard",
                              )?.actualPrice || 0,
                            )
                          : DiscountFun(
                              convertCurrency(
                                pricings.find(
                                  (price) => price.packageName === "Standard",
                                )?.offerPrice || 0,
                              ),
                              convertCurrency(
                                pricings.find(
                                  (price) => price.packageName === "Standard",
                                )?.actualPrice || 0,
                              ),
                            )}
                        % Off)
                      </span>
                    </div>

                    {conditions.Standard && (
                      <div className="card-price">
                        <span
                          className="text-decoration-line-through"
                          style={{ fontSize: "1.2rem", fontWeight: "500" }}
                        >
                          {" "}
                          <i
                            className={`fa-solid fa-${
                              currency === "INR"
                                ? "indian-rupee-sign"
                                : "dollar-sign"
                            }`}
                          ></i>{" "}
                          {convertCurrency(
                            pricings.find(
                              (price) => price.packageName === "Standard",
                            )?.offerPrice || 0,
                          )}
                        </span>{" "}
                        <span className="period">
                          (
                          {currency === "INR"
                            ? DiscountFun(
                                pricings.find(
                                  (price) => price.packageName === "Standard",
                                )?.extraOfferPrice || 0,
                                pricings.find(
                                  (price) => price.packageName === "Standard",
                                )?.actualPrice || 0,
                              )
                            : DiscountFun(
                                convertCurrency(
                                  pricings.find(
                                    (price) => price.packageName === "Standard",
                                  )?.extraOfferPrice || 0,
                                ),
                                convertCurrency(
                                  pricings.find(
                                    (price) => price.packageName === "Standard",
                                  )?.actualPrice || 0,
                                ),
                              )}
                          % Off)
                        </span>
                      </div>
                    )}

                    <h4 className="card-price">
                      <i
                        className={`fa-solid fa-${
                          currency === "INR"
                            ? "indian-rupee-sign"
                            : "dollar-sign"
                        }`}
                      ></i>{" "}
                      {conditions.Standard
                        ? convertCurrency(
                            pricings.find(
                              (price) => price.packageName === "Standard",
                            )?.extraOfferPrice,
                          )
                        : convertCurrency(
                            pricings.find(
                              (price) => price.packageName === "Standard",
                            )?.offerPrice,
                          )}
                      <span className="period">/ per Project</span>
                    </h4>

                    {conditions.Standard && (
                      <p className="mt-3 mb-0">
                        {
                          pricings.find((price) => {
                            return price.packageName === "Standard";
                          })?.offerDescription
                        }
                      </p>
                    )}

                    {conditions.Standard && (
                      <div className="countdown-timer">
                        <div className="countdown-item">
                          <span className="countdown-number ">
                            {timeLeftForStandard.days}
                          </span>
                          <span style={{ fontSize: "0.9rem" }}>Days</span>
                        </div>
                        <div style={{ fontSize: "1.4rem" }}>:</div>
                        <div className="countdown-item">
                          <span className="countdown-number ">
                            {timeLeftForStandard.hours}
                          </span>
                          <span style={{ fontSize: "0.9rem" }}>Hours</span>
                        </div>
                        <div style={{ fontSize: "1.4rem" }}>:</div>
                        <div className="countdown-item">
                          <span className="countdown-number ">
                            {timeLeftForStandard.minutes}
                          </span>
                          <span style={{ fontSize: "0.9rem" }}>Minutes</span>
                        </div>
                        <div style={{ fontSize: "1.4rem" }}>:</div>
                        <div className="countdown-item">
                          <span className="countdown-number ">
                            {timeLeftForStandard.seconds}
                          </span>
                          <span style={{ fontSize: "0.9rem" }}>Seconds</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {!checkStandardPackage && (
                <div className="pricing-card disabled">
                  <p className="pricing-muted">Pricing not available</p>
                  <button className="text-danger bg-light btn ">
                    Coming Soon
                  </button>
                </div>
              )}
              <h6 className="mt-4">What's Included:</h6>
              <PricingFeatures features={standardFeatures} />
              <div className="d-flex align-items-center justify-content-around flex-wrap">
                <Link className="btn btn-success" to={`tel:${phoneNumber}`}>
                  <i className="fa-solid fa-phone"></i> Call Now
                </Link>
                <Link className="btn btn-warning ms-1" to={whatsappLink1}>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp Now
                </Link>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div
            className="card shadow border-warning"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div className="premium-pricing-badge">
              <span className="badge">🔥Popular</span>
            </div>
            <div className="card-body">
              <h4 className="card-title text-warning text-center ">
                Premium Plan
              </h4>
              <p className="card-text text-center ">
                <i className="fas fa-rocket fa-2x text-warning mb-3"></i>
              </p>

              {loading && (
                <div>
                  <p className="text-center">Prices loading....</p>
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status"></div>
                  </div>
                </div>
              )}

              {isPricingConfigured && checkPremiumPackage && (
                <div style={{ display: `${!loading ? "flex" : "none"}` }}>
                  <div>
                    <div className="card-price">
                      <span
                        className="text-decoration-line-through"
                        style={{ fontSize: "1.2rem", fontWeight: "500" }}
                      >
                        {" "}
                        <i
                          className={`fa-solid fa-${
                            currency === "INR"
                              ? "indian-rupee-sign"
                              : "dollar-sign"
                          }`}
                        ></i>{" "}
                        {convertCurrency(
                          pricings.find(
                            (price) => price.packageName === "Premium",
                          )?.actualPrice || 0,
                        )}
                      </span>{" "}
                      <span className="period">
                        (
                        {currency === "INR"
                          ? DiscountFun(
                              pricings.find(
                                (price) => price.packageName === "Premium",
                              )?.offerPrice || 0,
                              pricings.find(
                                (price) => price.packageName === "Premium",
                              )?.actualPrice || 0,
                            )
                          : DiscountFun(
                              convertCurrency(
                                pricings.find(
                                  (price) => price.packageName === "Premium",
                                )?.offerPrice || 0,
                              ),
                              convertCurrency(
                                pricings.find(
                                  (price) => price.packageName === "Premium",
                                )?.actualPrice || 0,
                              ),
                            )}
                        % Off)
                      </span>
                    </div>

                    {conditions.Premium && (
                      <div className="card-price">
                        <span
                          className="text-decoration-line-through"
                          style={{ fontSize: "1.2rem", fontWeight: "500" }}
                        >
                          {" "}
                          <i
                            className={`fa-solid fa-${
                              currency === "INR"
                                ? "indian-rupee-sign"
                                : "dollar-sign"
                            }`}
                          ></i>{" "}
                          {convertCurrency(
                            pricings.find(
                              (price) => price.packageName === "Premium",
                            )?.offerPrice || 0,
                          )}
                        </span>{" "}
                        <span className="period">
                          (
                          {currency === "INR"
                            ? DiscountFun(
                                pricings.find(
                                  (price) => price.packageName === "Premium",
                                )?.extraOfferPrice || 0,
                                pricings.find(
                                  (price) => price.packageName === "Premium",
                                )?.actualPrice || 0,
                              )
                            : DiscountFun(
                                convertCurrency(
                                  pricings.find(
                                    (price) => price.packageName === "Premium",
                                  )?.extraOfferPrice || 0,
                                ),
                                convertCurrency(
                                  pricings.find(
                                    (price) => price.packageName === "Premium",
                                  )?.actualPrice || 0,
                                ),
                              )}
                          % Off)
                        </span>
                      </div>
                    )}

                    <h4 className="card-price">
                      <i
                        className={`fa-solid fa-${
                          currency === "INR"
                            ? "indian-rupee-sign"
                            : "dollar-sign"
                        }`}
                      ></i>{" "}
                      {conditions.Premium
                        ? convertCurrency(
                            pricings.find(
                              (price) => price.packageName === "Premium",
                            )?.extraOfferPrice,
                          )
                        : convertCurrency(
                            pricings.find(
                              (price) => price.packageName === "Premium",
                            )?.offerPrice,
                          )}
                      <span className="period">/ per Project</span>
                    </h4>

                    {conditions.Premium && (
                      <p className="mt-3 mb-0">
                        {
                          pricings.find((price) => {
                            return price.packageName === "Premium";
                          })?.offerDescription
                        }
                      </p>
                    )}

                    {conditions.Premium && (
                      <div className="countdown-timer">
                        <div className="countdown-item">
                          <span className="countdown-number ">
                            {timeLeftForPremium.days}
                          </span>
                          <span style={{ fontSize: "0.9rem" }}>Days</span>
                        </div>
                        <div style={{ fontSize: "1.4rem" }}>:</div>
                        <div className="countdown-item">
                          <span className="countdown-number ">
                            {timeLeftForPremium.hours}
                          </span>
                          <span style={{ fontSize: "0.9rem" }}>Hours</span>
                        </div>
                        <div style={{ fontSize: "1.4rem" }}>:</div>
                        <div className="countdown-item">
                          <span className="countdown-number ">
                            {timeLeftForPremium.minutes}
                          </span>
                          <span style={{ fontSize: "0.9rem" }}>Minutes</span>
                        </div>
                        <div style={{ fontSize: "1.4rem" }}>:</div>
                        <div className="countdown-item">
                          <span className="countdown-number ">
                            {timeLeftForPremium.seconds}
                          </span>
                          <span style={{ fontSize: "0.9rem" }}>Seconds</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {!checkPremiumPackage && (
                <div className="pricing-card disabled">
                  <p className="pricing-muted">Pricing not available</p>
                  <button className="text-danger bg-light btn ">
                    Coming Soon
                  </button>
                </div>
              )}

              <h6 className="mt-4">What's Included:</h6>
              <PricingFeatures features={premiumFeatures} />
              <div className="d-flex align-items-center justify-content-around flex-wrap">
                <Link className="btn btn-dark" to={`tel:${phoneNumber}`}>
                  <i className="fa-solid fa-phone"></i> Call Now
                </Link>
                <Link className="btn btn-warning ms-1" to={whatsappLink1}>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp Now
                </Link>
              </div>
            </div>
          </div>

          {/* Custom Package */}
          <div
            className="card shadow border-primary mb-5"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="premium-pricing-badge">
              <span className="badge bg-primary text-white">💼 Custom</span>
            </div>
            <div className="card-body">
              <h4 className="card-title text-primary text-center">
                Custom Package
              </h4>
              <p className="text-center mb-3 fst-italic">
                Tailored Solutions Like E-Commerce Sites
              </p>
              <p className="card-text text-center ">
                <i className="fa-solid fa-gem fa-2x text-warning mb-3"></i>
              </p>
              {/* Pricing Section */}

              {loading && (
                <div>
                  <p className="text-center">Prices loading....</p>
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status"></div>
                  </div>
                </div>
              )}

              {isPricingConfigured && checkCustomPackage && (
                <div style={{ display: `${!loading ? "flex" : "none"}` }}>
                  <div>
                    <div className="card-price">
                      <span
                        className="text-decoration-line-through"
                        style={{ fontSize: "1.2rem", fontWeight: "500" }}
                      >
                        {" "}
                        <i
                          className={`fa-solid fa-${
                            currency === "INR"
                              ? "indian-rupee-sign"
                              : "dollar-sign"
                          }`}
                        ></i>{" "}
                        {convertCurrency(
                          pricings.find(
                            (price) => price.packageName === "Custom",
                          )?.actualPrice || 0,
                        )}
                      </span>{" "}
                      <span className="period">
                        (
                        {currency === "INR"
                          ? DiscountFun(
                              pricings.find(
                                (price) => price.packageName === "Custom",
                              )?.offerPrice || 0,
                              pricings.find(
                                (price) => price.packageName === "Custom",
                              )?.actualPrice || 0,
                            )
                          : DiscountFun(
                              convertCurrency(
                                pricings.find(
                                  (price) => price.packageName === "Custom",
                                )?.offerPrice || 0,
                              ),
                              convertCurrency(
                                pricings.find(
                                  (price) => price.packageName === "Custom",
                                )?.actualPrice || 0,
                              ),
                            )}
                        % Off)
                      </span>
                    </div>

                    {conditions.Custom && (
                      <div className="card-price">
                        <span
                          className="text-decoration-line-through"
                          style={{ fontSize: "1.2rem", fontWeight: "500" }}
                        >
                          {" "}
                          <i
                            className={`fa-solid fa-${
                              currency === "INR"
                                ? "indian-rupee-sign"
                                : "dollar-sign"
                            }`}
                          ></i>{" "}
                          {convertCurrency(
                            pricings.find(
                              (price) => price.packageName === "Custom",
                            )?.offerPrice || 0,
                          )}
                        </span>{" "}
                        <span className="period">
                          (
                          {currency === "INR"
                            ? DiscountFun(
                                pricings.find(
                                  (price) => price.packageName === "Custom",
                                )?.extraOfferPrice || 0,
                                pricings.find(
                                  (price) => price.packageName === "Custom",
                                )?.actualPrice || 0,
                              )
                            : DiscountFun(
                                convertCurrency(
                                  pricings.find(
                                    (price) => price.packageName === "Custom",
                                  )?.extraOfferPrice || 0,
                                ),
                                convertCurrency(
                                  pricings.find(
                                    (price) => price.packageName === "Custom",
                                  )?.actualPrice || 0,
                                ),
                              )}
                          % Off)
                        </span>
                      </div>
                    )}

                    <h4 className="card-price">
                      <i
                        className={`fa-solid fa-${
                          currency === "INR"
                            ? "indian-rupee-sign"
                            : "dollar-sign"
                        }`}
                      ></i>{" "}
                      {conditions.Custom
                        ? convertCurrency(
                            pricings.find(
                              (price) => price.packageName === "Custom",
                            )?.extraOfferPrice,
                          )
                        : convertCurrency(
                            pricings.find(
                              (price) => price.packageName === "Custom",
                            )?.offerPrice,
                          )}
                      <span className="period">/ per Project</span>
                    </h4>

                    {conditions.Custom && (
                      <p className="mt-3 mb-0">
                        {
                          pricings.find((price) => {
                            return price.packageName === "Custom";
                          })?.offerDescription
                        }
                      </p>
                    )}

                    {conditions.Custom && (
                      <div className="countdown-timer">
                        <div className="countdown-item">
                          <span className="countdown-number ">
                            {timeLeftForCustom.days}
                          </span>
                          <span style={{ fontSize: "0.9rem" }}>Days</span>
                        </div>
                        <div style={{ fontSize: "1.4rem" }}>:</div>
                        <div className="countdown-item">
                          <span className="countdown-number ">
                            {timeLeftForCustom.hours}
                          </span>
                          <span style={{ fontSize: "0.9rem" }}>Hours</span>
                        </div>
                        <div style={{ fontSize: "1.4rem" }}>:</div>
                        <div className="countdown-item">
                          <span className="countdown-number ">
                            {timeLeftForCustom.minutes}
                          </span>
                          <span style={{ fontSize: "0.9rem" }}>Minutes</span>
                        </div>
                        <div style={{ fontSize: "1.4rem" }}>:</div>
                        <div className="countdown-item">
                          <span className="countdown-number ">
                            {timeLeftForCustom.seconds}
                          </span>
                          <span style={{ fontSize: "0.9rem" }}>Seconds</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {!checkCustomPackage && (
                <div className="pricing-card disabled">
                  <p className="pricing-muted">Pricing not available</p>
                  <button className="text-danger bg-light btn ">
                    Coming Soon
                  </button>
                </div>
              )}

              {/* Features List */}
              <h6 className="fw-bold text-dark mt-4 mb-3">What’s Included:</h6>

              <PricingFeatures features={customFeatures} />

              {/* CTA Button */}
              <div className="d-flex align-items-center justify-content-around flex-wrap">
                <Link className="btn btn-secondary" to={`tel:${phoneNumber}`}>
                  <i className="fa-solid fa-phone"></i> Call Now
                </Link>
                <Link className="btn btn-warning ms-1" to={whatsappLink1}>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Lets Talk Section */}
      <section
        className="py-5"
        style={{ background: "linear-gradient(to right, #f8fafc, #e3f2fd)" }}
      >
        <div className="container text-center">
          <h2 className="mb-4 section-heading" style={{ color: "#007bff" }}>
            Let's Talk About Your Project
          </h2>
          <p className="mb-5" style={{ color: "#495057" }}>
            We can assist you whether you're launching a brand-new project or
            want maintenance for your already-existing website.
          </p>
          <Link
            to={`tel:${phoneNumber}`}
            className="btn btn-primary shadow-sm"
            style={{ transition: "transform 0.3s ease" }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <i className="fa-solid fa-phone"></i> Get in Touch
          </Link>
        </div>
      </section>

      {/* Why choose us section  */}

      <section className="py-5">
        <div className="text-center">
          <h2 className="mb-4 section-heading" style={{ color: "#E56399" }}>
            Why Choose Us ?
          </h2>
          <p className="mb-5" style={{ color: "#495057" }}>
            We offer the greatest services to guarantee the success of your
            company. Here's why you ought to pick us:
          </p>

          <div className="d-flex justify-content-around align-items-center flex-wrap">
            {whyChooseUsData.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={`${(index + 1) * 100}`}
              >
                <div className={`p-4 why-choose-us-container ${item.color}`}>
                  <h5>{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <div className="why-choose-us-icon">
                    <span>
                      <i className={`${item.icon} mb-3`}></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
