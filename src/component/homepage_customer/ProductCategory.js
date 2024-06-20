import React from "react";
import "./ProductCategory.css";
import HighLightProductImage from "../../assets/highlight_product.png";

function ProductCategory() {
  return (
    <div className="product_category">
      <div className="title_section_product_category">
        <h1>Product Category</h1>
        <p className="small_line"></p>
      </div>
      <div className="product_section">
        <img src={HighLightProductImage} />
        <p>Name of product</p>
      </div>
    </div>
  );
}

export default ProductCategory;
