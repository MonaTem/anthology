import React from 'react';
import '../styles/Author.css';
import NavTop from './NavTop.js'
import NavBottom from './NavBottom.js'
import authors from '../data/authors.js'

const Author = (props) => {

  // this.createWeblist  = this.createWeblist.bind(this);

  const index = props.match.params.index;
  const name = authors[index].name;
  const width = (name === "JULIE SPRINGER")
    ? 147
    : 200;

  // var websiteList = "";
  // var publicationList = "";



  // authors[index].websites.forEach((element) => {
  //    const website = Object.values(element).join();
  //
  //    if (websiteList) {
  //      websiteList = websiteList + " " + website;
  //   } else websiteList = websiteList + website;
  // });
  //
  // var publicationList = "";
  //
  // authors[index].publications.forEach((element) => {
  //    const publication = Object.values(element).join();
  //
  //    if (publicationList) {
  //      publicationList = publicationList + " " + publication;
  //   } else publicationList = publicationList + publication;
  // });
  //
  //


  // const websiteList = authors[index].websites.map((website) =>
  //   <div key={website}>
  //     <a href={website}>{website}</a>
  //   </div>
  // );

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
      <h3>WEBSITES (SELECTION)</h3>
      {/* {websiteList} */}
      <h3>CONTACT</h3>
      {authors[index].contact}
      <h3>PUBLICATIONS (SELECTION)</h3>
      {/* {publicationList} */}
    </div>
  </div>


    <NavBottom page={'Author'}/>
  </div>);
}

export default Author;
