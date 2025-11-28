import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { images_slider } from "../../config/constants";
import Content from './Photo_Content';
export default function Sliderfun() {
  const sliderHeight = 650;

  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      modules={[Autoplay]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      style={{ height: `${sliderHeight}px` }}
    >
      {images_slider.map((current, id) => (
        <SwiperSlide key={id} className="h-full">
      
          <Content src={current.src} title={current.title} description={current.description} offer={current.offer} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
