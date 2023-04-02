import React from "react";

export default function ListItems(props) {
  return (
    <div className="list-items">
      <div className="image-container">
        <h1>Image</h1>
        <img></img>
      </div>
      <div className="info-container">
        <h2>Movie</h2>
        <h3>Director</h3>
        <h3>Score</h3>
      </div>
    </div>
  );
}
