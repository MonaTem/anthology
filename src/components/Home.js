import React from 'react';
import '../../styles/Anthology.css';
import '../../styles/Home.css';
import NavTop from './NavTop.js';
import NavBottom from './NavBottom.js';
import { Link } from "react-router-dom";

const Home = (props) => {

    return (

    <div>
    <NavTop />
    <section id="most-powerful-section">
           <p id="most-powerful">The most powerful person in the world
               <br></br>is the storyteller.  The storyteller sets the
               <br></br>vision, values, and agenda for an entire
               <br></br>generation that is to come.
           </p>
    </section>
    <section id="steve-jobs-section">
        <p id="steve-jobs">Steve Jobs</p>
    </section>
    <section>
        <div id="group-4">
            <p id="if-you-want-to-learn">If you want to learn about a CULTURE,
                <br></br>listen to the stories.If you want to change
                <br></br>the culture, change the stories.
            </p>
            <p id="michael-margolis-te">Michael Margolis, Technologist
                <br></br>
            </p>
        </div>
    </section>
    <section id="group-3-section">
        <p id="stories-constitute-t">Stories constitute the single most powerful
            <br></br>weapon in a LEADER’s arsenal.
        </p>
        <p id="howard-gardner-psyc">Howard Gardner, Psychologist
            <br></br>
        </p>
    </section>
    <section id="its-like-everyone-t-section">
        <p id="its-like-everyone-t">It’s like everyone tells a story about
            <br></br>themselves inside their own head…
            <br></br>We build OURSELVES out of that story.
        </p>
    </section>
    <img id="cover-001" src="images/COVER.001.jpeg" alt="Anthology Front Cover"/>
    <img id="cover-002" src="images/COVER.002.jpeg" alt="Anthology Back Cover"/>
    <section id="patrick-rothfuss-wr-section">
        <p id="patrick-rothfuss-wr">Patrick Rothfuss, Writer
        </p>
    </section>
    <NavBottom />
    </div>

    );
}

export default Home;
