import "./row2.css";
import React from "react";
import { BrowserView, MobileView, isMobile } from 'react-device-detect';

export default function Location(props){
  var width, height;
  isMobile ? width=(window.innerWidth - 70).toString() : width="600"
  isMobile ? height=(window.innerWidth / 2).toString() : height="400"
  
  const RenderMap = () => {
    return(
      <div className="column-row2-column2">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.5860989182424!2d-48.434717049258516!3d-27.575353227722548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273e50f2b1b1f1%3A0xb52f837e3a55245e!2sPousada%20Marak%C3%A1!5e0!3m2!1sen!2sbr!4v1661259843151!5m2!1sen!2sbr" 
          width={width}
          height={height} 
          style={{ border:10 }} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
    )
  }

  return (
    <>
      <BrowserView>
        <div className="row2-container">
            <div className="column-row2-column1">
                <h1> {props.resumeLangDeps.pageName} </h1>
                <p> {props.resumeLangDeps.description} </p>
            </div>
            <RenderMap/>
        </div>
      </BrowserView>

      <MobileView>
        <div className="row2-container">
            <div className="column-row2-column1">
                <h1> {props.resumeLangDeps.pageName} </h1>
                <p> {props.resumeLangDeps.description} </p>
                <br/>
                <RenderMap/>
            </div>
        </div>
      </MobileView>
    </>
  );
}