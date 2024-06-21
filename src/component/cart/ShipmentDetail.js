import React from "react";
import "./ShipmentDetail.css";
import { Link } from "react-router-dom";
function ShipmentDetail() {
  return (
    <div className="shipmentdetail-information">
      <div className="shipment_section_detail">
        <h2>Shipment details</h2>
        <div className="small-line"></div>
      </div>
      <div className="shipment_information">
        <div className="first_information">
          <div className="name_customer">
            <p>Name</p>
            <input></input>
          </div>
          <div className="city_customer">
            <p>City</p>
            <input></input>
          </div>
          <div className="district_customer">
            <p>District</p>
            <input></input>
          </div>
        </div>
        <div className="second_information">
          <div className="pn_customer">
            <p>Phone number</p>
            <input></input>
          </div>
          <div className="orderid_customer">
            <p>Order ID</p>
            <input></input>
          </div>
          <div className="ward_customer">
            <p>Ward</p>
            <input></input>
          </div>
        </div>
      </div>
      <div className="order_summerize">
        <h2>Add to cart</h2>
        <div className="order_summary_details">
          <div className="order_summary_row">
            <p>Into money</p>
            <p>266.000 ₫</p>
          </div>
          <div className="order_summary_row">
            <p>Shipping fee</p>
            <p>0₫</p>
          </div>
          <div className="order_summary_row">
            <p>Total</p>
            <p>266.000 ₫</p>
          </div>
          <div className="order_summary_row" style={{ border: "none" }}>
            <p>Coin</p>
            <p>266 coin</p>
          </div>
        </div>
        <Link to="/home">
          <button className="process_payment_button">Process Payment</button>
        </Link>
      </div>
    </div>
  );
}

export default ShipmentDetail;
