import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./component/footer/footer";
import MainHomepage from "./component/homepage_customer/MainHomepage";
import Login from "./component/login/Login";
import Signup from "./component/signup/Signup";
import Cart from "./component/cart/Cart";
import ProductDetail from "./component/product_detail/ProductDetail";
import SideBar from "./component/userInformation/SideBar";
import MyProfile from "./component/userInformation/pages/MyProfile";
import ChangePassword from "./component/userInformation/pages/ChangePassword";
import MyPurchase from "./component/userInformation/pages/MyPurchase";
import MyCoin from "./component/userInformation/pages/MyCoin";
import MyContact from "./component/userInformation/pages/MyContact";
import Logout from "./component/userInformation/pages/Logout";
import HeaderUser from "./component/userInformation/header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Set the login page as the initial route */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<MainHomepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:name" element={<ProductDetail />} />

          {/* Sidebar routes */}
          <Route path="/user-information/*" element={<UserInformationLayout />}>
            {/* Nested routes relative to /user-information */}
            <Route path="user-profile" element={<MyProfile />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="my-purchase" element={<MyPurchase />} />
            <Route path="my-coin" element={<MyCoin />} />
            <Route path="my-contact" element={<MyContact />} />
            <Route path="log-out" element={<Logout />} />
          </Route>
        </Routes>
        <Footer /> {/* Ensure Footer is rendered outside of Routes */}
      </BrowserRouter>
    </div>
  );
}

function UserInformationLayout() {
  return (
    <div>
      <HeaderUser />
      <div className="user-information-layout">
        <SideBar />
        <div className="content">
          <Routes>
            <Route path="user-profile" element={<MyProfile />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="my-purchase" element={<MyPurchase />} />
            <Route path="my-coin" element={<MyCoin />} />
            <Route path="my-contact" element={<MyContact />} />
            <Route path="log-out" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
