import { useEffect, useRef } from "react";

const useMouseParallax = (strength = 20) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    let targetX = 0;

    let targetY = 0;

    let currentX = 0;

    let currentY = 0;

    const handleMouseMove = (event) => {
      const rect = element.getBoundingClientRect();

      const x = event.clientX - rect.left;

      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;

      const centerY = rect.height / 2;

      targetX = ((x - centerX) / centerX) * strength;

      targetY = ((y - centerY) / centerY) * strength;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;

      currentY += (targetY - currentY) * 0.08;

      element.style.setProperty(
        "--mouse-x",

        `${currentX}px`,
      );

      element.style.setProperty(
        "--mouse-y",

        `${currentY}px`,
      );

      requestAnimationFrame(animate);
    };

    window.addEventListener(
      "mousemove",

      handleMouseMove,
    );

    animate();

    return () => {
      window.removeEventListener(
        "mousemove",

        handleMouseMove,
      );
    };
  }, [strength]);

  return elementRef;
};

export default useMouseParallax;
