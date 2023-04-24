import React, { useState } from "react";
import homeIcon from "../img/home.png";
import homeIcon2 from "../img/home2.png";
import shareIcon from "../img/share.png";
import shareIcon2 from "../img/share2.png";
import listIcon from "../img/list.png";
import listIcon2 from "../img/list2.png";

export default function Header(props) {
  const [homeHover, setHomeHover] = useState(false);
  const [shareHover, setShareHover] = useState(false);
  const [listHover, setListHover] = useState(false);

  function handleHome(param) {
    if (param === "enter") {
      setHomeHover(true);
    } else if (param === "exit") {
      setHomeHover(false);
    }
  }

  function handleShare(param) {
    if (param === "enter") {
      setShareHover(true);
    } else if (param === "exit") {
      setShareHover(false);
    }
  }

  function handleList(param) {
    if (param === "enter") {
      setListHover(true);
    } else if (param === "exit") {
      setListHover(false);
    }
  }
  console.log(listHover);
  return (
    <header>
      <img
        className="home-img"
        src={homeHover ? homeIcon2 : homeIcon}
        alt="Home"
        onClick={props.showHome}
        onMouseEnter={() => {
          handleHome("enter");
        }}
        onMouseLeave={() => {
          handleHome("exit");
        }}
      />
      <img
        className="list-img"
        src={listHover ? listIcon2 : listIcon}
        alt="List"
        onClick={props.showList}
        onMouseEnter={() => {
          handleList("enter");
        }}
        onMouseLeave={() => {
          handleList("exit");
        }}
      />
      <img
        className="share-img"
        src={shareHover ? shareIcon2 : shareIcon}
        alt="Share"
        onClick={props.showShare}
        onMouseEnter={() => {
          handleShare("enter");
        }}
        onMouseLeave={() => {
          handleShare("exit");
        }}
      />
    </header>
  );
}
