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
          <div className="col-12">
            <section id="most-powerful-section">
              <p id="most-powerful">The most powerful person in the world
                <br></br>is the storyteller. The storyteller sets the
                <br></br>vision, values, and agenda for an entire
                <br></br>generation that is to come.
              </p>
              <p id="steve-jobs">Steve Jobs</p>
            </section>
            <section id="group-4">
              <p id="if-you-want-to-learn">If you want to learn about a CULTURE,
                <br></br>listen to the stories.If you want to change
                <br></br>the culture, change the stories.
              </p>
              <br></br>
              <p id="michael-margolis-te">Michael Margolis, Technologist {/* <p> Michael Margolis, Technologist */}
                {/* <br></br> */}
              </p>
            </section>
            <section id="group-3-section">
              <p id="stories-constitute-t">Stories constitute the single most powerful
                <br></br>weapon in a LEADER’s arsenal.
              </p>
              <br></br>
              <br></br>
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
          </div>
        </div>
      </div>
    </div>
    <div className="bottom-nav">
     <NavBottomNoToggle page={'Home'} />
   </div>
  </div>);
}

export default Home;
