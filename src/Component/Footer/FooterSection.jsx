import React from "react";
import { footer_image } from "../../config/constants";
import Location from "./Location";
import Information from './Information';
import My_Account from './My_Account';
import Categories from "./Categories_Footer";

export default function FooterSection() {
  return (
    <>
      <div
        className="bg-[#3D6642] grid grid-cols-4 gap-4 px-[70px] py-[70px]  gap-x-[90px]"
        style={{
          backgroundImage: `url(${footer_image.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <span className="font-bold text-[#FFA900] text-[17px]">STORE LOCATION</span>
          <ul className="pt-2">
            <Location />
          </ul>
        </div>
        <div>
            <span className="font-bold text-[#FFA900] text-[17px]">INFORMATION</span>
          <ul className="pt-2">
            <Information/>
          </ul>
        </div>
        <div className="">
            <span className="font-bold text-[#FFA900] text-[17px]">MY ACCOUNT</span>
            <ul className="pt-2">
                <My_Account/>
            </ul>
        </div>
        <div className="">
            <span className="font-bold text-[#FFA900] text-[17px]">CATEGORIES</span>
            <ul className="pt-2">
                <Categories/>
            </ul>
        </div>
      </div>
      <div className="bg-[#315234] flex justify-between items-center h-[60px] px-[70px]">
        <h2 className="text-[#E1E1E1] text-[16px]">Copyright © 2025 <span className="text-[#559963] cursor-pointer">TechX</span>. All Rights Reserved.</h2>
        <img src={footer_image.pay} alt="" />
      </div>
    </>
  );
}
