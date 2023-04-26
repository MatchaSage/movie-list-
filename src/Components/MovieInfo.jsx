import React from "react";

export default function MovieInfo(props) {
  function setRating() {
    let tmp = "";

    if (props.selectedMovie.Ratings.length > 0) {
      props.selectedMovie.Ratings.forEach((rating) => {
        if (rating.Source == "Rotten Tomatoes") {
          tmp = rating.Value;
        } else {
          tmp = props.selectedMovie.Metascore;
        }
      });
    } else {
      tmp = props.selectedMovie.Metascore;
    }

    if (tmp == "N/A") {
      return tmp;
    } else {
      return tmp + "%";
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
      <span className="movie-text infoDiv movieInfo--title bold">
        {props.selectedMovie.Title}
      </span>
      <div className="movie-text infoDiv movieInfo--information-block">
        <span className="movie-text infoDiv movieInfo--description">
          <span className="bold">Description:</span> {props.selectedMovie.Plot}
        </span>
        <span className="movie-text infoDiv movieInfo--director">
          <span className="bold">Director:</span> {props.selectedMovie.Director}
        </span>
        <span className="movie-text infoDiv movieInfo--writer">
          <span className="bold">Writer:</span> {props.selectedMovie.Writer}
        </span>
        <span className="movie-text infoDiv movieInfo--actors">
          <span className="bold">Actors:</span> {props.selectedMovie.Actors}
        </span>
        <span className="movie-text infoDiv movieInfo--realeaseDate">
          <span className="bold">Release:</span> {props.selectedMovie.Released}
        </span>
        <span className="movie-text infoDiv movieInfo--ratingRottenTomatoes">
          <span className="bold">Rotten Tomatoes:</span> &nbsp;
          {setRating()}
        </span>
        <span className="movie-text infoDiv movieInfo--boxOffice">
          <span className="bold">Boxoffice:</span>{" "}
          {props.selectedMovie.BoxOffice}
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
