import React from 'react';
import '../styles/TableOfContents.css';
import '../styles/Anthology.css';
import {Link} from 'react-router-dom';

const TableOfContents = (props) => {

  return (<div className="container">

        <nav className="navbar navbar-light navbar-expand-sm navtop p-4">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse navtop-collapse" id="navbarToggler">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item nav-item-anthology nav-item-top">
                 <Link to="/" className="link-anthology">HOME</Link>
              </li>
              <li className="nav-item nav-item-anthology nav-item-top">
                <Link to="/description" className="link-anthology">DESCRIPTION</Link>
              </li>
              <li  className="nav-item nav-item-anthology nav-item-top active">
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

    <div className="media tableofc">
      <img className="cover-001" src="/images/FrontCover.jpeg" alt="Anthology Front Cover"/>
    </div>
    <div className="media-body toc">
      <div className="row">
        <div className="col-4 offset-5 text-left Toc-col-1">
          PREFACE
          <br></br>
          A NEW AGE OF STORYTELLING -
          <br></br>
          INTRODUCTION
          <br></br>
          Storytelling - A Tentative Structure
          <br></br>
          <br></br>
          CULTURE
          <br></br>
          Digital Storytelling at the National Gallery of Art
          <br></br>
          A Tapestry of Tales - How Storytelling Weaves
          <br></br>
          Culture
          <br></br>
          From Aristoteles to AI
          <br></br>
          Confusion of Tongues
          <br></br>
          <br></br>
          HUMAN RELATIONS
          <br></br>
          The ability to tell stories that engage others and
          <br></br>
          compel them to act or feel
          <br></br>
          The Birth of the National Storytelling Festival and
          <br></br>
          the Emergence of the Storytelling Revival
          <br></br>
          A Therapist Should Be A Good Storyteller
          <br></br>
          Digital Storytelling, Then And Now: From
          <br></br>
          Academic Tool To Social Empowerment
          <br></br>
          <br></br>
          LIFE EXPERIENCE
          <br></br>
          How The Story Transforms The Teller
          <br></br>
          A Manifesto For Seven Billion Dreams
          <br></br>
          Why Tell stories?
          <br></br>
          Why People Don’t Tell Their Stories
          <br></br>
          Are Storytellers in the Relationship Business?
        </div>

        <div className="col-4 text-left offset-9 Toc-col-2">
          SCIENCE, TECHNOLOGY, PHILOSOPHY
          <br></br>
          Understanding Relationships And Their
          <br></br>
          Implications
          <br></br>
          "We like to think in pictures" - which causes
          <br></br>
          storytelling in our brain
          <br></br>
          Data Storytelling: The Essential Data Science Skill
          <br></br>
          Everyone Needs
          <br></br>
          <br></br>
          ECONOMY, SOCIETY
          <br></br>
          The Seven Deadly Sins of Storytelling
          <br></br>
          Why Is The Bad Guy Always More Interesting?
          <br></br>
          Storytelling in Business
          <br></br>
          <br></br>
          ALL THINGS STORYTELLING
          <br></br>
          Storytelling - What are we talking about?
          <br></br>
          Learn 5 Tips You Need To Tell A More Strategic
          <br></br>
          Narrative
          <br></br>
          The Future Of Storytelling Is About To Get Wild
          <br></br>
          How Does Technology Contribute To Create Better
          <br></br>
          Stories?
          <br></br>
          <br></br>
          APPENDIX
          <br></br>
          THE AUTHORS
          <br></br>
          WEBSITE
          <br></br>
          COPYRIGHT
        </div>
      </div>
    </div>
    <div className="bottom-nav">
      <nav className="navbar navbar-light navbar-expand-sm bottom-nav-bar mt-2">
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

    </div>
  </div>);
}

export default TableOfContents;
