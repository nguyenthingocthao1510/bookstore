import React, { useState } from "react";
import "./MyContact.css";

function MyContact() {
  const [checked, setChecked] = useState(true);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <span className={`checkbox-icon ${checked ? "checked" : ""}`}>
          {checked ? "✔" : ""}
        </span>
        <span className="checkbox-label">Male</span>
      </label>
    </div>
  );
}

export default MyContact;
