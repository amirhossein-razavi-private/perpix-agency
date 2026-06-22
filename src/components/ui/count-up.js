"use client";

import { useEffect, useRef, useState } from "react";

function parseValue(raw) {
  const match = String(raw).match(/^([+-]?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", target: 0, trailing: String(raw), decimals: 0 };
  const [, prefix, num, trailing] = match;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return { prefix, target: parseFloat(num), trailing, decimals };
}

export function CountUp({
  value,
  suffix = "",
  duration = 1600,
  className = "",
}) {
  const { prefix, target, trailing, decimals } = parseValue(value);
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const run = () => {
      if (started.current) return;
      started.current = true;

      const reduce = window.matchMedia?.(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduce) {
        setDisplay(target);
        return;
      }

      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(target * eased);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === "undefined") {
      run();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  const formatted = display.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {trailing}
      {suffix && <span className="gradient-text">{suffix}</span>}
    </span>
  );
}

export default CountUp;
