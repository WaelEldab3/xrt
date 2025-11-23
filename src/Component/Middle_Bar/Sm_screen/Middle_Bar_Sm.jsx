import React from 'react'
import {logo} from '../../../config/constants'
export default function Middle_Bar_Sm(props) {
  return (
    <>
        <div className="flex justify-between my-[30px] items-center">
          <i className="fa-light fa-bars pl-[10px] md:pl-[50px] text-gray-700 hover:text-gray-400 duration-300 text-[30px]" onClick={() => props.setclickfun()}></i>
          <a href={props.link}>
            <img src={logo} alt="system logo" />
          </a>
          <div className="right_side flex cursor-pointer group pr-[10px] md:pr-[50px]">
            <i className="fa-thin fa-bag-shopping cursor-pointer text-gray-600 mt-[15px] text-[30px] group-hover:text-[#58d793] duration-200 "></i>
            <h3 className='translate-y-[32px] translate-x-[-17px] text-white background_shopping_bag w-[18px] h-[18px] text-[11px]  '>{props.count}</h3>
            <div className=' items-center flex font-semibold relative translate-y-[6px]'>
              <span className="z-10">£{props.total}</span>
              <span className="block w-0 border-b-2 border-black transition-all duration-300 group-hover:w-full absolute left-0 bottom-[10px]"></span>
            </div>
          </div>
        </div>
    </>
  )
}
