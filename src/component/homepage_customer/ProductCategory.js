import React from "react";
import "./ProductCategory.css";
import HighLightProductImage from "../../assets/highlight_product.png";
import { Link } from "react-router-dom";
function ProductCategory() {
  return (
    <div className="product_category">
      <h1>Product Category</h1>
      <Link to="/product/:name" style={{ textDecoration: "none" }}>
        <div className="title_section_product_category">
          <p className="small_line"></p>
        </div>
        <div className="product_section">
          <img src={HighLightProductImage} />
          <p>Name of product</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCategory;
