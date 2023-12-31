import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Scss/Review.scss';

// import required modules

import { Reviewdata } from '../Data';

export default function Review() {
    const [value, setValue] = React.useState(5);
    const [valuet, setValuet] = React.useState(4);
    const [valueth, setValueth] = React.useState(3);
  return (
    <div className='review-parent'>
        
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[]}
        className="mySwiper"
      >
        {
            Reviewdata.map((item)=>{
                return(
                    <SwiperSlide>
                        <div className='review-title'>
                        <Rating name="read-only" value={value} readOnly />
                        
                            <h1>{item.name}</h1>
                            <p>{item.para}</p>
                        </div>
                    </SwiperSlide>
                )
            })
        }
     
      </Swiper>
    </div>
  );
}
