import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/About.css';
import '../styles/Anthology.css';
// // import NavTop from './NavTop.js'
// import NavBottomNoToggle from './NavBottomNoToggle.js'

const About = (props) => {

  return (<div className="container">
    <div className="top-nav top-nav-About">
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
            <li className="nav-item nav-item-anthology nav-item-top">
              <Link to="/buy" className="link-anthology">BUY</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="media desc">
      <img className="cover-001 cover-001-about mt-5" src="/images/FrontCover.jpeg" alt="Anthology Front Cover"/>
      <img className="cover-002 cover-002-about mt-5" src="/images/BackCover.jpeg" alt="Anthology Back Cover"/>
    </div>
    <div className="media-body">
      <div className="row">
        <div className="col-5 offset-8 text-left about">
          This anthology is a unique
          <br></br>
          collection of articles about the
          <br></br>
          new age of storytelling as it
          <br></br>
          relates to the internet, new
          <br></br>
          technologies, data, artificial
          <br></br>
          intelligence.
          <br></br>
          <br></br>
          It is part of the Storyzone
          <br></br>
          project which will make stories
          <br></br>
          of all cultures and languages
          <br></br>
          accessible all over the world.
          <br></br>
          <br></br>
          Storyzone consists of an
          <br></br>
          internet portal, collaborative
          <br></br>
          storytelling as a unique
          <br></br>
          technique of storytelling, and
          <br></br>
          this anthology.


          </div>
        </div>
      </div>

      <nav className="navbar navbar-light navbar-expand-sm bottom-nav-bar bottom-nav bottom-nav-descr">
        <ul className="navbar-nav">
          <li className="nav-item nav-item-anthology nav-item-bottom">
            <Link to="/about" className="link-anthology active">ABOUT</Link>
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

export default About;
