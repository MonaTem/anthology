import React from 'react';
import '../../styles/Anthology.css';
import '../../styles/NavBottom.css';
import { Link } from "react-router-dom";

const NavBottom = (props) => {

    return (
    <div>
      <nav>

        <p id="about">ABOUT</p>
        <p id="imprint">
           <span id="text">IMPRINT</span>
           <span id="text2"></span>
        </p>
        <p id="_2018">© 2018</p>
        <p id="contact">CONTACT</p>
     </nav>
   </div>
);

}

export default NavBottom;
