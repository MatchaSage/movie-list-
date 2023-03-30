import React from "react";

export default function Header(props) {
  props = props;

  function ShowHome(props) {
    props.homeState = true;
  }

  function ShowList(props) {
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
