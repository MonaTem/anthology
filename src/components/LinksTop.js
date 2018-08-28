import React from 'react';
import '../styles/Anthology.css';
import '../styles/LinksTop.css';
import {Link} from 'react-router-dom';

const LinksTop = (props) => {

  return (<div>
    <nav className="navbar navbar-light navbar-expand-xl navbar-left d-flex">
    {/* <nav className="navbar navbar-light navbar-expand-xl navbar-left"> */}
      <div className="navbar-nav">
        <ul className="navbar-nav">
          <li id="home" className="navbar-item">
            <Link to={"/"} style={props.navstylehome}>HOME</Link>
          </li>
          <li id="description" className="navbar-item navbar-link">
            <Link to={"/description"} style={props.navstyledesc}>DESCRIPTION</Link>
          </li>
          <li id="table-of-contents" className="navbar-item navbar-link">
            <Link to={"/tableofcontents"} style={props.navstyletoc}>TABLE OF CONTENTS</Link>
          </li>
          <li id="authors" className="navbar-item navbar-link">
            <Link to={"/authors"} style={props.navstyleauthors}>AUTHORS</Link>
          </li>
          <li id="buy" className="navbar-item navbar-link">
            <Link to={"/buy"} style={props.navstylebuy}>BUY</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>);

}

export default LinksTop;
