import React from 'react';
import '../styles/Anthology.css';
import '../styles/NavBottom.css';
import {Link} from 'react-router-dom';

const NavBottom = (props) => {

    var NavStyle = {
      color: '#254489',
      textDecoration: 'none'
    }

    var NavStyleBold = {
      color: '#254489',
      textDecoration: 'none',
      fontWeight: 'strong'
    }


    switch (props.page) {

      case "About":
        return (<div>
          <nav>
            <p id="about">
              <Link to={"/about"} style={NavStyleBold}>ABOUT</Link>
            </p>
            <p id="imprint">
                <Link to={"/imprint"} style={NavStyle}>IMPRINT</Link>
            </p>
            <p id="_2018">© 2018</p>
            <p id="contact">
              <Link to={"/contact"} style={NavStyle}>CONTACT</Link>
            </p>
          </nav>
        </div>);

      case "Imprint":
        return (<div>
          <nav>
            <p id="about">
              <Link to={"/about"} style={NavStyle}>ABOUT</Link>
            </p>
            <p id="imprint">
                <Link to={"/imprint"} style={NavStyleBold}>IMPRINT</Link>
            </p>
            <p id="_2018">© 2018</p>
            <p id="contact">
              <Link to={"/contact"} style={NavStyle}>CONTACT</Link>
            </p>
          </nav>
        </div>);

      case "Contact":
        return (<div>
          <nav>
            <p id="about">
              <Link to={"/about"} style={NavStyle}>ABOUT</Link>
            </p>
            <p id="imprint">
                <Link to={"/imprint"} style={NavStyle}>IMPRINT</Link>
            </p>
            <p id="_2018">© 2018</p>
            <p id="contact">
              <Link to={"/contact"} style={NavStyleBold}>CONTACT</Link>
            </p>
          </nav>
        </div>);

      default:
        return (<div>
          <nav>
            <p id="about">
              <Link to={"/about"} style={NavStyle}>ABOUT</Link>
            </p>
            <p id="imprint">
                <Link to={"/imprint"} style={NavStyle}>IMPRINT</Link>
            </p>
            <p id="_2018">© 2018</p>
            <p id="contact">
              <Link to={"/contact"} style={NavStyle}>CONTACT</Link>
            </p>
          </nav>
        </div>);
    }
  }

  export default NavBottom;
