// import Middle_Bar_Lg from "./Lg_screen/Middle_Bar_Lg";
// import Middle_Bar_Sm from "./Sm_screen/Middle_Bar_Sm";
// import SubNav from "../Nav/SubNav";
import { logo } from "@/config/constants";
import { Menu } from "lucide-react";

const MiddleNav = ({ count, total, link, setclickfun }) => {
  return (
    <div className=" py-[30px] flex header-container">
      <Menu
        size={30}
        className="lg:hidden  text-gray-700 hover:text-gray-400 duration-300 cursor-pointer"
        onClick={() => setclickfun()}
      />
      {/* <i
        className="fa-light fa-bars pl-[10px] md:pl-[50px] text-gray-700 hover:text-gray-400 duration-300 text-[30px]"
        onClick={() => props.setclickfun()}
      ></i> */}
      <a href={link} className="">
        <img
          src={logo}
          className="w-[120px] md:w-[150px] "
          loading="lazy"
          alt="system logo"
        />
      </a>
      <div className="flex cursor-pointer -translate-y-1 group">
        <i className="fa-thin fa-bag-shopping cursor-pointer text-gray-600 mt-[15px] text-[30px] group-hover:text-[#58d793] duration-200 "></i>
        <h3 className="translate-y-[32px] translate-x-[-17px] text-white background_shopping_bag w-[18px] h-[18px] text-[11px]  ">
          {count}
        </h3>
        <div className=" items-center flex font-semibold relative translate-y-[6px]">
          <span className="z-10">£{total}</span>
          <span className="block w-0 border-b-2 border-black transition-all duration-300 group-hover:w-full absolute left-0 bottom-[10px]"></span>
        </div>
      </div>
    </div>
  );
};

export default MiddleNav;
