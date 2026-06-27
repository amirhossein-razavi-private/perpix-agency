"use client";

import { useEffect, useRef, useState } from "react";

export function ProgressBar({ value, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const animate = () => {
      const reduce = window.matchMedia?.(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      setWidth(reduce ? value : 0);
      if (!reduce) {
        requestAnimationFrame(() => {
          setTimeout(() => setWidth(value), delay);
        });
      }
    };

    if (typeof IntersectionObserver === "undefined") {
      animate();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <div
      ref={ref}
      className={`h-1.5 bg-gray-100 dark:bg-white/8 rounded-full overflow-hidden ${className}`}
    >
      <div
        className="h-full rounded-full gradient-bg transition-all duration-[1.6s] ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export default ProgressBar;
