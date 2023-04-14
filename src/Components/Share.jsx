import React from "react";

export default function Share(props) {
  async function copyContent() {
    let imdbArray = [];
    for (let i = 0; i < props.movieList.length; i++) {
      imdbArray.push(props.movieList[i].imdbID);
    }

    try {
      await navigator.clipboard.writeText(JSON.stringify(imdbArray));
      console.log("content copied to clipboard");
    } catch (err) {
      console.log("Failed to copy: ", err);
    }
  }

  async function addMovie(imdbID) {
    const res = await fetch(
      `http://www.omdbapi.com/?i=${imdbID}&r=json&apikey=8ade757e`
    );
    const data = await res.json();
    // add to movie list
    props.movieListAdd(data);
  }

  function importMovies() {
    //Get the import textbox value
    let importValue = document.getElementById("import").value;
    try {
      importValue = JSON.parse(importValue);
      for (let i = 0; i < importValue.length; i++) {
        addMovie(importValue[i]);
      }
    } catch (err) {
      console.log("Invalid import value", err);
    }
  }

  return (
    <div className="share">
      <h1>Share</h1>
      <div className="copy-row">
        <p>
          Here you can copy your movies to a clipboard in order to share with
          friends! Just give them the output and have them put it into import
          box.
        </p>
        <button type="button" className="copy-button" onClick={copyContent}>
          Copy
        </button>
      </div>
      <div className="import-row">
        <label htmlFor="import">Import</label>
        <input type="text" id="import" />
        <button
          type="button"
          className="import-button"
          onClick={() => {
            importMovies();
          }}
        >
          Import
        </button>
      </div>
    </div>
  );
}
