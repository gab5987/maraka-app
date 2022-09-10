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
  const contact = {
    email: `mailto:${props.resumeInfo.info.email}`,
    phone: `tel:${props.resumeInfo.info.telNumber}`
  }
  return (
    <div> <bookingIcon />
      <div className="footer">
        <div className="mystacks">
          <div className="my-stack useful-links">
            <h1>Sobre Florianópolis</h1>
            <a href={props.resumeInfo.footNotes.tripAdvisorWhatToDo} target="_blank"> Blog TripAdvisor </a>
            <a href={props.resumeInfo.footNotes.googleTravel} target="_blank">Google travel</a>
          </div>
          <div className="my-stack support">
            <h1>Contato</h1>
            <a href={contact.phone}>+55 (48) 9 8840-1390 </a>
            <a href={contact.email}> pousadamaraka@gmail.com </a>
          </div>
        </div>
        <div className="social-media">
          <a href={props.resumeInfo.socialMedia.facebook}> <FaFacebook /> </a>
          <a href={props.resumeInfo.socialMedia.instagram}> <FaInstagram/> </a>
          <a href={props.resumeInfo.socialMedia.tripAdvisor}> <FaTripadvisor /> </a>
          <a href={props.resumeInfo.socialMedia.airbnb}> <FaAirbnb /> </a>
          <a href={props.resumeInfo.socialMedia.bookingCom}> <TbBrandBooking /> </a>
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
