import React from "react";
import DesktopHeader from "../components/DesktopHeader";
import MobileHeader from "../components/MobileHeader";
import Carousal from "../components/Carousal";
import MobileScrollGallery from "../components/MobileScrollGallery";
import { useMediaQuery } from "react-responsive";
import ProductsSection from "../components/ProductsSection";
import DesktopProductsSection from "../components/Desktop/DesktopProductsSection";
function Homepage() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 663px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 663px)" });

  // Sample data array
const items = [
  { id: 1, name: 'Item 1', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Item 2', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Item 3', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Item 3', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Item 3', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Item 3', image: 'https://via.placeholder.com/150' },

  // Add more items as needed
];

  return (
    <>
      {isDesktopOrLaptop && <DesktopHeader />}

      {isTabletOrMobile && <MobileHeader />}
      {isDesktopOrLaptop && <Carousal />}
      {isTabletOrMobile && <MobileScrollGallery items={items} />}
      {isTabletOrMobile && <ProductsSection products = {items}/> }
      {isDesktopOrLaptop && <DesktopProductsSection products={items} />}
    </>
  );
}

export default Homepage;
