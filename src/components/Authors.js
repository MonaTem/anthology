import React, { Component } from 'react';
import '../styles/Authors.css';
import '../styles/Anthology.css';
import NavTop from './NavTop.js';
import NavBottom from './NavBottom.js';

class Authors extends Component {

  render() {
   return (
     <div>
     <NavTop />
     <NavBottom />
     </div>

   )
 }
}
export default Authors;
