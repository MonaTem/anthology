import React from 'react';
import '../styles/TableOfContents.css';
import '../styles/Anthology.css';
import NavTop from './NavTop.js'
import NavBottomNoToggle from './NavBottomNoToggle.js'

const TableOfContents = (props) => {

  return (<div className="container">
    <div className="top-nav">
      <NavTop page={'TableOfContents'}/>
    </div>
    <div className="media desc">
      <img className="cover-001" src="/images/FrontCover.jpeg" alt="Anthology Front Cover"/>
    </div>
    <div className="media-body toc">
      <div className="row">
        <div className="col-3 offset-5 text-left Toc-col-1">
          PREFACE
A NEW AGE OF STORYTELLING - INTRODUCTION
Storytelling - A Tentative Structure

CULTURE
Digital Storytelling at the National Gallery of Art
A Tapestry of Tales - How Storytelling Weaves Culture
From Aristoteles to AI
Confusion of Tongues

HUMAN RELATIONS
The ability to tell stories that engage others and compel them to act or feel
The Birth of the National Storytelling Festival and the Emergence of the Storytelling Revival
A Therapist Should Be A Good Storyteller
Digital Storytelling, Then And Now: From Academic Tool To Social Empowerment

LIFE EXPERIENCE
How The Story Transforms The Teller
A Manifesto For Seven Billion Dreams
Why Tell stories?
Why People Don’t Tell Their Stories
Are Storytellers in the Relationship Business?


        </div>
        <div className="col-3 text-left offset-9 Toc-col-2">
          SCIENCE, TECHNOLOGY, PHILOSOPHY
   Understanding Relationships And Their Implications
   "We like to think in pictures" - which causes storytelling in our brain
   Data Storytelling: The Essential Data Science Skill Everyone Needs

   ECONOMY, SOCIETY
   The Seven Deadly Sins of Storytelling
   Why Is The Bad Guy Always More Interesting?
   Storytelling in Business

   ALL THINGS STORYTELLING
   Storytelling - What are we talking about?
   Learn 5 Tips You Need To Tell A More Strategic Narrative
   The Future Of Storytelling Is About To Get Wild
   How Does Technology Contribute To Create Better Stories?

APPENDIX
THE AUTHORS
WEBSITE
COPYRIGHT



        </div>
        </div>
      </div>
      <div className="bottom-nav">
        <NavBottomNoToggle page={'TableOfContents'}/>
      </div>
    </div>);
}

export default TableOfContents;
