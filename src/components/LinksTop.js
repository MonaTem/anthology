import React from 'react';
import '../styles/Anthology.css';
import '../styles/NavTop.css';
import {Link} from 'react-router-dom';

const LinksTop = (props) => {

      return (<div>
        <nav>
          <p id="home">
            <Link to={"/"} style={props.navstylehome}></Link>
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
        </nav>
      </div>);

    
}

export default LinksTop;
