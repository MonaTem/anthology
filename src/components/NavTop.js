import React from 'react';
import '../../styles/Anthology.css';
import '../../styles/NavTop.css';
import { Link } from "react-router-dom";

const NavTop = (props) => {

    return (
    <div>
      <nav>
        <p id="home"><Link to={"/"}>HOME</Link></p>
        <p id="description"><Link to={"/description"}>DESCRIPTION</Link></p>
        <p id="table-of-contents"><Link to={"/tableofcontents"}>TABLE OF CONTENTS</Link></p>
        <p id="authors"><Link to={"/authors"}>AUTHORS</Link></p>
        <p id="buy"><Link to={"/buy"}>BUY</Link></p>
      </nav>
     </div>
    );

}

export default NavTop;
