import React from "react";
import { nav_links } from "../../config/constants";

const NavLinks = ({className}) => {
  return (
    <ul className={`${className} lg:ml-[90px] `}>
      {nav_links.map((link) => {
        return (
          <li key={link.name} className="ml-[30px]  lg:text-white lg:mt-0  text-black cursor-pointer group relative font-bold">
            <a href={link.path}>{link.name+" "}</a>
            {link.arrow && (
            <i className="fa-thin fa-chevron-down text-sm"></i>
          )}
            <span className="block w-0 border-b-1 border-white transition-all duration-300 group-hover:w-full absolute left-0 bottom-[-2px]"></span>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
