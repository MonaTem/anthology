import React from 'react';
import '../styles/Author.css';
import NavTop from './NavTop.js'
// import NavBottom from './NavBottom.js'
import NavBottomNoToggle from './NavBottomNoToggle.js'
import authors from '../data/authors.js'
import WebsiteList from './WebsiteList.js'
import PublicationList from './PublicationList.js'
import VideoCaptions from './VideoCaptions.js'

const Author = (props) => {

  const ix = props.match.params.ix;
  const name = authors[ix].name;
  const contact = authors[ix].contact;
  const width = (name === "JULIE SPRINGER")
    ? 147
    : 200;


  return (<div className="container">
    <NavTop page={'Author'}/>
    

    <div className="row">
      <div className="col-4">
        <img src={authors[ix].photo_url} alt={authors[ix].name} className="author-photo" width={width} height="200"/>
        <br></br>
        <br></br>
        <p className="author-bio">{authors[ix].bio}</p>
      </div>
      <div className="col-4">
        <h2>{name}</h2>
        <br></br>
        <iframe width="370" height="210" title={authors[ix].video_caption} src={authors[ix].video_link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen="allowfullscreen"></iframe>
        <br></br>
        <VideoCaptions ix={ix} />
      </div>
      <div className="col-4">
        <h5>WEBSITES (SELECTION)</h5>
           <WebsiteList ix={ix} />
        <h5>CONTACT</h5>
         <ul>
          <li><a href="{contact}" className="author-contact">{contact}</a></li>
         </ul>
        <h5>PUBLICATIONS (SELECTION)</h5>
         <PublicationList ix={ix} />
      </div>
    </div>

    {/* <NavBottom page={'Author'}/> */}
    <NavBottomNoToggle page='Author' />
  </div>);
}

export default Author;
