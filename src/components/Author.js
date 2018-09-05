import React from 'react';
import '../styles/Author.css';
import NavTop from './NavTop.js'
import NavBottom from './NavBottom.js'
import authors from '../data/authors.js'

const Author = (props) => {

  // console.log("location props is " + Object.entries(props.location));
  // console.log("match params props are " + Object.entries(props.match.params));


  const index = props.match.params.index;

  // const stringy = (JSON.stringify(authors[index]));
  //
  // var regex = /\\/g;
  //
  // //escape backslash to avoid errors
  // var escapeJSON = function(str) {
  //      return str.replace(regex,'');
  //  }
  //
  // const newObj = escapeJSON(stringy);
  //
  // console.log(newObj);


  return (<div className="container">
    <NavTop page={'Author'}/>
    <div>
      {/* Author is {authors[index].name};
      Bio is {authors[index].bio};
      Index is {props.match.params.index}; */}
      {/* Author is JENNIFER AAKER;
      Index is 0; */}
      <img src={authors[index].photo_url} alt={authors[index].name} className="author-photo" />

      <NavBottom page={'Author'}/>
    </div>
  </div>);
}

export default Author;
