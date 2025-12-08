import React, { useState } from "react";
import { Menus, products } from "../../config/constants";
import { ChevronLeft, ChevronRight, View } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ViewMenuList from "./ViewMenus";
import ViewItems from "./ViewItems";

export default function Menulist() {
  const [active, setActive] = useState("Pizza");
  const viewCount = 8;

  const filteredProducts = products.filter((product) => product.category === active);

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

      <div className="relative w-full mt-[30px] pb-10 grid grid-cols-4 gap-4">
        {filteredProducts.map(
          (product, index) =>
            index < viewCount && (
              <ViewItems key={product.id} product={product} />
            )
        )}
      </div>

      <button className="w-[250px] h-[40px] border-2 border-gray-100 rounded-full flex items-center mx-auto justify-center group hover:bg-[#5C9963] duration-300 cursor-pointer">
        <span className="ml-3 text-[#737574] group-hover:text-white duration-300">
          View More
        </span>
        <ChevronRight
          strokeWidth={0.8}
          size={20}
          className="text-[#737574] group-hover:text-white duration-300 translate-y-0.5 group-hover:translate-x-1.5"
        />
      </button>
    </div>
  );
}
