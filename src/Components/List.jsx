import React, { useState, useEffect, useRef } from "react";
import ListItems from "./ListItems";
import FilterImg from "../img/filter.png";

export default function List(props) {
  const [search, setSearch] = useState("");
  const [watched, setWatched] = useState("all");
  const [genre, setGenre] = useState("all");
  const [rating, setRating] = useState("none");
  const [director, setDirector] = useState("");
  const [random, setRandom] = useState(false);
  //Refs that help me target divs to use for my filter menu logic.
  let dropRef = useRef();
  let filterRef = useRef();

  //Resets the random number in local storage if we any of my filter state changes.
  //This is done so that the filter menu is still useable after hitting the random button.
  useEffect(() => {
    setRandom(false);
    localStorage.setItem("random", "null");
  }, [search, watched, genre, rating, director]);

  useEffect(() => {
    let handler = (e) => {
      //After the filter button is hit once, the next time the dropdown dissapears it will be null instead of undefined.
      if (dropRef.current !== undefined && dropRef.current !== null) {
        //Basically saying if both the filter button and the menu aren't clicked on.
        //Filter button must be accounted for here, otherwise setShowFilter will fire twice.
        if (
          !dropRef.current.contains(e.target) &&
          !filterRef.current.contains(e.target)
        ) {
          props.setShowFilter();
        }
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [props.showFilter]);

  //Check each of the filter criteria before mapping the movie list.
  let filteredListItems;
  let filteredList = props.movieList
    .filter((movie) => {
      return checkWatched(movie);
    })
    .filter((movie) => {
      return checkGenre(movie);
    });
  checkRating(filteredList);
  filteredList = filteredList
    .filter((movie) => {
      return checkSearch(movie);
    })
    .filter((movie) => {
      return checkDirector(movie);
    });
  //Check if random button has been clicked and filter if so
  randomButtonClick(filteredList);
  filteredListItems = filteredList.map((movie) => {
    return (
      <ListItems
        key={movie.imdbID}
        id={movie.imdbID}
        movie={movie}
        setSelectedMovie={props.setSelectedMovie}
        delete={props.movieListDelete}
        setWatched={props.movieListWatched}
        showInfo={props.showInfo}
      />
    );
  });

  function checkWatched(movie) {
    if (watched === "all") {
      return movie;
    } else if (watched === "watched") {
      return movie.watched === true;
    } else if (watched === "notWatched") {
      return movie.watched === false;
    }
  }
  //Checks whether the genre string has the proper genre that is being held in state.
  function checkGenre(movie) {
    if (genre === "all") {
      return movie;
    } else if (genre === "action") {
      return movie.Genre.includes("Action");
    } else if (genre === "drama") {
      return movie.Genre.includes("Drama");
    } else if (genre === "comedy") {
      return movie.Genre.includes("Comedy");
    } else if (genre === "thriller") {
      return movie.Genre.includes("Thriller");
    } else if (genre === "western") {
      return movie.Genre.includes("Western");
    } else if (genre === "horror") {
      return movie.Genre.includes("Horror");
    } else if (genre === "sciFi") {
      return movie.Genre.includes("Sci-Fi");
    } else if (genre === "fantasy") {
      return movie.Genre.includes("Fantasy");
    } else if (genre === "animation") {
      return movie.Genre.includes("Animation");
    } else {
      return movie;
    }
  }

  function checkRating(movieList) {
    if (rating === "none") {
      return movieList;
    }
    if (rating === "best") {
      return movieList.sort((next, prev) => {
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
    }
    if (rating === "worst") {
      return movieList.sort((next, prev) => {
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
          return -1;
        } else if (previousRating < nextRating) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  }

  function checkSearch(movie) {
    if (search === "") {
      return movie;
    }
    return movie.Title.includes(search);
  }

  function checkDirector(movie) {
    if (director === "") {
      return movie;
    }
    return movie.Director.includes(director);
  }

  //Button click functions
  function randomButtonClick() {
    if (random === false) {
      return;
    }
    //Add to a new array just so that my .maps don't break.
    let newFilteredList = [];
    let randomNumber;
    randomNumber = localStorage.getItem("random");
    if (randomNumber === "null") {
      randomNumber = Math.floor(Math.random() * filteredList.length);
    } else {
      randomNumber = localStorage.getItem("random");
    }
    filteredList = filteredList[randomNumber];
    newFilteredList.push(filteredList);
    filteredList = newFilteredList;
    //This if statement fixes a bug that pops up when you access the search bar after using a random number
    if (filteredList[0] === undefined) {
      filteredList = [];
    }
    //Local storage to make sure the random number doesn't change unexpectedly.
    localStorage.setItem("random", randomNumber);
  }

  function resetButtonClick() {
    //Returns each filter criteria to default
    setSearch("");
    setWatched("all");
    setGenre("all");
    setRating("none");
    setDirector("");
    setRandom(false);
    localStorage.setItem("random", "null");
  }

  return (
    <div className="list">
      <h1>Your List</h1>
      <div className="filter-row">
        <div className="filter-container">
          <div
            className="filter-buttons"
            onClick={props.setShowFilter}
            ref={filterRef}
          >
            <span>Filter</span>
            <img className="filter-img" src={FilterImg} alt="Filter" />
          </div>
          {props.showFilter && (
            <div className="filter-drop-down" ref={dropRef}>
              <div className="search-row">
                <label htmlFor="search">
                  Search
                  <input
                    type="text"
                    name="search"
                    id="search"
                    // controlled component for the searchbox
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    value={search}
                  />
                </label>
              </div>
              <div className="watched-row">
                <label htmlFor="watched-select">
                  Watched:
                  <select
                    name="watched-select"
                    id="watched-select"
                    className="filter-item filter-item-watched"
                    onChange={() => {
                      const option = document.querySelector(
                        ".filter-item-watched"
                      );
                      setWatched(option.value);
                    }}
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
                    className="filter-item filter-item-genre"
                    onChange={() => {
                      const option =
                        document.querySelector(".filter-item-genre");
                      setGenre(option.value);
                    }}
                  >
                    <option value="all">All</option>
                    <option value="action">Action</option>
                    <option value="drama">Drama</option>
                    <option value="comedy">Comedy</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="horror">Horror</option>
                    <option value="sciFi">Sci-Fi</option>
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
                    className="filter-item filter-item-rating"
                    onChange={() => {
                      const option = document.querySelector(
                        ".filter-item-rating"
                      );
                      setRating(option.value);
                    }}
                  >
                    <option value="none">None</option>
                    <option value="best">Best</option>
                    <option value="worst">Worst</option>
                  </select>
                </label>
              </div>
              <div className="director-row">
                <label htmlFor="director-select">
                  Director:
                  <input
                    type="text"
                    className="filter-item filter-item-director"
                    onChange={(e) => {
                      setDirector(e.target.value);
                    }}
                    value={director}
                  />
                </label>
              </div>
              <div className="button-row">
                <button
                  type="button"
                  className="random-button"
                  onClick={() => {
                    setRandom(true);
                  }}
                >
                  Random!
                </button>
                <button
                  type="button"
                  className="reset-button"
                  onClick={() => {
                    resetButtonClick();
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="movie-container">{filteredListItems}</div>
    </div>
  );
}
