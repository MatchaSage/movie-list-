import { useState } from "react";
import "./style.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import List from "./Components/List";
import MovieInfo from "./Components/MovieInfo";
import Footer from "./Components/Footer";

export default function App() {
  const [showHome, setShowHome] = useState(true);

  return (
    <div className="app">
      <Header />
      {showHome && <Home />}
      {!showHome && <List />}
      <MovieInfo />
      <Footer />
    </div>
  );
}
