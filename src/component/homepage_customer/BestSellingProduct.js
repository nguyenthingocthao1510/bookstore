import React from "react";
import "./BestSellingProduct.css";
import HighLightProductImage from "../../assets/highlight_product.png";
import { Link } from "react-router-dom";

function BestSellingProduct() {
  return (
    <div className="best_selling_product">
      <Link to="/product/:name" style={{ textDecoration: "none" }}>
        <div className="title_section_best_selling_product">
          <h1>Best Selling Products</h1>
          <p className="small_line"></p>
        </div>
        <div className="best_selling_product_section">
          <img src={HighLightProductImage} />
          <p className="name">Name of product</p>
          <p className="price">Price of product</p>
        </div>
      </Link>
    </div>
  );
}

export default BestSellingProduct;
