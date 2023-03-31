import { useState, useEffect } from "react";
import "./app.css";
import "./home.css";
import "./list.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import List from "./Components/List";
import MovieInfo from "./Components/MovieInfo";
import Footer from "./Components/Footer";

export default function App() {
  //State for home/list pages
  const [showHome, setShowHome] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  //State for the search bars
  const [homeSearchBar, setHomeSearchBar] = useState("");
  const [listSearchBar, setListSearchBar] = useState("");

  //State for our lists of movies
  const [searchResults, setSearchResults] = useState([]);
  const [movieList, setMovieList] = useState([]);
  //Selected movie that will be displayed in movieInfo
  const [selectedMovie, setSelectedMovie] = useState([""]);
  //Functions to show various elements
  function showHomeSetter() {
    if (showHome === false) {
      setShowHome(true);
      //Set the page to 100 view height whenever the homepage is shown. This is needed because both pages
      //need different height styling in the app component.
      document.querySelector(".app").style.height = "100vh";
    }
  }

  function showListSetter() {
    if (showHome === true) {
      setShowHome(false);
      //Set the page to 100% height whenever the list page is shown. This is needed because both pages
      //need different height styling in the app component.
      document.querySelector(".app").style.height = "100%";
    }
  }
  function showInfoSetter() {
    if (showInfo === true) {
      setShowInfo(false);
    } else {
      setShowInfo(true);
    }
  }
  //Functions to set/control the text boxes.
  function homeSearchSetter(text) {
    setHomeSearchBar(text);
  }
  function listSearchSetter(text) {
    setListSearchBar(text);
  }
  //Functions to set the arrays for movies.
  function movieListAdd(movie) {
    setMovieList();
  }

  function movieListDelete(movie) {
    setMovieList();
  }

  function setMovieWatch(movie) {
    setMovieList();
  }
  //Adds movie info to an object that holds it for the MofieInfo component
  function selectedMovieSetter(movie) {
    setSelectedMovie();
  }

  useEffect(() => {
    setSearchResults();
  }, []);

  //Api call to get movies
  // useEffect(() => {
  //   setSearchResults();
  // }, [homeSearchBar]);

  return (
    <div className="app">
      <Header showHome={showHomeSetter} showList={showListSetter} />
      {/*This conditionally renders either home or list page*/}
      {showHome && (
        <Home
          showInfo={showInfoSetter}
          homeSearchBar={homeSearchBar}
          setSearchBar={homeSearchSetter}
          searchResults={searchResults}
          setSelectedMovie={selectedMovieSetter}
          movieListAdd={movieListAdd}
        />
      )}
      {!showHome && (
        <List
          showInfo={showInfoSetter}
          listSearchBar={listSearchBar}
          setSearchBar={listSearchSetter}
          setSelectedMovie={selectedMovieSetter}
          movieList={movieList}
          movieListAdd={movieListAdd}
          movieListDelete={movieListDelete}
          movieListWatched={setMovieWatch}
        />
      )}
      {showInfo && (
        <MovieInfo
          selectedMovie={selectedMovie}
          showInfo={showInfoSetter}
          movieListAdd={movieListAdd}
          movieListDelete={movieListDelete}
          movieListWatched={setMovieWatch}
        />
      )}
      <Footer />
    </div>
  );
}
