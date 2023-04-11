import React from "react";

export default function Header(props) {
  return (
    <header>
      <h2 className="home--button" onClick={props.showHome}>
        Home
      </h2>
      <h2 className="list--button" onClick={props.showList}>
        My List
      </h2>
      <h2 className="share--button" onClick={props.showShare}>
        Share
      </h2>
    </header>
  );
}
