import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { images_slider } from "../../config/constants";

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
          <img
            src={current.src}
            alt={current.alt || `slide-${id}`}
            loading="lazy"
            className="block w-full h-full object-cover object-center"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
