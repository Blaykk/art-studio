import React from 'react';
import logo from './img/icons/site-logo.svg';
import section2 from './img/icons/section2-ic.svg'
import section3 from './img/icons/section3-ic.svg'
import section4 from './img/icons/section4-ic.svg'
import section5 from './img/icons/section5-ic.svg'
import section6 from './img/icons/section6-ic.svg'
function NavMenu(){
    return (
        <div className="nav-menu">
          <a href="" className="nav-item">
              <img src={logo} alt="#" className="item-img"/>
          </a>
          <a href="" className="nav-item">
              <img src={section2} alt="#" className="item-img"/>
          </a>
          <a href="" className="nav-item">
              <img src={section3} alt="#" className="item-img"/>
          </a>
          <a href="" className="nav-item">
              <img src={section4} alt="#" className="item-img"/>
          </a>
          <a href="" className="nav-item">
              <img src={section5} alt="#" className="item-img"/>
          </a>
          <a href="" className="nav-item">
              <img src={section6} alt="#" className="item-img"/>
          </a>
      </div>
    )
}
export default NavMenu;