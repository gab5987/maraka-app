import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './index.css'

const handleDragStart = (e) => e.preventDefault();
const rooms = [];

function importAll(r) {
  return r.keys().map(r);
}

const getImages = () => {
  const imagesRooms = importAll(require.context('../app_data/images/units', false, /\.(png|jpe?g|svg)$/));

  if(!rooms[0]){
    for(let i in imagesRooms) {
      rooms.push( <div className='imgContainer'> <img src={imagesRooms[i]} onDragStart={handleDragStart} role="presentation" /> </div> )
    }
  }
}

const Imgs = () => {
  getImages();
  return (
    <AliceCarousel autoPlay autoPlayInterval="10000" mouseTracking items={rooms} />
  );
}
export default Imgs