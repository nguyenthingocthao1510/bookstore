import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "../src/component/footer/footer";
import MainHomepage from "./component/homepage_customer/MainHomepage";
import Login from "./component/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Set the login page as the initial route */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={[<MainHomepage />, <Footer />]} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
