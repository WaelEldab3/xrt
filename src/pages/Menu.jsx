import React, { useState, useMemo } from "react";
import { Categories_items, products as originalProducts } from "../config/constants";
import Menulist from "../Component/Menu_Items/Menulist";
import MenuItemCard from "../Component/Menu_Items/MenuItemCard";
import { Pizza, Cookie, Carrot, Apple, Drumstick, Utensils } from "lucide-react";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Marrow");

  // Helper to get icon for mobile view
  const getCategoryIcon = (name) => {
    switch (name) {
      case "Marrow": return <Drumstick className="w-6 h-6 text-[#5C9963]" />;
      case "Fruits": return <Apple className="w-6 h-6 text-[#5C9963]" />;
      case "leafy Green": return <Carrot className="w-6 h-6 text-[#5C9963]" />;
      case "Cookies": return <Cookie className="w-6 h-6 text-[#5C9963]" />;
      case "Vegan Cuisine": return <Pizza className="w-6 h-6 text-[#5C9963]" />;
      default: return <Utensils className="w-6 h-6 text-[#5C9963]" />;
    }
  };

  // MENU SPECIFIC LOGIC: Distribute items/categories and fix Marrow count
  const menuProducts = useMemo(() => {
    // 1. Map original categories to new Menu categories
    const mapped = originalProducts.map((p) => {
      let newCat = p.category;
      if (p.category === "Vegetables") newCat = "leafy Green";
      if (p.category === "Bread") newCat = "Cookies";
      if (p.category === "Pizza") newCat = "Vegan Cuisine";
      if (p.category === "Meat") newCat = "Marrow";
      // Fruits stays Fruits
      return { ...p, category: newCat };
    });

    // 2. Ensure Marrow has 15 items (it currently has 7 from 'Meat' items)
    const marrowItems = mapped.filter((p) => p.category === "Marrow");
    const duplicatesNeeded = 15 - marrowItems.length; // Should be 8
    const duplicates = [];

    if (duplicatesNeeded > 0 && marrowItems.length > 0) {
      for (let i = 0; i < duplicatesNeeded; i++) {
        // Cycle through existing marrow items to duplicate
        const sourceItem = marrowItems[i % marrowItems.length];
        duplicates.push({
          ...sourceItem,
          id: 30 + i, // Unique IDs starting from 30
          name: sourceItem.name, // Changed to original name as requested
        });
      }
    }

    return [...mapped, ...duplicates];
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white">
        {/* Responsive Grid: 3 cols on mobile, original layout on desktop */}
        <div className="grid grid-cols-3 xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 gap-x-4 gap-y-6 md:gap-x-[30px] md:gap-y-[100px] lg:px-[45px] px-4 py-8 md:py-[60px] md:pb-[80px] place-items-center">
          {Categories_items.map((item, i) => (
            <div
              key={i}
              onClick={() => setActiveCategory(item.name)}
              className="cursor-pointer transition-transform hover:scale-105 w-full flex justify-center"
            >
              {/* Desktop View (Original) */}
              <div
                className="hidden md:block p-4 rounded-full lg:h-[130px] lg:w-[130px] md:w-[140px] md:h-[140px] w-[200px] h-[200px]"
                style={{ backgroundColor: item.bg }}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="mt-[30px] scale-[1.18] hover:scale-[1.40] duration-300 mx-auto"
                />
                <h2 className="mt-4 text-center font-semibold text-[15px]">
                  {item.name}
                </h2>
              </div>

              {/* Mobile View (Small Icons) */}
              <div className="flex flex-col items-center justify-center gap-2 md:hidden">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-sm">
                  {getCategoryIcon(item.name)}
                </div>
                <span className="text-xs text-center font-medium text-gray-700 leading-tight">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Menulist
        key={activeCategory}
        initialCategory={activeCategory}
        variant="full"
        showPagination={true}
        itemsPerPage={8}
        hideFilter={true}
        products={menuProducts}
        ItemComponent={MenuItemCard}
        hideCountText={true}
      />
    </div>
  );
}
