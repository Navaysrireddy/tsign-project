import React, { useState, useEffect, useRef } from 'react';
 
export function CounterAnimation({ end, duration = 2000, suffix = '', color = "text-black" }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const observerRef = useRef(null);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounter();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
 
    if (countRef.current) {
      observer.observe(countRef.current);
      observerRef.current = observer;
    }
 
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };// eslint-disable-next-line
  }, []);
 
  const startCounter = () => {
    let startTime = null;
    const startValue = 0;
    const endValue = end;
 
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
     
      const currentCount = Math.floor(progress * (endValue - startValue) + startValue);
      setCount(currentCount);
 
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };
 
    requestAnimationFrame(animate);
  };
 
  return (
    <div ref={countRef} className={`text-5xl font-bold ${color}`}>
      {count.toLocaleString()}{suffix}
    </div>
  );
}
 