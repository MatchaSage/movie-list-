import React from "react";
import ListItems from "./ListItems";
import FilterImg from "../img/filter.png";

export default function List(props) {
  return (
    <div className="list">
      <h1>Your List</h1>
      <div className="filter-row">
        <div className="filter-container">
          <div className="filter-buttons">
            <span>Filter</span>
            <img className="filter-img" src={FilterImg} alt="Filter" />
          </div>
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
                  <option value="notWatched">Not Watched</option>
                  <option value="watched">Watched</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-container">
        <ListItems />
        <ListItems />
        <ListItems />
        <ListItems />
        <ListItems />
        <ListItems />
        <ListItems />
      </div>
    </div>
  );
}
