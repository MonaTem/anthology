import React from 'react';
import '../styles/Author.css';
import NavTop from './NavTop.js'
import NavBottom from './NavBottom.js'

const Author = (props) => {

  return (<div className="container-fluid">
    <NavTop page={Author}/>
    <div>

      <NavBottom page={Author}/>
    </div>
  </div>);
}

export default Author;
