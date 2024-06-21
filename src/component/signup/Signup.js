import React from "react";
import "./Signup.css";
import LogoLogin from "../../assets/logo_login.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup_section">
      <div className="logo_section_signup">
        <img src={LogoLogin} alt="Logo" />
      </div>
      <div className="signin_information_form">
        <div className="option_login_signup" style={{ marginTop: "60px" }}>
          <div className="login_option">
            <FontAwesomeIcon icon={faUser} className="login_option_icon" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <button className="login_btn">Log In</button>
            </Link>
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
        <div className="signup_information_section">
          <div className="phonenumbersignup_section">
            <div className="inline_phone_number">
              <p>Phone Number:</p>
              <div className="line_down">
                <div className="triagle"></div>
                <div className="line"></div>
                <div className="circle"></div>
              </div>
            </div>
            <input
              placeholder="Your phone number"
              className="phonenumber"
            ></input>
          </div>
          <div className="otp_section">
            <p>OTP: </p>
            <div className="line_down">
              <div className="triagle"></div>
              <div className="line"></div>
              <div className="circle"></div>
            </div>
            <div className="otp_function">
              <input placeholder="Your OTP" className="otp_information"></input>
              <button>Send OTP</button>
            </div>
          </div>
          <div className="password_section_signup">
            <p>Password: </p>
            <div className="line_down">
              <div className="triagle"></div>
              <div className="line"></div>
              <div className="circle"></div>
            </div>
            <input
              placeholder="Your password"
              className="password_information_signup"
            ></input>
          </div>
        </div>
        <div
          className="forgotten_password_section"
          style={{ marginTop: "20px" }}
        >
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="sigup_into_btn">SIGN UP</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
