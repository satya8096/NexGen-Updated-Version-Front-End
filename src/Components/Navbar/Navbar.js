import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useAppData } from "../../Data/BackEnd Data/FetchBackEndData";
import { phoneNumber } from "../../Data/BrandData";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const { pathname, hash } = useLocation();

  const { refreshWebsiteData } = useAppData();

  useEffect(() => {
    refreshWebsiteData();
    const handleScroll = () => {
      setSticky(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 0);

        return;
      }
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname, hash]);

  return (
    <>
      <header className={sticky ? "navbar-area sticky" : "navbar-area"}>
        <div className="container">
          <nav className="navbar-main">
            <Link to="/" className="logo">
              <img
                src={require("./../../Assets/NexGen_Web_Designs_Finla_Light_Logo_With_Background.png")}
                alt="NexGen Web Designs"
              />
            </Link>

            <ul className={menu ? "nav-links active" : "nav-links"}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/about">About</NavLink>
              </li>

              <li>
                <NavLink to="/services">Services</NavLink>
              </li>

              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>

              <li>
                <NavLink to="/pricing">Pricing</NavLink>
              </li>

              <li>
                <NavLink to="/careers">Careers</NavLink>
              </li>

              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>

            <Link to={`tel:${phoneNumber}`} className="contact-btn">
              Let's Talk <i className="fa-solid fa-arrow-right-long ms-3"></i>
            </Link>

            <button className="mobile-btn" onClick={() => setMenu(!menu)}>
              {menu ? (
                <i className="fa-solid fa-xmark"></i>
              ) : (
                <i className="fa-solid fa-bars"></i>
              )}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
