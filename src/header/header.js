import "./header.css";
import { BrowserView, MobileView } from 'react-device-detect';

export default function Header(props) {
  var depName = props.resumeInfo.depShortName;
  var bookButton = props.resumeLangDeps.bookButton;
  const wpbtn = `http://wa.me/${props.resumeInfo.telNumber}`

  return (
      <div className="header-container">
        <BrowserView>
          <div className="heading-container">
            <br/><h1>{depName}</h1>

            <a href={wpbtn} target="_blank" className="book-button"> {bookButton} </a>
          </div>
        </BrowserView>
        <MobileView>
          <div className="mobile-heading-container">
            <h1>{depName}</h1>

            <a href={wpbtn} target="_blank" className="book-button"> {bookButton} </a>
          </div>
        </MobileView>
      </div>
  );
}
