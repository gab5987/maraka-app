import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './index.css'

const handleDragStart = (e) => e.preventDefault();
const rooms = []; const area = []; const out = []

function importAll(r) {
  return r.keys().map(r);
}

const getImages = () => {
  const imagesRooms = importAll(require.context('../app_data/images/units', false, /\.(png|jpe?g|svg)$/));
  const imagesOut = importAll(require.context('../app_data/images/out', false, /\.(png|jpe?g|svg)$/));
  const imagesArea = importAll(require.context('../app_data/images/area', false, /\.(png|jpe?g|svg)$/));

  if(!rooms[0]){
    for(let i in imagesRooms) {
      rooms.push( <div className='imgContainer'> <img src={imagesRooms[i]} onDragStart={handleDragStart} role="presentation" /> </div> )
    }
  }
  if(!out[0]){
    for(let i in imagesOut) {
      out.push( <div className='imgContainer'> <img src={imagesOut[i]} onDragStart={handleDragStart} role="presentation" /> </div> )
    }
  }
  if(!area[0]){
    for(let i in imagesArea) {
      area.push( <div className='imgContainer'> <img src={imagesArea[i]} onDragStart={handleDragStart} role="presentation" /> </div> )
    }
  }
}

const Imgs = () => {
  getImages();
  return (
    <div className='ima'>
      <div className='sec1'> 
        <h1> Fotos Apartamentos </h1>
        <AliceCarousel autoPlay autoPlayInterval="10000" mouseTracking items={rooms} />
      </div>

      <div className='sec2'> 
        <h1> Fotos Área de Lazer </h1>
        <AliceCarousel autoPlay autoPlayInterval="10000" mouseTracking items={area} />
      </div>

      <div className='sec1'>
        <h1> Fotos Exterior </h1>
        <AliceCarousel autoPlay autoPlayInterval="10000" mouseTracking items={out} />
      </div>
    </div>
  );
}
export default Imgs