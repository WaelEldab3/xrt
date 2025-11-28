import "./App.css";
import Top_Navbar from "./Component/Top_Bar/Top_Bar.jsx";
import Middle_Bar_Lg from "./Component/Middle_Bar/Lg_screen/Middle_Bar_Lg.jsx";
import Middle_Bar_Sm from "./Component/Middle_Bar/Sm_screen/Middle_Bar_Sm";
import Switcher from "./Component/Middle_Bar/Switcher";
// import { useEffect } from "react";
// import { useIsMobile } from "./hooks/useIsMobile.jsx";
import SubNav from './Component/Nav/SubNav';
import SideMenu from './Component/Nav/SideMenu';
import { useState } from "react";
import Sliderfun from './Component/Slider/Slider.jsx'
import Categories from "./Component/Categories/Categories.jsx";
import Card from './Component/Cards/Card';
function App() {
  const [open,setopen] = useState(false);
  function setclickfun()
  {
    setopen(true);
  }
  
  return (
    <>
      <Top_Navbar
        email={"contact@example"}
        address={"Welcome to our online store !"}
      />

      <Switcher count={14} total={123.15} link={"https://google.com"}  setclickfun={setclickfun}/>
      <SideMenu open={open} setclosefun={() => setopen(false)} />
      <Sliderfun/>
      <Categories/>
      <Card/>
      {/* <Middle_Bar_Sm click={click} setclickfun={setclickfun}/> */}
      {/* <Middle_Bar_Lg count={14} total={123.15} link={"https://google.com"}/> */}
      {/* <Middle_Bar_Sm count={12} total={13.25} link={"https://google.com"}/> */}
    </>
  );
}

export default App;
