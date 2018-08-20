import React from 'react';
import '../styles/Anthology.css';
import '../styles/LinksTop.css';
import {Link} from 'react-router-dom';

const LinksTop = (props) => {

  return (<div>
    <nav className="navbar navbar-light navbar-expand-xl navbar-toggleable-xl">
      <button className="navbar navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"  aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar navbar-nav" id="navbarNavAltMarkup">
          <li id="home" className="navbar-item">
            <Link to={"/"} style={props.navstylehome}>HOME</Link>
          </li>
          <li id="description" className="navbar-item">
            <Link to={"/description"} style={props.navstyledesc}>DESCRIPTION</Link>
          </li>
          <li id="table-of-contents" className="navbar-item">
            <Link to={"/tableofcontents"} style={props.navstyletoc}>TABLE OF CONTENTS</Link>
          </li>
          <li id="authors" className="navbar-item">
            <Link to={"/authors"} style={props.navstyleauthors}>AUTHORS</Link>
          </li>
          <li id="buy" className="navbar-item">
            <Link to={"/buy"} style={props.navstylebuy}>BUY</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>);

}

export default LinksTop;
