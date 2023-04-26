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
    //check if rotten tomatoes exists
    let rottenCheck = false;
    for (let i = 0; i < props.movie.Ratings.length; i++) {
      if (props.movie.Ratings[i].Source === "Rotten Tomatoes") {
        rottenCheck = true;
      }
    }
    if (rottenCheck === true) {
      for (let i = 0; i < props.movie.Ratings.length; i++) {
        if (props.movie.Ratings[i].Source === "Rotten Tomatoes") {
          let rating = props.movie.Ratings[i].Value;
          return rating.substring(0, rating.length - 1);
        }
      }
    } else {
      if (props.movie.Metascore !== "N/A") {
        return props.movie.Metascore;
      } else {
        return "";
      }
    }
  }
  //Css for this can be found in home
  function returnRatingColor(rating) {
    console.log(rating);
    if (rating >= 90) {
      return "movie-rating-90";
    } else if (rating >= 80) {
      return "movie-rating-80";
    } else if (rating >= 70) {
      return "movie-rating-70";
    } else if (rating >= 60) {
      return "movie-rating-60";
      //Program was applying the below 60 style to empty strings, so the && rating !== "" fixes that.
    } else if (rating < 60 && rating !== "") {
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
  //Check for the screen size to show hover styling.
  function mobileDarkenStyleCheck() {
    let mobileWidth = window.innerWidth;
    if (mobileWidth >= 650) {
      return elementDarken;
    }
  }
  //Check for the screen size to show hover styling.
  function mobileDisplayStyleCheck() {
    let mobileWidth = window.innerWidth;
    if (mobileWidth >= 650) {
      return elementDisplay;
    }
  }

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
          style={mobileDarkenStyleCheck()}
          onClick={movieBackgroundClick}
        />
        <div className="watched-container" style={mobileDisplayStyleCheck()}>
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
        <div className="button-container" style={mobileDisplayStyleCheck()}>
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
