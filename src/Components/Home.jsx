import React from "react";
import SearchItems from "./SearchItems";

export default function Home(props) {
  return (
    <div className="home">
      <h1>Movie List</h1>
      <input
        className="home-search-bar"
        type="text"
        placeholder=" Search movie..."
      ></input>
      <div className="search-bar-results"></div>
    </div>
  );
}
