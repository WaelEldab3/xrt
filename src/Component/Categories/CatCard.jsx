import React from "react";

const CatCard = ({key, item}) => {
  return (
    <div
      key={key}
      className=" p-4  rounded-full  lg:h-[130px] lg:w-[130px] md:w-[140px] md:h-[140px] w-[200px] h-[200px]"
      style={{ backgroundColor: item.bg }}
    >
      <img
        src={item.src}
        alt={item.name}
        className="mt-[30px] scale-[1.18] hover:scale-[1.40] duration-300"
      />
      <h2 className="mt-4 text-center font-semibold text-[15px]">
        {item.name}
      </h2>
      <p className="text-center text-gray-400">{item.products + " Products"}</p>
    </div>
  );
};

export default CatCard;
