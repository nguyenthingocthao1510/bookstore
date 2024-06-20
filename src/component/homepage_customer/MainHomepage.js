import React from "react";
import Advertisement from "./Advertisement";
import HighlightProduct from "./HighlightProduct";
import ProductCategory from "./ProductCategory";
import BestSellingProduct from "./BestSellingProduct";
import HomepageHeader from "./HomepageHeader";

function MainHomepage() {
  return (
    <div>
      <HomepageHeader />
      <Advertisement />
      <HighlightProduct />
      <ProductCategory />
      <BestSellingProduct />
    </div>
  );
}

export default MainHomepage;
