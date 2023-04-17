import { useState, useEffect } from "react";
import "./Styles/app.css";
import "./Styles/home.css";
import "./Styles/list.css";
import "./Styles/share.css";
import "./Styles/movieInfo.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import List from "./Components/List";
import Share from "./Components/Share";
import MovieInfo from "./Components/MovieInfo";
import Footer from "./Components/Footer";

export default function App() {
  //State for home/list/filter pages
  const [showPage, setShowPage] = useState("home");
  const [showInfo, setShowInfo] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  //State for the search bars
  const [homeSearchBar, setHomeSearchBar] = useState("");
  const [listSearchBar, setListSearchBar] = useState("");

  //State for our lists of movies
  const [searchResults, setSearchResults] = useState([]);
  const [movieList, setMovieList] = useState(setMovieLocalStorage());
  //Selected movie that will be displayed in movieInfo
  const [selectedMovie, setSelectedMovie] = useState([""]);

  function setMovieLocalStorage() {
    if (localStorage.getItem("movies") === null) {
      return [];
    } else {
      const movieString = localStorage.getItem("movies");
      return JSON.parse(movieString);
    }
  }
  //Functions to show various elements
  function showHomeSetter() {
    setShowPage("home");
    //Set the page to 100 view height whenever the homepage is shown. This is needed because both pages
    //need different height styling in the app component.
    document.querySelector(".app").style.height = "100vh";
    document.querySelector("header").style.paddingLeft = "0px";
  }

  function showListSetter() {
    setShowPage("list");
    //Set the page to 100% height whenever the list page is shown. This is needed because both pages
    //need different height styling in the app component.
    document.querySelector(".app").style.height = "100%";
    document.querySelector(".app").style.minHeight = "100vh";
    //Padding adjustment stops the jump that the header will do when going between mylist and other pages
    document.querySelector("header").style.paddingLeft = "17px";
  }

  function showShareSetter() {
    setShowPage("share");
    document.querySelector(".app").style.height = "100vh";
    document.querySelector("header").style.paddingLeft = "0px";
  }

  function showInfoSetter() {
    if (showInfo === true) {
      setShowInfo(false);
    } else {
      setShowInfo(true);
    }
  }

  function showFilterSetter() {
    if (showFilter === true) {
      setShowFilter(false);
    } else {
      setShowFilter(true);
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
  function movieListAdd(newMovie) {
    if (movieList !== undefined) {
      setMovieList((oldMovies) => {
        //Checks for duplicate movies
        for (let i = 0; i < oldMovies.length; i++) {
          if (oldMovies[i].imdbID === newMovie.imdbID) {
            return [...oldMovies];
          }
        }
        newMovie.watched = false;
        return [...oldMovies, newMovie];
      });
    } else {
      setMovieList([newMovie]);
    }
  }

  function movieListDelete(selectedMovie) {
    setMovieList((oldMovies) => {
      return oldMovies.filter((movie) => {
        return movie.imdbID !== selectedMovie.imdbID;
      });
    });
  }

  function setMovieWatch(selectedMovie) {
    setMovieList((oldMovies) => {
      let newMovieArray = [];
      for (let i = 0; i < oldMovies.length; i++) {
        if (selectedMovie.imdbID === oldMovies[i].imdbID) {
          newMovieArray.push({
            ...oldMovies[i],
            watched: !oldMovies[i].watched,
          });
        } else {
          newMovieArray.push(oldMovies[i]);
        }
      }
      return newMovieArray;
    });
  }

  //Adds movie info to an object that holds it for the MofieInfo component
  function selectedMovieSetter(movie) {
    setSelectedMovie(movie);
  }

  function movieInfoListener(e) {
    if (!e.target.classList.contains("infoDiv") && showInfo) {
      setShowInfo(false);
    }
  }

  useEffect(() => {
    if (showInfo) {
      document.addEventListener("mousedown", movieInfoListener);
    } else {
      document.removeEventListener("mousedown", movieInfoListener);
    }
  });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movieList));
  }, [movieList]);

  async function storeIMDBID(IMDBID) {
    const res = await fetch(
      `http://www.omdbapi.com/?i=${IMDBID}&r=json&apikey=8ade757e`
    );
    const data = await res.json();
    setSearchResults((prev) => [...prev, data]);
  }

  //Api call to get movies
  useEffect(() => {
    let timer = setTimeout(() => {
      async function getMovieIMDBID() {
        const res = await fetch(
          `http://www.omdbapi.com/?s=${homeSearchBar}&r=json&apikey=8ade757e`
        );
        const data = await res.json();
        if (data.Search != undefined) {
          //Empty search results before addings more movies.
          setSearchResults([]);
          data.Search.slice(0, 5).map((movie) => {
            storeIMDBID(movie.imdbID);
          });
        }
      }
      getMovieIMDBID();
    }, 1000);
    return () => clearTimeout(timer);
  }, [homeSearchBar]);

  return (
    <div className="app">
      <Header
        showHome={showHomeSetter}
        showList={showListSetter}
        showShare={showShareSetter}
      />
      {/*This conditionally renders either home or list page*/}
      {showPage === "home" && (
        <Home
          showInfo={showInfoSetter}
          homeSearchBar={homeSearchBar}
          setSearchBar={homeSearchSetter}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          setSelectedMovie={selectedMovieSetter}
          movieListAdd={movieListAdd}
        />
      )}
      {showPage === "list" && (
        <List
          showInfo={showInfoSetter}
          listSearchBar={listSearchBar}
          setSearchBar={listSearchSetter}
          setSelectedMovie={selectedMovieSetter}
          movieList={movieList}
          movieListAdd={movieListAdd}
          movieListDelete={movieListDelete}
          movieListWatched={setMovieWatch}
          showFilter={showFilter}
          setShowFilter={showFilterSetter}
        />
      )}
      {showPage === "share" && (
        <Share movieList={movieList} movieListAdd={movieListAdd} />
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
