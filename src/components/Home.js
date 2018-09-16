import React from 'react';
import '../styles/Anthology.css';
import '../styles/Home.css';
import {Link} from 'react-router-dom';
// import NavBottomNoToggle from './NavBottomNoToggle.js';

const Home = (props) => {

  return (<div className="container">
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

    <div className="media ml-5 home stuff">
      <img className="cover-001" src="/images/FrontCover.jpeg" alt="Anthology Front Cover"/>
      <img className="cover-002" src="/images/BackCover.jpeg" alt="Anthology Back Cover"/>
      <div className="media-body ml-3 quotes">
        <div className="row">
          <div className="col-12">
            <p>The most powerful person in the world
              <br></br>is the storyteller. The storyteller sets the
              <br></br>vision, values, and agenda for an entire
              <br></br>generation that is to come.
            </p>
            <p className="famous_people">Steve Jobs</p>
            <p>If you want to learn about a CULTURE,
              <br></br>listen to the stories.If you want to change
              <br></br>the culture, change the stories.
            </p>
            <br></br>
            <p className="famous_people">Michael Margolis, Technologist
            </p>
            <p>Stories constitute the single most powerful
              <br></br>weapon in a LEADER’s arsenal.
            </p>
            <br></br>
            <p className="famous_people">Howard Gardner, Psychologist
              <br></br>
            </p>
            <br></br>
            <p>It’s like everyone tells a story about
              <br></br>themselves inside their own head…
              <br></br>We build OURSELVES out of that story.
            </p>
            <p className="famous_people">Patrick Rothfuss, Writer
            </p>
          </div>
        </div>
      </div>

    </div>
    <nav className="navbar navbar-light navbar-expand-sm bottom-nav-bar">
      <ul className="navbar-nav">
        <li className="nav-item nav-item-anthology nav-item-bottom">
          <Link to="/about" className="link-anthology">ABOUT</Link>
        </li>
        <li className="nav-item nav-item-anthology nav-item-bottom">
          <Link to="/imprint" className="link-anthology imprint">IMPRINT</Link>
        </li>
        <li className="nav-item nav-item-anthology nav-item-bottom">
          <p>© 2018
          </p>
        </li>
        <li className="nav-item nav-item-anthology nav-item-bottom">
          <Link to="/contact" className="link-anthology">CONTACT</Link>
        </li>
      </ul>
    </nav>
  </div>);
}

export default Home;
