import React from "react";
import homeIcon from "../img/home.png";
import shareIcon from "../img/share.png";
import listIcon from "../img/list.png";

export default function Header(props) {
  return (
    <header>
      <h2 className="home--button" onClick={props.showHome}>
        <img className="home-img" src={homeIcon} alt="Home" />
      </h2>
      <h2 className="list--button" onClick={props.showList}>
        <img className="list-img" src={listIcon} alt="List" />
      </h2>
      <h2 className="share--button" onClick={props.showShare}>
        <img className="share-img" src={shareIcon} alt="Share" />
      </h2>
    </header>
  );
}
