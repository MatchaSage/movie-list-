import React, { useState, useEffect } from "react";

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
    if (e.target.className != "movie-card--addMovieButton") {
      props.showInfo();
    }
    props.setSelectedMovie(props.movie);
  }

  function truncateTitle(title) {
    if (title.length > 46) {
      return `${title.slice(0, 46)}...`;
    } else {
      return title;
    }
  }

  return (
    <div className="movie-card" onClick={handleClick}>
      <div>
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
