import "./header.css";
import Fade from "react-reveal/Fade";
import { BrowserView, MobileView } from 'react-device-detect';

export default function Header(props) {
  var depName = props.resumeInfo.depShortName;
  var bookButton = props.resumeLangDeps.bookButton;

  return (
      <div className="header-container">
        <BrowserView>
          <div className="heading-container">
            <h1>{depName}</h1>

            <a href="#" className="book-button"> {bookButton} </a>
          </div>
        </BrowserView>
        <MobileView>
          <div className="mobile-heading-container">
            <h1>{depName}</h1>

            <a href="#" className="book-button"> {bookButton} </a>
          </div>
        </MobileView>
      </div>
  );
}
