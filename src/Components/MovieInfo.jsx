import React from "react";

export default function MovieInfo(props) {
  return (
    <div onClick={props.showInfo} className="movieInfo">
      <button className="movieInfo--exitInfo">X</button>
      <span className="movieInfo--title">JOHN WICK 4</span>
      <div className="movieInfo--information-block">
        <span className="movieInfo--description">Description: </span>
        <span className="movieInfo--director">Director: </span>
        <span className="movieInfo--writer">Writer: </span>
        <span className="movieInfo--actors">Actors: </span>
        <span className="movieInfo--realeaseDate">Release: </span>
        <span className="movieInfo--ratingRottenTomatoes">
          Rotten Tomatoes:{" "}
        </span>
        <span className="movieInfo--boxOffice">Boxoffice: </span>
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
