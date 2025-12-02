import React from "react";

export default function ViewMenuList({ item, active, setActive , key}) {
  return (
    <button
      key={key}
      onClick={() => setActive(item)}
      className={`px-5 py-1.5 cursor-pointer rounded-full text-sm font-medium transition-all
        ${
          active === item
            ? "bg-[#5C9963] text-white"
            : "bg-[#F5F5F5] text-green-700"
        }
      `}
    >
      {item}
    </button>
  );
}
