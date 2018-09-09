import React from 'react';
import '../styles/Buy.css';
import '../styles/Anthology.css';
import NavTop from './NavTop.js'
import NavBottomNoToggle from './NavBottomNoToggle.js'

const Buy = (props) => {

  return (<div className="container">
    <div className="top-nav top-nav-buy">
      <NavTop page={'Buy'}/>
    </div>
    <div className="media desc">
      <img className="cover-001 cover-001-buy" src="/images/FrontCover.jpeg" alt="Anthology Front Cover"/>
    </div>
    <div className="media-body">
      <div className="row buy">
        <div className="col-4 offset-5 text-left">

        </div>
        <div className="col-6 offset-3 text-left">

        </div>
      </div>
    </div>
    <div className="bottom-navigation-Buy">
      <NavBottomNoToggle page={'Buy'}/>
    </div>
  </div>);
}

export default Buy;
