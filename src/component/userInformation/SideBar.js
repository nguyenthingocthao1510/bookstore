import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBasketShopping,
  faDollarSign,
  faPowerOff,
  faEnvelope,
  faBars,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./SideBar.css";
import Header from "./header";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const menuItem = [
    {
      path: "/user-information/user-profile",
      name: "My profile",
      icon: faUser,
    },
    {
      path: "/user-information/change-password",
      name: "Change password",
      icon: faLock,
    },
    {
      path: "/user-information/my-coin",
      name: "My coin",
      icon: faBasketShopping,
    },
    {
      path: "/user-information/my-purchase",
      name: "My purchase",
      icon: faDollarSign,
    },
    {
      path: "/user-information/my-contact",
      name: "My contact",
      icon: faEnvelope,
    },
    { path: "/user-information/log-out", name: "Log out", icon: faPowerOff },
  ];

  return (
    <div className="sidebar" style={{ width: isOpen ? "300px" : "50px" }}>
      <div className="top-section">
        <div className="bars" style={{ marginLeft: isOpen ? "5px" : "8px" }}>
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggle}
            className="toggle-bar"
            style={{ fontSize: isOpen ? "30px" : "30px" }}
          />
        </div>
      </div>
      <div className="menu-items">
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="menu-item"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={item.icon} className="icon" />
            <span
              className="link-text"
              style={{ display: isOpen ? "contents" : "none" }}
            >
              {item.name}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
