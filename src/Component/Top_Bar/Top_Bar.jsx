import React from 'react'
import './style.css'

export default function Top_Navbar(props) {
  return (
    <>
        <div className='bg-[#F2F7F3] py-[8px] flex justify-between items-center nav'>
            <h6 className='text-gray-500 lg:pl-[120px] md:pl-[50px]  pl-[10px] lg:text-[16px] md:text-[14px] text-[11px]'>{props.address}</h6>
            <a href={props.email}>
              <div className="right_side flex items-center cursor-pointer group">
                <div className=" mr-[8px] mt-[4px] w-[28px] md:w-[32px] lg:w-[35px] h-[28px] md:h-[32px] lg:h-[35px] background_icon">
                  <i className="fa-regular fa-envelope   text-green-500"></i>
                </div>
                <h5 className='lg:pr-[120px] md:pr-[50px] pr-[10px] text-gray-500 font-normal lg:text-[16px] md:text-[14px] text-[11px] duration-500 group-hover:text-[#58d793]'>{props.email}</h5>
              </div>
            </a>
        </div>
    </>
  )
}
