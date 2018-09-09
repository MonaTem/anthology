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
        <div className="col-4 offset-6 text-left buy-col-1">
          <h4>EBOOK</h4>
          <br></br>
          <img src='/images/Amazon.jpg' alt="Amazon" width="80" height="80"/>
          <br></br>
          <br></br>
          <img src='/images/Barnes_and_Noble.jpg' alt="Barnes and Noble" width="80" height="80"/>
          <br></br>
          <br></br>
          <div className="bn-logo">
             <img src='/images/Barnes_and_Noble_logo.svg' alt='Barnes and Noble logo' width='100' />
          </div>
          <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h5 className="book">BOOK</h5>
            <div className="Amazon-logo">
            <img src='/images/Amazon_Logo_Transparent.png' alt='Amazon logo' width='170' />
            </div>
          </div>
        </div>
        <div className="col-5 offset-8 text-left buy-col-2 border border-dark">
          <h1 className="heading1">NOTE</h1>
        </div>
      </div>
    </div>
    <div className="bottom-nav-buy">
      <NavBottomNoToggle page={'Buy'}/>
    </div>
  </div>);
}

export default Buy;
