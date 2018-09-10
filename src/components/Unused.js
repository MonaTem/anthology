import React from 'react';
import '../styles/Anthology.css';
import '../styles/Home.css';
import NavTop from './NavTop.js';
import NavBottomNoToggle from './NavBottomNoToggle.js';

const Home = (props) => {

  return (<div className="container">
    <NavTop page={'Home'}/>
    <div className="media ml-5 home">
      <img className="cover-001" src="/images/FrontCover.jpeg" alt="Anthology Front Cover"/>
      <img className="cover-002" src="/images/BackCover.jpeg" alt="Anthology Back Cover"/>
      <div className="media-body ml-3 quotes">
        <div className="row">
          <div className="col-10 offset-2 home-text">
                The most powerful person in the world
                <br></br>
                is the storyteller. The storyteller sets the
                <br></br>
                vision, values, and agenda for an entire
                <br></br>
                generation that is to come.
                <br></br>
                <div id="steve-jobs">
                  Steve Jobs
                </div>
                If you want to learn about a CULTURE,
                <br></br>
                listen to the stories.If you want to change
                <br></br>
                the culture, change the stories.
                <br></br>
                <div id="michael-margolis-te">
                  Michael Margolis, Technologist
                </div>
                Stories constitute the single most powerful
                <br></br>
                weapon in a LEADER’s arsenal.
                <br></br>
                <br></br>
                <br></br>
                <div id="howard-gardner-psyc">
                  Howard Gardner, Psychologist
                </div>
                <br></br>
                <br></br>
                It’s like everyone tells a story about
                <br></br>
                themselves inside their own head…
                <br></br>
                We build OURSELVES out of that story.
                <div id="patrick-rothfuss-wr">
                Patrick Rothfuss, Writer
                </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom-nav navbottom">
     <NavBottomNoToggle page={'Home'} />
   </div>
  </div>);
}

export default Home;
