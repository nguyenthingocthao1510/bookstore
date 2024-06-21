import React from "react";
import "./Cart.css";
import Product from "./Product";
import ShipmentDetail from "./ShipmentDetail";

function Cart() {
  return (
    <div>
      <Product></Product>
      <ShipmentDetail></ShipmentDetail>
    </div>
  );
}

export default Cart;
