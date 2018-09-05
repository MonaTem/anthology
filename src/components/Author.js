import React from 'react';
import '../styles/Author.css';
import NavTop from './NavTop.js'
import NavBottom from './NavBottom.js'
import authors from '../data/authors.js'

const Author = (props) => {

  // console.log("location props is " + Object.entries(props.location));
  // console.log("match params props are " + Object.entries(props.match.params));

  const index = props.match.params.index;
  const name = authors[index].name;
  const width = (name === "JULIE SPRINGER")
    ? 147
    : 200;
  // const video_height = (name === "MICHAEL MARGOLIS")
  //    ? 400
  //    : 281;

  // const stringy = (JSON.stringify(authors[index]));
  //
  // var regex = /\\/g;
  //
  // escape backslash to avoid errors
  // var escapeJSON = function(str) {
  //      return str.replace(regex,'');
  //  }
  //
  // const newObj = escapeJSON(stringy);
  //
  // console.log(newObj);

  return (<div className="container">
    <NavTop page={'Author'}/> {/* <div> */}
    {/* Author is {authors[index].name};
      Bio is {authors[index].bio};
      Index is {props.match.params.index}; */
    }
    {/* Author is JENNIFER AAKER;
      Index is 0; */
    }
    {/* </div> */}
    {/* <div> */}
      {/* <h1>{authors[index].name}</h1> */}
      {/* <h3>{name}</h3>
    </div> */}
    <div className="row">
      <div className="col-4">
        <img src={authors[index].photo_url} alt={authors[index].name} className="author-photo" width={width} height="200"/>
        <br></br>
        <p className="author-bio">{authors[index].bio}</p>
      </div>
      <div className="col-4">
        {/* <img src={authors[index].video_link} alt={authors[index].video_caption} className="author-video" width="400" height="200"/> */}
        {/* <video width="320" height="240" controls>
     <source src={authors[index].video_link}></source>
     Your browser does not support the video tag.
    </video> */}
        <h2>{name}</h2>
        <br></br>
        <iframe width="500" height="281" title={authors[index].video_caption} src={authors[index].video_link} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>
        <br></br>
        <br></br>
        <p>{authors[index].video_caption}</p>
      </div>
      <div className="col-4"></div>
    </div>

    <NavBottom page={'Author'}/> {/* </div> */}
  </div>);
}

export default Author;
