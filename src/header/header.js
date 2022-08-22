import "./header.css";
import Fade from "react-reveal/Fade";

export default function Header() {
  return (
    <Fade>
      <div className="header-container">
        <div className="heading-container">
          <h1>Lorem Ipsum</h1>

          <a href="#" className="book-button">
            Book Now?
          </a>
        </div>
      </div>
    </Fade>
  );
}
