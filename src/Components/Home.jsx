<<<<<<< HEAD
import React, { useEffect } from "react";

export default function Home(props) {
  return <div>Home</div>;
=======
import React from "react";

export default function Home(props) {
  return (
    <div className="home">
      <h1>Movie List</h1>
      <input
        className="home-search-bar"
        type="text"
        placeholder=" Search movie..."
      ></input>
      <div className="search-bar-results">TESTEST</div>
    </div>
  );
>>>>>>> wheeler
}
