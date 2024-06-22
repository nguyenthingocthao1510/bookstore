import React from "react";
import "./Cartheader.css";
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
        <a href="/home" className="cart_home_section">
          <div>
            <FontAwesomeIcon icon={faHouse} className="home_icon" />
            <p>Home</p>
          </div>
        </a>

        <div className="cart_section">
          <FontAwesomeIcon icon={faCartShopping} className="cart_icon" />
          <p>Cart</p>
        </div>
        <a href="/user-information" className="user_section">
          <div>
            <FontAwesomeIcon icon={faUserLarge} className="user_icon" />
            <p>Username</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Header;
