import React, { useState, useEffect } from 'react'; // Import useEffect
import './Slide.css';

function Slide() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'Slide1.jpg',
      alt: 'Flower Arch Decor'
    },
    {
      image: 'https://www.khimcruz.com/wp-content/uploads/2019/11/inspired-by-Oh-Joy-birthday-party-styled-by-Khim-Cruz.jpg ',
      alt: 'Flower Arch Decor'
    },
    {
      image: 'https://i.pinimg.com/originals/17/15/52/17155210d397a0f542a1ca8f79644cc5.jpg',
      alt: 'Floral Centerpiece'
    },
    {
      image: 'https://americanpavilion.com/wp-content/uploads/2018/04/Corporate-Event.jpg',
      alt: 'Elegant Table Setup'
    }
  ];

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Use useEffect to set an interval for auto-sliding
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
     // Cleanup inter+val on component unmount
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div className="slide-container">
      <img
        src={slides[currentSlide].image}
        alt={slides[currentSlide].alt}
        className="slide-image"
      />
    </div>
  );
}

export default Slide;
