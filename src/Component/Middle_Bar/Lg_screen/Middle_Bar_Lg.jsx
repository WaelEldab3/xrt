import React from 'react'
import './style.css'
import {logo} from '../../../config/constants'
export default function Middle_Bar_Lg(props) {
  return (
      <>
        <div className=" flex justify-between my-[30px]">
          <a href={props.link}>
            <img src={logo} loading='lazy' alt="system logo" className='pl-[120px] '/>
          </a>
          <div className="right_side flex cursor-pointer group pr-[120px]">
            <i className="fa-thin fa-bag-shopping text-gray-600 mt-[15px] text-[30px] group-hover:text-[#58d793] duration-200 "></i>
            <h3 className='translate-y-[32px] translate-x-[-17px] text-white background_shopping_bag w-[18px] h-[18px] text-[11px]  '>{props.count}</h3>
            <div className=' items-center flex font-semibold relative'>
              <span className="z-10">£{props.total}</span>
              <span className="block w-0 border-b-2 border-black transition-all duration-300 group-hover:w-full absolute left-0 bottom-[10px]"></span>
            </div>
          </div>
        </div>
      </>
  )
}
