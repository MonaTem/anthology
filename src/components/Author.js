import React from 'react';
import '../styles/Author.css';
import NavTop from './NavTop.js'
import NavBottom from './NavBottom.js'

const Author = (props) => {

  console.log("props is " + Object.entries(props));


  return (<div className="container-fluid">
    <NavTop page={'Author'}/>
    <div>
      Author is {props.authorname};
      Index is {props.index};

      <NavBottom page={'Author'}/>
    </div>
  </div>);
}

export default Author;
