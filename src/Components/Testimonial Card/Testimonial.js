import React, { useEffect, useMemo, useRef, useState } from "react";

import "./Testimonial.css";
import { reviews } from "../../Data/Page Data/HomePageData";

// const testimonials = [
//   {
//     id: 1,
//     name: "Ravi Kumar",
//     company: "RK Builders",
//     designation: "Managing Director",
//     image: require("../../Assets/Catering_Website.png"),
//     review:
//       "NexGen Web Designs transformed our business with a premium website. Customer enquiries increased within weeks and the support has been exceptional.",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "Anjali Reddy",
//     company: "Bloom Beauty Studio",
//     designation: "Founder",
//     image: require("../../Assets/Catering_Website.png"),
//     review:
//       "Beautiful UI, fast loading pages and excellent communication. Our online bookings improved significantly after launching the new website.",
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: "Sandeep Rao",
//     company: "Sky Interiors",
//     designation: "CEO",
//     image: require("../../Assets/Catering_Website.png"),
//     review:
//       "Professional from start to finish. Every detail was handled carefully and the final website exceeded our expectations.",
//     rating: 5,
//   },
//   {
//     id: 4,
//     name: "Priya Sharma",
//     company: "PS Fashion",
//     designation: "Owner",
//     image: require("../../Assets/Catering_Website.png"),
//     review:
//       "Modern design, SEO friendly structure and incredible responsiveness. Highly recommended for businesses wanting a professional online presence.",
//     rating: 5,
//   },
//   {
//     id: 5,
//     name: "Mahesh Kumar",
//     company: "MK Developers",
//     designation: "Director",
//     image: require("../../Assets/Catering_Website.png"),
//     review:
//       "Working with NexGen Web Designs was one of our best decisions. The project was delivered on time with amazing quality.",
//     rating: 5,
//   },
//   {
//     id: 6,
//     name: "Keerthi Rani",
//     company: "Royal Events",
//     designation: "Founder",
//     image: require("../../Assets/Catering_Website.png"),
//     review:
//       "Our new website reflects our brand perfectly. The animations, speed and user experience are outstanding.",
//     rating: 5,
//   },
// ];

export default function PremiumTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const speed = useRef(0.6);

  const position = useRef(0);

  const pauseRef = useRef(false);

  // const cardWidth = 430;

  // const totalCards = reviews.length;

  const sliderRef = useRef(null);

  const trackRef = useRef(null);

  // const animationRef = useRef(null);

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
  //   const [activeIndex, setActiveIndex] = useState(0);

  const loopTestimonials = useMemo(() => {
    return [...reviews, ...reviews];
  }, []);

  useEffect(() => {
    pauseRef.current = pause;
  }, [pause]);

  //   useEffect(() => {
  //     const track = trackRef.current;

  //     const slider = sliderRef.current;

  //     if (!track || !slider) return;

  //     let frame;

  //     const animate = () => {
  //       if (!pauseRef.current) {
  //         position.current += speed.current;

  //         if (position.current >= cardWidth * totalCards) {
  //           position.current = 0;
  //         }

  //         track.style.transform = `translate3d(${-position.current}px,0,0)`;

  //         updateActiveCard();
  //       }

  //       frame = requestAnimationFrame(animate);
  //     };

  //     animate();

  //     return () => cancelAnimationFrame(frame);
  //   }, []);

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

    const items = trackRef.current.querySelectorAll(
      ".premiumTestimonials__item",
    );

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
          <span>
            <i className="fa-solid fa-star"></i>
            CLIENT TESTIMONIALS
          </span>

          <h2>
            Real Businesses.
            <br />
            Real Success Stories.
          </h2>

          <p>
            Every website we build is designed to help businesses grow, improve
            trust and create long-term digital success.
          </p>
        </div>

        <div
          className="premiumTestimonials__slider"
          ref={sliderRef}
          //   onMouseEnter={() => setPause(true)}
          //   onMouseLeave={() => setPause(false)}
          // ref={sliderRef}
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
                // className={`premiumTestimonials__item ${
                //   activeIndex === index
                //     ? "premiumTestimonials__item--active"
                //     : ""
                // }`}
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
