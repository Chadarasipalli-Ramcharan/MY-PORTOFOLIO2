import { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export default function AnimatedCounter({
  value,
  duration = 2000,
  className = "",
  prefix = "",
  suffix = ""
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (value <= 0) {
      setCount(0);
      return;
    }

    const element = countRef.current;
    if (!element) return;

    // Check if the element is in viewport
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        startAnimation();
        // Once we've started the animation, we don't need the observer anymore
        observer.disconnect();
      }
    });

    observer.observe(element);

    const startAnimation = () => {
      const animate = (timestamp: number) => {
        if (!startTimeRef.current) {
          startTimeRef.current = timestamp;
        }

        const progress = timestamp - startTimeRef.current;
        const percentage = Math.min(progress / duration, 1);
        
        setCount(Math.floor(percentage * value));

        if (percentage < 1) {
          frameRef.current = requestAnimationFrame(animate);
        } else {
          startTimeRef.current = null;
        }
      };

      // Start the animation
      frameRef.current = requestAnimationFrame(animate);
    };

    return () => {
      observer.disconnect();
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [value, duration]);

  return (
    <span ref={countRef} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
