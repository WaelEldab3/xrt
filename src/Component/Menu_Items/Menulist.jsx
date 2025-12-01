import React, { useState } from "react";
import { Menus, products } from "../../config/constants";
import {  ChevronLeft, ChevronRight, View } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ViewMenuList from "./ViewMenus";
import ViewItems from "./ViewItems";

export default function Menulist() {
  const [active, setActive] = useState("All");

  const filteredProducts =
    active === "All"
      ? products
      : products.filter((product) => product.category === active);

  return (
    <div className="px-[70px] mt-4">
      <h2 className="text-3xl font-[700] text-[#2F3E30] mb-3">Menu List</h2>
      <div className="flex items-center gap-6 mb-6">
        <div className="relative flex-1 h-[2px] bg-gray-200">
          <div className="absolute left-0 top-0 h-full w-16 bg-green-600" />
        </div>

        <div className="flex gap-3">
          {Menus.map((item, index) => (
            <ViewMenuList
              key={index} 
              item={item}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
      </div>

      <div className="relative w-full mt-[30px] pb-10">
        <button
          className="
            menu-prev
            absolute left-[-55px] top-1/3 z-20
            flex
            w-12 h-12
            items-center justify-center
            rounded-full
            bg-white shadow-md border border-gray-200
            hover:bg-green-50
            transition
          "
        >
        <ChevronLeft className="w-6 h-6 text-green-700" />
        </button>

        <button
          className="
            menu-next
            absolute right-[-55px] top-1/3  z-20
            flex
            w-12 h-12
            items-center justify-center
            rounded-full
            bg-white shadow-md border border-gray-200
            hover:bg-green-50
            transition
          "
        >
          <ChevronRight className="w-6 h-6 text-green-700" />
        </button>

        <Swiper
          rewind={true}
          modules={[Navigation]}
          navigation={{
            prevEl: ".menu-prev",
            nextEl: ".menu-next",
          }}
          spaceBetween={24}
          slidesPerView={4}
          loop={filteredProducts.length > 4}         
          loopAdditionalSlides={filteredProducts.length} 
        >
          {filteredProducts.map((product, key) => (
            <SwiperSlide key={key} className="flex justify-center">
              <ViewItems product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
