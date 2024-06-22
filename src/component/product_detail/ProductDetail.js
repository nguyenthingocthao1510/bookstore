import React, { useState, useEffect } from "react";
import HeaderHomePage from "../homepage_customer/HomepageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./ProductDetail.css";
import ProductImg from "../../assets/highlight_product.png";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Increase_quantity = () => {
    setQuantity(quantity + 1);
  };

  const Decrease_quantity = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div>
      <HeaderHomePage />
      <div className="bar_section">
        <FontAwesomeIcon icon={faHouse} className="bar_icon" />
        <p> &nbsp; / Phép Màu 30 Ngày – Phiên Bản Thời Thượng Của Bạn</p>
      </div>
      <div className="basic_information">
        <div className="picture_of_product">
          <img src={ProductImg} alt="Product" />
        </div>
        <div className="product_information">
          <p className="product_name">
            Phép Màu 30 Ngày – Phiên Bản Thời Thượng Của Bạn
          </p>
          <p className="product_price">78.000 ₫</p>
          <div className="amount_product">
            <p>Amount: </p>
            <div className="wrapper">
              <span className="minus" onClick={Decrease_quantity}>
                -
              </span>
              <span className="quantity">{quantity}</span>
              <span className="plus" onClick={Increase_quantity}>
                +
              </span>
            </div>
          </div>
          <div className="button_cart">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <div className="buy_now">
                <FontAwesomeIcon icon={faCartShopping} className="cart_logo" />
                <p>BUY NOW</p>
              </div>
            </Link>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <div className="add_to_cart">
                <p>ADD TO CART</p>
              </div>
            </Link>
          </div>
          <div className="refund_message">
            <a href="#">Refund in 30 days</a>
          </div>
        </div>
      </div>
      <h2
        style={{
          textAlign: "left",
          color: "#FBA1B3",
          borderBottom: "5px solid #FBA1B3",
          width: "15%",
          marginLeft: "1%",
        }}
      >
        Information
      </h2>
      <div
        className="small-line"
        style={{
          marginTop: "-23px",
          marginBottom: "1%",
          marginLeft: "1%",
          marginRight: "1%",
          width: "99%",
        }}
      ></div>
      <div className="detail_information">
        <p>30 Days Miracle - Your Trendy Version</p>
        <p>Publisher: World Publishing House.</p>
        <p>Publisher: Bloombooks.</p>
        <p>Author: Fiona Ferris. Author ID: ppatdd.</p>
        <p>Dimensions: 17 x 22 cm.</p>
        <p>Number of pages : 300.</p>
        <p>Publication date: 03-2020.</p>
        <p>Cover Type: Paperback.</p>
        <p>Content:</p>
        <p>
          30 Days Miracle - Your Trendy Version Fiona Ferris is a passionate
          author and has spent a lot of time learning about lifestyle and
          lifestyle over the past 20 years, especially simple, elegant styles.
          calendar. She draws inspiration from many places, especially Paris and
          France, from the countryside to the big cities - where people, nature,
          and cultures intersect... 30 Days Miracle - Times Version Your High is
          a book that helps you shape the way you live your life according to
          whatever "flavor" you like without consulting anyone. This book will
          make you really enjoy every moment, because life is not a sprint; we
          ARE and NEED to give our best to the present! 30 chapters (or you call
          it 30 days are fine!) along with “smart” tips.....
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;
