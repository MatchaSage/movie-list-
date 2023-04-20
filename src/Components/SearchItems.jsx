import React, { useState, useEffect } from "react";
import backupImage from "../img/backup-poster.jpg";

export default function searchItems(props) {
  let rating = catchRatingError(props.movie.Ratings);
  let ratingColor = setRatingColor(rating);

  function catchRatingError(ratings) {
    let tmp = "";
    ratings.forEach((rating) => {
      if (rating.Source == "Rotten Tomatoes") {
        tmp = rating.Value;
      }
    });
    if (tmp != "") {
      return tmp.split("%");
    } else {
      return;
    }
  }
  function setRatingColor(rating) {
    let ratingInt = parseInt(rating);
    if (ratingInt >= 90) {
      return "movie-rating-90";
    } else if (ratingInt >= 80) {
      return "movie-rating-80";
    } else if (ratingInt >= 70) {
      return "movie-rating-70";
    } else if (ratingInt >= 60) {
      return "movie-rating-60";
    } else if (ratingInt < 60) {
      return "movie-rating-below-60";
    } else {
      return "";
    }
  }

  function handleClick(e) {
    //Call stopPropagation to stop bubbling from instantly closing out of movieInfo when it is displayed.
    e.stopPropagation();
    if (e.target.className != "movie-card--addMovieButton") {
      props.showInfo();
    }
    props.setSelectedMovie(props.movie);
  }

  function truncateTitle(title) {
    let mobileWidth = window.innerWidth;

    if (mobileWidth <= 400) {
      return `${title.slice(0, 20)}...`;
    } else if (title.length > 35) {
      return `${title.slice(0, 35)}...`;
    } else {
      return title;
    }
  }

  function checkPoster() {
    if (props.movie.Poster === "N/A") {
      return backupImage;
    } else {
      return props.movie.Poster;
    }
  }

  return (
    <div className="movie-card" onClick={handleClick}>
      <div className="movie-card--poster-side">
        <img
          src={checkPoster()}
          alt="Movie Poster"
          className="movie-card--poster"
        ></img>
        <span className="movie-card--title">
          {truncateTitle(props.movie.Title)}
        </span>
      </div>
      <div className="rating-add-block">
        <span className={`movie-card--rating" ${ratingColor}`}>{rating}</span>
        <button
          className="movie-card--addMovieButton"
          onClick={() => {
            props.movieListAdd(props.movie);
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
}
