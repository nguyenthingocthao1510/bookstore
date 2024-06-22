import React from "react";
import "./HighlightProduct.css";
import HighlightProductImage from "../../assets/highlight_product.png";
import { Link } from "react-router-dom";
function HighlightProduct() {
  return (
    <div className="hightlight_section">
      {/**TITLE  HIGHLIGHT */}
      <div className="title_section">
        <h1>HIGHLIGHT PRODUCTS</h1>
      </div>
      <Link to="/product/:name" style={{ textDecoration: "none" }}>
        {/**PRODUCT HIGHLIGHT */}
        <div className="highlight_product">
          <img src={HighlightProductImage} className="image_of_product"></img>
          <p className="name">Name of product</p>
          <p className="price">Price of product</p>
        </div>
      </Link>
    </div>
  );
}

export default HighlightProduct;
