import React from "react";

export default function MovieInfo(props) {
  let rating = catchRatingError(props.selectedMovie.Ratings);

  function catchRatingError(ratings) {
    if (ratings[1] !== undefined) {
      let ratingString = ratings[1].Value.split("%")[0];
      return ratingString + "%";
    } else {
      return "";
    }
  }
  console.log(window.innerWidth);

  return (
    <div className="infoDiv movieInfo">
      <button className="movieInfo--exitInfo" onClick={props.showInfo}>
        X
      </button>
      <span className="infoDiv movieInfo--title">
        {props.selectedMovie.Title}
      </span>
      <div className="infoDiv movieInfo--information-block">
        <span className="infoDiv movieInfo--description">
          Description: {props.selectedMovie.Plot}
        </span>
        <span className="infoDiv movieInfo--director">
          Director: {props.selectedMovie.Director}
        </span>
        <span className="infoDiv movieInfo--writer">
          Writer: {props.selectedMovie.Writer}
        </span>
        <span className="infoDiv movieInfo--actors">
          Actors: {props.selectedMovie.Actors}
        </span>
        <span className="infoDiv movieInfo--realeaseDate">
          Release: {props.selectedMovie.Released}
        </span>
        <span className="infoDiv movieInfo--ratingRottenTomatoes">
          Rotten Tomatoes: &nbsp;
          {rating}
        </span>
        <span className="infoDiv movieInfo--boxOffice">
          Boxoffice: {props.selectedMovie.BoxOffice}
        </span>
      </div>

      <div className="infoDiv movieInfo--buttons">
        <button
          className="infoDiv movieInfo--addMovie"
          onClick={() => {
            props.movieListAdd(props.selectedMovie);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
