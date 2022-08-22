import "./header.css";
import Fade from "react-reveal/Fade";
import { Component } from "react";

export default function Header(props) {
  var depName = props.resumeInfo.depShortName;
  var bookButton = props.resumeLangDeps.bookButton;

  return (
    <Fade>
      <div className="header-container">
        <div className="heading-container">
          <h1>{depName}</h1>

          <a href="#" className="book-button">
            {bookButton}
          </a>
        </div>
      </div>
    </Fade>
  );

}
