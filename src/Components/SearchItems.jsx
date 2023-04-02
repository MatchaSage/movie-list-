import React, { useState, useEffect } from "react";

export default function searchItems(props) {
  let rating = catchRatingError(props.movie.Ratings);
  let ratingColor = setRatingColor(rating);

  function catchRatingError(ratings) {
    if (ratings[1] !== undefined) {
      let ratingString = ratings[1].Value.split("%")[0];
      return ratingString;
    } else {
      return "";
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

  return (
    <div className="movie-card" onClick={props.showInfo}>
      <div>
        <span className="movie-card--title">{props.movie.Title}</span>

        <span className={`movie-card--rating" ${ratingColor}`}>{rating}</span>
      </div>
      <button className="movie-card--addMovieButton">ADD</button>
    </div>
  );
}
