import React from 'react'
import { INFORMATION } from '../../config/constants'

export default function Information() {
  return (
    <>
        {INFORMATION.map((info, index) => (
            <li key={index} className="text-[#E1E1E1] py-1 text-[17px]">{info}</li>
        ))}
    </>
  )
}
