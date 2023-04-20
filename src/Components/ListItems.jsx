import React, { useState } from "react";
import backupImage from "../img/backup-poster.jpg";

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
    for (let i = 0; i < props.movie.Ratings.length; i++) {
      if (props.movie.Ratings[i].Source === "Rotten Tomatoes") {
        let rating = props.movie.Ratings[i].Value;
        return rating.substring(0, rating.length - 1);
      }
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

  function movieBackgroundClick(e) {
    e.stopPropagation();
    props.showInfo();
    props.setSelectedMovie(props.movie);
  }

  function checkPoster() {
    if (props.movie.Poster === "N/A") {
      return backupImage;
    } else {
      return props.movie.Poster;
    }
  }

  return (
    <div className="list-items">
      <div
        className="list-items-card"
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
      >
        <img
          src={checkPoster()}
          alt="poster"
          style={elementDarken}
          onClick={movieBackgroundClick}
        />
        <div className="watched-container" style={elementDisplay}>
          <label>Watched</label>
          <input
            type="checkbox"
            id="watched"
            name="watched"
            onChange={() => {
              props.setWatched(props.movie);
            }}
            checked={props.movie.watched === false ? false : true}
          />
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
