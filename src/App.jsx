import { useState } from "react";
import "./style.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
