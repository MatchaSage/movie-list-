import React, { useState, useEffect } from "react";
import ListItems from "./ListItems";
import FilterImg from "../img/filter.png";

export default function List(props) {
  const [filteredList, setFilteredList] = useState([]);
  console.log(props.movieList);
  useEffect(() => {
    if (props.movieList !== undefined) {
      setFilteredList(
        props.movieList.map((movie) => {
          return (
            <ListItems
              key={movie.imdbID}
              id={movie.imdbID}
              movie={movie}
              delete={props.movieListDelete}
            />
          );
        })
      );
    }
  }, [props.movieList]);

  return (
    <div className="list">
      <h1>Your List</h1>
      <div className="filter-row">
        <div className="filter-container">
          <div className="filter-buttons" onClick={props.setShowFilter}>
            <span>Filter</span>
            <img className="filter-img" src={FilterImg} alt="Filter" />
          </div>
          {props.showFilter && (
            <div className="filter-drop-down">
              <div className="search-row">
                <label htmlFor="search">
                  Search
                  <input type="text" name="search" id="search" />
                </label>
              </div>
              <div className="watched-row">
                <label htmlFor="watched-select">
                  Watched:
                  <select
                    name="watched-select"
                    id="watched-select"
                    className="filter-item"
                  >
                    <option value="all">All</option>
                    <option value="notWatched">Not Watched</option>
                    <option value="watched">Watched</option>
                  </select>
                </label>
              </div>
              <div className="genre-row">
                <label htmlFor="genre-select">
                  Genre:
                  <select
                    name="genre-select"
                    id="genre-select"
                    className="filter-item"
                  >
                    <option value="all">All</option>
                    <option value="action">Action</option>
                    <option value="drama">Drama</option>
                    <option value="comedy">Comedy</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="horror">Horror</option>
                    <option value="scienceFiction">Sci-Fi</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="animation">Animation</option>
                  </select>
                </label>
              </div>
              <div className="rating-row">
                <label htmlFor="rating-select">
                  Rating:
                  <select
                    name="rating-select"
                    id="rating-select"
                    className="filter-item"
                  >
                    <option value="best">Best</option>
                    <option value="worst">Worst</option>
                  </select>
                </label>
              </div>
              <div className="director-row">
                <label htmlFor="director-select">
                  Director:
                  <input type="text" className="filter-item" />
                </label>
              </div>
              <div className="button-row">
                <button type="button" className="random-button">
                  Random!
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="movie-container">{filteredList}</div>
    </div>
  );
}
