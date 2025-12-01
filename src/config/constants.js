import slider1 from "../assets/images/slider.jpg";
import slider2 from "../assets/images/slider2.png";
import logo from "../assets/icons/logo.svg";
import item1 from "../assets/images/item1.png.webp";
import item2 from "../assets/images/item2.png.webp";
import item3 from "../assets/images/item3.png.webp";
import item4 from "../assets/images/item4.png.webp";
import item5 from "../assets/images/item5.png.webp";

import card1 from "../assets/images/card1.jpg.webp";
import card2 from "../assets/images/card2.jpg.webp";
import card3 from "../assets/images/card3.jpg.webp";

import product1 from "../assets/images/Menu_Items/pro-1-600x600.jpg";
import product2 from "../assets/images/Menu_Items/pro-10-600x600.jpg";
import product3 from "../assets/images/Menu_Items/pro-13-600x600.jpg";
import product4 from "../assets/images/Menu_Items/pro-34-600x600.jpg";
import product5 from "../assets/images/Menu_Items/pro-15-600x600.jpg";
import product6 from "../assets/images/Menu_Items/pro-16-600x600.jpg";
import product7 from "../assets/images/Menu_Items/pro-19-600x600.jpg";
import product8 from "../assets/images/Menu_Items/pro-20-600x600.jpg";
import product9 from "../assets/images/Menu_Items/pro-22-600x600.jpg";
import product10 from "../assets/images/Menu_Items/pro-23-600x600.jpg";
import product11 from "../assets/images/Menu_Items/pro-24-600x600.jpg";
import product12 from "../assets/images/Menu_Items/pro-26-600x600.jpg";
import product13 from "../assets/images/Menu_Items/pro-28-600x600.jpg";
import product14 from "../assets/images/Menu_Items/pro-3-600x600.jpg";
import product15 from "../assets/images/Menu_Items/pro-31-600x600.jpg";
import product16 from "../assets/images/Menu_Items/pro-32-600x600.jpg";

export {logo}

export const nav_links = [
    {
        name: "Menu",
        path: "/",
        arrow:true,
    },
    {
        name: "Contact",
        path: "/contact",
        arrow:false,
    }
]

export const images_slider=[
    {
        src:slider1,
        title:"WEEKEND PROMOTIONS",
        description:"Happy Summer Combo Suber Discount",
        offer:"Sale 30% Off",
    },
    {
        src:slider2,
        title:"WEEKEND PROMOTIONS",
        description:"Happy Summer Combo Suber Discount",
        offer:"Sale 30% Off",
    }
]
 export const Categories_items =[
    {
        bg:"#FEEFA3",
        src:item1,
        name:"Marrow",
        products:12
    },
    {
        bg:"#C9DD7E",
        src:item2,
        name:"Fruits",
        products:30
    },
    {
        bg:"#F3D5AE",
        src:item3,
        name:"leafy Green",
        products:20
    },
    {
        bg:"#9FB770",
        src:item4,
        name:"Cookies",
        products:10
    },
    {
        bg:"#E4E662",
        src:item5,
        name:"Vegan Cuisine",
        products:15
    },
    {
        bg:"#FEEFA3",
        src:item1,
        name:"Marrow",
        products:12
    },
    {
        bg:"#C9DD7E",
        src:item2,
        name:"Fruits",
        products:30
    },
    {
        bg:"#F3D5AE",
        src:item3,
        name:"leafy Green",
        products:20
    },
    {
        bg:"#9FB770",
        src:item4,
        name:"Cookies",
        products:10
    },
    {
        bg:"#E4E662",
        src:item5,
        name:"Vegan Cuisine",
        products:15
    },   
]
export const cards_items =[
    {
        src:card1,
        title:"Fresh Vegetables",
        offer:"- 15% OFF",
        offer_color:"#ffffff",
    },
    {
        src:card2,
        title:"Vegan Restaurants",
        offer:"- 35% OFF",
        offer_color:"#CFF92F",
    },
    {
        src:card3,
        title:"Every Weekend",
        offer:"- 25% OFF",
        offer_color:"#C73044",
    },
]
export const Menus = ["All", "Vegetables", "Fruits", "Bread", "Meat"];
export const products = [
    {
        id:1,
        src:product1,
        name: "Papaya Single",
        price: "£746.64",
        category: "Fruits",
    },
    {
        id:2,
        src:product2,
        name: "Papaya SingleCauliflower Pack 350g",
        price: "£74.64",
        category: "Fruits",
    },
    {
        id:3,
        src:product3,
        name: "Kiwi Fruit Single",
        price: "£764.64",
        category: "Fruits",
    },
    {
        id:4,
        src:product4,
        name: "Large Queen Apple",
        price: "£764.64",
        category: "Fruits",
    },
    {
        id:5,
        src:product5,
        name: "Mixed Chillies Pack 500g",
        price: "£164.64",
        category: "Vegetables",
    },
    {
        id:6,
        src:product6,
        name: "Cauliflower Pack 350g",
        price: "£764.64",
        category: "Vegetables",
    },
    {
        id:7,
        src:product7,
        name: "Freshmark Cut Spinach",
        price: "£764.64",
        category: "Vegetables",
    },
    {
        id:8,
        src:product8,
        name: "Steers Tomato Pack 375ml",
        price: "£764.64",
        category: "Vegetables",
    },
    {
        id:9,
        src:product9,
        name: "East Coast Small Solo Fish",
        price: "£764.64",
        category: "Bread",
    },
    {
        id:10,
        src:product10,
        name: "Papaya Single",
        price: "£764.64",
        category: "Bread",
    },
    {
        id:11,
        src:product11,
        name: "Large Queen Apple",
        price: "£764.64",
        category: "Bread",
    },
    {
        id:12,
        src:product12,
        name: "Mixed Chillies Pack 500g",
        price: "£164.64",
        category: "Bread",
    },
    {
        id:13,
        src:product13,
        name: "Freshmark Cut Spinach",
        price: "£764.64",
        category: "Vegetables",
    },
    {
        id:14,
        src:product14,
        name: "Steers Tomato Pack 375ml",
        price: "£764.64",
        category: "Meat",
    },
    {
        id:15,
        src:product15,
        name: "Large Queen Apple",
        price: "£764.64",
        category: "Meat",
    },
    {
        id:16,
        src:product16,
        name: "Mixed Chillies Pack 500g",
        price: "£164.64",
        category: "Meat",
    },
]