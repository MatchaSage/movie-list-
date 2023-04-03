import React from "react";

export default function ListItems(props) {
  return (
    <div className="list-items">
      <div className="list-items-card">
        <img
          src="https://www.defining.co/wp-content/uploads/2022/09/ScreenShot2020-12-26at5.06.58PM_2043ace9-22e9-4fd8-8532-cb9073b7385a.png"
          alt=""
        />
      </div>
      <div className="info-container">
        <h3>John Wick 4</h3>
        <div className="rating-container movie-rating-90">
          <h4>94</h4>
        </div>
      </div>
    </div>
  );
}
