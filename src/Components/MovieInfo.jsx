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
    <div className="infoDiv movieInfo">
      {
        //This mobile styling div helps us make the button bigger on mobile while keeping it visually small, this helps with usability of our app
      }
      <div className="mobile-x-styling">
        <button className="movieInfo--exitInfo" onClick={props.showInfo}>
          X
        </button>
      </div>
      <span className="movie-text infoDiv movieInfo--title">
        {props.selectedMovie.Title}
      </span>
      <div className="movie-text infoDiv movieInfo--information-block">
        <span className="movie-text infoDiv movieInfo--description">
          Description: {props.selectedMovie.Plot}
        </span>
        <span className="movie-text infoDiv movieInfo--director">
          Director: {props.selectedMovie.Director}
        </span>
        <span className="movie-text infoDiv movieInfo--writer">
          Writer: {props.selectedMovie.Writer}
        </span>
        <span className="movie-text infoDiv movieInfo--actors">
          Actors: {props.selectedMovie.Actors}
        </span>
        <span className="movie-text infoDiv movieInfo--realeaseDate">
          Release: {props.selectedMovie.Released}
        </span>
        <span className="movie-text infoDiv movieInfo--ratingRottenTomatoes">
          Rotten Tomatoes: &nbsp;
          {rating}
        </span>
        <span className="movie-text infoDiv movieInfo--boxOffice">
          Boxoffice: {props.selectedMovie.BoxOffice}
        </span>
      </div>

      <div className="infoDiv movieInfo--buttons">
        {props.showPage != "list" && (
          <button
            className="infoDiv movieInfo--addMovie"
            onClick={() => {
              props.movieListAdd(props.selectedMovie);
            }}
          >
            Add
          </button>
        )}

        {props.showPage == "list" && (
          <div className="infoDiv movieInfo--delete-watched">
            <button
              className="infoDiv movieInfo--deleteMovie"
              onClick={() => {
                props.movieListDelete(props.selectedMovie);
              }}
            >
              Delete
            </button>

            <div className="infoDiv movieInfo--watched-container">
              <label className="infoDiv">Watched</label>
              <input
                type="checkbox"
                id="watched"
                name="watched"
                className="infoDiv"
                onChange={() => {
                  props.setWatched(props.selectedMovie);
                  //Set the selected movie for movie info info to the opposite of the watched attribute
                  //when the watched checkbox is clicked
                  props.setSelectedMovie((prev) => {
                    return {
                      ...prev,
                      watched: !prev.watched,
                    };
                  });
                }}
                checked={props.selectedMovie.watched === false ? false : true}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
