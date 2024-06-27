import React from "react";
import "./ChangePassword.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function ChangePassword() {
  return (
    <div>
      <div className="header-title">
        <h1>My password</h1>
      </div>
      <div className="user-information">
        <div className="user-name">
          <h3>Current password</h3>
          <div className="user-name-section">
            <p>abc123</p>
            <FontAwesomeIcon icon={faPenToSquare} className="user-name-icon" />
          </div>
        </div>
        <div className="user-name">
          <h3>New password</h3>
          <div className="user-name-section">
            <p>abc123</p>
            <FontAwesomeIcon icon={faPenToSquare} className="user-name-icon" />
          </div>
        </div>
        <div className="user-name">
          <h3>Confirm new password</h3>
          <div className="user-name-section">
            <p>abc123</p>
            <FontAwesomeIcon icon={faPenToSquare} className="user-name-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
