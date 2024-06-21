import React from "react";
import "./HomepageHeader.css";
import logo from "../../assets/logo_bookstore.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHouse,
  faCartShopping,
  faUserLarge,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header_section">
      <div className="logo_section">
        <img src={logo} />
      </div>

      <div className="search_section">
        <input
          placeholder="Search entire store here..."
          className="search_bar"
        ></input>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="finding_logo" />
      </div>

      <div className="menu_bar">
        <div className="home_section">
          <FontAwesomeIcon icon={faHouse} className="home_icon" />
          <p>Home</p>
        </div>
        <div className="cart_section">
          <Link
            to="/cart"
            style={{
              textDecoration: "none",
              all: "unset",
              width: "100px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon icon={faCartShopping} className="cart_icon" />
            <p>Cart</p>
          </Link>
        </div>

        <div className="user_section">
          <FontAwesomeIcon icon={faUserLarge} className="user_icon" />
          <p>Username</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
