import React, { useEffect, useState, useRef } from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      setMouse({
        x: x,
        y: y,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);
  const mouseGlow = useRef(null);

  useEffect(() => {
    const moveGlow = (e) => {
      if (!mouseGlow.current) return;

      mouseGlow.current.style.left = `${e.clientX}px`;

      mouseGlow.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveGlow);

    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);
  return (
    <section className="nxHeroSection overflow-hidden">
      <div ref={mouseGlow} className="mouseGlow"></div>

      <div className="bgGrid"></div>

      <div className="gradientOrb orbOne"></div>

      <div className="gradientOrb orbTwo"></div>

      <div className="gradientOrb orbThree"></div>
      <div className="container">
        <div className="row">
          {/* ======================================================
LEFT CONTENT
====================================================== */}

          <div className="col-lg-6">
            <div className="nxHeroContent" data-aos="fade-up">
              <div className="nxHeroTopBadge">
                <span className="nxPulse"></span>
                Building Premium Digital Experiences
              </div>

              <h2 className="nxHeroHeadingmain">
                Transform Your
                <span className="nxGradientText">Business</span>
                Into A
                <span className="nxGradientText">Powerful Digital Brand</span>
              </h2>

              <p className="nxHeroDescription">
                We craft lightning-fast websites, premium UI/UX,
                high-performance web applications and digital experiences that
                help businesses grow, convert visitors into customers, and
                dominate their industry.
              </p>

              <div className="nxHeroButtons">
                <Link to="/contact" className="nxPrimaryButton">
                  Start Your Project
                </Link>

                <Link to="/portfolio" className="nxSecondaryButton">
                  View Portfolio
                </Link>
              </div>

              <div className="nxTrustRow">
                <div className="nxTrustItem">
                  <div className="nxTrustIcon">
                    <i className="fa-solid fa-handshake"></i>
                  </div>

                  <div>
                    <h6>Trusted</h6>

                    <p>Secure Development</p>
                  </div>
                </div>

                <div className="nxTrustItem">
                  <div className="nxTrustIcon">
                    <i className="fa-solid fa-rocket"></i>
                  </div>

                  <div>
                    <h6>Fast</h6>

                    <p>High Performance</p>
                  </div>
                </div>
              </div>

              <div className="nxStatsWrapper">
                <div className="nxStatCard">
                  <h2>100%</h2>

                  <p>Custom Design</p>
                </div>

                <div className="nxStatCard">
                  <h2>24/7</h2>

                  <p>Support</p>
                </div>

                <div className="nxStatCard">
                  <h2>SEO</h2>

                  <p>Optimized</p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
RIGHT SIDE
===================================================== */}

          <div className="col-lg-6">
            <div
              className="nxHeroVisual"
              data-aos="fade-left"
              style={{
                transform: `perspective(1400px)
rotateY(${mouse.x * 8}deg)
rotateX(${-mouse.y * 8}deg)`,
              }}
            >
              {/* Background Glow */}

              <div className="nxGlowOne"></div>

              <div className="nxGlowTwo"></div>

              <div className="nxGridPattern"></div>

              <div className="nxParticle p1"></div>
              <div className="nxParticle p2"></div>
              <div className="nxParticle p3"></div>
              <div className="nxParticle p4"></div>
              <div className="nxParticle p5"></div>
              <div className="nxParticle p6"></div>

              <div className="nxMainGlassCard">
                <div className="nxGlassHeader">
                  <div className="nxDots">
                    <span></span>

                    <span></span>

                    <span></span>
                  </div>

                  <div className="nxGlassTitle">NexGen Web Designs</div>
                </div>

                {/* <div className="nxCodeArea">
                  <div className="nxCodeLine w90"></div>
                  <div className="nxCodeLine w75"></div>
                  <div className="nxCodeLine w85"></div>
                  <div className="nxCodeLine w65"></div>
                  <div className="nxCodeLine w95"></div>
                  <div className="nxCodeLine w55"></div>
                  <div className="nxCodeLine w80"></div>
                </div> */}
                <img
                  src={require("./../../Assets/Home_Hero_Right_Side_Image_with_tech.png")}
                  alt="web designs in hyderabad"
                />
              </div>

              <div className="nxOrbitRing">
                <div className="nxOrbitItem one">
                  <i className="fa-brands fa-react"></i>
                </div>

                <div className="nxOrbitItem two">
                  <i className="fa-brands fa-js"></i>
                </div>

                <div className="nxOrbitItem three">
                  <i className="fa-brands fa-html5"></i>
                </div>

                <div className="nxOrbitItem four">
                  <i className="fa-brands fa-css3-alt"></i>
                </div>
              </div>
              <div className="nxOrbitRing">
                <div className="nxOrbitItem one">
                  <img
                    src={require("./../../Assets/science.png")}
                    alt="React JS"
                  />
                </div>

                <div className="nxOrbitItem two">
                  <img
                    src={require("./../../Assets/js.png")}
                    alt="JavaScript"
                  />
                </div>

                <div className="nxOrbitItem three">
                  <img src={require("./../../Assets/html-5.png")} alt="HTML5" />
                </div>

                <div className="nxOrbitItem four">
                  <img src={require("./../../Assets/css-3.png")} alt="CSS3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nxScrollMouse">
        <div className="nxWheel"></div>
      </div>
    </section>
  );
};

export default Hero;
