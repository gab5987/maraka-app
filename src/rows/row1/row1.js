import "./row1.css";
import Fade from "react-reveal/Fade";
import { useState, useEffect } from "react";

const photo1 = require("../../app_data/images/units/ISR_1622.jpg");
const photo2 = require("../../app_data/images/units/ISR_1624.jpg");
const photo3 = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/345694569.jpg?k=712a3b5bc4c38ecab544d4c73e3b49d4d3d361052acadb26611f551b4eba277a&o=&hp=1";

export default function Row1(props) {
  const resume = props.resumeInfo;
  const [reveal, setReveal] = useState(false);
  const [revealimgs, setRevealImgs] = useState(false);

  useEffect(() => {
    function handleReveal() {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      const height = document.querySelector(".row1-container").scrollHeight;
      const scrolled = winScroll / height;

      if (scrolled > 0.6) {
        console.log("aa");
        setReveal(true);
        setTimeout(() => {
          setRevealImgs(true);
        }, 50);
        window.removeEventListener("scroll", handleReveal);
      }
    }
    window.addEventListener("scroll", handleReveal);
  }, []);

  return (
    <div className="row1-container">
        <div className="column-row1-column1">
          <h1> { resume.pageName } </h1> <br/>
          <p> { resume.description } </p> <br/>
          <div className="button-wrapper">
            <a href="/moreimages" className="book-button">
              {resume.moreImages}
            </a>
          </div>
        </div>
      <div className="column-row1-column2">
        <Fade left cascade when={revealimgs}>
          <div className="img-column1">
            <img className="img1" src={photo1} alt="aa"></img> <br/>
            <img className="img2" src={photo2} alt="aa"></img>
          </div>
          <div className="img-column2">
            <img className="img3" src={photo3} alt="aa"></img>
          </div>
        </Fade>
      </div>
    </div>
  );
}
