import React, { useState } from "react";

export default function ListItems(props) {
  const [isHover, setIsHover] = useState(false);

  function handleHoverEnter() {
    setIsHover(true);
  }

  function handleHoverLeave() {
    setIsHover(false);
  }

  const elementDisplay = {
    display: isHover ? "flex" : "none",
  };

  const elementDarken = {
    transition: isHover ? "all 0.4s ease" : "none",
    filter: isHover ? "brightness(50%)" : "none",
  };

  return (
    <div className="list-items">
      <div
        className="list-items-card"
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
      >
        <img
          src="https://www.defining.co/wp-content/uploads/2022/09/ScreenShot2020-12-26at5.06.58PM_2043ace9-22e9-4fd8-8532-cb9073b7385a.png"
          alt="poster"
          style={elementDarken}
        />
        <div className="watched-container" style={elementDisplay}>
          <label>Watched</label>
          <input type="checkbox" id="watched" name="watched" />
        </div>
        <div className="button-container" style={elementDisplay}>
          <button className="delete-btn" type="button">
            Delete
          </button>
        </div>
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
