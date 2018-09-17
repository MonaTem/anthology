import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Author.css';
import NavBottomNoToggle from './NavBottomNoToggle.js'
import authors from '../data/authors.js'
import WebsiteList from './WebsiteList.js'
import PublicationList from './PublicationList.js'
import VideoCaptions from './VideoCaptions.js'

const Author = (props) => {

  const ix = props.match.params.ix;
  const name = authors[ix].name;
  const contact = authors[ix].contact;
  const width = (name === "JULIE SPRINGER")
    ? 147
    : 200;


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
          <li className="nav-item nav-item-anthology nav-item-top">
            <Link to="/buy" className="link-anthology">BUY</Link>
          </li>
        </ul>
      </div>
    </nav>

    <div className="row">
      <div className="col-4">
        <img src={authors[ix].photo_url} alt={authors[ix].name} className="author-photo" width={width} height="200"/>
        <br></br>
        <br></br>
        <p className="author-bio">{authors[ix].bio}</p>
      </div>
      <div className="col-4">
        <h2>{name}</h2>
        <br></br>
        <iframe width="370" height="210" title={authors[ix].video_caption} src={authors[ix].video_link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen="allowfullscreen"></iframe>
        <br></br>
        <VideoCaptions ix={ix} />
      </div>
      <div className="col-4">
        <h5>WEBSITES (SELECTION)</h5>
           <WebsiteList ix={ix} />
        <h5>CONTACT</h5>
         <ul>
          <li><a href="{contact}" className="author-contact">{contact}</a></li>
         </ul>
        <h5>PUBLICATIONS (SELECTION)</h5>
         <PublicationList ix={ix} />
      </div>
    </div>

    <nav className="navbar navbar-light navbar-expand-sm bottom-nav-bar bottom-nav bottom-nav-descr">
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

export default Author;
