import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer--attribute">
        <p>
          Api Provided by &nbsp;
          <a className="attribute--link" href="https://www.omdbapi.com/">
            OMDb api
          </a>
        </p>
      </div>
      <p className="contact--info">
        Website by: <a href="https://github.com/CrosscutX">Crosscutx</a>{" "}
        <a href="https://github.com/MatchaSage">MatchaSage</a>
      </p>
    </div>
  );
}
