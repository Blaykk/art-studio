import React from 'react';
import fb from './img/icons/social-fb-ic.svg'
import vk from './img/icons/social-vk-ic.svg'
import tiktok from './img/icons/social-tiktok-ic.svg'
import inst from './img/icons/social-inst-ic.svg'
function Social(){
    return (
        <div className="social">
            <a href="" className="social-item">
                <img src={fb} alt="" className="social-img"/>
            </a>
            <a href="" className="social-item">
                <img src={vk} alt="" className="social-img"/>
            </a>
            <a href="" className="social-item">
                <img src={tiktok} alt="" className="social-img"/>
            </a>
            <a href="" className="social-item">
                <img src={inst} alt="" className="social-img"/>
            </a>
        </div>
    )
}
export default Social;