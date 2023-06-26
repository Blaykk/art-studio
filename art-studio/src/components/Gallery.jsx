import React from 'react';
import gallery1 from '../img/pictures/gallery1.png';
import gallery2 from '../img/pictures/gallery2.png';
import gallery3 from '../img/pictures/gallery3.png';
import gallery4 from '../img/pictures/gallery4.png';
import gallery5 from '../img/pictures/gallery5.png';
import gallery6 from '../img/pictures/gallery6.png';
import gallery7 from '../img/pictures/gallery7.png';

function Gallery(){
    return (
        <div className="gallery">
          <h2 className="photography-title gallery-title">
              Portfolio
          </h2>
          <div className="gallery-content">
              <img src={gallery1} alt="crypto-site" className="gallery-item item1"/>
              <img src={gallery2} alt="" className="gallery-item item2"/>
              <img src={gallery3} alt="" className="gallery-item item3"/>
              <img src={gallery4} alt="" className="gallery-item item4"/>
              <img src={gallery5} alt="" className="gallery-item item5"/>
              <img src={gallery6} alt="" className="gallery-item item6"/>
              <img src={gallery7} alt="" className="gallery-item item7"/>
          </div>
      </div>
    )
}
export default Gallery;