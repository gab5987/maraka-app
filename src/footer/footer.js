import "./footer.css";

import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTripadvisor,
  FaAirbnb,
} from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";

export default function Footer(props) {
  return (
    <div> <bookingIcon />
      <div className="footer">
        <div className="mystacks">
          <div className="my-stack useful-links">
            <h1>Lorem Ipsum</h1>
            <a>Special Promo</a>
            <a>Affiliete Links</a>
          </div>
          <div className="my-stack support">
            <h1>Lorem Ipsum</h1>
            <a>FAQ's ??</a>
            <a>Support Center ?</a>
          </div>
          <div className="my-stack information">
            <h1>Lorem Ipsum</h1>
            <a>Lorem</a>
            <a>Ipsum</a>
          </div>
        </div>
        <div className="social-media">
          <a href={props.resumeSocialMedia.facebook}> <FaFacebook /> </a>
          <a href={props.resumeSocialMedia.instagram}> <FaInstagram/> </a>
          <a href={props.resumeSocialMedia.tripAdvisor}> <FaTripadvisor /> </a>
          <a href={props.resumeSocialMedia.airbnb}> <FaAirbnb /> </a>
          <a href={props.resumeSocialMedia.bookingCom}> <TbBrandBooking /> </a>
        </div>
      </div>
      <div className="copyright">
        <small>
          Copyright © Gabriel Gonçalves Novalski
        </small>
        <a href="https://github.com/gab5987" style={{marginLeft: "10px"}}>
          <FaGithub/>
        </a>
      </div>
    </div>
  );
}
