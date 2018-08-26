import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Authors.css';
import '../styles/Anthology.css';
import NavTop from './NavTop.js';
import NavBottom from './NavBottom.js';
// import authors from './redux/reducers/authors.js';
// import { actions } from '.redux/actions/actions.js';
import * as actions from '.redux/actions/actions.js';
import { bindActionCreators } from 'redux';
import Author from './components.Author.js';

class Authors extends Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }

  render() {
   return (
     <div>
     <NavTop />
     <Author authorName={this.props.authorName} index={this.props.index}/>
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
