import React from 'react';
import '../styles/Anthology.css';
import '../styles/Home.css';
import NavTop from './NavTop.js';
import NavBottom from './NavBottom.js';

const Home = (props) => {

  return (<div className="container-fluid">
    <NavTop page={'Home'}/>
    <div>
      <img id="cover-001" className="img-fluid" src="/images/FrontCover.jpeg" alt="Anthology Front Cover"/>
      <img id="cover-002" className="img-fluid" src="/images/BackCover.jpeg" alt="Anthology Back Cover"/>
      <section id="most-powerful-section" className="d-flex flex-column">
        <p id="most-powerful">The most powerful person in the world
          <br></br>is the storyteller. The storyteller sets the
          <br></br>vision, values, and agenda for an entire
          <br></br>generation that is to come.
        </p>
        {/* </section>
    <section id="steve-jobs-section"> */
        }
        <p id="steve-jobs">Steve Jobs</p>
      </section>
      <section>
        <div id="group-4" className="d-flex flex-column">
          <p id="if-you-want-to-learn">If you want to learn about a CULTURE,
            <br></br>listen to the stories.If you want to change
            <br></br>the culture, change the stories.
          </p>
          <p id="michael-margolis-te">Michael Margolis, Technologist
            <br></br>
          </p>
        </div>
      </section>
      <section id="group-3-section" className="d-flex flex-column">
        <p id="stories-constitute-t">Stories constitute the single most powerful
          <br></br>weapon in a LEADER’s arsenal.
        </p>
        <p id="howard-gardner-psyc">Howard Gardner, Psychologist
          <br></br>
        </p>
      </section>
      <section id="its-like-everyone-t-section" className="d-flex flex-column">
        <br></br>
        <p id="its-like-everyone-t">It’s like everyone tells a story about
          <br></br>themselves inside their own head…
          <br></br>We build OURSELVES out of that story.
        </p>
        <p id="patrick-rothfuss-wr">Patrick Rothfuss, Writer
        </p>
      </section>

    
      <NavBottom page={'Home'}/>
    </div>
  </div>);
}

export default Home;
