import { Helmet } from "react-helmet";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Web Design Portfolio - NexGen Web Designs",
  url: "https://nexgenwebdesigns.com/portfolio",
  description:
    "Explore NexGen Web Designs' custom website portfolio featuring responsive, SEO-optimized projects for businesses across Hyderabad and Andhra Pradesh. See how we turn client ideas into high-performance digital solutions.",
  mainEntity: {
    "@type": "WebPageElement",
    name: "Portfolio Showcase",
    url: "https://nexgenwebdesigns.com/portfolio",
    about: {
      "@type": "LocalBusiness",
      name: "NexGen Web Designs",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Telangana",
        addressLocality: "Hyderabad",
      },
      areaServed: [
        {
          "@type": "Place",
          name: "Hyderabad",
        },
        {
          "@type": "Place",
          name: "Andhra Pradesh",
        },
      ],
      url: "https://nexgenwebdesigns.com",
    },
  },
};

export const HomePageSEO = (
  <Helmet>
    <html lang="en-IN" />
    <title>
      Web Design & Website Development Company in Hyderabad | NexGen Web Designs
    </title>
    <meta
      name="description"
      content="NexGen Web Designs is a professional web design and website development company serving Hyderabad, Telangana and Andhra Pradesh. We create responsive, SEO-friendly, fast-loading business websites, eCommerce stores, portfolio websites, React applications and custom web solutions that help businesses grow online."
    />
    <meta
      name="keywords"
      content="
      web design Hyderabad,
      website design Hyderabad,
      website development Hyderabad,
      web development Hyderabad,
      website designer Hyderabad,
      website developer Hyderabad,
      web design company Hyderabad,
      website development company Hyderabad,
      responsive website design,
      custom website development,
      React JS development,
      business website,
      ecommerce website,
      SEO friendly website,
      website redesign,
      website maintenance,
      Telangana,
      Andhra Pradesh,
      NexGen Web Designs
    "
    />
    <meta name="author" content="NexGen Web Designs" />
    <meta
      name="robots"
      content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    />
    <meta name="googlebot" content="index,follow" />
    <meta name="bingbot" content="index,follow" />
    <link rel="canonical" href="https://www.nexgenwebdesigns.com/" />

    <meta name="geo.region" content="IN-TG" />

    <meta name="geo.placename" content="Hyderabad" />

    <meta name="geo.position" content="17.385044;78.486671" />

    <meta name="ICBM" content="17.385044,78.486671" />

    {/* ===========================================================
      LANGUAGE
  =========================================================== */}

    <meta httpEquiv="content-language" content="en-IN" />

    {/* ===========================================================
      MOBILE
  =========================================================== */}

    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta name="theme-color" content="#0B63F6" />

    {/* ===========================================================
      OPEN GRAPH
  =========================================================== */}

    <meta property="og:type" content="website" />

    <meta
      property="og:title"
      content="Professional Website Design Company in Hyderabad | NexGen Web Designs"
    />

    <meta
      property="og:description"
      content="Build high-performance business websites with NexGen Web Designs. Professional website design, web development, React development and custom web solutions in Hyderabad, Telangana and Andhra Pradesh."
    />

    <meta property="og:url" content="https://www.nexgenwebdesigns.com/" />

    <meta property="og:site_name" content="NexGen Web Designs" />

    <meta
      property="og:image"
      content="https://www.nexgenwebdesigns.com/assets/images/seo/home-og-image.webp"
    />

    <meta
      property="og:image:alt"
      content="NexGen Web Designs - Website Design Company Hyderabad"
    />

    <meta property="og:locale" content="en_IN" />

    {/* ===========================================================
      TWITTER
  =========================================================== */}

    <meta name="twitter:card" content="summary_large_image" />

    <meta
      name="twitter:title"
      content="Website Design & Development Company in Hyderabad"
    />

    <meta
      name="twitter:description"
      content="Professional website design, web development and React development services across Hyderabad, Telangana and Andhra Pradesh."
    />

    <meta
      name="twitter:image"
      content="https://www.nexgenwebdesigns.com/assets/images/seo/home-og-image.webp"
    />

    {/* ===========================================================
      FAVICON
  =========================================================== */}

    <link rel="icon" href="/favicon.ico" />

    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

    {/* ===========================================================
      PERFORMANCE
  =========================================================== */}

    <link rel="preconnect" href="https://fonts.googleapis.com" />

    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />

    {/* ===========================================================
      JSON LD
  =========================================================== */}

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",

        name: "NexGen Web Designs",

        url: "https://www.nexgenwebdesigns.com",

        logo: "https://www.nexgenwebdesigns.com/logo.png",

        image:
          "https://www.nexgenwebdesigns.com/assets/images/seo/home-og-image.webp",

        description:
          "Professional Website Design and Website Development Company in Hyderabad.",

        areaServed: ["Hyderabad", "Telangana", "Andhra Pradesh"],

        serviceType: [
          "Website Design",
          "Website Development",
          "React Development",
          "Responsive Website Design",
          "Ecommerce Development",
          "Landing Page Development",
          "Website Redesign",
        ],

        sameAs: [
          "https://www.instagram.com/yourprofile",
          "https://www.facebook.com/yourprofile",
          "https://www.linkedin.com/company/yourprofile",
        ],
      })}
    </script>
  </Helmet>
);

export const AboutPageSEOs = (
  <Helmet>
    {/* ==========================
        BASIC SEO
  ========================== */}

    <title>
      About NexGen Web Designs | Website Design & Web Development Company
      Hyderabad
    </title>

    <meta
      name="description"
      content="Learn about NexGen Web Designs, a professional website design and web development company serving Hyderabad, Telangana and Andhra Pradesh. Discover our mission, expertise, development process and commitment to building modern, SEO-friendly business websites."
    />

    <meta
      name="keywords"
      content="
      About NexGen Web Designs,
      Website Design Company Hyderabad,
      Web Development Company Hyderabad,
      Website Developers Hyderabad,
      Professional Web Designers,
      Website Development Experts,
      Business Website Development,
      React Developers Hyderabad,
      Responsive Website Design,
      Telangana Website Company,
      Andhra Pradesh Website Development,
      Website Design Agency,
      Website Development Services
    "
    />

    <meta
      name="robots"
      content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
    />

    <link rel="canonical" href="https://www.nexgenwebdesigns.com/about" />

    {/* ==========================
        GEO
  ========================== */}

    <meta name="geo.region" content="IN-TG" />

    <meta name="geo.placename" content="Hyderabad" />

    {/* ==========================
        OPEN GRAPH
  ========================== */}

    <meta property="og:type" content="website" />

    <meta property="og:title" content="About NexGen Web Designs" />

    <meta
      property="og:description"
      content="Meet the team behind NexGen Web Designs. We build fast, responsive and SEO-friendly websites for businesses across Hyderabad, Telangana and Andhra Pradesh."
    />

    <meta property="og:url" content="https://www.nexgenwebdesigns.com/about" />

    <meta
      property="og:image"
      content="https://www.nexgenwebdesigns.com/assets/images/about/about-og.webp"
    />

    <meta property="og:site_name" content="NexGen Web Designs" />

    {/* ==========================
        TWITTER
  ========================== */}

    <meta name="twitter:card" content="summary_large_image" />

    <meta name="twitter:title" content="About NexGen Web Designs" />

    <meta
      name="twitter:description"
      content="Professional Website Design & Development Company serving Hyderabad, Telangana and Andhra Pradesh."
    />

    <meta
      name="twitter:image"
      content="https://www.nexgenwebdesigns.com/assets/images/about/about-og.webp"
    />

    {/* ==========================
        JSON-LD
  ========================== */}

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",

        name: "About NexGen Web Designs",

        url: "https://www.nexgenwebdesigns.com/about",

        description:
          "Learn about NexGen Web Designs, our experience, mission and professional website development services.",

        mainEntity: {
          "@type": "Organization",

          name: "NexGen Web Designs",

          url: "https://www.nexgenwebdesigns.com",

          logo: "https://www.nexgenwebdesigns.com/logo.png",

          areaServed: ["Hyderabad", "Telangana", "Andhra Pradesh"],

          knowsAbout: [
            "Website Design",
            "Website Development",
            "React Development",
            "Responsive Website Design",
            "Business Websites",
            "Corporate Websites",
            "SEO Friendly Websites",
            "Website Redesign",
            "Landing Pages",
            "Ecommerce Development",
          ],
        },
      })}
    </script>
  </Helmet>
);

export const BlogsPageSEO = (
  <Helmet>
    <title>Latest Blogs & Insights - NexGen Web Designs</title>
    <meta
      name="description"
      content="Explore the Blogs page of NexGen Web Designs for insightful articles on web development trends, digital marketing strategies, and tips for enhancing your online presence. Stay updated with our expert advice and resources designed to empower businesses and inspire innovation in the digital landscape."
    />
    <meta
      name="keywords"
      content="affordable web development services, custom wordpress website design, professional web development agency, responsive web design solutions, wordpress development for small businesses, e-commerce website development, seo-friendly web development, freelance wordpress developers, high-performance website solutions, user-friendly website design, web development for startups, wordpress maintenance services, dynamic website development, best web development company, local seo for wordpress sites"
    />
  </Helmet>
);

export const CareersPageSEO = (
  <Helmet>
    {/* ===========================================================
      PRIMARY SEO
  =========================================================== */}

    <html lang="en-IN" />

    <title>
      Careers | Web Developer & Website Designer Jobs in Hyderabad | NexGen Web
      Designs
    </title>

    <meta
      name="description"
      content="Join NexGen Web Designs and build modern websites, React applications and digital experiences. Explore career opportunities for web developers, website designers, UI/UX designers and interns in Hyderabad."
    />

    <meta
      name="robots"
      content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
    />

    <link rel="canonical" href="https://www.nexgenwebdesigns.com/careers" />

    {/* ===========================================================
      GEO
  =========================================================== */}

    <meta name="geo.region" content="IN-TG" />

    <meta name="geo.placename" content="Hyderabad" />

    {/* ===========================================================
      OPEN GRAPH
  =========================================================== */}

    <meta property="og:type" content="website" />

    <meta property="og:title" content="Careers at NexGen Web Designs" />

    <meta
      property="og:description"
      content="Explore career opportunities in website design, web development and React development."
    />

    <meta
      property="og:url"
      content="https://www.nexgenwebdesigns.com/careers"
    />

    <meta
      property="og:image"
      content="https://www.nexgenwebdesigns.com/assets/images/careers/careers-og.webp"
    />

    {/* ===========================================================
      TWITTER
  =========================================================== */}

    <meta name="twitter:card" content="summary_large_image" />

    <meta name="twitter:title" content="Careers | NexGen Web Designs" />

    <meta
      name="twitter:description"
      content="Build your career with NexGen Web Designs."
    />

    <meta
      name="twitter:image"
      content="https://www.nexgenwebdesigns.com/assets/images/careers/careers-og.webp"
    />

    {/* ===========================================================
      SCHEMA
  =========================================================== */}

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",

        "@type": "WebPage",

        name: "Careers",

        url: "https://www.nexgenwebdesigns.com/careers",

        description: "Career opportunities at NexGen Web Designs.",

        publisher: {
          "@type": "Organization",

          name: "NexGen Web Designs",

          url: "https://www.nexgenwebdesigns.com",

          logo: "https://www.nexgenwebdesigns.com/logo.png",
        },
      })}
    </script>
  </Helmet>
);

export const ContactPageSEO = (
  <Helmet>
    {/* ===========================================================
      BASIC SEO
  =========================================================== */}

    <html lang="en-IN" />

    <title>
      Contact NexGen Web Designs | Website Design Company in Hyderabad
    </title>

    <meta
      name="description"
      content="Contact NexGen Web Designs for professional website design, web development, React development, eCommerce solutions and custom websites. Serving businesses across Hyderabad, Telangana and Andhra Pradesh."
    />

    <meta
      name="robots"
      content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
    />

    <link rel="canonical" href="https://www.nexgenwebdesigns.com/contact" />

    {/* ===========================================================
      GEO SEO
  =========================================================== */}

    <meta name="geo.region" content="IN-TG" />

    <meta name="geo.placename" content="Hyderabad" />

    <meta name="geo.position" content="17.385044;78.486671" />

    <meta name="ICBM" content="17.385044,78.486671" />

    {/* ===========================================================
      OPEN GRAPH
  =========================================================== */}

    <meta property="og:type" content="website" />

    <meta property="og:title" content="Contact NexGen Web Designs" />

    <meta
      property="og:description"
      content="Let's discuss your next website project. Contact NexGen Web Designs for website design and web development services."
    />

    <meta
      property="og:url"
      content="https://www.nexgenwebdesigns.com/contact"
    />

    <meta
      property="og:image"
      content="https://www.nexgenwebdesigns.com/assets/images/contact/contact-og.webp"
    />

    <meta property="og:image:alt" content="Contact NexGen Web Designs" />

    <meta property="og:site_name" content="NexGen Web Designs" />

    {/* ===========================================================
      TWITTER
  =========================================================== */}

    <meta name="twitter:card" content="summary_large_image" />

    <meta name="twitter:title" content="Contact NexGen Web Designs" />

    <meta
      name="twitter:description"
      content="Contact our team for professional website design and web development services."
    />

    <meta
      name="twitter:image"
      content="https://www.nexgenwebdesigns.com/assets/images/contact/contact-og.webp"
    />

    {/* ===========================================================
      STRUCTURED DATA
  =========================================================== */}

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",

        "@type": "ContactPage",

        name: "Contact NexGen Web Designs",

        url: "https://www.nexgenwebdesigns.com/contact",

        description:
          "Contact NexGen Web Designs for website design and website development services.",

        mainEntity: {
          "@type": "ProfessionalService",

          name: "NexGen Web Designs",

          url: "https://www.nexgenwebdesigns.com",

          logo: "https://www.nexgenwebdesigns.com/logo.png",

          image: "https://www.nexgenwebdesigns.com/logo.png",

          telephone: "+91-XXXXXXXXXX",

          email: "contact@nexgenwebdesigns.com",

          address: {
            "@type": "PostalAddress",

            addressLocality: "Hyderabad",

            addressRegion: "Telangana",

            postalCode: "500001",

            addressCountry: "IN",
          },

          areaServed: ["Hyderabad", "Telangana", "Andhra Pradesh"],

          contactPoint: {
            "@type": "ContactPoint",

            contactType: "customer support",

            telephone: "+91-XXXXXXXXXX",

            email: "contact@nexgenwebdesigns.com",

            areaServed: "IN",

            availableLanguage: ["English", "Telugu"],
          },
        },
      })}
    </script>
  </Helmet>
);

export const PortfolioPageSEO = (
  <Helmet>
    {/* ===========================================================
      PRIMARY SEO
  =========================================================== */}

    <html lang="en-IN" />

    <title>
      Website Design Portfolio | Web Development Projects Hyderabad | NexGen Web
      Designs
    </title>

    <meta
      name="description"
      content="Explore the website design and web development portfolio of NexGen Web Designs. Discover responsive business websites, React applications, eCommerce solutions, landing pages and custom web projects delivered for clients across Hyderabad, Telangana and Andhra Pradesh."
    />

    <meta
      name="robots"
      content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
    />

    <link rel="canonical" href="https://www.nexgenwebdesigns.com/portfolio" />

    {/* ===========================================================
      GEO
  =========================================================== */}

    <meta name="geo.region" content="IN-TG" />

    <meta name="geo.placename" content="Hyderabad" />

    <meta name="geo.position" content="17.385044;78.486671" />

    <meta name="ICBM" content="17.385044,78.486671" />

    {/* ===========================================================
      OPEN GRAPH
  =========================================================== */}

    <meta property="og:type" content="website" />

    <meta
      property="og:title"
      content="Website Design Portfolio | NexGen Web Designs"
    />

    <meta
      property="og:description"
      content="View our portfolio of responsive websites, custom web applications, React projects, eCommerce stores and business websites built for clients."
    />

    <meta
      property="og:url"
      content="https://www.nexgenwebdesigns.com/portfolio"
    />

    <meta
      property="og:image"
      content="https://www.nexgenwebdesigns.com/assets/images/portfolio/portfolio-og.webp"
    />

    <meta
      property="og:image:alt"
      content="Website Design Portfolio Hyderabad"
    />

    <meta property="og:site_name" content="NexGen Web Designs" />

    {/* ===========================================================
      TWITTER
  =========================================================== */}

    <meta name="twitter:card" content="summary_large_image" />

    <meta name="twitter:title" content="Website Design Portfolio Hyderabad" />

    <meta
      name="twitter:description"
      content="Explore our custom website design, React development and business website portfolio."
    />

    <meta
      name="twitter:image"
      content="https://www.nexgenwebdesigns.com/assets/images/portfolio/portfolio-og.webp"
    />

    {/* ===========================================================
      JSON-LD
  =========================================================== */}

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",

        "@type": "CollectionPage",

        name: "Website Design Portfolio",

        url: "https://www.nexgenwebdesigns.com/portfolio",

        description:
          "Portfolio showcasing website design, web development, React applications and custom digital solutions created by NexGen Web Designs.",

        publisher: {
          "@type": "Organization",

          name: "NexGen Web Designs",

          url: "https://www.nexgenwebdesigns.com",

          logo: "https://www.nexgenwebdesigns.com/logo.png",
        },

        about: [
          {
            "@type": "Thing",
            name: "Website Design",
          },
          {
            "@type": "Thing",
            name: "Web Development",
          },
          {
            "@type": "Thing",
            name: "React JS Development",
          },
          {
            "@type": "Thing",
            name: "Responsive Website Development",
          },
          {
            "@type": "Thing",
            name: "Ecommerce Website Development",
          },
        ],

        areaServed: ["Hyderabad", "Telangana", "Andhra Pradesh"],
      })}
    </script>
  </Helmet>
);

export const ServicesPageSEO = (
  <Helmet>
    {/* ===========================================================
      PRIMARY SEO
  =========================================================== */}

    <html lang="en-IN" />

    <title>
      Website Design & Web Development Services in Hyderabad | NexGen Web
      Designs
    </title>

    <meta
      name="description"
      content="Explore professional website design and web development services from NexGen Web Designs. We build responsive, SEO-friendly business websites, eCommerce stores, React applications, landing pages and custom web solutions for businesses across Hyderabad, Telangana and Andhra Pradesh."
    />

    <meta
      name="robots"
      content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
    />

    <link rel="canonical" href="https://www.nexgenwebdesigns.com/services" />

    {/* ===========================================================
      GEO
  =========================================================== */}

    <meta name="geo.region" content="IN-TG" />

    <meta name="geo.placename" content="Hyderabad" />

    <meta name="geo.position" content="17.385044;78.486671" />

    <meta name="ICBM" content="17.385044,78.486671" />

    {/* ===========================================================
      OPEN GRAPH
  =========================================================== */}

    <meta property="og:type" content="website" />

    <meta
      property="og:title"
      content="Professional Website Development Services | NexGen Web Designs"
    />

    <meta
      property="og:description"
      content="Professional website design, React development, eCommerce development, business websites, landing pages and custom web solutions."
    />

    <meta
      property="og:url"
      content="https://www.nexgenwebdesigns.com/services"
    />

    <meta
      property="og:image"
      content="https://www.nexgenwebdesigns.com/assets/images/services/services-og.webp"
    />

    <meta
      property="og:image:alt"
      content="Professional Website Development Services Hyderabad"
    />

    <meta property="og:site_name" content="NexGen Web Designs" />

    {/* ===========================================================
      TWITTER
  =========================================================== */}

    <meta name="twitter:card" content="summary_large_image" />

    <meta
      name="twitter:title"
      content="Website Development Services Hyderabad"
    />

    <meta
      name="twitter:description"
      content="Responsive website design, React JS development, eCommerce development and custom business websites."
    />

    <meta
      name="twitter:image"
      content="https://www.nexgenwebdesigns.com/assets/images/services/services-og.webp"
    />

    {/* ===========================================================
      JSON-LD
  =========================================================== */}

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",

        serviceType: "Website Design and Web Development",

        provider: {
          "@type": "Organization",

          name: "NexGen Web Designs",

          url: "https://www.nexgenwebdesigns.com",

          logo: "https://www.nexgenwebdesigns.com/logo.png",
        },

        areaServed: ["Hyderabad", "Telangana", "Andhra Pradesh"],

        hasOfferCatalog: {
          "@type": "OfferCatalog",

          name: "Website Development Services",

          itemListElement: [
            {
              "@type": "Offer",

              itemOffered: {
                "@type": "Service",
                name: "Custom Website Design",
              },
            },

            {
              "@type": "Offer",

              itemOffered: {
                "@type": "Service",
                name: "Responsive Website Development",
              },
            },

            {
              "@type": "Offer",

              itemOffered: {
                "@type": "Service",
                name: "Business Website Development",
              },
            },

            {
              "@type": "Offer",

              itemOffered: {
                "@type": "Service",
                name: "Corporate Website Development",
              },
            },

            {
              "@type": "Offer",

              itemOffered: {
                "@type": "Service",
                name: "React JS Development",
              },
            },

            {
              "@type": "Offer",

              itemOffered: {
                "@type": "Service",
                name: "Landing Page Development",
              },
            },

            {
              "@type": "Offer",

              itemOffered: {
                "@type": "Service",
                name: "Portfolio Website Development",
              },
            },

            {
              "@type": "Offer",

              itemOffered: {
                "@type": "Service",
                name: "eCommerce Website Development",
              },
            },

            {
              "@type": "Offer",

              itemOffered: {
                "@type": "Service",
                name: "Website Redesign",
              },
            },

            {
              "@type": "Offer",

              itemOffered: {
                "@type": "Service",
                name: "Website Maintenance",
              },
            },
          ],
        },
      })}
    </script>
  </Helmet>
);

export const PricingPageSEO = (
  <Helmet>
    {/* ===========================================================
      PRIMARY SEO
  =========================================================== */}

    <html lang="en-IN" />

    <title>
      Website Design Pricing in Hyderabad | Affordable Web Development Packages
      | NexGen Web Designs
    </title>

    <meta
      name="description"
      content="Explore affordable website design and web development pricing from NexGen Web Designs. Compare business website, eCommerce, React and custom website packages for businesses across Hyderabad, Telangana and Andhra Pradesh."
    />

    <meta
      name="robots"
      content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
    />

    <link rel="canonical" href="https://www.nexgenwebdesigns.com/pricing" />

    {/* ===========================================================
      GEO
  =========================================================== */}

    <meta name="geo.region" content="IN-TG" />
    <meta name="geo.placename" content="Hyderabad" />
    <meta name="geo.position" content="17.385044;78.486671" />
    <meta name="ICBM" content="17.385044,78.486671" />

    {/* ===========================================================
      OPEN GRAPH
  =========================================================== */}

    <meta property="og:type" content="website" />

    <meta
      property="og:title"
      content="Website Design Pricing | NexGen Web Designs"
    />

    <meta
      property="og:description"
      content="Compare our affordable website development packages for startups, professionals, businesses and growing brands."
    />

    <meta
      property="og:url"
      content="https://www.nexgenwebdesigns.com/pricing"
    />

    <meta
      property="og:image"
      content="https://www.nexgenwebdesigns.com/assets/images/pricing/pricing-og.webp"
    />

    <meta property="og:image:alt" content="Website Design Pricing Hyderabad" />

    <meta property="og:site_name" content="NexGen Web Designs" />

    {/* ===========================================================
      TWITTER
  =========================================================== */}

    <meta name="twitter:card" content="summary_large_image" />

    <meta
      name="twitter:title"
      content="Affordable Website Design Pricing Hyderabad"
    />

    <meta
      name="twitter:description"
      content="Professional website design and web development packages tailored for businesses of every size."
    />

    <meta
      name="twitter:image"
      content="https://www.nexgenwebdesigns.com/assets/images/pricing/pricing-og.webp"
    />

    {/* ===========================================================
      JSON-LD
  =========================================================== */}

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "OfferCatalog",

        name: "Website Design & Web Development Pricing",

        url: "https://www.nexgenwebdesigns.com/pricing",

        provider: {
          "@type": "Organization",
          name: "NexGen Web Designs",
          url: "https://www.nexgenwebdesigns.com",
          logo: "https://www.nexgenwebdesigns.com/logo.png",
        },

        areaServed: ["Hyderabad", "Telangana", "Andhra Pradesh"],

        itemListElement: [
          {
            "@type": "Offer",
            name: "Basic Website Package",
          },

          {
            "@type": "Offer",
            name: "Standard Website Package",
          },

          {
            "@type": "Offer",
            name: "Premium Website Package",
          },

          {
            "@type": "Offer",
            name: "Custom Website Development",
          },
        ],
      })}
    </script>
  </Helmet>
);

export const RefundsAndCancleSEO = (
  <Helmet>
    <title>
      Terms, Refund & Cancellation Policy – NexGen Web Designs | Trusted Web
      Partner in Hyderabad & Andhra Pradesh
    </title>
    <meta
      name="description"
      content="Review NexGen Web Designs' terms of service, refund policy, and cancellation guidelines for clients across Hyderabad and Andhra Pradesh. We ensure transparency and customer-first practices in all our website development and digital services."
    />
    <meta
      name="keywords"
      content="web design refund policy Hyderabad, website service terms Andhra Pradesh, cancellation policy for web development, NexGen Web Designs terms, refund and cancellation web services AP, website development policy Hyderabad, web agency terms of service Andhra Pradesh"
    />
  </Helmet>
);

export const TermsAndConditionsSEO = (
  <Helmet>
    {/* ===========================================================
      BASIC SEO
  =========================================================== */}

    <html lang="en-IN" />

    <title>Terms & Conditions | NexGen Web Designs</title>

    <meta
      name="description"
      content="Read the Terms & Conditions of NexGen Web Designs to understand the rules, responsibilities, payment terms, website development policies, intellectual property rights and conditions governing the use of our services."
    />

    <meta
      name="robots"
      content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
    />

    <link
      rel="canonical"
      href="https://www.nexgenwebdesigns.com/terms-and-conditions"
    />

    {/* ===========================================================
      LANGUAGE
  =========================================================== */}

    <meta httpEquiv="content-language" content="en-IN" />

    {/* ===========================================================
      OPEN GRAPH
  =========================================================== */}

    <meta property="og:type" content="article" />

    <meta
      property="og:title"
      content="Terms & Conditions | NexGen Web Designs"
    />

    <meta
      property="og:description"
      content="Read the Terms & Conditions governing the use of NexGen Web Designs' website and professional web development services."
    />

    <meta
      property="og:url"
      content="https://www.nexgenwebdesigns.com/terms-and-conditions"
    />

    <meta
      property="og:image"
      content="https://www.nexgenwebdesigns.com/assets/images/legal/terms-og.webp"
    />

    <meta
      property="og:image:alt"
      content="Terms and Conditions - NexGen Web Designs"
    />

    <meta property="og:site_name" content="NexGen Web Designs" />

    {/* ===========================================================
      TWITTER
  =========================================================== */}

    <meta name="twitter:card" content="summary_large_image" />

    <meta
      name="twitter:title"
      content="Terms & Conditions | NexGen Web Designs"
    />

    <meta
      name="twitter:description"
      content="Review the Terms & Conditions for using NexGen Web Designs' website and services."
    />

    <meta
      name="twitter:image"
      content="https://www.nexgenwebdesigns.com/assets/images/legal/terms-og.webp"
    />

    {/* ===========================================================
      STRUCTURED DATA
  =========================================================== */}

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",

        "@type": "WebPage",

        name: "Terms & Conditions",

        url: "https://www.nexgenwebdesigns.com/terms-and-conditions",

        description:
          "Terms & Conditions governing the use of the NexGen Web Designs website and services.",

        publisher: {
          "@type": "Organization",

          name: "NexGen Web Designs",

          url: "https://www.nexgenwebdesigns.com",

          logo: "https://www.nexgenwebdesigns.com/logo.png",
        },

        inLanguage: "en-IN",
      })}
    </script>
  </Helmet>
);

export const SupportSEO = (
  <Helmet>
    {/* ===========================================================
      BASIC SEO
  =========================================================== */}

    <html lang="en-IN" />

    <title>
      Customer Support | Website Maintenance & Technical Support | NexGen Web
      Designs
    </title>

    <meta
      name="description"
      content="Get customer support from NexGen Web Designs. We provide website maintenance, technical support, hosting assistance, bug fixes, performance optimization and ongoing website support for businesses across Hyderabad, Telangana and Andhra Pradesh."
    />

    <meta
      name="robots"
      content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
    />

    <link rel="canonical" href="https://www.nexgenwebdesigns.com/support" />

    {/* ===========================================================
      GEO
  =========================================================== */}

    <meta name="geo.region" content="IN-TG" />

    <meta name="geo.placename" content="Hyderabad" />

    {/* ===========================================================
      OPEN GRAPH
  =========================================================== */}

    <meta property="og:type" content="website" />

    <meta property="og:title" content="Website Support | NexGen Web Designs" />

    <meta
      property="og:description"
      content="Technical support, website maintenance, hosting support, performance optimization and bug fixing services."
    />

    <meta
      property="og:url"
      content="https://www.nexgenwebdesigns.com/support"
    />

    <meta
      property="og:image"
      content="https://www.nexgenwebdesigns.com/assets/images/support/support-og.webp"
    />

    <meta property="og:site_name" content="NexGen Web Designs" />

    {/* ===========================================================
      TWITTER
  =========================================================== */}

    <meta name="twitter:card" content="summary_large_image" />

    <meta
      name="twitter:title"
      content="Customer Support | NexGen Web Designs"
    />

    <meta
      name="twitter:description"
      content="Professional website support and maintenance for businesses."
    />

    <meta
      name="twitter:image"
      content="https://www.nexgenwebdesigns.com/assets/images/support/support-og.webp"
    />

    {/* ===========================================================
      SCHEMA
  =========================================================== */}

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",

        "@type": "WebPage",

        name: "Customer Support",

        url: "https://www.nexgenwebdesigns.com/support",

        description:
          "Website maintenance and technical support services provided by NexGen Web Designs.",

        mainEntity: {
          "@type": "ProfessionalService",

          name: "NexGen Web Designs",

          url: "https://www.nexgenwebdesigns.com",

          areaServed: ["Hyderabad", "Telangana", "Andhra Pradesh"],

          serviceType: [
            "Website Maintenance",
            "Technical Support",
            "Website Bug Fixing",
            "Hosting Support",
            "Performance Optimization",
            "Security Updates",
          ],
        },
      })}
    </script>
  </Helmet>
);

export const PrivacyPolicySEO = (
  <Helmet>
    {/* ===========================================================
      PRIMARY SEO
  =========================================================== */}

    <html lang="en-IN" />

    <title>Privacy Policy | NexGen Web Designs</title>

    <meta
      name="description"
      content="Read the Privacy Policy of NexGen Web Designs to understand how we collect, use, store and protect your personal information when you use our website and services."
    />

    <meta
      name="robots"
      content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
    />

    <link
      rel="canonical"
      href="https://www.nexgenwebdesigns.com/privacy-policy"
    />

    {/* ===========================================================
      OPEN GRAPH
  =========================================================== */}

    <meta property="og:type" content="article" />

    <meta property="og:title" content="Privacy Policy | NexGen Web Designs" />

    <meta
      property="og:description"
      content="Learn how NexGen Web Designs collects, processes and protects your information."
    />

    <meta
      property="og:url"
      content="https://www.nexgenwebdesigns.com/privacy-policy"
    />

    <meta
      property="og:image"
      content="https://www.nexgenwebdesigns.com/assets/images/privacy/privacy-policy-og.webp"
    />

    {/* ===========================================================
      TWITTER
  =========================================================== */}

    <meta name="twitter:card" content="summary_large_image" />

    <meta name="twitter:title" content="Privacy Policy | NexGen Web Designs" />

    <meta
      name="twitter:description"
      content="Read our Privacy Policy and learn how we protect your information."
    />

    <meta
      name="twitter:image"
      content="https://www.nexgenwebdesigns.com/assets/images/privacy/privacy-policy-og.webp"
    />

    {/* ===========================================================
      SCHEMA
  =========================================================== */}

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",

        "@type": "WebPage",

        name: "Privacy Policy",

        url: "https://www.nexgenwebdesigns.com/privacy-policy",

        description:
          "Privacy Policy for NexGen Web Designs explaining how personal information is collected, processed and protected.",

        publisher: {
          "@type": "Organization",
          name: "NexGen Web Designs",
          url: "https://www.nexgenwebdesigns.com",
          logo: "https://www.nexgenwebdesigns.com/logo.png",
        },
      })}
    </script>
  </Helmet>
);

export const ErrorPageSEO = (
  <Helmet>
    {/* ===========================================================
      BASIC SEO
  =========================================================== */}

    <html lang="en-IN" />

    <title>404 - Page Not Found | NexGen Web Designs</title>

    <meta
      name="description"
      content="The page you are looking for could not be found. Return to NexGen Web Designs to explore our website design, web development and digital services."
    />

    {/* IMPORTANT */}
    <meta name="robots" content="noindex,nofollow,noarchive,nosnippet" />

    {/* No Canonical for 404 pages */}

    <meta httpEquiv="content-language" content="en-IN" />

    {/* ===========================================================
      OPEN GRAPH
  =========================================================== */}

    <meta property="og:title" content="404 - Page Not Found" />

    <meta
      property="og:description"
      content="Sorry, the page you requested could not be found."
    />

    <meta property="og:type" content="website" />

    {/* ===========================================================
      TWITTER
  =========================================================== */}

    <meta name="twitter:card" content="summary" />

    <meta name="twitter:title" content="404 - Page Not Found" />

    <meta
      name="twitter:description"
      content="The requested page does not exist."
    />

    {/* ===========================================================
      STRUCTURED DATA
  =========================================================== */}

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "404 - Page Not Found",
        description: "Error page shown when a requested page cannot be found.",
      })}
    </script>
  </Helmet>
);
