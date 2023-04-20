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
      <p>
        Icons created by{" "}
        <a
          href="https://www.flaticon.com/free-icons/filter"
          title="filter icons"
        >
          Lizel Arina
        </a>
        ,&nbsp;
        <a
          href="https://www.flaticon.com/free-icons/home-button"
          title="home button icons"
        >
          Freepik
        </a>
        , and&nbsp;
        <a href="https://www.flaticon.com/free-icons/share" title="share icons">
          Bankume
        </a>
      </p>
    </footer>
  );
}
