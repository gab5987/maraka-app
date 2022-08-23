import "./footer.css";

import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
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
          <FaFacebook/>
          <FaInstagram/>
          <FaLinkedinIn/>
          <FaTwitter/>
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
