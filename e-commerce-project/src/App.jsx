import axios from 'axios';
import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import "./App.css";

function App() {
  const [cart, SetCart] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items").then((response) => {
      SetCart(response.data);
    });
  }, []);

  return (
    
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="checkout" element={<CheckoutPage cart= {cart} />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="tracking" element={<TrackingPage />} />
      </Routes>
  );
}

export default App;
