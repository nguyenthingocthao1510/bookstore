import React, { useState } from "react";
import "./MyContact.css";
import logo from "../../../assets/Ellipse 9.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
function MyContact() {
  // const [checked, setChecked] = useState(true);

  // const handleCheckboxChange = () => {
  //   setChecked(!checked);
  // };
  // eslint-disable-next-line no-lone-blocks
  {
    /* <label className="custom-checkbox">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <span className={`checkbox-icon ${checked ? "checked" : ""}`}>
          {checked ? "✔" : ""}
        </span>
        <span className="checkbox-label">Male</span>
      </label> */
  }
  return (
    <div>
      <div className="mycontact_header">
        <p>Contact</p>
      </div>
      <div className="mycontact_body">
        <div className="chat_body">
          <p style={{ width: "15%" }}>Nice book</p>
          <br></br>
          <p>And fast delivery</p>
        </div>
        <div className="response_body">
          <img src={logo}></img>
          <a>Thank you</a>
        </div>
      </div>
      <div className="chatbar">
        <FontAwesomeIcon icon={faPlus} className="icon_plus" />
        <input type="search"></input>
        <FontAwesomeIcon icon={faPaperPlane} className="icon_send" />{" "}
      </div>
    </div>
  );
}

export default MyContact;
