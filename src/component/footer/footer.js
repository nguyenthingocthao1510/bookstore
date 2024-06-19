import React from "react";
import "../footer/footer.css";
import AddressLogo from "../../assets/address_logo.png";
import Phonenumber from "../../assets/phonenumber_logo.png";
import Email from "../../assets/mail_logo.png";
import YoutubeLogo from "../../assets/youtube_logo.png";
import FacebookLogo from "../../assets/facebook_logo.png";
import InstagramLogo from "../../assets/ig_logo.png";
import TwitterLogo from "../../assets/twitter_logo.png";
import PaymentLogo from "../../assets/payment_logo.png";

function Footer() {
  return (
    <div>
      {/*INFORMATION SECTION*/}
      <div className="information_section">
        {/*SERVICE SECTION*/}
        <div className="service_section">
          <div className="service_button">
            <button>SERVICE</button>
          </div>
          <div className="service_information">
            <p>Term of use</p>
            <p>Privacy policy of personal information</p>
            <p>Payment Privacy Policy</p>
            <p>About us</p>
            <p>Central system - bookstore</p>
          </div>
        </div>
        {/*SUPPORT SECTION*/}
        <div className="support_section">
          <div className="support_button">
            <button>SUPPORT</button>
          </div>
          <div className="support_information">
            <p>Exchange - return - refund policy</p>
            <p>Wararanty - refund policy </p>
            <p>Shipping Policy </p>
            <p>Wholesale customer policy</p>
            <p>Payment method and contact release</p>
          </div>
        </div>
        {/*MY ACCOUNT SECTION*/}
        <div className="myaccount_section">
          <div className="myaccount_button">
            <button>MY ACCOUNT</button>
          </div>
          <div className="myaccount_information">
            <p>Change customer address</p>
            <p>Login/Create a new account</p>
            <p>Account details</p>
            <p>Purchase history</p>
          </div>
        </div>
      </div>

      {/*CONTACT SECTION*/}
      <div className="contact_section">
        <div className="contact_detail_section">
          <button>CONTACT</button>
          <div className="address_section">
            <img src={AddressLogo} />
            <a>60-62 Lê Lợi, Q.1, TP. HCM</a>
          </div>
          <div className="phonenumber_section">
            <img src={Phonenumber} />
            <a>09018032001</a>
          </div>
          <div className="email_section">
            <img src={Email} />
            <a href="mailto:ntnthao15102002@gmail.com">
              ntnthao15102002@gmail.com
            </a>
          </div>
          <div className="social_section">
            <a href="https://www.youtube.com/">
              <img src={YoutubeLogo} />
            </a>
            <a href="https://facebook.com/">
              <img src={FacebookLogo} />
            </a>
            <a href="https://www.instagram.com/">
              <img src={InstagramLogo} />
            </a>
            <a href="https://x.com/?lang=vi">
              <img src={TwitterLogo} />
            </a>
          </div>
        </div>
        <div className="payment_section">
          <button>PAYMENT</button>
          <br></br>
          <img src={PaymentLogo} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
