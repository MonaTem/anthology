import React from 'react';
import '../styles/About.css';
import '../styles/Anthology.css';
import NavTop from './NavTop.js'
import NavBottomNoToggle from './NavBottomNoToggle.js'

const About = (props) => {

  return (<div className="container">
    <div className="top-nav top-nav-About">
      <NavTop page={'About'}/>
    </div>
    <div className="media desc">
      <img className="cover-001 cover-001-about" src="/images/FrontCover.jpeg" alt="Anthology Front Cover"/>
      <img className="cover-002 cover-002-about" src="/images/BackCover.jpeg" alt="Anthology Back Cover"/>
    </div>
    <div className="media-body">
      <div className="row">
        <div className="col-5 offset-8 text-left about">
          This anthology is a unique
          <br></br>
          collection of articles about the
          <br></br>
          new age of storytelling as it
          <br></br>
          relates to the internet, new
          <br></br>
          technologies, data, artificial
          <br></br> 
          intelligence.
          <br></br>
          <br></br>
          It is part of the Storyzone
          <br></br>
          project which will make stories
          <br></br>
          of all cultures and languages
          <br></br>
          accessible all over the world.
          <br></br>
          <br></br>
          Storyzone consists of an
          <br></br>
          internet portal, collaborative
          <br></br>
          storytelling as a unique
          <br></br>
          technique of storytelling, and
          <br></br>
          this anthology.


          </div>
        </div>
      </div>
      <div className="bottom-nav-about">
        <NavBottomNoToggle page={'About'}/>
      </div>
    </div>);
}

export default About;
