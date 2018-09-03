import React from 'react';
import '../styles/Anthology.css';
import '../styles/LinksBottom.css';
import {Link} from 'react-router-dom';

const LinksBottom = (props) => {

  return (<div>

    <nav className="navbar navbar-light navbar-expand-sm d-flex">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarToggler">
        <ul className="navbar navbar-nav">
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
  </div>)

}

export default LinksBottom;
