import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Scss/Review.scss';

// import required modules
import { FreeMode } from 'swiper/modules';

export default function Review() {
  return (
    <div className='review-parent'>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
     
      </Swiper>
    </div>
  );
}
