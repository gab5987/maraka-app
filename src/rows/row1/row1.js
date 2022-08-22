import "./row1.css";
import Fade from "react-reveal/Fade";
import { useState, useEffect } from "react";

const photo1 = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/48/18/38/pousada-maraka.jpg?w=1200&h=-1&s=1";
const photo2 = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/345694455.jpg?k=3c6982453e50b21a004fbfc743547aca32ea64e8e81ea701c9dcedd113329238&o=&hp=1";
const photo3 = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/345694569.jpg?k=712a3b5bc4c38ecab544d4c73e3b49d4d3d361052acadb26611f551b4eba277a&o=&hp=1";

export default function Row1() {
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
      <Fade bottom when={reveal}>
        <div className="column-row1-column1">
          <h1>Lorem Ipsum</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="button-wrapper">
            <a href="#" className="book-button">
              Se pa um botão?
            </a>
          </div>
        </div>
      </Fade>
      <div className="column-row1-column2">
        <Fade left cascade when={revealimgs}>
          <div className="img-column1">
            <img className="img1" src={photo1} alt="aa"></img>
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
