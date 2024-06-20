import "./App.css";
import Footer from "../src/component/footer/footer";
import MainHomepage from "./component/homepage_customer/MainHomepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/**Homepage of customer */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHomepage />}></Route>
        </Routes>
      </BrowserRouter>
      {/**Homepage of customer */}

      {/*Footer section */}
      <Footer></Footer>
      {/*Footer section */}
    </div>
  );
}

export default App;
