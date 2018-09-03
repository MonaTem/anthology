import React from 'react';
import '../styles/Anthology.css';
import LinksBottomNoToggle from './LinksBottomNoToggle.js';

const NavBottomNoToggle = (props) => {

    var NavStyle = {
      color: '#254489',
      textDecoration: 'none',
      fontWeight: 'normal'
    }

    var NavStyleBold = {
      color: '#254489',
      textDecoration: 'none',
      fontWeight: 'bold'
    }


    switch (props.page) {

      case "About":

        return (<div>
          <LinksBottomNoToggle navstyleabout={NavStyleBold} navstyleimprint={NavStyle} navstylecontact={NavStyle} />
        </div>);

      case "Imprint":

      return (<div>
        <LinksBottomNoToggle navstyleabout={NavStyle} navstyleimprint={NavStyleBold} navstylecontact={NavStyle} />
      </div>);


      case "Contact":

      return (<div>
        <LinksBottomNoToggle navstyleabout={NavStyle} navstyleimprint={NavStyle} navstylecontact={NavStyleBold} />
      </div>);


      default:
        return (<div>
            <LinksBottomNoToggle navstyleabout = {NavStyle} navstyleimprint = {NavStyle} navstylecontact = {NavStyle}  />
        </div>);
    }

  }

  export default NavBottomNoToggle;
