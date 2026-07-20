import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import { ErrorPageSEO } from "../../Data/AllPageSEOs";

// const popularPages = [
//   {
//     id: 1,
//     title: "Home",
//     icon: "fa-solid fa-house",
//     path: "/",
//   },
//   {
//     id: 2,
//     title: "Services",
//     icon: "fa-solid fa-layer-group",
//     path: "/services",
//   },
//   {
//     id: 3,
//     title: "Portfolio",
//     icon: "fa-solid fa-briefcase",
//     path: "/portfolio",
//   },
//   {
//     id: 4,
//     title: "Contact",
//     icon: "fa-solid fa-envelope",
//     path: "/contact",
//   },
// ];

const NotFound = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "404 | NexGen Web Designs";

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    const value = search.toLowerCase();

    if (value.includes("home")) {
      window.location.href = "/";
    } else if (value.includes("service")) {
      window.location.href = "/services";
    } else if (value.includes("portfolio")) {
      window.location.href = "/portfolio";
    } else if (value.includes("contact")) {
      window.location.href = "/contact";
    } else {
      alert("No matching page found.");
    }
  };

  return (
    <main className="notFoundPage">
      {/* Background */}
      {ErrorPageSEO}
      <div className="bgGrid"></div>

      <div className="gradientOrb orbOne"></div>

      <div className="gradientOrb orbTwo"></div>

      <div className="gradientOrb orbThree"></div>

      {/* Hero */}

      <section className="notFoundHero">
        <div className="container">
          <div className="row align-items-center gy-5">
            {/* LEFT */}

            <div className="col-lg-6">
              <div className="heroContent">
                <span className="errorBadge">Error 404</span>

                <h1>404</h1>

                <h2>
                  Oops!
                  <br />
                  This Page Went Offline.
                </h2>

                <p>
                  The page you're trying to visit doesn't exist, may have been
                  moved, or is temporarily unavailable.
                </p>

                <div className="heroButtons">
                  <Link to="/" className="primaryBtn">
                    <i className="fa-solid fa-house"></i>
                    Back Home
                  </Link>

                  <Link to="/contact" className="secondaryBtn">
                    <i className="fa-solid fa-envelope"></i>
                    Contact Us
                  </Link>
                </div>

                {/* Search */}

                <form className="searchBox" onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search pages..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />

                  <button type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
            </div>

            {/* RIGHT */}

            <div className="col-lg-6">
              <div className="browserMockup">
                <div className="browserTop">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="browserBody">
                  <div className="browser404">404</div>

                  <h3>Lost In Cyberspace</h3>

                  <p>We couldn't find the page you're looking for.</p>

                  <div className="browserButtons">
                    <Link to="/">Home</Link>

                    <Link to="/services">Services</Link>

                    <Link to="/portfolio">Portfolio</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Pages */}

          {/* <div className="popularPages">
            <h4>Popular Pages</h4>

            <div className="popularGrid">
              {popularPages.map((page) => (
                <Link key={page.id} to={page.path} className="popularCard">
                  <i className={page.icon}></i>

                  <span>{page.title}</span>
                </Link>
              ))}
            </div>
          </div> */}

          {/* Statistics */}

          {/* <div className="statsRow">
            <div className="statCard">
              <h3>150+</h3>

              <p>Projects Delivered</p>
            </div>

            <div className="statCard">
              <h3>98%</h3>

              <p>Client Satisfaction</p>
            </div>

            <div className="statCard">
              <h3>24/7</h3>

              <p>Support Available</p>
            </div>

            <div className="statCard">
              <h3>5★</h3>

              <p>Customer Reviews</p>
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default NotFound;
