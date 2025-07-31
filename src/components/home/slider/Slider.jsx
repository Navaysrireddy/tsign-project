import React, { useEffect, useRef } from 'react';
import './Slider.css';

import img1 from '../../../assests/istockphoto.jpg';
import img2 from '../../../assests/book.avif';
import img3 from '../../../assests/istockphoto.jpg';
import img4 from '../../../assests/book.avif';

const originalImages = [img1, img2, img3, img4];

const Slider = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const images = [...originalImages, ...originalImages]; // duplicate set

  const scrollNext = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollAmount = slider.offsetWidth;

    if (slider.scrollLeft >= (slider.scrollWidth / 2)) {
      // If we reach the second set, reset scroll position to original
      slider.scrollLeft = 0;
    }

    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    intervalRef.current = setInterval(scrollNext, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="slider-wrapper">
      <div className="slider-container" ref={sliderRef}>
        {images.map((image, index) => (
          <img
            className="slide-image"
            src={image}
            alt={`Slide ${index + 1}`}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
