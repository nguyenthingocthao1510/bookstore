import React from "react";
import Header from "./header";
import UserFunction from "./UserFunction";
import MyProfile from "./MyProfile";

function User() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <UserFunction></UserFunction>
        <MyProfile></MyProfile>
      </div>
    </div>
  );
}

export default User;
