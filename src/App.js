import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "react-toastify/dist/ReactToastify.css";
import LoadingAnimation from "./Components/LoadingAnimation";
import { Helmet } from "react-helmet";
import { maintainence } from "./Data/BrandData";
import MaintenancePage from "./Components/MaintenancePage";
import JobDetails from "./Components/JobDetail";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";
import About from "./Pages/About/About";
import Pricing from "./Pages/Pricing/Pricing";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Services from "./Pages/Services/Services";
import PrivacyPolicy from "./Pages/Privacy/Privacy";
import TermsConditions from "./Pages/TermsAndConditions/TermsAndConditions";
import Support from "./Pages/Support/Support";
import Careers from "./Pages/Careers/Careers";
import { ToastContainer } from "react-toastify";
import ProjectDetails from "./Pages/Project Detail/ProjectDetail";
import FloatingActions from "./Components/Floating Buttons/TopandWhatsapp";
// import Navbar from "./Components/Common/Navbar";
const HomePage = React.lazy(() => import("./Pages/Home"));
// const Footer = React.lazy(() => import("./Components/Footer"));
const TopAndWhatsappBtn = React.lazy(
  () => import("./Components/TopAndWhatsappBtn"),
);
// const ServicesPage = React.lazy(() => import("./Pages/Services"));
const AboutUs = React.lazy(() => import("./Pages/AboutUs"));
const ContactUs = React.lazy(() => import("./Pages/ContactUs"));
// const Portfolio = React.lazy(() => import("./Pages/Portfolio"));
const Career = React.lazy(() => import("./Pages/Career"));
const Blogs = React.lazy(() => import("./Pages/Blogs"));
const RefundCancellationPolicy = React.lazy(
  () => import("./Components/RefundAndCancellation"),
);

// const PrivacyPolicy = React.lazy(() => import("./Components/PrivacyPolicy"));
const FAQs = React.lazy(() => import("./Components/FrequentlyAskedQuestions"));
// const TermsAndConditions = React.lazy(
//   () => import("./Components/TermsAndConditions"),
// );
// const Support = React.lazy(() => import("./Components/Support"));
// const ProjectDetail = React.lazy(() => import("./Components/ProjectDetail"));
const Error404 = React.lazy(() => import("./Components/ErrorPage"));

const BlogDetail = React.lazy(() => import("./Components/BlogDetail"));

function App() {
  if (maintainence) {
    return <MaintenancePage />;
  } else {
    return (
      <>
        <Helmet>
          <title>NexGen Web Designs</title>
          <meta
            name="description"
            content="Discover NexGen Web Designs, your trusted partner for affordable web development services. We specialize in custom WordPress website design, offering professional solutions tailored to meet the unique needs of startups and small businesses. Our responsive web design ensures a seamless user experience across devices, while our e-commerce website development helps you establish a robust online presence. Our SEO-friendly web development practices enhance your site's visibility in search engines, driving organic traffic and attracting more clients. As a leading web development agency, we also provide WordPress maintenance services to keep your website running smoothly. Explore our portfolio to see our high-performance website solutions that are both user-friendly and dynamic. Partner with us for the best web development services and local SEO expertise tailored for WordPress sites. Let’s elevate your online presence together!"
          />
          <meta
            name="keywords"
            content="web development for small businesses, bespoke website design services, leading digital marketing agency, mobile-responsive website development, e-commerce solutions for startups, seo optimization for websites, affordable website maintenance plans, expert wordpress development services, innovative web design solutions, custom web development packages, high-converting landing page design, user experience (ux) design services, website performance enhancement, social media marketing for businesses, comprehensive online branding solutions, custom cms development, cloud hosting services for websites, targeted content marketing strategies, website analytics and reporting, full-stack web application development"
          />
        </Helmet>
        <div className="App">
          <Suspense fallback={<LoadingAnimation />}>
            {/* <NavigationBar /> */}
            {/* <Navbar/> */}
            <Navbar />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/job/:id" element={<JobDetails />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:title" element={<BlogDetail />} />
              {/* <Route path="/portfolio/:id" element={<ProjectDetail />} /> */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/portfolio/:id" element={<ProjectDetails />} />
              <Route path="/support" element={<Support />} />

              <Route
                path="/terms-and-conditions"
                element={<TermsConditions />}
              />
              <Route path="/frequently-asked-questions" element={<FAQs />} />
              <Route
                path="/refund-and-cancellation"
                element={<RefundCancellationPolicy />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            {/* <TopAndWhatsappBtn /> */}
            <FloatingActions />
            {/* <Footer /> */}
            <Footer />
          </Suspense>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={true}
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
}

export default App;
