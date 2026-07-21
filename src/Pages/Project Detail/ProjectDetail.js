import React, { useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import "./ProjectDetail.css";

const sampleProjects = [
  {
    id: 1,

    slug: "real-estate-website",

    category: "Real Estate",

    title: "Real Estate Website",

    description:
      "A premium real estate website designed to help agencies showcase properties, generate qualified leads, and build trust with modern UI and high performance.",

    longDescription:
      "The Real Estate Website was developed for a modern property business looking to strengthen its online presence and simplify property discovery for customers. Our goal was to create a premium digital experience that combines beautiful design, fast performance, advanced property search, and seamless lead generation. Every section was carefully crafted to improve user engagement, increase enquiries, and establish the client's brand as a trusted real estate company.",

    image: require("../../Assets/Real_Estate_Website.png"),

    gallery: [
      require("../../Assets/Real_Estate_Website.png"),
      require("../../Assets/Real_Estate_Website.png"),
      require("../../Assets/Real_Estate_Website.png"),
    ],

    icon: "fas fa-building",

    clientName: "Elite Realty",

    industry: "Real Estate",

    location: "Hyderabad, India",

    websiteType: "Business Website",

    status: "Completed",

    deliveryDate: "10 March 2024",

    projectDuration: "18 Days",

    liveLink: "https://dharanirealestate.netlify.app/",

    technologiesUsed: ["React.js", "Bootstrap 5", "JavaScript", "CSS3"],

    projectOverview:
      "Elite Realty required a modern digital platform capable of presenting premium property listings while improving customer trust and generating qualified enquiries. The previous website lacked responsiveness, search functionality, and a professional appearance. We redesigned the entire experience with a clean interface, interactive property browsing, responsive layouts, and optimized performance.",

    challenge:
      "The client's previous website was outdated, difficult to manage, and failed to convert visitors into enquiries. Property information was hard to browse, pages loaded slowly, and the website was not optimized for mobile users or search engines.",

    solution:
      "We designed and developed a fully responsive real estate platform featuring advanced property filtering, premium UI components, optimized page performance, SEO-friendly architecture, and strategically placed enquiry forms to maximize lead generation.",

    businessGoals: [
      "Increase online property enquiries",
      "Improve customer trust",
      "Modernize company branding",
      "Improve Google visibility",
      "Deliver a mobile-first experience",
      "Showcase premium property listings",
    ],

    features: [
      "Advanced Property Search",
      "Property Categories",
      "Property Detail Pages",
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
      "WhatsApp Integration",
      "Contact Forms",
      "Google Maps",
      "Image Gallery",
      "Premium UI/UX",
      "Easy Navigation",
    ],

    developmentProcess: [
      "Requirement Analysis",
      "Wireframe Planning",
      "UI/UX Design",
      "Frontend Development",
      "Responsive Optimization",
      "Performance Optimization",
      "Testing",
      "Deployment",
    ],

    projectStatistics: {
      totalPages: 12,
      components: 35,
      sections: 48,
      responsiveScreens: 5,
      performance: 98,
      seo: 97,
      accessibility: 96,
      bestPractices: 98,
    },

    beforeAfter: {
      before: [
        "Outdated design",
        "Poor mobile experience",
        "Slow loading",
        "No property filtering",
        "Low customer engagement",
      ],

      after: [
        "Premium modern interface",
        "Fully responsive",
        "Fast loading speed",
        "Advanced search filters",
        "Higher enquiry conversions",
      ],
    },

    testimonial: {
      review:
        "NexGen Web Designs delivered exactly what our business needed. The website looks professional, performs exceptionally well, and has significantly improved our customer enquiries. The entire development process was smooth and highly professional.",

      name: "Rajesh Kumar",

      designation: "Managing Director",

      company: "Elite Realty",

      image: require("../../Assets/Amruthasalon.png"),
    },

    results: [
      "Improved online credibility",
      "Faster website performance",
      "Better mobile experience",
      "SEO-ready architecture",
      "Higher customer engagement",
      "Professional brand identity",
    ],

    nextProjectIds: [2, 4, 12],

    projectStatisticsData: [
      {
        title: "PageSpeed",
        value: "98%",
        icon: "fa-solid fa-gauge-high",
        description:
          "Optimized assets and lazy loading ensure an excellent loading experience.",
      },

      {
        title: "SEO Score",
        value: "97%",
        icon: "fa-brands fa-searchengin",
        description:
          "Structured metadata and technical SEO improve search visibility.",
      },

      {
        title: "Accessibility",
        value: "96%",
        icon: "fa-solid fa-universal-access",
        description:
          "Designed for users of all abilities following accessibility best practices.",
      },

      {
        title: "Responsive",
        value: "100%",
        icon: "fa-solid fa-mobile-screen-button",
        description: "Perfectly adapts to desktop, tablet and mobile devices.",
      },
    ],
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = sampleProjects.find((item) => item.id === Number(id));

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (project) {
      document.title = `${project.title} | NexGen Web Designs`;
    } else {
      document.title = "Project Not Found";
    }
  }, [project]);

  if (!project) {
    return (
      <>
        <div className="nx404Browser__body">
          <div className="nx404Search">
            <div className="nx404Search__circle">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <h3>Searching Project Archive...</h3>

            <p>Looking through completed case studies...</p>

            <div className="nx404Progress">
              <div className="nx404Progress__bar"></div>
            </div>

            <div className="nx404Logs">
              <div>
                <i className="fa-solid fa-circle-check"></i>
                Connecting to project archive...
              </div>

              <div>
                <i className="fa-solid fa-circle-check"></i>
                Searching completed projects...
              </div>

              <div>
                <i className="fa-solid fa-spinner"></i>
                Checking deployment records...
              </div>

              <div className="nx404Error">
                <i className="fa-solid fa-circle-xmark"></i>
                No matching project found.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="nxProjectHero">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-6">
              <div className="nxProjectHero__content">
                <div className="nxProjectHero__breadcrumb">
                  <Link to="/">Home</Link>

                  <span>/</span>

                  <Link to="/portfolio">Portfolio</Link>

                  <span>/</span>

                  <strong>{project.title}</strong>
                </div>

                <span className="nxProjectHero__badge">{project.category}</span>

                <h1>{project.title}</h1>

                <p>{project.longDescription}</p>
                <div className="nxProjectHero__meta">
                  <div>
                    <small>Client</small>

                    <h5>{project.clientName}</h5>
                  </div>

                  <div>
                    <small>Completed</small>

                    <h5>{project.deliveryDate}</h5>
                  </div>
                </div>
                <div className="nxProjectHero__tech">
                  {project.technologiesUsed.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <div className="nxProjectHero__buttons">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="nxPrimaryBtn"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Live Website
                  </a>

                  <Link to="/contact" className="nxSecondaryBtn">
                    Start Similar Project
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="nxProjectHero__preview">
                <div className="nxProjectHero__device">
                  <div className="nxProjectHero__browser">
                    <span></span>

                    <span></span>

                    <span></span>
                  </div>

                  <img src={project.image} alt={project.title} />
                </div>

                <div className="nxProjectHero__floating floatingOne">
                  <i className="fa-solid fa-circle-check"></i>

                  <div>
                    <h6>Project Completed</h6>

                    <small>Successfully Delivered</small>
                  </div>
                </div>

                <div className="nxProjectHero__floating floatingTwo">
                  <i className="fa-solid fa-star"></i>

                  <div>
                    <h6>Premium UI</h6>

                    <small>Responsive Design</small>
                  </div>
                </div>

                <div className="nxProjectHero__floating floatingThree">
                  <i className="fa-solid fa-bolt"></i>

                  <div>
                    <h6>High Performance</h6>

                    <small>Optimized Website</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nxProjectOverview">
        <div className="container">
          <div className="nxProjectSectionHeading">
            <span>CASE STUDY</span>

            <h2>
              From Business Challenge
              <br />
              To Digital Success
            </h2>

            <p>
              Every successful website begins with understanding the business,
              identifying its challenges, and building a solution that delivers
              measurable results. Here's how we transformed this project.
            </p>
          </div>

          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="nxProjectOverview__image">
                <img src={project.image} alt={project.title} />

                <div className="nxProjectOverview__badge">
                  <i className="fa-solid fa-circle-check"></i>
                  Successfully Delivered
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="nxProjectOverview__content">
                <span className="nxProjectMiniTitle">PROJECT OVERVIEW</span>

                <h3>{project.title}</h3>

                <p>{project.projectOverview}</p>

                <div className="nxProjectOverview__info">
                  <div>
                    <small>Industry</small>

                    <h5>{project.industry}</h5>
                  </div>

                  <div>
                    <small>Website Type</small>

                    <h5>{project.websiteType}</h5>
                  </div>

                  <div>
                    <small>Project Duration</small>

                    <h5>{project.projectDuration}</h5>
                  </div>

                  <div>
                    <small>Status</small>

                    <h5>{project.status}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nxProjectSection nxProjectHighlights">
        <div className="container">
          <div className="nxProjectSectionHeading">
            <span>PROJECT HIGHLIGHTS</span>

            <h2>
              Designed Around
              <br />
              Business Growth
            </h2>

            <p>
              Every decision made during development was focused on improving
              customer experience, increasing trust, and helping the business
              grow online.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="nxHighlightsCard">
                <div className="nxHighlightsCard__header">
                  <div className="nxHighlightsCard__icon">
                    <i className="fa-solid fa-bullseye"></i>
                  </div>

                  <div>
                    <small>BUSINESS OBJECTIVES</small>

                    <h3>Project Goals</h3>
                  </div>
                </div>

                <div className="nxHighlightsList">
                  {project.businessGoals.map((goal, index) => (
                    <div key={index} className="nxHighlightItem">
                      <i className="fa-solid fa-check"></i>

                      <span>{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="nxHighlightsCard">
                <div className="nxHighlightsCard__header">
                  <div className="nxHighlightsCard__icon">
                    <i className="fa-solid fa-layer-group"></i>
                  </div>

                  <div>
                    <small>DELIVERABLES</small>

                    <h3>Website Features</h3>
                  </div>
                </div>

                <div className="nxHighlightsList">
                  {project.features.map((feature, index) => (
                    <div key={index} className="nxHighlightItem">
                      <i className="fa-solid fa-circle-check"></i>

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nxProjectSection nxProjectResults">
        <div className="container">
          <div className="nxProjectSectionHeading">
            <span>PROJECT RESULTS</span>

            <h2>
              Measurable Results
              <br />
              Delivered For This Project
            </h2>

            <p>
              Every website is optimized for speed, responsiveness, SEO,
              accessibility and user experience to help businesses grow with
              confidence.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-8">
              <div className="nxResultsDashboard">
                <div className="row g-4">
                  {project.projectStatisticsData.map((item, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="nxResultCard">
                        <div className="nxResultCard__top">
                          <div className="nxResultCard__icon">
                            <i className={item.icon}></i>
                          </div>

                          <h3>{item.value}</h3>
                        </div>

                        <h4>{item.title}</h4>

                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="nxPerformanceCard">
                <span>Overall Performance</span>

                <h2>{project.projectStatistics.performance}%</h2>

                <div className="nxPerformanceBar">
                  <div
                    style={{
                      width: `${project.projectStatistics.performance}%`,
                    }}
                  ></div>
                </div>

                <ul>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Fast Loading
                  </li>

                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Mobile Optimized
                  </li>

                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    SEO Ready
                  </li>

                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Secure Deployment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
