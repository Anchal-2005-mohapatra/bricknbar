import React, { useState, useEffect } from 'react';
import Shop from './Shop';
import img1 from "../../assets/home/img1.webp";
import img2 from "../../assets/home/img2.webp";
import img3 from "../../assets/home/img3.webp";
import img4 from "../../assets/home/img4.webp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import {Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const Hero = () => {
  const [shop, setShop] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShop(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>

      <Shop shop={shop} onClose={() => setShop(false)} />
      <div>
        <Swiper modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          spaceBetween={50}
           pagination={{ clickable: true }}
     
        >
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Hero