import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./Carousal.css";

function Carousal() {
  const [index, setIndex] = useState(0);
  const carousalImageArr = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/3000X1200_New_Launch_March_hero1._CB580055456_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/WRS/Skincare._CB556105301_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/Baby/Homepage_DesktopHeroTemplate_3000x1200_1._CB580021402_.jpg",
  ];

  return (
    <>
      <div className="carousal">
      <MdKeyboardArrowLeft color="white" size={100} className="left-icon"/>

        <img src={carousalImageArr[index]} />
        <MdKeyboardArrowRight color="white"  size={100} className="right-icon"/>
      </div>
    </>
  );
}

export default Carousal;
