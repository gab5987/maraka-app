import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './index.css'

const handleDragStart = (e) => e.preventDefault();
const img1 = require("../app_data/images/ISR_1622.jpg");
const img2 = require("../app_data/images/ISR_1624.jpg")

const items = [
  <img src={img1} onDragStart={handleDragStart} role="presentation" />,
  <img src={img2} onDragStart={handleDragStart} role="presentation" />,
];

const Imgs = () => {
  return (
    <div className='imgContainer'>
        <AliceCarousel autoPlay autoPlayInterval="5000" mouseTracking items={items} />
    </div>
  );
}
export default Imgs