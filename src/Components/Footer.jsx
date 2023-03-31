import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer--attribute">
        <p>
          Api Provided by:&nbsp;
          <a className="attribute--link" href="https://www.omdbapi.com/">
            OMDb api
          </a>
        </p>
      </div>
      <p className="contact--info">
        Website by: <a href="https://github.com/CrosscutX">Crosscutx</a>{" "}
        <a href="https://github.com/MatchaSage">MatchaSage</a>
      </p>
      <a href="https://www.flaticon.com/free-icons/filter" title="filter icons">
        Filter icons created by Lizel Arina - Flaticon
      </a>
    </footer>
  );
}
