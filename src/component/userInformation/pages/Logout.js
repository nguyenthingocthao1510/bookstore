import React from "react";
import "./Logout.css";

function Logout() {
  return (
    <div>
      <h1
        style={{
          width: "318%",
          color: "#FBA1B3",
          borderBottom: "1px solid grey",
          textAlign: "left",
          paddingBottom: "10%",
        }}
      >
        Log out
      </h1>
      <div className="logout_section">
        <h1>Do you want to logout?</h1>
        <button>Yes</button>
        <button>No</button>
      </div>
    </div>
  );
}

export default Logout;
