import React from "react";

export default function ListItems(props) {
  return (
    <div className="list-items">
      <div className="list-item-card">
        <div className="image-container"></div>
      </div>
      <div className="info-container">
        <h2>Movie</h2>
        <h3>Director</h3>
        <h3>Score</h3>
      </div>
    </div>
  );
}
