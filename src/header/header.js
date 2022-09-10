import "./header.css";
import Fade from "react-reveal/Fade";
import { BrowserView, MobileView } from 'react-device-detect';

export default function Header(props) {
  var depName = props.resumeInfo.depShortName;
  var bookButton = props.resumeLangDeps.bookButton;
  const wpbtn = `http://wa.me/${props.resumeInfo.telNumber}?text=${props.resumeInfo.wpText}`

  return (
      <div className="header-container">
        <BrowserView>
          <div className="heading-container">
            <br/><h1>{depName}</h1>

            <a href={wpbtn} className="book-button"> {bookButton} </a>
          </div>
        </BrowserView>
        <MobileView>
          <div className="mobile-heading-container">
            <h1>{depName}</h1>

            <a href={wpbtn} className="book-button"> {bookButton} </a>
          </div>
        </MobileView>
      </div>
  );
}
