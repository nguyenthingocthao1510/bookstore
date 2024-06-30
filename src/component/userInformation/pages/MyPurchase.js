import React from "react";
import "./MyPurchase.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import ProductImg from "../../../assets/highlight_product.png";

function MyPurchase() {
  return (
    <div className="purchase-whole-section">
      <div className="purchase-titile">
        <h1>My purchase</h1>
      </div>
      <div className="purchase-section">
        <div className="order-section">
          <div className="order-date-section">
            <p>
              Order date: <span>15/08/2022</span>
            </p>
          </div>
          <div className="order-process-section">
            <FontAwesomeIcon icon={faTruck} className="order-icon" />
            <p>
              Delivery is in progress
              <span>COMPLETED</span>
            </p>
          </div>
        </div>
        <div className="order-information">
          <div className="order-detail">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Into Money</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={ProductImg} />
                  </td>
                  <td>Phép màu 30 ngày - Phiên bản Thời thượng của bạn</td>
                  <td>78.000</td>
                  <td>156.000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="order-total">
            <p>
              Order Total: <span>266.000 ₫</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPurchase;
