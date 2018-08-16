import React from 'react';
import '../styles/Anthology.css';
import '../styles/NavBottom.css';
import { Link } from 'react-router-dom';

const NavBottom = (props) => {

    return (
    <div>
      <nav>

        <p id="about"><Link to={"/about"}>ABOUT</Link></p>
        <p id="imprint">
           <span id="text"><Link to={"/imprint"}>IMPRINT</Link></span>
           <span id="text2"></span>
        </p>
        <p id="_2018">© 2018</p>
        <p id="contact"><Link to={"/contact"}>CONTACT</Link></p>
     </nav>
   </div>
);

}

export default NavBottom;
