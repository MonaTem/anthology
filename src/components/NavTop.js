import React from 'react';
import '../styles/Anthology.css';
import '../styles/NavTop.css';
import {Link} from 'react-router-dom';

const NavTop = (props) => {

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

    case "Home":

      return (<div>
        <nav>
          <p id="home">
            <Link to={"/"} style={NavStyleBold}></Link>
          </p>
          <p id="description">
            <Link to={"/description"} style={NavStyle}>DESCRIPTION</Link>
          </p>
          <p id="table-of-contents">
            <Link to={"/tableofcontents"} style={NavStyle}>TABLE OF CONTENTS</Link>
          </p>
          <p id="authors">
            <Link to={"/authors"} style={NavStyle}>AUTHORS</Link>
          </p>
          <p id="buy">
            <Link to={"/buy"} style={NavStyle}>BUY</Link>
          </p>
        </nav>
      </div>);

    case "Description":
      return (<div>
        <nav>
          <p id="home">
            <Link to={"/"} style={NavStyle}>HOME</Link>
          </p>
          <p id="description">
            <Link to={"/description"} style={NavStyleBold}>DESCRIPTION</Link>
          </p>
          <p id="table-of-contents">
            <Link to={"/tableofcontents"} style={NavStyle}>TABLE OF CONTENTS</Link>
          </p>
          <p id="authors">
            <Link to={"/authors"} style={NavStyle}>AUTHORS</Link>
          </p>
          <p id="buy">
            <Link to={"/buy"} style={NavStyle}>BUY</Link>
          </p>
        </nav>
      </div>);

    case "TableOfContents":
      return (<div>
        <nav>
          <p id="home">
            <Link to={"/"} style={NavStyle}>HOME</Link>
          </p>
          <p id="description">
            <Link to={"/description"} style={NavStyle}>DESCRIPTION</Link>
          </p>
          <p id="table-of-contents">
            <Link to={"/tableofcontents"} style={NavStyleBold}>TABLE OF CONTENTS</Link>
          </p>
          <p id="authors" style={NavStyle}><Link to={"/authors"}>AUTHORS</Link>
          </p>
          <p id="buy">
            <Link to={"/buy"} style={NavStyle}>BUY</Link>
          </p>
        </nav>
      </div>);

    case "Authors":
      return (<div>
        <nav>
          <p id="home">
            <Link to={"/"} style={NavStyle}>HOME</Link>
          </p>
          <p id="description">
            <Link to={"/description"} style={NavStyle}>DESCRIPTION</Link>
          </p>
          <p id="table-of-contents">
            <Link to={"/tableofcontents"} style={NavStyle}>TABLE OF CONTENTS</Link>
          </p>
          <p id="authors">
            <Link to={"/authors"} style={NavStyleBold}>AUTHORS</Link>
          </p>
          <p id="buy">
            <Link to={"/buy"} style={NavStyle}>BUY</Link>
          </p>
        </nav>
      </div>);

    case "Buy":
      return (<div>
        <nav>
          <p id="home">
            <Link to={"/"} style={NavStyle}>HOME</Link>
          </p>
          <p id="description">
            <Link to={"/description"} style={NavStyle}>DESCRIPTION</Link>
          </p>
          <p id="table-of-contents">
            <Link to={"/tableofcontents"} style={NavStyle}>TABLE OF CONTENTS</Link>
          </p>
          <p id="authors">
            <Link to={"/authors"} style={NavStyle}>AUTHORS</Link>
          </p>
          <p id="buy">
            <Link to={"/buy"} style={NavStyleBold}></Link>
          </p>
        </nav>
      </div>);

    default:
      return (<div>
        <nav>
          <p id="home">
            <Link to={"/"} style={NavStyleBold}>HOME</Link>
          </p>
          <p id="description">
            <Link to={"/description"} style={NavStyle}>
            DESCRIPTION</Link>
          </p>
          <p id="table-of-contents">
            <Link to={"/tableofcontents"} style={NavStyle}>
            TABLE OF CONTENTS</Link>
          </p>
          <p id="authors">
            <Link to={"/authors"} style={NavStyle}>
            AUTHORS</Link>
          </p>
          <p id="buy">
            <Link to={"/buy"} style={NavStyle}>
            BUY</Link>
          </p>
        </nav>
      </div>);
  }

}

export default NavTop;
