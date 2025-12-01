import React from "react";
import Sliderfun from "./../Component/Slider/Slider";
import Categories from "./../Component/Categories/Categories";
import AdsList from "./../Component/Ads/AdsList";
import Menulist from './../Component/Menu_Items/Menulist';

const Landing = () => {
  return (
    <>
      <Sliderfun />
      <Categories />
      <AdsList />
      <Menulist/>
    </>
  );
};

export default Landing;
