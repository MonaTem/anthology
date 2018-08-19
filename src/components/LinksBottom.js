import React from 'react';
import '../styles/Anthology.css';
import '../styles/LinksBottom.css';
import {Link} from 'react-router-dom';

const LinksBottom = (props) => {

  var bgcolor = {
    backgroundColor: 'rgb(202, 220, 232)'

  }

  return (<div>
    <nav className="navbar navbar-light navbar-expand-md navbar-toggleable-md fixed-bottom" style={bgcolor}>
      <button className="navbar navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse_target" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar navbar-nav" id="collapse_target">
          <li id="about" className="navbar-item">
            <Link to={"/"} style={props.navstyleabout}>ABOUT</Link>
          </li>
          <li id="imprint" className="navbar-item">
            <Link to={"/description"} style={props.navstyleimprint}>IMPRINT</Link>
          </li>
          <p id="_2018">© 2018</p>
          <li id="contact" className='navbar-item"'>
            <Link to={"/authors"} style={props.navstylecontact}>CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>);

}

export default LinksBottom;
