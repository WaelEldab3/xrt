import React from 'react'
import { cards_items } from '../../config/constants'

export default function Card() {
  return (
    <>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4  gap-y-[100px] px-[120px] gap-x-[30px] py-[60px] place-items-center">
            {
                cards_items.map((item ,i) => {
                    return (
                        
                        <div key={i} className='bg-no-repeat p-8 rounded-[10px]  pb-[60px] relative group/card w-[440px] h-[250px] ' style={{backgroundImage:`url(${item.src})`}} >
                            <div className='absolute w-[411px] h-[240px] inset-0 bg-black opacity-0 group-hover/card:opacity-50  duration-300 rounded-[10px]'></div>
                            <div className='relative z-10'>
                                <h2 className=' text-[24px] font-[700]  w-[160px] text-white '>{item.title}</h2>
                                <h5 className='text-gray-400 text-[14px] font-[600] ' style={{color:item.offer_color}}>{item.offer}</h5>
                                <p className='inline-block mt-[30px] text-white text-[14px] font-[600] group/btn relative cursor-pointer'>Order Now 
                                <i class="fa-solid fa-arrow-right ml-1"></i>
                                <span className="block w-0 border-b-2 border-white  transition-all duration-300 group-hover/btn:w-full absolute left-0"></span>
                                </p>
                            </div>
                        </div>
                        
                    )
                })
            }
        </div>
    </>
  )
}
