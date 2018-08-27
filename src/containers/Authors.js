import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Authors.css';
import '../styles/Anthology.css';
import NavTop from '../components/NavTop.js';
import NavBottom from '../components/NavBottom.js';
// import authors from './redux/reducers/authors.js';
// import { actions } from '.redux/actions/actions.js';
import * as actions from '../redux/actions/actions.js';
import { bindActionCreators } from 'redux';
import Author from '../components/Author.js';

class Authors extends Component {

  render() {
   return (
     <div>
     <NavTop />
     <img id="cover-001" className="img-fluid" src="/images/FrontCover.jpeg" alt="Anthology Front Cover"/>

     <ul className="d-inline-flex list-group flex-column">
       <li  className="list-group-item p-2 active">
         <Author authorName={'JENNIFER AAKER'} index={0}/>
       </li>
       <li  className="list-group-item p-2 active">
         <Author authorName={'GENE BELLINGER'} index={1}/>
       </li>
     </ul>

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

// function mapDispatchToProps(dispatch) {
//   return {
//     onAuthorSelected(AUTHOR_SELECTED) {
//       dispatch(actions.selectAuthor(authorName, index))
//    }
//   }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Authors);
