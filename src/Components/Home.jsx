import React from "react";
import SearchItems from "./SearchItems";

export default function Home(props) {
  let movieItems = [];
  function handleChange(event) {
    props.setSearchBar(event.target.value);
  }

  if (props.searchResults != undefined && props.searchResults.length != 0) {
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
  }
  return (
    <div className="home">
      <h1>Movie List</h1>
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
