import React from 'react';
import '../styles/Imprint.css';
import '../styles/Anthology.css';
import NavTop from './NavTop.js'
import NavBottomNoToggle from './NavBottomNoToggle.js'

const Imprint = (props) => {

  return (<div className="container">
    <div className="top-nav">
      <NavTop page={'Imprint'}/>
    </div>
    <div className="media desc">
      <img className="cover-001" src="/images/FrontCover.jpeg" alt="Anthology Front Cover"/>
    </div>
    <div className="media-body inform_the_user_when_the_app_is_ready_for_offline_consumption">
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
          to verify the accuracy of the
          information contained herein, the author
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


        </div>
      </div>
    </div>
    <div className="bottom-nav">
      <NavBottomNoToggle page={'Imprint'}/>
    </div>
  </div>);
}

export default Imprint;
