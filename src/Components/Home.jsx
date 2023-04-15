import React, { useEffect } from "react";
import SearchItems from "./SearchItems";

export default function Home(props) {
  let movieItems = [];

  props.searchResults.sort((next, prev) => {
    //initial check for undefined ratings, sort at end if found.
    if (next.Ratings[1] === undefined) {
      return 1;
    }

    if (prev.Ratings[1] === undefined) {
      return -1;
    }
    //Grab the previous and next rating values and turn them into numbers for comparison
    let previousRating = prev.Ratings[1].Value;
    previousRating = previousRating.substring(0, previousRating.length - 1);
    previousRating = Number(previousRating);

    let nextRating = next.Ratings[1].Value;
    nextRating = nextRating.substring(0, nextRating.length - 1);
    nextRating = Number(nextRating);
    //-1 unshifts nextRating before previous, 1 pushes it after
    if (previousRating > nextRating) {
      return 1;
    } else if (previousRating < nextRating) {
      return -1;
    } else {
      return 0;
    }
  });

  function handleChange(event) {
    props.setSearchBar(event.target.value);
  }
  //Check
  useEffect(() => {
    if (props.searchResults != undefined && props.searchResults.length != 0) {
      if (props.homeSearchBar === "") {
        movieItems = [];
        props.setSearchResults([]);
      }
    }
  }, [props.homeSearchBar]);

  movieItems = props.searchResults.map((movie) => {
    return (
      <SearchItems
        key={movie.imdbID}
        id={movie.imdbID}
        showInfo={props.showInfo}
        movie={movie}
        setSelectedMovie={props.setSelectedMovie}
        movieListAdd={props.movieListAdd}
      />
    );
  });
  return (
    <div className="home">
      <h1>The List</h1>
      <input
        className="home--search-bar"
        type="text"
        placeholder=" Search movie..."
        onChange={handleChange}
        value={props.homeSearchBar}
      ></input>
      <div className="search-bar-results">{movieItems}</div>
    </div>
  );
}
