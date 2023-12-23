import React, { useState } from 'react';
import './Scss/Slider.scss';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
        img:'./images/global.png',
        p:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit odio, nam cum, eius officiis iusto ducimus corporis dolorum voluptates velit porro deleniti ex quaerat praesentium ipsum voluptas? Quam eos animi, libero excepturi reprehenderit itaque architecto possimus minus laboriosam fuga porro.'
    },
    {
        img:'./images/global.png',
        p:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit odio, nam cum, eius officiis iusto ducimus corporis dolorum voluptates velit porro deleniti ex quaerat praesentium ipsum voluptas? Quam eos animi, libero excepturi reprehenderit itaque architecto possimus minus laboriosam fuga porro.'
    },
    {
        img:'./images/global.png',
        p:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit odio, nam cum, eius officiis iusto ducimus corporis dolorum voluptates velit porro deleniti ex quaerat praesentium ipsum voluptas? Quam eos animi, libero excepturi reprehenderit itaque architecto possimus minus laboriosam fuga porro.'
    },
    {
        img:'./images/global.png',
        p:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit odio, nam cum, eius officiis iusto ducimus corporis dolorum voluptates velit porro deleniti ex quaerat praesentium ipsum voluptas? Quam eos animi, libero excepturi reprehenderit itaque architecto possimus minus laboriosam fuga porro.'
    },
    {
        img:'./images/global.png',
        p:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit odio, nam cum, eius officiis iusto ducimus corporis dolorum voluptates velit porro deleniti ex quaerat praesentium ipsum voluptas? Quam eos animi, libero excepturi reprehenderit itaque architecto possimus minus laboriosam fuga porro.'
    },
  ];

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2 < images.length ? prevIndex + 2 : 0));
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 >= 0 ? prevIndex - 2 : images.length - 2));
  };

  return (
    <div className="back-slider">
      <div className="width">
        <p>MY RECENT PROJECTS</p>
        <h1>
          Elevate your brand to new <br />
          heights with our portfolio expertise
        </h1>

        <div className="slider-container">
          <div className="slider">
            {images.slice(currentIndex, currentIndex + 2).map((image, index) => (
              <div key={index} className="slide">
                <div className="image-container">
                  <img src={image.img} title="Click For Live View" alt={`Image ${index + 1}`} />
                  <div className="overlay">
                  <div className='para'>
                    <p>{image.p}</p>
             
                 <button>Live Preview</button>
                 </div>
                 
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="controls">
            <button onClick={showPrev} className="back">
              <FaLongArrowAltLeft style={{ marginTop: '5px' }} />
            </button>
            <button onClick={showNext} className="next">
              <FaLongArrowAltRight style={{ marginTop: '5px' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
