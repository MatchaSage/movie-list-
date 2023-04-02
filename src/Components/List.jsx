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
