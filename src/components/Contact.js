import React from 'react';
import '../styles/Contact.css';
import '../styles/Anthology.css';
import NavTop from './NavTop.js'
import NavBottomNoToggle from './NavBottomNoToggle.js'

const Contact = (props) => {

  return (<div className="container">
    <div className="top-nav top-nav-contact">
      <NavTop page={'Contact'}/>
    </div>
    <div className="media desc">
      <img className="cover-001 cover-001-contact" src="/images/FrontCover.jpeg" alt="Anthology Front Cover"/>
    </div>
    <div className="media-body">
      <div className="row">
        <div className="col-12 offset-5 text-left contact">
          Ruediger Drischel
          <br></br>
          <br></br>
          4P LABS AG
          <br></br>
          Freiburgstrasse 172
          <br></br>
          3008 Bern
          <br></br>
          SWITZERLAND
          <br></br>
          <br></br>
          +49 170 1958869
          <br></br>
          <br></br>
          ruedigerdrischel@storyzone.one
          </div>
        </div>
      </div>
      <div className="bottom-navigation-contact">
        <NavBottomNoToggle page={'Contact'}/>
      </div>
    </div>);
}

export default Contact;
