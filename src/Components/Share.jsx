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
      </div>
    </div>
  );
}
