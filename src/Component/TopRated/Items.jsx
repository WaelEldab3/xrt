import React from 'react'

export default function Items({item}) {
  return (
    <>
      <div className="flex">
          <img
            src={item.src}
            alt=""
            className="w-[100px] h-[100px] rounded-[10px] cursor-pointer"
          />
          <div className="pl-[15px] w-[220px] flex flex-col ">
            <span className="block text-[18px] hover:cursor-pointer hover:text-[#5C9963] duration-300">
              {item.name}
            </span>
            <div className="">
              <span className="line-through text-gray-500 text-[15px] ">
                {item.price}
              </span>
              <span className="pl-3 text-[#5C9963] font-semibold text-[18px]">
                {item.offer}
              </span>
            </div>
          </div>
        </div>
    </>
  )
}
