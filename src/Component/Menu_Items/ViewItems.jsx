import React from "react";
import { Handbag } from "lucide-react";

export default function ViewItems(props) {
  return (
    <>
      <div className="w-[330px]">
        <div className="relative">
          <img
            src={props.product.src}
            alt={props.product.name}
            className="w-[330px] h-[320px] object-cover rounded-[18px]"
          />

          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1 px-4 py-1 rounded-full bg-green-600 text-white shadow-md">
              <span className="text-sm font-semibold">$</span>
              <span className="text-[17px] font-bold">
                {props.product.price}
              </span>
            </div>
          </div>
        </div>

        <h3 className="mt-8 mb-3 text-[13px] font-[500] text-[#3D4B3E] text-center">
          {props.product.name}
        </h3>

        <div className="w-[250px] h-[40px] border-2 border-gray-100 rounded-2xl flex items-center justify-center group hover:bg-[#5C9963] duration-300 cursor-pointer mx-auto">
          <Handbag
            strokeWidth={0.8}
            size={20}
            className="text-[#5C9963] group-hover:text-white duration-300"
          />
          <h5 className="ml-3 text-[#737574] group-hover:text-white duration-300">
            Order Now
          </h5>
        </div>
      </div>
    </>
  );
}
