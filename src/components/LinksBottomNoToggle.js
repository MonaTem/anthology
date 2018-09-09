import React from 'react';
import '../styles/Anthology.css';
import '../styles/LinksBottomNoToggle.css';
import {Link} from 'react-router-dom';

const LinksBottomNoToggle = (props) => {

  return (<div>

    <nav className="navbar navbar-light d-flex navbar-expand-sm navbottom">

      <div>
        <ul className="navbar navbar-nav">
          <li id="about" className="navbar-item">
            <Link to={"/about"} style={props.navstyleabout}>ABOUT</Link>
          </li>
          <li id="imprint" className="navbar-item">
            <Link to={"/imprint"} style={props.navstyleimprint}>IMPRINT</Link>
          </li>
          <p id="_2018">© 2018</p>
          <li id="contact" className='navbar-item"'>
            <Link to={"/contact"} style={props.navstylecontact}>CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>)

}

export default LinksBottomNoToggle;
