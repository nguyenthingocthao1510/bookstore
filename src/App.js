import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "../src/component/footer/footer";
import MainHomepage from "./component/homepage_customer/MainHomepage";
import Login from "./component/login/Login";
import Signup from "./component/signup/Signup";
import Cart from "./component/cart/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Set the login page as the initial route */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={[<MainHomepage />, <Footer />]} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
