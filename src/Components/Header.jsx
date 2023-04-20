import React from "react";
import homeIcon from "../img/home.png";
import shareIcon from "../img/share.png";
import listIcon from "../img/list.png";

export default function Header(props) {
  return (
    <header>
      <img
        className="home-img"
        src={homeIcon}
        alt="Home"
        onClick={props.showHome}
      />
      <img
        className="list-img"
        src={listIcon}
        alt="List"
        onClick={props.showList}
      />
      <img
        className="share-img"
        src={shareIcon}
        alt="Share"
        onClick={props.showShare}
      />
    </header>
  );
}
