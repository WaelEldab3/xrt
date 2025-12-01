import React, { useState } from 'react'
import Top_Navbar from './Nav/Top_Navbar';
import MiddleNav from './Nav/MiddleNav';
import SideMenu from './Nav/SideMenu';
import SubNav from './Nav/SubNav';


const Header = () => {
  const [open,setopen] = useState(false);
  function setclickfun()
  {
    setopen(true);
  }
  return (
    <header>
        <Top_Navbar address="123 Main Street, Anytown, USA" email="2g5ZV@example.com" />
        <MiddleNav count={14} total={123.15} link={"https://google.com"} setclickfun={setclickfun}  />
        <SubNav phone="123-456-7890" />
        <SideMenu open={open} setclosefun={() => setopen(false)} />
    </header>
  )
}

export default Header