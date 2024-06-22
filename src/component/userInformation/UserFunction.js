import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";

function UserFunction() {
  return (
    <div>
      <div className="user-section">
        <FontAwesomeIcon icon={faUserLarge} />
        <p>My Account</p>
      </div>
      <div className="change-profile">
        <a href="/user-information">Profile</a>
      </div>
      <div className="change-password"></div>
      <div className="my-purchase"></div>
      <div className="my-coin"></div>
      <div className="my-contact"></div>
      <div className="log-out"></div>
    </div>
  );
}

export default UserFunction;
