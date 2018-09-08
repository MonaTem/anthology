import React from 'react';
import '../styles/Description.css';
import '../styles/Anthology.css';
import NavTop from './NavTop.js'
import NavBottom from './NavBottom.js'

const Description = (props) => {

  return (<div className="container">
    <div className="top-nav">
      <NavTop page={'Description'}/>
    </div>
    <div className="media desc">
      <img className="cover-001" src="/images/FrontCover.jpeg" alt="Anthology Front Cover"/>
    </div>
    <div className="media-body">
      <div className="row">
        <div className="col-12 offset-5 text-left description">
          <p>The objective of this anthology is to initiate a discourse about storytelling. If
            <br></br>
            storytelling has as many meanings as the many use cases indicate, storytellers
            <br></br>
            should know what they are talking about. This anthology, as a selection of articles, is
            <br></br>
            a start of an ongoing process, a reflection of storytelling.
          </p>

          <p>The subtitle of this anthology is “Storytelling in the age of the internet, new
            <br></br>
            technologies, data, artificial intelligence”. The impact of technology on storytelling
            <br></br>
            seems to be obvious. What about this question: Does storytelling influence the lives
            <br></br>
            of billions of people like the smartphone, robots, graphene-based batteries, nuclear
            <br></br>
            fusion, deep learning?
          </p>

          <p>The real game-changer, though, was and is technology. In this regard has storytelling
            <br></br>
            seen many "new ages" since the dawn of humanity. From people sitting at the fire,
            <br></br>
            listening together to stories, to the internet which enables global audiences, and new
            <br></br>
            technologies like AR/VR which create new user experiences happened many
            <br></br>
            remarkable steps.
          </p>

          <p>While everyone today seems to be excited about storytelling, everyone uses the
            <br></br>
            expression in a different context with different meanings. This is a new Babylon in
            <br></br>
            which we live day by day.
          </p>

          <p>Twenty-three authors contribute to this reflection of storytelling with their angle, their
            <br></br>
            insights, as storytellers, scientists, technologists, economists, psychologists,
            <br></br>
            marketers.
          </p>  

          </div>
        </div>
      </div>
      <div className="bottom-nav">
        <NavBottom page={'Description'}/>
      </div>
    </div>);
}

export default Description;
