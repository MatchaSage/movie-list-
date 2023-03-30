import React from "react";

export default function Header(props) {
  function ShowHome() {
    props.homeState = true;
  }

  function ShowList() {
    props.homeState = false;
  }

  return (
    <div className="header">
      <a className="home--button" onClick={ShowHome}>
        Home
      </a>
      <a className="list--button" onClick={ShowList}>
        My List
      </a>
    </div>
  );
}
