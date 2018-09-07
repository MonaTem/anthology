import React from 'react';
import '../styles/Author.css';
import NavTop from './NavTop.js'
import NavBottom from './NavBottom.js'
import authors from '../data/authors.js'
import WebsiteList from './WebsiteList.js'
import PublicationList from './PublicationList.js'
const Author = (props) => {

  // this.createWeblist  = this.createWeblist.bind(this);

  const index = props.match.params.index;
  const name = authors[index].name;
  const contact = authors[index].contact;
  const width = (name === "JULIE SPRINGER")
    ? 147
    : 200;


  return (<div className="container">
    <NavTop page={'Author'}/> {/* <div> */}
    {/* Author is {authors[index].name};
      Bio is {authors[index].bio};
      Index is {props.match.params.index}; */
    }

    <div className="row">
      <div className="col-4">
        <img src={authors[index].photo_url} alt={authors[index].name} className="author-photo" width={width} height="200"/>
        <br></br>
        <br></br>
        <p className="author-bio">{authors[index].bio}</p>
      </div>
      <div className="col-4">
        <h2>{name}</h2>
        <br></br>
        <iframe width="370" height="210" title={authors[index].video_caption} src={authors[index].video_link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen="allowfullscreen"></iframe>
        <br></br>
        <br></br>
        <p>{authors[index].video_caption}</p>
      </div>
      <div className="col-4">
        <h5>WEBSITES (SELECTION)</h5>
           <WebsiteList index={index} />
        <h5>CONTACT</h5>
         <ul>
          <li><a href="{contact}" className="author-contact">{contact}</a></li>
         </ul>
        <h5>PUBLICATIONS (SELECTION)</h5>
         <PublicationList index={index}/>
      </div>
    </div>

    <NavBottom page={'Author'}/>
  </div>);
}

export default Author;
