import React from 'react';
import '../styles/Author.css';
import NavTop from './NavTop.js'
import NavBottom from './NavBottom.js'

const Author = (props) => {

  console.log("location props is " + Object.entries(props.location));
  console.log("match params props are " + Object.entries(props.match.params));


  return (<div className="container-fluid">
    <NavTop page={'Author'}/>
    <div>
      {/* Author is {this.props.authorname}; */}
      Index is {props.match.params.index};
      {/* Author is JENNIFER AAKER;
      Index is 0; */}

      <NavBottom page={'Author'}/>
    </div>
  </div>);
}

export default Author;
