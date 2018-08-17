import React from 'react';
import '../styles/Anthology.css';
import '../styles/Home.css';
import NavTop from './NavTop.js';
import NavBottom from './NavBottom.js';

const Home = (props) => {

    return (

    <div>
    <NavTop />
    <img id="cover-001" src="/images/FrontCover.jpeg" alt="Anthology Front Cover"/>
    <img id="cover-002" src="/images/BackCover.jpeg" alt="Anthology Back Cover"/>
    <div class="home">
        <div style="width: 1920px; height: 100%; position:relative; margin:auto;">
            <img anima-src="./img/home-rectangle.png" class="rectangle" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <div class="patrickrothfusswr">
                Patrick Rothfuss, Writer
            </div>
            <div class="itu2019slikeeveryonet">
                It’s like everyone tells a story about
                <br/>
                themselves inside their own head…
                <br/>
                We build OURSELVES out of that story.
            </div>
            <div class="howardgardnerpsyc">
                Howard Gardner, Psychologist
                <br/>
            </div>
            <div class="storiesconstitutet">
                Stories constitute the single most powerful
                <br/>
                weapon in a LEADER’s arsenal.
            </div>
            <div class="ifyouwanttolearn">
                If you want to learn about a CULTURE,
                <br/>
                listen to the stories.If you want to change
                <br/>
                the culture, change the stories.
            </div>
            <div class="stevejobs">
                Steve Jobs
            </div>
            <img anima-src="./img/home--.png" class="image1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <div class="contact">
                CONTACT
            </div>
            <div class="a2512018">
                <div class="a25120181">
                    © 2018
                </div>
            </div>
            <div class="imprint">
                IMPRINT
            </div>
            <div class="about">
                ABOUT
            </div>
            <div class="buy">
                BUY
            </div>
            <div class="authors">
                AUTHORS
            </div>
            <div class="tableofcontents">
                TABLE  OF  CONTENTS
            </div>
            <div class="home1">
                HOME
            </div>
            <div class="description">
                DESCRIPTION
            </div>
            <img anima-src="./img/home-cover-001.png" class="cover001" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <img anima-src="./img/home-cover-002.png" class="cover002" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <div class="michaelmargoliste">
                Michael Margolis, Technologist
                <br/>
            </div>
        </div>
    </div>
    <NavBottom />
    </div>

    );
}

export default Home;
