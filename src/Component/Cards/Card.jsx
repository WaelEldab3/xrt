import React from 'react'
import { cards_items } from '../../config/constants'

export default function Card() {
  return (
    <>
        <div className="grid grid-cols-3 gap-4  gap-y-[100px] px-[120px] gap-x-[30px] py-[60px]">
            {
                cards_items.map((item ,i) => {
                    return (
                        <div key={i} className=' p-4 rounded-[10px] py-[88px] ' style={{backgroundImage:`url(${item.src})`}} >
                            <h2 className='mt-4  font-semibold text-[15px]'>{item.title}</h2>
                            <h5 className='text-gray-400' style={{color:item.offer_color}}>{item.offer}</h5>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}
