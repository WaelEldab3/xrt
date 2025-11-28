import React from 'react'
import { Categories_items } from '../../config/constants'

export default function Categories() {
  return (
    <>
        <div className='grid  xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-x-[30px] gap-y-[100px] px-[120px] py-[60px] pb-[80px] place-items-center'>
            {
                Categories_items.map((item ,i) => {
                    return (
                        <div key={i} className=' p-4  rounded-full  lg:h-[130px] lg:w-[130px] md:w-[140px] md:h-[140px] w-[200px] h-[200px]' style={{backgroundColor:item.bg}}>
                            <img src={item.src} alt={item.name} className='mt-[30px] scale-[1.18] hover:scale-[1.40] duration-300' />
                            <h2 className='mt-4 text-center font-semibold text-[15px]'>{item.name}</h2>
                            <p className='text-center text-gray-400'>{item.products + " Products"}</p>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}
