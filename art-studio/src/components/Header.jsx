import React from 'react';
function Header(){
    return (
        <div className="header">
          <div className="header-left">
              <div className="color dark-blue">

              </div>
              <div className="color red">

              </div>
              <div className="color yellow">

              </div>
              <div className="color cyan">

              </div>
          </div>
          <div className="header-right">
              <h1 className="title">
                  Art<span className="studio"><br/>Studio</span>
              </h1>
              <div className="header-br">
                  <p className="br-item">photography</p>
                  <p className="br-item">art</p>
                  <p className="br-item">design and branding</p>
              </div>
          </div>
      </div>
    )
}
export default Header;