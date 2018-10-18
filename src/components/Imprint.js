import React from 'react';
import '../styles/Imprint.css'
import {Link} from 'react-router-dom';
import NavBottomNoToggle from './NavBottomNoToggle.js'

const Imprint = (props) => {

  return (<div className="container">
    <div className="top-nav top-nav-imprint">
      <nav className="navbar navbar-light navbar-expand-sm navtop p-4">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse navtop-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item nav-item-anthology nav-item-top active">
              <Link to="/" className="link-anthology">HOME</Link>
            </li>
            <li className="nav-item nav-item-anthology nav-item-top">
              <Link to="/description" className="link-anthology">DESCRIPTION</Link>
            </li>
            <li className="nav-item nav-item-anthology nav-item-top">
              <Link to="/tableofcontents" className="link-anthology">TABLE OF CONTENTS</Link>
            </li>
            <li className="nav-item nav-item-anthology nav-item-top">
              <Link to="/authors" className="link-anthology">AUTHORS</Link>
            </li>
            <li className="nav-item nav-item-anthology nav-item-top">
              <Link to="/buy" className="link-anthology">BUY</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div className="media desc">
      <img className="cover-001 cover-001i" src="/images/FrontCover.jpeg" alt="Anthology Front Cover"/>
    </div>
    <div className="media-body imprint">
      <div className="row">
        <div className="col-4 offset-5 text-left imprint-col-1">
          COPYRIGHT: STORYZONE
          <br></br>
          STORYZONE is a brand of 4P Labs AG,
          <br></br>
          Switzerland.
          <br></br>
          <br></br>
          No part of this book may be reproduced
          <br></br>
          in any written, electronic, recording, or
          <br></br>
          photocopying without written permission
          <br></br>
          of the publisher or author. The
          <br></br>
          exception would be in the case of brief
          <br></br>
          quotations embodied in the critical
          <br></br>
          articles or reviews and pages where
          <br></br>
          permission is specifically granted by the
          <br></br>
          publisher or author.
          <br></br>
          Although every precaution has been taken
          <br></br>
          to verify the accuracy of the information contained herein, the author
          <br></br>
          and publisher assume no responsibility
          <br></br>
          for any errors or omissions. No liability
          <br></br>
          is assumed for damages that may result
          <br></br>
          from the use of information contained
          <br></br>
          within.
          <br></br>
          All reprinted articles are reprinted with
          <br></br>
          the explicit approval of the authors or
          <br></br>
          publishers.
        </div>
        <div className="col-4 text-left offset-9 imprint-col-2">
          Editor: Ruediger Drischel
          <br></br>
          Publisher: STORYZONE
          <br></br>
          4P Labs AG, Freiburgstraße 172, 3008 Switzerland
          <br></br>
          Web design: Mona Temchin
          <br></br>
          First Edition 2018
        </div>
      </div>
    </div>
    <div className="bottom-navigation-imprint">
      <NavBottomNoToggle page={'Imprint'}/>
    </div>
  </div>);
}

export default Imprint;
