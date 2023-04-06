import React, { useState } from "react";

export default function ListItems(props) {
  const [isHover, setIsHover] = useState(false);
  const rating = returnRating();
  const ratingColor = returnRatingColor(rating);

  function handleHoverEnter() {
    setIsHover(true);
  }

  function handleHoverLeave() {
    setIsHover(false);
  }

  function returnRating() {
    if (props.movie.Ratings[1]) {
      let rating = props.movie.Ratings[1].Value;
      return rating.substring(0, rating.length - 1);
    }
  }
  //Css for this can be found in home
  function returnRatingColor(rating) {
    if (rating >= 90) {
      return "movie-rating-90";
    } else if (rating >= 80) {
      return "movie-rating-80";
    } else if (rating >= 70) {
      return "movie-rating-70";
    } else if (rating >= 60) {
      return "movie-rating-60";
    } else if (rating < 60) {
      return "movie-rating-below-60";
    } else {
      return "";
    }
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
        <img src={props.movie.Poster} alt="poster" style={elementDarken} />
        <div className="watched-container" style={elementDisplay}>
          <label>Watched</label>
          <input type="checkbox" id="watched" name="watched" />
        </div>
        <div className="button-container" style={elementDisplay}>
          <button
            className="delete-btn"
            type="button"
            onClick={() => {
              props.delete(props.movie);
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="info-container">
        <h3>{props.movie.Title}</h3>
        <div className={"rating-container " + ratingColor}>
          <h4>{rating}</h4>
        </div>
      </div>
    </div>
  );
}
