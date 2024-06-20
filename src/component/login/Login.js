import React from "react";
import "./Login.css";
import LogoLogin from "../../assets/logo_login.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <div className="login_section">
      <div className="logo_section_login">
        <img src={LogoLogin} alt="Logo" />
      </div>
      <div className="login_information_form">
        <div className="option_login_signup">
          <div className="login_option">
            <FontAwesomeIcon icon={faUser} />
            <button className="login_btn">Login</button>
          </div>
          <div className="signin_option">
            <FontAwesomeIcon icon={faPenToSquare} />
            <button className="Login_btn">Signin</button>
          </div>
        </div>
        <div className="login_information_section">
          <div className="phonenumberlogin_section">
            <div className="inline_button_phoneumber">
              <p>Phone Number</p>
              <div className="line_down">
                <div className="triagle"></div>
                <div className="line"></div>
                <div className="circle"></div>
              </div>
            </div>
            <input placeholder="Your phone number"></input>
          </div>
          <div className="password_section">
            <p>Password</p>
            <input placeholder="Your password"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
