import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import LoadingAnimations from "./Components/Loading Animations/LoadingAnimations";

const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));
const Services = lazy(() => import("./Pages/Services/Services"));
const Portfolio = lazy(() => import("./Pages/Portfolio/Portfolio"));
const Pricing = lazy(() => import("./Pages/Pricing/Pricing"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Careers = lazy(() => import("./Pages/Careers/Careers"));
const Blogs = lazy(() => import("./Pages/Blogs"));

const ProjectDetails = lazy(
  () => import("./Pages/Project Detail/ProjectDetail"),
);

const PrivacyPolicy = lazy(() => import("./Pages/Privacy/Privacy"));

const TermsConditions = lazy(
  () => import("./Pages/TermsAndConditions/TermsAndConditions"),
);

const Support = lazy(() => import("./Pages/Support/Support"));

const NotFound = lazy(() => import("./Components/NotFound/NotFound"));

const FloatingActions = lazy(
  () => import("./Components/Floating Buttons/TopandWhatsapp"),
);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error:", error);
    console.error("Component Stack:", errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="vh-100 d-flex justify-content-center align-items-center flex-column text-center px-4">
          <h2 className="mb-3">Oops! Something went wrong.</h2>

          <p className="text-muted">
            We're fixing the issue. Please refresh the page.
          </p>

          <button className="btn btn-primary mt-3" onClick={this.handleReload}>
            Reload Website
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  useEffect(() => {
    const handleError = (event) => {
      console.error("Global Error :", event.error);
    };

    const handlePromise = (event) => {
      console.error("Unhandled Promise:", event.reason);
    };

    window.addEventListener("error", handleError);

    window.addEventListener("unhandledrejection", handlePromise);

    return () => {
      window.removeEventListener("error", handleError);

      window.removeEventListener("unhandledrejection", handlePromise);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>
          NexGen Web Designs | Professional Website Development Company
        </title>

        <meta
          name="description"
          content="NexGen Web Designs builds fast, responsive and SEO-friendly websites for startups, small businesses and enterprises. We specialize in custom web development, UI/UX design, website maintenance, WordPress development and scalable web applications."
        />

        <meta
          name="keywords"
          content="
          Web Development,
          Website Design,
          React Development,
          MERN Stack,
          WordPress Development,
          Responsive Websites,
          Business Website,
          Portfolio Website,
          E-Commerce Development,
          Landing Page Design,
          SEO Services,
          Website Maintenance,
          UI UX Design,
          Custom Web Applications,
          Startup Website,
          NexGen Web Designs
        "
        />

        <meta name="author" content="NexGen Web Designs" />

        <meta property="og:title" content="NexGen Web Designs" />

        <meta
          property="og:description"
          content="Modern, scalable and SEO optimized websites built for businesses that want to grow online."
        />

        <meta property="og:type" content="website" />

        <meta name="robots" content="index,follow" />
      </Helmet>

      <div className="App">
        <Navbar />

        <ErrorBoundary>
          {" "}
          <Suspense fallback={<LoadingAnimations />}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/about" element={<About />} />

              <Route path="/services" element={<Services />} />

              <Route path="/portfolio" element={<Portfolio />} />

              <Route path="/portfolio/:id" element={<ProjectDetails />} />

              <Route path="/pricing" element={<Pricing />} />

              <Route path="/contact" element={<Contact />} />

              <Route path="/careers" element={<Careers />} />
              <Route path="/blogs" element={<Blogs />} />

              <Route path="/support" element={<Support />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />

              <Route
                path="/terms-and-conditions"
                element={<TermsConditions />}
              />

              <Route path="*" element={<NotFound />} />
            </Routes>

            <FloatingActions />
          </Suspense>
        </ErrorBoundary>
        <Footer />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        limit={2}
      />
    </>
  );
}

export default App;
