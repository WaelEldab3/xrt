import React from "react";
import Sliderfun from "../Component/Slider/Slider";
import Categories from "../Component/Categories/Categories";
import AdsList from "../Component/Ads/AdsList";
import Menulist from "../Component/Menu_Items/Menulist";
import TopRated from "../Component/TopRated/TopRated";
import Testimonials from "../Component/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Sliderfun />
      <Categories />
      <AdsList />
      <Menulist />
      <TopRated />
      <Testimonials />
    </>
  );
};

export default Home;
