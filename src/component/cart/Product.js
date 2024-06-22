import React from "react";
import "./Product.css";
import ProductImage from "../../assets/highlight_product.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Header from "./header";

function Product() {
  return (
    <div className="cart-information">
      <Header></Header>
      <div className="cart_section_detail">
        <h2>Cart</h2>
        <div className="small-line"></div>
      </div>
      <div className="cart_bar">
        <table className="title_of_cart">
          <thead className="header_bar">
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th style={{ textAlign: "center" }}>Price</th>
              <th style={{ textAlign: "center" }}>Amount</th>
              <th style={{ textAlign: "center" }}>Into Money</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="product_image">
                <img src={ProductImage} alt="Product" />
              </td>
              <td className="name_of_product">
                Phép màu 30 ngày - Phiên bản Thời thượng của bạn
              </td>
              <td className="price_of_product" style={{ textAlign: "center" }}>
                78.000 ₫
              </td>
              <td className="amount_of_product">1</td>
              <td style={{ position: "relative", textAlign: "center" }}>
                78.000 ₫
                <FontAwesomeIcon
                  icon={faTimes}
                  style={{
                    border: "1px solid red",
                    padding: "5px 5px 5px 5px",
                    color: "red",
                    position: "absolute",
                    top: "10px",
                    right: "50px",
                    cursor: "pointer",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Product;
