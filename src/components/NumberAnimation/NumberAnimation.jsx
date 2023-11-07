import React, { useState, useEffect, useRef } from 'react';
import './NumberAnimation.css';

const NumberAnimation = ({ startCount, endCount }) => {
  const [number, setNumber] = useState(startCount);
  const containerRef = useRef();

  useEffect(() => {
    const targetNumber = endCount; // Use the provided end count
    let currentNumber = startCount; // Use the provided start count

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const interval = setInterval(() => {
            if (currentNumber < targetNumber) {
              currentNumber += 1;
              setNumber(currentNumber);
            } else {
              clearInterval(interval);
            }
          }, 5); // Adjust the interval to control the animation speed
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // You can adjust this threshold as needed
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [startCount, endCount]);

  return (
    <div ref={containerRef}>
      <span >{number}</span>
    </div>
  );
};

export default NumberAnimation;
