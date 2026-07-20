import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaArrowRight, FaTimes } from "react-icons/fa";
import "./../Common CSS/Commoncss.css";
const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const navClass = ({ isActive }) =>
    isActive ? "nav-link premium-link active" : "nav-link premium-link";

  return (
    <>
      <header className="premium-navbar-wrap">
        <nav className="navbar navbar-expand-lg fixed-top premium-navbar">
          <div className="container">
            <Link
              className="navbar-brand premium-brand"
              to="/"
              onClick={closeMenu}
            >
              <span className="brand-mark">N</span>
              <span className="brand-text">
                NexGen <span>Web Designs</span>
              </span>
            </Link>

            <button
              className="navbar-toggler premium-toggler d-lg-none"
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <FaBars />
            </button>

            <div className="d-none d-lg-flex align-items-center ms-auto gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={navClass}
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to="/contact" className="btn premium-cta">
                Get Started <FaArrowRight className="ms-2" />
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <div className={`mobile-panel ${open ? "show" : ""}`}>
        <div className="mobile-panel-top">
          <Link
            className="navbar-brand premium-brand"
            to="/"
            onClick={closeMenu}
          >
            <span className="brand-mark">N</span>
            <span className="brand-text">
              NexGen <span>Web Designs</span>
            </span>
          </Link>

          <button
            className="close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive ? "mobile-link active" : "mobile-link"
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="mobile-cta-wrap">
          <Link
            to="/contact"
            className="btn premium-cta w-100"
            onClick={closeMenu}
          >
            Get Started <FaArrowRight className="ms-2" />
          </Link>
        </div>
      </div>

      {open && <div className="mobile-backdrop" onClick={closeMenu} />}
    </>
  );
}
