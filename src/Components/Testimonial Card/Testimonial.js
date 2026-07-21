import React, { useEffect, useMemo, useRef, useState } from "react";

import "./Testimonial.css";
import { reviews } from "../../Data/Page Data/HomePageData";

export default function PremiumTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const speed = useRef(0.6);

  const position = useRef(0);

  const pauseRef = useRef(false);

  const sliderRef = useRef(null);

  const trackRef = useRef(null);

  const [pause, setPause] = useState(false);

  const drag = useRef(false);

  const startX = useRef(0);

  const previousPosition = useRef(0);

  const handleMouseDown = (e) => {
    drag.current = true;

    pauseRef.current = true;

    startX.current = e.clientX;

    previousPosition.current = position.current;
  };

  const handleMouseMove = (e) => {
    if (!drag.current) return;

    const distance = e.clientX - startX.current;

    position.current = previousPosition.current - distance;
  };
  const handleMouseUp = () => {
    drag.current = false;

    pauseRef.current = false;
  };

  const touchStart = useRef(0);

  const handleTouchStart = (e) => {
    pauseRef.current = true;

    touchStart.current = e.touches[0].clientX;

    previousPosition.current = position.current;
  };

  const handleTouchMove = (e) => {
    const distance = e.touches[0].clientX - touchStart.current;

    position.current = previousPosition.current - distance;
  };

  const handleTouchEnd = () => {
    pauseRef.current = false;
  };

  const loopTestimonials = useMemo(() => {
    return [...reviews, ...reviews];
  }, []);

  useEffect(() => {
    pauseRef.current = pause;
  }, [pause]);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    let frameId;

    const animate = () => {
      if (!pauseRef.current) {
        position.current += speed.current;

        const halfWidth = track.scrollWidth / 2;

        if (position.current >= halfWidth) {
          position.current -= halfWidth;
        }

        track.style.transform = `translate3d(${-position.current}px,0,0)`;

        updateActiveCard();
      }

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        speed.current = Math.min(speed.current + 0.1, 2);
      } else {
        speed.current = Math.max(speed.current - 0.1, 0.25);
      }
    };

    slider.addEventListener("wheel", handleWheel);

    return () => {
      slider.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    let timer;

    const resetSpeed = () => {
      timer = setInterval(() => {
        if (speed.current > 0.6) {
          speed.current -= 0.02;
        }

        if (speed.current < 0.6) {
          speed.current += 0.02;
        }
      }, 30);
    };

    resetSpeed();

    return () => clearInterval(timer);
  }, []);

  const updateActiveCard = () => {
    const slider = sliderRef.current;
    const track = trackRef.current;
    if (!slider || !track) return;

    const items = track.querySelectorAll(".premiumTestimonials__item");

    if (!items.length) return;

    const sliderRect = slider.getBoundingClientRect();

    const center = sliderRect.left + sliderRect.width / 2;

    let closest = 0;
    let smallest = Infinity;

    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();

      const cardCenter = rect.left + rect.width / 2;

      const distance = Math.abs(center - cardCenter);

      if (distance < smallest) {
        smallest = distance;
        closest = index;
      }
    });

    setActiveIndex(closest);
  };

  return (
    <section className="premiumTestimonials">
      <div className="premiumTestimonials__blur blurOne"></div>

      <div className="premiumTestimonials__blur blurTwo"></div>

      <div className="container">
        <div className="premiumTestimonials__heading">
          <span data-aos="fade-up">
            <i className="fa-solid fa-star"></i>
            CLIENT TESTIMONIALS
          </span>

          <h2 data-aos="fade-up">
            Real Businesses.
            <br />
            Real Success Stories.
          </h2>

          <p data-aos="fade-up">
            Every website we build is designed to help businesses grow, improve
            trust and create long-term digital success.
          </p>
        </div>

        <div
          className="premiumTestimonials__slider"
          ref={sliderRef}
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeaveCapture={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="premiumTestimonials__spotlight"></div>
          <div className="premiumTestimonials__track" ref={trackRef}>
            {loopTestimonials.map((item, index) => (
              <div
                key={index}
                className={`premiumTestimonials__item
${activeIndex === index ? "premiumTestimonials__item--active" : ""}
${
  activeIndex === index - 1 ||
  (activeIndex === 0 && index === loopTestimonials.length - 1)
    ? "previous"
    : ""
}
${
  activeIndex === index + 1 ||
  (activeIndex === loopTestimonials.length - 1 && index === 0)
    ? "next"
    : ""
}`}
              >
                <div className="premiumTestimonials__card">
                  <div className="premiumTestimonials__quote">
                    <i className="fa-solid fa-quote-right"></i>
                  </div>

                  <div className="premiumTestimonials__rating">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>

                  <p>"{item.testimonial}"</p>

                  <div className="premiumTestimonials__footer">
                    <img src={item.profilePic} alt={item.name} />

                    <div>
                      <h4>{item.name}</h4>

                      <span>{item.designation}</span>

                      <small>{item.projectTitle}</small>
                    </div>

                    <div className="premiumTestimonials__verified">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
