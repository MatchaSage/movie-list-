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

  return (
    <div className="movieInfo">
      <button className="movieInfo--exitInfo" onClick={props.showInfo}>
        X
      </button>
      <span className="movieInfo--title">{props.selectedMovie.Title}</span>
      <div className="movieInfo--information-block">
        <span className="movieInfo--description">
          Description: {props.selectedMovie.Plot}
        </span>
        <span className="movieInfo--director">
          Director: {props.selectedMovie.Director}
        </span>
        <span className="movieInfo--writer">
          Writer: {props.selectedMovie.Writer}
        </span>
        <span className="movieInfo--actors">
          Actors: {props.selectedMovie.Actors}
        </span>
        <span className="movieInfo--realeaseDate">
          Release: {props.selectedMovie.Released}
        </span>
        <span className="movieInfo--ratingRottenTomatoes">
          Rotten Tomatoes: &nbsp;
          {rating}
        </span>
        <span className="movieInfo--boxOffice">
          Boxoffice: {props.selectedMovie.BoxOffice}
        </span>
      </div>

      <div className="movieInfo--buttons">
        <button
          className="movieInfo--addMovie"
          onClick={() => {
            props.movieListAdd(props.selectedMovie);
          }}
        >
          Add
        </button>
        <button
          className="movieInfo--deleteMovie"
          onClick={props.movieListDelete}
        >
          Delete
        </button>
        <fieldset>
          <label htmlFor="watched">Watched</label>
          <input type="checkbox" htmlFor="watched"></input>
        </fieldset>
      </div>
    </div>
  );
}
