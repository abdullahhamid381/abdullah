import React, { useState } from 'react';
import './Scss/Slider.scss';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    './images/global.png',
    './images/helo1.png',
    './images/helo2.png',
    './images/global.png',
    './images/helo1.png',
    './images/helo2.png',
  ];

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2 < images.length ? prevIndex + 2 : 0));
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 >= 0 ? prevIndex - 2 : images.length - 2));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='back-slider' >
        <div className='width'>
        <p>MY RECENT PORTFOLIO</p>
            <h1>Elevate your brand to new <br />
heights with our portfolio expertise</h1>
    
        <div className="slider-container">
           
      <div className="slider">
        {images.slice(currentIndex, currentIndex + 2).map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={showPrev}>Prev</button>
        <button onClick={showNext}>Next</button>
      </div>
      <div className="pagination-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex || index === currentIndex + 1 ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Slider;
