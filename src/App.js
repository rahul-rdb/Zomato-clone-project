import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import DeliveryPage from "./components/pages/DeliveryPage";
import DiningOut from "./components/pages/DiningOut";
import Nightlife from "./components/pages/Nightlife";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/pages/Common/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<DeliveryPage />}></Route>
        <Route path="dining-out" element={<DiningOut />}></Route>
        <Route path="nightlife" element={<Nightlife />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
