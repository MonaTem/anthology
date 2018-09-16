import React from 'react';
import '../styles/Buy.css';
import '../styles/Anthology.css';
import {Link} from 'react-router-dom';

const Buy = (props) => {

  return (<div className="container">

    <nav className="navbar navbar-light navbar-expand-sm navtop p-4">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse navtop-collapse" id="navbarToggler">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item nav-item-anthology nav-item-top">
            <Link to="/" className="link-anthology">HOME</Link>
          </li>
          <li className="nav-item nav-item-anthology nav-item-top">
            <Link to="/description" className="link-anthology">DESCRIPTION</Link>
          </li>
          <li className="nav-item nav-item-anthology nav-item-top">
            <Link to="/tableofcontents" className="link-anthology">TABLE OF CONTENTS</Link>
          </li>
          <li className="nav-item nav-item-anthology nav-item-top">
            <Link to="/authors" className="link-anthology">AUTHORS</Link>
          </li>
          <li className="nav-item nav-item-anthology nav-item-top active">
            <Link to="/buy" className="link-anthology">BUY</Link>
          </li>
        </ul>
      </div>
    </nav>

    <div className="media buy">
      <img className="cover-001 cover-001-buy" src="/images/FrontCover.jpeg" alt="Anthology Front Cover"/>
    </div>
    <div className="media-body">
      <div className="row buy">
        <div className="col-4 offset-5 text-left buy-col-1">
          <h4>EBOOK</h4>
          <br></br>
          <img src='/images/Amazon.jpg' alt="Amazon" width="80" height="80"/>
          <br></br>
          <br></br>
          <img src='/images/Barnes_and_Noble.jpg' alt="Barnes and Noble" width="80" height="80"/>
          <br></br>
          <br></br>
          <div className="bn-logo">
            <img src='/images/Barnes_and_Noble_logo.svg' alt='Barnes and Noble logo' width='100'/>
          </div>
          <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4 className="book">BOOK</h4>
            <div className="Amazon-logo">
              <img src='/images/Amazon_Logo_Transparent.png' alt='Amazon logo' width='170'/>
            </div>
          </div>
        </div>
        <div className="col-5 offset-8 text-left buy-col-2 border border-dark">
          <h2 className="heading1">NOTE</h2>
          <br></br>
          <br></br>
          <div className="Europe">
            SALES IN EUROPE
            <br></br>
            SEPTEMBER 15
          </div>
          <br></br>
          <br></br>
          <div className="US">
            SALES IN THE U.S.
            <br></br>
            OCTOBER 15
          </div>
        </div>
      </div>
    </div>

    <nav className="navbar navbar-light navbar-expand-sm bottom-nav-bar bottom-nav bottom-nav-buy">
      <ul className="navbar-nav">
        <li className="nav-item nav-item-anthology nav-item-bottom">
          <Link to="/about" className="link-anthology">ABOUT</Link>
        </li>
        <li className="nav-item nav-item-anthology nav-item-bottom">
          <Link to="/imprint" className="link-anthology imprint">IMPRINT</Link>
        </li>
        <li className="nav-item nav-item-anthology nav-item-bottom">
          <p>© 2018
          </p>
        </li>
        <li className="nav-item nav-item-anthology nav-item-bottom">
          <Link to="/contact" className="link-anthology">CONTACT</Link>
        </li>
      </ul>
    </nav>

  </div>);
}

export default Buy;
