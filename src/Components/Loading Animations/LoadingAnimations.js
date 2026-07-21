import React, { useEffect, useState } from "react";
import "./LoadingAnimations.css";

import Logo from "../../Assets/NexGen_Web_Designs_Finla_Light_Logo_With_Background.png";

const loadingMessages = [
  "Initializing Experience...",
  "Loading Modern Components...",
  "Crafting Premium Websites...",
  "Optimizing Performance...",
  "Preparing Responsive Layout...",
  "Enhancing User Experience...",
  "Almost Ready...",
];

function LoadingAnimation() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    let animationFrame;
    let currentProgress = 0;

    const animate = () => {
      currentProgress += Math.random() * 2.5;

      if (currentProgress >= 100) {
        currentProgress = 100;
      }

      setProgress(Math.floor(currentProgress));

      if (currentProgress < 100) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader">
      <div className="loader__content">
        <img src={Logo} alt="NexGen Web Designs" className="loader__logo" />

        <h1 className="loader__title">NexGen Web Designs</h1>
        <p className="loader__tagline">Crafting Premium Digital Experiences</p>

        <div className="loader__progress">
          <div
            className="loader__progressFill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <p className="loader__message">{loadingMessages[messageIndex]}</p>

        <div className="loader__dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <span className="loader__percentage">{progress}%</span>
        <p className="loader__footer">
          Powered by <strong>NexGen Web Designs</strong>
        </p>
      </div>
    </div>
  );
}

export default LoadingAnimation;
