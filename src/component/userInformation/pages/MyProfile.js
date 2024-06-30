import React from "react";
import "./MyProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function MyProfile() {
  return (
    <div>
      <div className="header-title">
        <h1>My profile</h1>
      </div>
      <div className="user-information">
        <div className="user-name">
          <h3>Name</h3>
          <div className="user-name-section">
            <p>Nguyen Thi Ngoc Thao</p>
            <FontAwesomeIcon icon={faPenToSquare} className="user-name-icon" />
          </div>
        </div>
        <div className="phone-number">
          <h3>Phone number</h3>
          <p>09123456</p>
        </div>
        <div className="date-of-birth">
          <h3>Date of birth</h3>
          <p>17/10/2002</p>
        </div>
        <div className="user-gender"></div>
        <div className="user-address">
          <h3>Address</h3>
          <div className="address-city">
            <p>City</p>
            <div className="address-city-info">
              <p>TPHCM</p>
              <FontAwesomeIcon icon={faPenToSquare} className="icon-section" />
            </div>
          </div>
          <div className="address-district">
            <p>District</p>
            <div className="address-district-info">
              <p>2</p>
              <FontAwesomeIcon icon={faPenToSquare} className="icon-section" />
            </div>
          </div>
          <div className="address-ward">
            <p>Ward</p>
            <div className="address-ward-info">
              <p>An Lợi Đông</p>
              <FontAwesomeIcon icon={faPenToSquare} className="icon-section" />
            </div>
          </div>
        </div>
      </div>
      <div className="btn-save">
        <button>Save</button>
      </div>
    </div>
  );
}

export default MyProfile;
