import React from "react";
import SearchItems from "./SearchItems";

export default function Home(props) {
  function handleChange(event) {
    props.setSearchBar(event.target.value);
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
      <div className="search-bar-results">
        {" "}
        <SearchItems
          showInfo={props.showInfo}
          movie={props.searchResults.movies[4]}
        />
      </div>
    </div>
  );
}
