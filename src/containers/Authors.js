import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/Authors.css';
import '../styles/Anthology.css';
import NavTop from '../components/NavTop.js';
import NavBottom from '../components/NavBottom.js';
// import authors from './redux/reducers/authors.js';
// import { actions } from '.redux/actions/actions.js';
import * as actions from '../redux/actions/actions.js';
import {bindActionCreators} from 'redux';
// import Author from '../components/Author.js';

class Authors extends Component {

  render() {
    return (<div>
      <NavTop page={'Authors'}/>
      <div className="align-left">
        <img id="cover-001" className="img-fluid ml-0" src="/images/FrontCover.jpeg" alt="Anthology Front Cover"/>
      </div>
      <div className="row">
        <div className="col-lg">
          <p className="active author">
            JENNIFER AAKER
          </p>
          <p className="active author">
            GENE BELLINGER
          </p>
        </div>
      </div>

      <NavBottom page={'Authors'}/>
    </div>)
  }
}

function mapStateToProps(state) {
  return {authorName: state.authorName, index: state.index}
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
