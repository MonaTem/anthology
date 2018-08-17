import React from 'react';
import '../styles/Anthology.css';
import '../styles/LinksBottom.css';
import {Link} from 'react-router-dom';

const LinksBottom = (props) => {

  return (<div>
    <nav>
      <p id="about">
        <Link to={"/"} style={props.navstyleabout}>ABOUT</Link>
      </p>
      <p id="imprint">
        <Link to={"/description"} style={props.navstyleimprint}>IMPRINT</Link>
      </p>
      <p id="_2018">© 2018</p>
      <p id="contact">
        <Link to={"/authors"} style={props.navstylecontact}>CONTACT</Link>
      </p>
    </nav>
  </div>);



  }

  export default LinksBottom;
