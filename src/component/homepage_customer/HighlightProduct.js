import React from "react";
import "./HighlightProduct.css";
import HighlightProductImage from "../../assets/highlight_product.png";

function HighlightProduct() {
  return (
    <div className="hightlight_section">
      {/**TITLE  HIGHLIGHT */}
      <div className="title_section">
        <h1>HIGHLIGHT PRODUCTS</h1>
      </div>
      {/**PRODUCT HIGHLIGHT */}
      <div className="highlight_product">
        <img src={HighlightProductImage} className="image_of_product"></img>
        <p className="name">Name of product</p>
        <p className="price">Price of product</p>
      </div>
    </div>
  );
}

export default HighlightProduct;
