import React from "react";
import { cards_items } from "../../config/constants";
import AdsCard from "./AdsCard";

export default function AdsList() {
  return (
    <>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  gap-y-[80px] px-[30px] lg:px-[45px] xl:px-[30px] gap-x-[30px] py-[60px] place-items-center">
        {cards_items.map((item, i) => {
          return (
            <AdsCard key={i} item={item} />
          );
        })}
      </div>
    </>
  );
}
