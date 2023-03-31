import { useState, useEffect } from "react";
import "./app.css";
import "./home.css";
import "./list.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import List from "./Components/List";
import MovieInfo from "./Components/MovieInfo";
import Footer from "./Components/Footer";

const TEST_OBJ = {
  movies: [
    {
      Title: "Old",
      Year: "2021",
      Rated: "PG-13",
      Released: "23 Jul 2021",
      Runtime: "108 min",
      Genre: "Drama, Horror, Mystery",
      Director: "M. Night Shyamalan",
      Writer: "M. Night Shyamalan, Pierre-Oscar Lévy, Frederik Peeters",
      Actors: "Gael García Bernal, Vicky Krieps, Rufus Sewell",
      Plot: "A vacationing family discovers that the secluded beach where they're relaxing for a few hours is somehow causing them to age rapidly, reducing their entire lives into a single day.",
      Language: "English",
      Country: "United States, Japan, China",
      Awards: "1 win & 7 nominations",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjJjZGRhM2YtNTU4NC00OWMwLThhYWUtMWUxNDNhMDZlOTNmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "5.8/10" },
        { Source: "Rotten Tomatoes", Value: "50%" },
        { Source: "Metacritic", Value: "55/100" },
      ],
      Metascore: "55",
      imdbRating: "5.8",
      imdbVotes: "127,478",
      imdbID: "tt10954652",
      Type: "movie",
      DVD: "04 Oct 2021",
      BoxOffice: "$48,276,510",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },

    {
      Title: "Pan's Labyrinth",
      Year: "2006",
      Rated: "R",
      Released: "19 Jan 2007",
      Runtime: "118 min",
      Genre: "Drama, Fantasy, War",
      Director: "Guillermo del Toro",
      Writer: "Guillermo del Toro",
      Actors: "Ivana Baquero, Ariadna Gil, Sergi López",
      Plot: "In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
      Language: "Spanish",
      Country: "Mexico, Spain",
      Awards: "Won 3 Oscars. 109 wins & 115 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzFjMThiMGItOWRlMC00MDI4LThmOGUtYTNlZGZiYWI1YjMyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "8.2/10" },
        { Source: "Rotten Tomatoes", Value: "95%" },
        { Source: "Metacritic", Value: "98/100" },
      ],
      Metascore: "98",
      imdbRating: "8.2",
      imdbVotes: "676,788",
      imdbID: "tt0457430",
      Type: "movie",
      DVD: "15 May 2007",
      BoxOffice: "$37,646,380",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },

    {
      Title: "Shazam",
      Year: "2017",
      Rated: "N/A",
      Released: "19 Mar 2017",
      Runtime: "6 min",
      Genre: "Short, Family",
      Director: "Royston Innes",
      Writer: "Royston Innes",
      Actors: "Roman Dior Degeddingseze, Christopher Mychael Watson",
      Plot: "A father teaches his son about the harsh realities of being a black man in a new and inventive way.",
      Language: "English",
      Country: "United States",
      Awards: "N/A",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNmZjZDQ1N2QtMTNkMS00OGYyLWI2MTktOWVlMzliMjlhMTBjXkEyXkFqcGdeQXVyODkwNDUwNw@@._V1_SX300.jpg",
      Ratings: [{ Source: "Internet Movie Database", Value: "7.7/10" }],
      Metascore: "N/A",
      imdbRating: "7.7",
      imdbVotes: "59",
      imdbID: "tt6723576",
      Type: "movie",
      DVD: "N/A",
      BoxOffice: "N/A",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },

    {
      Title: "Evil Dead",
      Year: "2013",
      Rated: "R",
      Released: "05 Apr 2013",
      Runtime: "91 min",
      Genre: "Horror",
      Director: "Fede Alvarez",
      Writer: "Fede Alvarez, Rodo Sayagues, Sam Raimi",
      Actors: "Jane Levy, Shiloh Fernandez, Jessica Lucas",
      Plot: "Five friends head to a remote cabin, where the discovery of a Book of the Dead leads them to unwittingly summon up demons living in the nearby woods.",
      Language: "English, Welsh",
      Country: "United States",
      Awards: "6 wins & 19 nominations",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzk2ZTVhOWMtMWQxYS00OWQzLWFmY2QtODQ4NGFmNGQxZWVmXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "6.5/10" },
        { Source: "Rotten Tomatoes", Value: "63%" },
        { Source: "Metacritic", Value: "57/100" },
      ],
      Metascore: "57",
      imdbRating: "6.5",
      imdbVotes: "177,685",
      imdbID: "tt1288558",
      Type: "movie",
      DVD: "16 Jul 2013",
      BoxOffice: "$54,239,856",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },

    {
      Title: "Transformers",
      Year: "2007",
      Rated: "PG-13",
      Released: "03 Jul 2007",
      Runtime: "144 min",
      Genre: "Action, Adventure, Sci-Fi",
      Director: "Michael Bay",
      Writer: "Roberto Orci, Alex Kurtzman, John Rogers",
      Actors: "Shia LaBeouf, Megan Fox, Josh Duhamel",
      Plot: "An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager.",
      Language: "English, Spanish",
      Country: "United States",
      Awards: "Nominated for 3 Oscars. 25 wins & 50 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "7.0/10" },
        { Source: "Rotten Tomatoes", Value: "58%" },
        { Source: "Metacritic", Value: "61/100" },
      ],
      Metascore: "61",
      imdbRating: "7.0",
      imdbVotes: "647,057",
      imdbID: "tt0418279",
      Type: "movie",
      DVD: "16 Oct 2007",
      BoxOffice: "$319,246,193",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },

    {
      Title: "The Shape of Water",
      Year: "2017",
      Rated: "R",
      Released: "22 Dec 2017",
      Runtime: "123 min",
      Genre: "Drama, Fantasy, Romance",
      Director: "Guillermo del Toro",
      Writer: "Guillermo del Toro, Vanessa Taylor",
      Actors: "Sally Hawkins, Octavia Spencer, Michael Shannon",
      Plot: "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.",
      Language: "English, American Sign , Russian, French",
      Country: "United States, Mexico",
      Awards: "Won 4 Oscars. 139 wins & 358 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "7.3/10" },
        { Source: "Rotten Tomatoes", Value: "92%" },
        { Source: "Metacritic", Value: "87/100" },
      ],
      Metascore: "87",
      imdbRating: "7.3",
      imdbVotes: "426,936",
      imdbID: "tt5580390",
      Type: "movie",
      DVD: "13 Mar 2018",
      BoxOffice: "$63,859,435",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },

    {
      Title: "The Dark Knight",
      Year: "2008",
      Rated: "PG-13",
      Released: "18 Jul 2008",
      Runtime: "152 min",
      Genre: "Action, Crime, Drama",
      Director: "Christopher Nolan",
      Writer: "Jonathan Nolan, Christopher Nolan, David S. Goyer",
      Actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
      Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      Language: "English, Mandarin",
      Country: "United States, United Kingdom",
      Awards: "Won 2 Oscars. 161 wins & 163 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "9.0/10" },
        { Source: "Rotten Tomatoes", Value: "94%" },
        { Source: "Metacritic", Value: "84/100" },
      ],
      Metascore: "84",
      imdbRating: "9.0",
      imdbVotes: "2,682,004",
      imdbID: "tt0468569",
      Type: "movie",
      DVD: "09 Dec 2008",
      BoxOffice: "$534,987,076",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
  ],
};

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
    }
  }

  function showListSetter() {
    if (showHome === true) {
      setShowHome(false);
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
    setSearchResults(TEST_OBJ);
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
