import React, { Component } from 'react';
import { connect } from 'react-redux';
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

function mapStateToProps(state) {
  return {
    authorName: state.authorName,
    index: state.index
  }
}
export default connect(mapStateToProps)(Authors);
