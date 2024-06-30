import React from "react";
import "./MyCoin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Product from "../../../assets/highlight_product.png";

function MyCoin() {
  return (
    <div className="coin-whole-section">
      <div className="title-coin">
        <h1>My coins</h1>
      </div>
      <div className="coin-section">
        <FontAwesomeIcon icon={faDollarSign} className="icon-coin" />
        <h3>78 coins</h3>
      </div>
      <div className="product-coin">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Coin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={Product} alt="Product Image" />
              </td>
              <td>Phép màu 30 ngày - Phiên bản Thời thượng của bạn</td>
              <td>78.000</td>
              <td>+ 78</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyCoin;
