import React from "react";
import "./Login.css";
import LogoLogin from "../../assets/logo_login.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login_section">
      <div className="logo_section_login">
        <img src={LogoLogin} alt="Logo" />
      </div>
      <div className="login_information_form">
        <div className="option_login_signup">
          <div className="login_option">
            <FontAwesomeIcon icon={faUser} className="login_option_icon" />
            <button className="login_btn">Log In</button>
          </div>
          <div className="signup_option">
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="signup_option_icon"
            />
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <button className="signup_btn">Sign up</button>
            </Link>
          </div>
        </div>
        <div className="login_information_section">
          <div className="phonenumberlogin_section">
            <div className="inline_button_phoneumber">
              <p>Phone Number:</p>
              <div className="line_down">
                <div className="triagle"></div>
                <div className="line"></div>
                <div className="circle"></div>
              </div>
            </div>
            <input
              placeholder="Your phone number"
              className="phonenumber_information"
            ></input>
          </div>
          <div className="password_section">
            <p>Password: </p>
            <div className="line_down">
              <div className="triagle"></div>
              <div className="line"></div>
              <div className="circle"></div>
            </div>
            <input
              placeholder="Your password"
              className="password_information"
            ></input>
          </div>
        </div>
        <div className="forgotten_password_section">
          <p>Forget your password?</p>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <button className="Login_into_btn">LOG IN</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
