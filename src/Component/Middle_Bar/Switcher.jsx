import React from 'react'
import Middle_Bar_Lg from './Lg_screen/Middle_Bar_Lg';
import Middle_Bar_Sm from './Sm_screen/Middle_Bar_Sm';
import SubNav from './../Nav/SubNav';

export default function Switcher(props) {
  return (
    <>
        <div className="hidden lg:block">
            <Middle_Bar_Lg count={props.count} total={props.total} link={props.link} />
            <SubNav phone="1-800-234-5678"  />
        </div>
        <div className="block lg:hidden">
            <Middle_Bar_Sm count={props.count} total={props.total} link={props.link} click={props.click} setclickfun={props.setclickfun} />
        </div>
    </>
  )
}
