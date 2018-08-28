import React from 'react';
import '../styles/Anthology.css';
import LinksBottom from './LinksBottom.js';

const NavBottom = (props) => {

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
          <LinksBottom navstyleabout={NavStyleBold} navstyleimprint={NavStyle} navstylecontact={NavStyle} />
        </div>);

      case "Imprint":

      return (<div>
        <LinksBottom navstyleabout={NavStyle} navstyleimprint={NavStyleBold} navstylecontact={NavStyle} />
      </div>);


      case "Contact":

      return (<div>
        <LinksBottom navstyleabout={NavStyle} navstyleimprint={NavStyle} navstylecontact={NavStyleBold} />
      </div>);


      default:
        return (<div>
            <LinksBottom navstyleabout = {NavStyle} navstyleimprint = {NavStyle} navstylecontact = {NavStyle}  />
        </div>);
    }

  }

  export default NavBottom;
