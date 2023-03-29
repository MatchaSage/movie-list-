import { useState } from "react";
import "./style.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

export default function App() {
  const [showHome, setShowHome] = useState(true);

  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
