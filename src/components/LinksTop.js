import React from 'react';
import '../styles/Anthology.css';
import '../styles/LinksTop.css';
import {Link} from 'react-router-dom';

const LinksTop = (props) => {

  var bgcolor = {
    backgroundColor: 'rgb(115, 179, 222)'
  }

  return (<div>
    <nav className="navbar-expand-lg navbar-light navbar-toggleable-lg" style={bgcolor}>
      <button class="navbar navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar navbar-toggler-icon"></span>
      </button>
      <div class="navbar navbar-nav">
      <p id="home">
        <Link to={"/"} style={props.navstylehome}>HOME</Link>
      </p>
      <p id="description">
        <Link to={"/description"} style={props.navstyledesc}>DESCRIPTION</Link>
      </p>
      <p id="table-of-contents">
        <Link to={"/tableofcontents"} style={props.navstyletoc}>TABLE OF CONTENTS</Link>
      </p>
      <p id="authors">
        <Link to={"/authors"} style={props.navstyleauthors}>AUTHORS</Link>
      </p>
      <p id="buy">
        <Link to={"/buy"} style={props.navstylebuy}>BUY</Link>
      </p>
    </div>
    </nav>
  </div>);

}

export default LinksTop;
