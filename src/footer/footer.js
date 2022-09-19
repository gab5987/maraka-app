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
            <h1> {props.resumeLangDeps.foot1} </h1>
            <a href={props.resumeInfo.footNotes.tripAdvisorWhatToDo} target="_blank"> Blog TripAdvisor </a>
            <a href={props.resumeInfo.footNotes.googleTravel} target="_blank">Google travel</a>
          </div>
          <div className="my-stack support">
            <h1> {props.resumeLangDeps.foot2} </h1>
            <a href={contact.phone}> Telefone </a>
            <a href={contact.email}> E-Mail </a>
          </div>
        </div>
        <div className="social-media">
          <a href={props.resumeInfo.socialMedia.facebook} target="_blank"> <FaFacebook /> </a>
          <a href={props.resumeInfo.socialMedia.instagram} target="_blank"> <FaInstagram/> </a>
          <a href={props.resumeInfo.socialMedia.tripAdvisor} target="_blank"> <FaTripadvisor /> </a>
          <a href={props.resumeInfo.socialMedia.airbnb} target="_blank"> <FaAirbnb /> </a>
          <a href={props.resumeInfo.socialMedia.bookingCom} target="_blank"> <TbBrandBooking /> </a>
        </div>
      </div>
      <div className="copyright">
        <small>
          <a href="https://emp-site.vercel.app" target="_blank" style={{ textDecoration:'none', color:'#fff' }}>Copyright © Logical Tecnologia</a>
        </small>
      </div>
    </div>
  );
}
